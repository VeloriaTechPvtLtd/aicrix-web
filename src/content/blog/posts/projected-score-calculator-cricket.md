---
title: "Projected cricket scores and rate scenarios"
excerpt: "Calculate projected totals from legal balls and future scoring rates without mistaking a scenario for a forecast."
status: draft
---

A projected cricket score can answer a simple question: what total would follow if a side scored at a specified rate for the remaining balls? That arithmetic is useful, but it is not automatically a forecast of what the side will actually make.

Start by distinguishing a current-rate extrapolation from a model that estimates future scoring. A graphic showing three possible totals may just be three assumptions, not a probability distribution.

## Count the balls before choosing the rate

Consider an invented first innings at **87/3 after 10.3 overs**, with a maximum of twenty six-ball overs. There have been 10 × 6 + 3 = 63 legal balls, leaving 120 − 63 = 57. The completed portion is 10.5 decimal overs, not 10.3.

For a current rule reference, [ICC men’s T20I conditions effective October 2026](https://images.icc-cricket.com/image/upload/prd/bsxcho7ufe2pjban0wjp.pdf), clauses 17.1–17.3, define six valid balls per over and exclude wides and no-balls from that count. Use the official score’s ball count, not the number of delivery events in a feed.

The observed team scoring rate is 87 × 6 ÷ 63 = 8.285714 runs per six legal balls. Continuing at that exact rate for the full allocation gives 87 × 120 ÷ 63 = 165.714286, displayed here as **166** after rounding to the nearest whole run.

## Choose a future rate rather than rewriting the past

The scenario calculation is: **current runs + assumed future runs per over × remaining legal balls ÷ six**. It preserves the actual runs already scored and applies the assumption only to the remaining allocation.

For the same invented score, the remaining 57 balls represent 9.5 six-ball overs. The following rates are chosen teaching assumptions, not estimates of likely performance.

| Assumed rate for the remaining balls | Runs added by the arithmetic | Projected total |
| --- | ---: | ---: |
| 6 runs per over | 6 × 9.5 = 57 | 144 |
| 8 runs per over | 8 × 9.5 = 76 | 163 |
| 10 runs per over | 10 × 9.5 = 95 | 182 |
| 12 runs per over | 12 × 9.5 = 114 | 201 |

The 182 scenario does not require the team’s eventual whole-innings rate to be ten. It requires ten from this point onward. Multiplying ten by all twenty overs would produce 200 and incorrectly replace the 87 runs already scored with an assumed first-half return.

A one-run-per-over increase in the future assumption changes the total by 9.5 runs here. That sensitivity comes from the remaining allocation, not a judgment about the batters.

## A scenario range is not a confidence interval

The table spans 144–201 only because those rates were selected. Nothing establishes a probability that the final score will fall between them. Choosing four or fourteen instead would widen the range without adding evidence.

The same formula gives the same answer at 87/1 and 87/8 after 63 balls. Wickets are not an input to this calculation. That does not make those positions equivalent; it reveals the limit of the arithmetic. Whether the side lasts the remaining balls is itself uncertain.

## How a modeled score differs

In its [23 January 2014 explanation of WASP](https://www.nzc.nz/news-items/archive/whats-wasp-all-about/), New Zealand Cricket describes an average-team model using historical scoring and dismissal probabilities, with an expert-set match par. It distinguishes a first-innings score estimate from a second-innings win estimate. That historical description is not a claim about every current broadcast graphic.

## Recalculate the allocation and stop when the innings ends

If our hypothetical innings is officially reduced to fifteen overs at the same score, its cap becomes 90 balls. There are now 27 left. At an assumed ten per over, the scenario is 87 + 10 × 27 ÷ 6 = **132**, not 182. This is a first-innings scoring scenario, not a revised chase target or a DLS calculation.

If the innings is complete, show its actual total rather than projecting unplayed balls. ICC clause 13.3 includes an all-out side among completed innings. At zero legal balls, a current-rate calculation also has no denominator: an assumed future rate could be displayed, but must not be called the observed current rate.

Read a projection by checking the score timestamp, remaining legal balls, assumed rate and whether the innings is still continuing. Those inputs tell you what the number means. They do not tell you that it will happen.
