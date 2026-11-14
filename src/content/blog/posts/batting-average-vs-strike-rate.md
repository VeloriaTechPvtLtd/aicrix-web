---
title: "Batting average vs strike rate: formulas and worked examples"
excerpt: "Calculate batting average and strike rate with worked examples, not-outs and DNB explained, and learn why averaging individual innings rates misleads."
status: draft
image: /images/blog/cricket-bat-ball.png
imageAlt: "A plain cricket bat and red leather ball resting on grass beside a cricket pitch."
imageCaption: "AI-generated cricket equipment illustration."
---

Batting average measures **runs per dismissal**. Batting strike rate measures **runs per 100 balls faced**. They answer different questions, and neither is the same as runs per innings.

The [Association of Cricket Statisticians and Historians](https://acscricket.com/wp-content/uploads/ACS-FAQ.pdf) defines batting average using runs and dismissals, not matches played. [Minor League Cricket’s statistics guide](https://news.minorleaguecricket.com/2021/12/09/cricket-stats-101-part-one-batting-statistics/) defines strike rate as runs divided by balls faced, multiplied by 100.

## The formulas

| Measure | Calculation | What its denominator counts |
| --- | --- | --- |
| Batting average | Total runs ÷ dismissals | Times the batter was out |
| Batting strike rate | Total runs ÷ balls faced × 100 | Balls recorded as faced |
| Runs per innings | Total runs ÷ batting innings | Innings in which the player batted |

Use figures from the same format, competition and date window. Combining Test runs with IPL dismissals would produce arithmetic, but not a meaningful cricket statistic.

## One small record three different answers

Consider this hypothetical four-innings sequence. The asterisk marks not out; none of the numbers describes a real player.

| Innings | Score | Balls faced | Dismissal | Innings strike rate |
| --- | --- | --- | --- | --- |
| 1 | 12 | 8 | Yes | 150.00 |
| 2 | 30* | 20 | No | 150.00 |
| 3 | 0 | 3 | Yes | 0.00 |
| 4 | 18* | 9 | No | 200.00 |

The batter scored 60 runs from 40 balls and was dismissed twice. The batting average is **60 ÷ 2 = 30.00**. The strike rate is **60 ÷ 40 × 100 = 150.00**. Runs per innings is **60 ÷ 4 = 15.00**.

An average of 30 therefore does not say this player typically made 30 on each visit to the crease. The innings scores make that obvious: only one reached 30, while two innings ended without dismissal.

## Why the not outs stay in the runs total

Unbeaten runs are still runs. They enter the numerator, but the unbeaten innings adds no dismissal to the denominator. The ACS explains that the conventional measure describes scoring between dismissals, rather than penalising innings cut short by events such as a declaration or the match ending. [ACS averages FAQ](https://acscricket.com/wp-content/uploads/ACS-FAQ.pdf).

If every innings is not out, the dismissal denominator is zero. Show the average as undefined or a dash with an explanation, not zero and not the total runs divided by one. By contrast, zero runs with at least one dismissal gives a genuine average of zero.

## Do not average the innings strike rates

The four displayed innings rates average to 125.00: (150 + 150 + 0 + 200) ÷ 4. That is not the combined strike rate of 150.00. It gives a three-ball innings the same weight as a twenty-ball innings. Add runs and balls first, then divide once.

The same principle applies when joining monthly or seasonal records. Preserve the underlying counts rather than averaging rates that have different denominators.

## DNB and comparison checks

Did not bat is not a score of zero and not another unbeaten batting innings. Only actual batting innings belong in that count. If the hypothetical player also appeared in a fifth match without batting, the four-innings calculations above would not change.

Before comparing players, display innings, dismissals and balls beside the rates. Keep batting role, opposition and sample size in view. Two players can share an average and strike rate while reaching them through very different workloads and distributions.
