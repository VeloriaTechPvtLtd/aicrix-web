export function dateString(value: unknown): string | undefined;
export function validatePost(data: Record<string, unknown>, slug: string): string[];
export function isPublished(data: Record<string, unknown>, slug: string, today?: string): boolean;
export const LEGACY_SLUGS: Set<string>;
