---
title: "Fantasy cricket player exposure and impossible lineup settings"
excerpt: "Convert fantasy lineup exposure percentages into whole appearances, distinguish captain counts, and spot impossible minimum and maximum settings."
status: draft
---

Player exposure is the proportion of a lineup collection containing that player. If a player appears in nine of 20 lineups, roster exposure is 45%. It describes your collection, not the player’s selection percentage across an entire platform or a probability of future performance.

Before setting exposure limits, remember a simple constraint: a player can appear in a whole number of lineups, never in 6.6 of them.

## Percentages come in steps

Assume a hypothetical collection of 20 lineups, each containing eleven distinct players, one captain and a different vice-captain selected from that roster. These are teaching assumptions, not a statement of every platform’s format or entry limits.

One appearance changes exposure by 1 ÷ 20 × 100 = five percentage points. Possible values include 30% and 35%, but not exactly 33%.

| Setting for one player | Whole-number requirement | Consequence |
|---|---|---|
| Exactly 33% | 6.6 appearances | Impossible in 20 lineups |
| At least 33% | At least seven appearances | Achieved exposure is at least 35% |
| At most 33% | At most six appearances | Achieved exposure is at most 30% |
| Between 30% and 35% inclusive | Six or seven appearances | Both counts satisfy the range |

For a minimum, multiply the percentage by the collection size and round upward. For a maximum, round downward. A 33% minimum and 33% maximum therefore demand at least seven appearances while permitting only six. A useful checker reports that conflict; silently rounding both to the same number changes the request.

## Captain exposure has its own count

A player may appear in nine lineups but captain only three. With the same 20-lineup denominator, those are 45% roster exposure and 15% captain exposure. Three divided by nine is 33.33%, but that answers a different question: how often the player captains among the lineups containing them.

Keep the denominator visible. [Dream11’s T20 scoring reference](https://www.dream11.com/features/how-to-play) distinguishes captain and vice-captain multipliers, so these are different scoring assignments rather than interchangeable labels.

In our hypothetical format, captain appearances cannot exceed roster appearances. A requested 50% minimum captain exposure requires ten captain assignments. A simultaneous 40% maximum roster exposure allows only eight appearances. The settings contradict each other before any player projection or match analysis is considered.

## Individually valid settings can fail together

Twenty eleven-player lineups contain exactly 220 roster places. Locking twelve different players into every lineup requires 12 × 20 = 240 appearances, and each individual lineup would also need twelve places. Every player’s 100% setting looks valid in isolation; the collection is still impossible.

Other restrictions can interact similarly. Passing the total-place check does not establish that roster roles, credits, team limits and player eligibility can all be satisfied. Those require the actual selected format’s rules, not assumptions borrowed from another game.

## Audit the resulting collection

Count appearances from the final saved lineups rather than trusting the requested settings alone. Under this example’s assumptions, roster counts must sum to 220, captain counts to 20 and vice-captain counts to 20. Each lineup must have distinct player IDs, with both assigned leaders present and different.

Report requested limits beside achieved counts and percentages. If only 18 valid lineups were produced, recalculate the denominator instead of presenting counts as if all 20 existed. Mark the incomplete result rather than hiding it behind rounded percentages.

Exposure is not uniqueness: two collections can have the same player counts but different combinations. It is also not evidence that adding lineups improves predictive accuracy. The useful outcome of these checks is narrower and verifiable: the supplied collection either satisfies its stated constraints or it does not.
