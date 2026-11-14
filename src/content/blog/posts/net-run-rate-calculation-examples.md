---
title: "How net run rate is calculated with worked examples"
excerpt: "Calculate cricket net run rate with examples covering partial overs, successful chases, all-out innings and why qualification needs more than one number."
status: draft
---

Net run rate, usually shortened to NRR, compares how quickly a team has scored with how quickly its opponents have scored across the relevant tournament matches. Calculate the two aggregate rates first, then subtract the rate conceded from the rate scored.

The starting formula is:

**NRR = total credited runs scored ÷ credited overs faced − total credited runs conceded ÷ credited overs bowled.**

The word “credited” matters. Tournament rules can change which runs and overs enter the calculation. For the examples below, the reference is clause 16.10.7 of the [ICC Men’s T20 World Cup 2026 playing conditions](https://images.icc-cricket.com/image/upload/prd/yyt7m8uh9c1uehrbvuwb.pdf). Every score in this article is hypothetical.

## Convert partial overs into balls

In six-ball cricket, 17.3 overs means 17 completed overs and three valid balls. It is 105 balls, or 17.5 overs for division. Wides and no-balls do not add valid balls to the over. [MCC Law 17](https://www.lords.org/getattachment/e8b12929-1e84-4927-af4e-2a5875b53589/Laws-of-Cricket-2017-Code-4th-Edition-%282026%29.pdf) defines this counting basis.

For example, 150 runs from 17.3 overs gives:

- Valid balls: 17 × 6 + 3 = 105.

- Overs for the calculation: 105 ÷ 6 = 17.5.

- Run rate: 150 ÷ 17.5 = approximately 8.571 runs per over.

Dividing 150 by the decimal number 17.3 would produce approximately 8.671, which answers the wrong calculation. When entering a score into a calculator, check whether it expects cricket notation, decimal overs or a ball count.

## Add the innings totals before dividing

Imagine Team A has played two completed, uninterrupted T20 matches. Neither side was all out.

In match one, Team A scores 160 from 20 overs and concedes 140 from 20 overs. Its match-only rate difference is 8.00 − 7.00 = +1.00.

In match two, its opponent scores 100 from 20 overs. Team A successfully chases with 101 from 10 overs. Its match-only difference is 10.10 − 5.00 = +5.10.

For the combined record, add the underlying figures:

- Runs scored: 160 + 101 = 261.

- Overs faced: 20 + 10 = 30.

- Runs conceded: 140 + 100 = 240.

- Overs bowled: 20 + 20 = 40.

The aggregate calculation is 261 ÷ 30 − 240 ÷ 40 = **+2.700**.

A simple average of the two match-only differences gives (1.00 + 5.10) ÷ 2 = +3.050. That is a different number because it gives the two matches equal weight despite their different batting durations.

Keep the original totals when updating standings. Recalculating from rounded, displayed NRR values loses information.

## Apply the all-out adjustment

Under the referenced World Cup rules, an innings ending all out early uses its full allocated quota in NRR. A successful chase uses the overs actually faced.

Suppose Team A is all out for 120 after 15 overs of an uninterrupted 20-over allocation. Its opponent made 140 from 20 overs.

The credited calculation is 120 ÷ 20 − 140 ÷ 20 = **−1.000**.

Using the 15 overs actually faced would instead give 120 ÷ 15 − 140 ÷ 20 = +1.000. That would turn this example from a negative contribution into a positive one.

If the allocation had been reduced before the innings, start from that applicable allocation. Do not silently assume every T20 innings was entitled to 20 overs.

## Keep rain adjustments separate

The same World Cup conditions exclude Super Overs and matches without a result. For a completed DLS chase, the first side is credited with target minus one over the chasing side’s allocated overs. If play ends with a DLS result on abandonment, the applicable par score and overs faced determine that first-side credit. [See clause 16.10.7](https://images.icc-cricket.com/image/upload/prd/yyt7m8uh9c1uehrbvuwb.pdf).

These adjustments are why copying every raw scorecard total into a basic calculator can fail. Record the official target, allocation and result method alongside the score. NRR accounting does not calculate the DLS target itself.

## Use NRR within the qualification rules

A positive NRR means the aggregate scoring rate is higher than the aggregate rate conceded. It does not establish a qualifying position.

For the 2026 Men’s T20 World Cup groups, equal points are separated by wins before NRR. The first round and Super Eights also have separate records. [Clauses 16.10.2–16.10.4](https://images.icc-cricket.com/image/upload/prd/yyt7m8uh9c1uehrbvuwb.pdf) set those boundaries.

Before relying on a “chase within 16 overs” claim, check the actual standings, remaining fixtures, applicable tie-breakers and assumptions about other results. A rival’s NRR can change too. A calculator can correctly solve a stated numerical threshold while leaving the wider qualification question unresolved.

## Check the inputs before trusting the answer

A useful NRR calculation lets you trace the answer back to each included innings. Check the competition and stage, result cutoff, runs, valid-ball counts, innings allocations and any official rain adjustment.

Then reproduce the two aggregate rates. If the totals are visible and the rules match the competition, you can explain where the number came from rather than simply repeat it.
