---
title: "Why fantasy selection percentages cannot prove a team is unique"
excerpt: "See why player ownership percentages cannot reveal duplicate fantasy teams, with a worked counterexample and an exact check for supplied lineups."
status: draft
---

A player’s selection percentage tells you how often that player appears, not which other players appear alongside them. That missing relationship means individual percentages cannot establish how many other entries have your exact fantasy lineup. Even perfectly accurate percentages can leave the duplicate count unknown.

An exact duplicate check needs the actual lineups being compared. A percentage-based estimate and a count from a complete lineup list answer different questions.

## Same percentages but different duplicate counts

Consider two hypothetical fields, each containing 100 opposing entries. Every entry has the same nine-player core, including the same captain and vice-captain. The remaining two places come from four interchangeable eligible candidates: A, B, C and D. Assume every combination below satisfies the same roster restrictions.

| Field | Remaining pair in 50 entries | Remaining pair in the other 50 |
|---|---|---|
| One | A and B | C and D |
| Two | A and C | B and D |

Each of A, B, C and D appears in exactly 50 of the 100 entries in either field: a 50% selection share. Nevertheless, a lineup containing the core plus A and B has 50 matching opponents in Field One and zero in Field Two. Captaincy is identical throughout, so it cannot explain away the difference.

Multiplying A’s 50% by B’s 50% gives 25%. That assumes their choices are independent. The constructed fields show why that assumption cannot be recovered from the individual shares: the same inputs coexist with 50% or 0% joint selection. No actual contest data is being described here.

## A zero output is not proof

Consider a hypothetical checker that multiplies field size by the complements of selection shares and labels an output of zero as unique. With 1,000 identical entries, all relevant shares are 100%, producing zero despite each entry having 999 identical rivals. The label fails this simple counterexample. This is a test of an invented formula, not a claim about a running service.

## Count actual lineups instead

First define what counts as identical. For an eleven-player format, compare the player set and the ordered captain and vice-captain roles. Display order does not change a set. Switching captaincy does change the scoring assignment: [Dream11’s T20 reference](https://www.dream11.com/features/how-to-play) lists captain points at 2× and vice-captain points at 1.5×.

In the following hypothetical file, K means the same nine distinct players P1 through P9. A, B and C are additional distinct players. Every row is a separate entry.

| Entry | Player set | Captain | Vice-captain |
|---|---|---|---|
| E1 | K plus A and B | P1 | P2 |
| E2 | K plus B and A | P1 | P2 |
| E3 | K plus A and B | P2 | P1 |
| E4 | K plus A and C | P1 | P2 |
| E5 | K plus A and B | P1 | P2 |

E1, E2 and E5 form one group of three. Each has two other matching entries. E3 and E4 each form a group of one. Thus five entries contain three distinct scoring lineups; only two entries have no duplicate within this file. Counting the group itself as an opponent would overstate duplicates by one.

Use stable player IDs, check for repeated or missing IDs, and verify that captain and vice-captain are distinct members of the roster. Sort the player IDs, then compare the sorted list together with both roles. Preserve different entry IDs even when their lineups match; remove only duplicated import rows, not genuine identical entries.

## State the boundary of the answer

“No duplicate among these five entries” is a valid result. “Nobody else selected this team” is not, unless the dataset covers the entire relevant field. Keep the fixture, format, observation time and entry count with the result. Missing percentages remain unknown, and a percentage from one population should not be relabelled as another contest’s ownership.

Uniqueness is a property of a comparison set, not a prediction of how well the players will perform. A reliable checker reports the exact matches it can observe and makes no claim about unseen entries.
