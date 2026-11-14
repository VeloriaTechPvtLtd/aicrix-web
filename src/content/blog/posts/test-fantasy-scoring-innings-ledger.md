---
title: "Test fantasy scoring and why the innings ledger must come first"
excerpt: "See why Test match totals can hide scoring differences, with fictional bonus examples and clear distinctions between DNB, not out and an innings not played."
status: draft
---

A Test match total can lose information needed for fantasy scoring. Two batters can each make 120 runs across a match but reach different innings milestones. Two bowlers can each take six wickets without producing the same innings hauls. Whether those differences affect points depends on the game’s rules, but an aggregate alone cannot answer the question.

Keep each innings separate first. Apply the verified scoring rules at the level they specify, then combine the results. Do not assume that a T20 preset or a single match-total box can represent a two-innings match correctly.

## The format label changes real scoring

The [Dream11 official scoring reference](https://www.dream11.com/features/how-to-play), checked on 14 November 2026, separates Test from T20. Its Test section lists 20 points for a bowler-credited wicket excluding run-outs, whereas the T20 section lists 30. Those are provider-specific values at the check date, not universal fantasy-cricket rules.

The same reference lists batting milestones and wicket-haul bonuses. A list of values is not, by itself, an explicit answer to every aggregation question. Before implementing them, establish which bonuses reset by innings, which are match-wide, and how overlapping tiers interact. The examples below demonstrate why that information matters without assigning an unverified policy to Dream11.

## A fictional scoring contract

For the following exercises only, imagine a game with these complete rules: one point per batter run; a single ten-point bonus for reaching at least 50 in each batting innings; a single twenty-point bonus for reaching at least 100 instead of that innings’ fifty bonus; ten points per bowler-credited wicket; and a single eight-point bonus for taking at least five wickets in one bowling innings. There are no other bonuses, penalties, appearance points, boundary points, fielding points or multipliers.

This contract is invented for teaching. In particular, its rates and per-innings bonus treatment must not be used as a real platform’s scoring table.

## Equal batting totals can produce different points

| Fictional batter | First batting innings | Second batting innings | Match runs | Points under the fictional contract |
| --- | --- | --- | --- | --- |
| A | 60 | 60 | 120 | 120 + 10 + 10 = 140 |
| B | 120 | Dismissed for 0 | 120 | 120 + 20 = 140 |
| C | 49 | 71 | 120 | 120 + 10 = 130 |

A and B happen to finish level, but their bonus paths differ. C has the same 120 match runs and ten fewer points because only one innings crosses a qualifying threshold. Applying the hundred bonus once to everyone’s match aggregate would incorrectly raise C to 140.

The opposite mistake is to stack the fifty and hundred bonuses in B’s 120-run innings. This fictional contract explicitly replaces the lower tier, so adding both would give B 150 instead of 140. These are two separate checks: the unit to which a threshold applies, and whether bonuses within that unit stack.

Dismissed for zero contributes no run points in this example, but that is because the invented rules contain no duck penalty. A real calculation must check both the dismissal state and the applicable role-specific penalty rather than import this example’s omission.

## Equal wicket totals can also differ

Bowler D takes three wickets in each opposing innings. Bowler E takes five in the first and one in the second. Both finish with six wickets, giving 60 wicket points under the fictional contract. D earns no haul bonus and finishes with 60; E earns eight and finishes with 68.

Combining D’s wickets before testing the five-wicket threshold would create a bonus that the contract does not award. Conversely, a rule that genuinely awards a match-wide milestone would require a separate match-level calculation. Preserve the innings components so either verified rule can be applied without reconstructing the scorecard.

## DNB and an innings not played are different states

A player can be selected without batting in a team innings that takes place. That is different from the team never needing another innings at all. Neither is a dismissal for zero, and neither should be filled with an invented score.

For a hypothetical example, Team A makes151 and179 while Team B makes415/9 declared. Team B wins by an innings and85 runs:415−151−179=85. Suppose Player F was selected for B but did not bat. That is DNB in an innings that occurred; B’s second innings never occurs. These are invented scorecard inputs, not a historical match claim.

| Ledger state | What it records | What not to infer |
| --- | --- | --- |
| Dismissed for 0 | A batting innings ending in a zero-score dismissal | That every player role receives the same fantasy penalty |
| 0 not out | A batting innings with no runs and no dismissal | That it was a duck |
| Did not bat | The team innings occurred but this player did not bat | A zero-score dismissal or an innings milestone |
| Team innings not played | The team did not have that innings | A second batting opportunity that actually occurred |
| Missing evidence | The record is not established | Any of the four known states above |

In the fictional game, several of these known states produce zero batting points, yet their meanings remain different. Retaining that distinction prevents a later rule change, average calculation or opportunity summary from mistaking absence for failure. Missing evidence should stay unresolved rather than being assigned a convenient zero.

## Reconcile the calculation before trusting the total

A traceable Test ledger identifies the player, team, match, team-innings number and participation state, then retains the runs, dismissal information and bowling events needed by the selected rules. First and second team innings are not necessarily the first and second innings of the match.

Keep separate lines for innings-level awards and match-level awards. Confirm participation treatment and apply any verified captain multiplier at the appropriate final stage. Compare disputed totals category by category, not by changing several assumptions until the answer matches a display.

The result should show what was scored and under which rule version. It should not promise two batting innings, assume tomorrow’s opportunities, or label a partly specified calculation as an exact platform total.
