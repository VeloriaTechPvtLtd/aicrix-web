import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync,readdirSync,existsSync } from 'node:fs';
import matter from 'gray-matter';
import policy from '../src/content/blog/content-policy.cjs';
const sample={title:'Title',excerpt:'Description',status:'draft'};
test('drafts never publish and do not need invented dates',()=>{assert.deepEqual(policy.validatePost(sample,'new-post'),[]);assert.equal(policy.isPublished(sample,'new-post'),false);});
test('publishing requires explicit status and a valid non-future date',()=>{for(const date of [undefined,'2026-02-30','2030-01-01']) assert.equal(policy.isPublished({...sample,status:'published',date},'new-post','2026-11-14'),false);assert.equal(policy.isPublished({...sample,status:'published',date:'2026-11-14'},'new-post','2026-11-14'),true);assert.equal(policy.isPublished({...sample,status:undefined,date:'2026-11-14'},'new-post'),false);});
test('all content has valid metadata; new articles have sources and no private residue',()=>{let staged=0;for(const f of readdirSync('src/content/blog/posts')){const slug=f.replace(/\.md$/,'');const {data,content}=matter(readFileSync(`src/content/blog/posts/${f}`,'utf8'));assert.deepEqual(policy.validatePost(data,slug),[],f);if(policy.LEGACY_SLUGS.has(slug))continue;staged++;assert.equal(data.status,'draft');assert.ok(/[.!?]$/.test(data.excerpt.trim()), `${slug}: finish the excerpt rather than truncating it`);assert.ok(content.includes('https://'));assert.ok(!/chatgpt\.com\/space|sourceDraft|TODO|TBD/i.test(content));assert.ok(!/^# /m.test(content));const firstHeading=content.match(/^(#{2,6}) /m);if(firstHeading)assert.equal(firstHeading[1],'##',`${slug}: article sections must follow the page H1 with H2`);if(data.image)assert.ok(existsSync(`public${data.image}`));}assert.equal(staged,262);});

test('internal blog links resolve and published articles cannot link to staged drafts', () => {
  const posts = new Map(readdirSync('src/content/blog/posts').map(file => [file.replace(/\.md$/, ''), matter(readFileSync(`src/content/blog/posts/${file}`, 'utf8'))]));
  for (const [slug, post] of posts) {
    for (const match of post.content.matchAll(/\]\(\/blog\/([a-z0-9-]+)(?:#[^)]*)?\)/g)) {
      const target = posts.get(match[1]);
      assert.ok(target, `${slug}: missing target ${match[1]}`);
      if (policy.isPublished(post.data, slug)) assert.ok(policy.isPublished(target.data, match[1]), `${slug}: linked target is unpublished ${match[1]}`);
    }
  }
});
