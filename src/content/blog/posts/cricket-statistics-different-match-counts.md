---
title: "Why cricket statistics websites show different match counts"
excerpt: "Reconcile conflicting appearance counts using match lists, coverage, toss records and replacement classifications."
status: draft
---

Different match counts do not necessarily mean someone added incorrectly. Two pages can be counting different competitions, date ranges, player roles or source files. They can also disagree because a team list is incomplete. The way to decide is to compare the matches behind the totals, not to choose the larger number or the more familiar website.

## First identify what each number counts

An appearance, a batting innings and a bowling innings are separate measures. A selected player can appear without batting; a player can bat without bowling. A Test can provide more than one innings of each kind in the same match. Compare “matches” with “matches”, not with a nearby innings column.

## A washout can still have a statistical match record

The ICC’s [published statistical guidance](https://www.icc-cricket.com/news/statistics-coin-toss-signifies-start-of-a-match) says a Test or ODI abandoned without a delivery is included in records if the toss took place. It contrasts this with an abandoned fixture without a toss and treats a match continued on a reserve day as one match. The page is historical guidance, not a substitute for checking the governing competition and scorecard.

This is why “no ball bowled” and “no match counted” are not interchangeable. Nor does a “no result” necessarily mean no cricket happened: inspect the scorecard, toss and named participants rather than classify the match from the result label alone.

## A worked comparison with the filters made explicit

Suppose a hypothetical men’s ODI player has these five fixture records in one calendar year. Both reports use that same year, format, player identity and team. Report A counts official appearances; Report B contains only the delivered matches available in its stated archive.

| Fixture | Player and match facts | Report A | Report B |
| --- | --- | --- | --- |
| A | Named player; completed match; archived | 1 | 1 |
| B | Named player; play occurred; match ended without a result; archived | 1 | 1 |
| C | Named player; toss held; abandoned before a delivery | 1 | 0 |
| D | Fixture abandoned before the toss | 0 | 0 |
| E | Named player; completed match; absent from B’s archive | 1 | 0 |
| Total | Same filters, different inclusion and coverage | 4 | 2 |

The difference is two, but it has two separate explanations: C is excluded by B’s stated convention, while E is outside B’s coverage. Finding one washout would explain only half the gap. This is invented example data, not a reconstruction of any real service.

## Replacements need their own classification

Under the October 2026 ICC men’s ODI conditions, clause 1.2.7.9 counts both an approved concussion replacement and the replaced player as having played for statistical purposes. Do not assume that every person mentioned in a scorecard is classified identically. [ICC men’s ODI conditions](https://images.icc-cricket.com/image/upload/prd/bxkzkcyvfn6tvi70zh0w.pdf).

The [Cricsheet specification](https://cricsheet.org/format/json/) distinguishes role replacements from match replacements. Preserve that distinction instead of converting every person mentioned in a delivery into a member of the playing side.

## Reconcile the lists before changing the number

1. Save both URLs, access dates and exact filters, including format, gender, team, season and date boundaries.

2. Export or transcribe the underlying match lists. Match records by date, opponents and venue, then use stable match IDs where available.

3. Separate matches found only in A from those found only in B. Do not compare totals alone.

4. Inspect each unmatched scorecard: toss, team list, DNB entries, deliveries, result and approved replacement status.

5. Label the reason as a verified filter difference, coverage exclusion, missing roster or unresolved discrepancy. Keep the supporting link beside it.

6. Recalculate after correcting only confirmed issues. If a cause remains unproved, retain both reported counts and the unresolved match IDs.

A useful correction identifies the specific match and rule that changed the count. “Probably rain” is a hypothesis, not a reconciliation.
