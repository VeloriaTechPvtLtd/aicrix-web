---
title: "How to read a fantasy cricket form index"
excerpt: "Understand recent-form averages, scoring coverage and weighted fantasy indices. Worked examples show why similar-looking player ratings can differ."
status: draft
---

A fantasy cricket form index is only interpretable when you know what went into it. A score of 35 might be a recent average, a weighted blend of several averages or a provider’s custom scale. Those are not interchangeable, and none automatically means the player is expected to score 35 points next match.

Before comparing two numbers, check three things: which performances were included, which scoring rules were applied and how the components were combined.

## Similar names can hide different definitions

Imagine one index includes batting and bowling, while another also includes fielding. A third blends recent matches with career and opposition records. These hypothetical definitions answer different questions before any calculation is checked.

“Recent form” does not tell you whether catches contribute, whether every eligible appearance is present, or whether the sample crosses competitions. Read the definition rather than comparing the labels.

## An average is not a consistency score

The following invented sequences are fantasy points, not batting runs or actual player records.

| Player | Five recorded scores | Mean | Median | Range |
|---|---|---:|---:|---|
| A | 10, 10, 10, 10, 100 | 28 | 10 | 10–100 |
| B | 25, 25, 25, 25, 25 | 25 | 25 | 25–25 |

A’s mean is 140 ÷ 5 = 28, higher than B’s 25. Yet A scored only ten in four of the five observations. The median makes that distribution easier to see. [NIST’s explanation](https://www.itl.nist.gov/div898/handbook/eda/section3/eda351.htm) distinguishes the arithmetic mean from the middle value of sorted observations.

Neither sequence establishes what happens next. The highest previous score is not a promised ceiling, and the lowest is not a guaranteed floor. Showing the individual scores alongside the summary lets readers see concentration without turning five observations into a forecast.

## Missing points do not affect everyone equally

If a scoring component is missing, the effect depends on how often each player earned it. Equal omission rules do not necessarily mean equal lost points.

In a hypothetical comparison, Bowler A has 12 qualifying dots and Bowler B has four. Omitting that component removes 12 points from A and four from B: an eight-point difference. The example does not describe either player’s real live total. [Dream11’s current T20 reference](https://www.dream11.com/features/how-to-play) also lists a dot-ball component, illustrating why the selected scoring version matters; it does not establish that different providers use identical rules.

Missing match data creates another problem. Suppose four observed scores total 120 points and a fifth performance is unavailable. The observed mean is 30 across four records. Inserting an invented zero produces 24 across five. Neither calculation reveals the missing score. Keep it unknown and show coverage rather than presenting the second figure as a complete five-match average.

## Weights change the question

Consider an explicitly hypothetical index using compatible point definitions: a recent average of 40, career average of 30 and opposition average of 20. Assign weights of 60%, 30% and 10%. The calculation is 0.60 × 40 + 0.30 × 30 + 0.10 × 20 = 35.

That 35 is a weighted summary, not the unweighted mean of all underlying matches. Some matches may appear in more than one component, so adding their sample counts would overstate the number of distinct performances. Changing the weights changes the index’s emphasis; it does not demonstrate improved predictive accuracy.

## What a useful form card should show

Look for match dates and IDs, format and competition, scoring version, included contributions, observed sample size and missing records. Five T20 appearances can span different elapsed periods for different players. “Last five IPL games” also need not select the same performances as “last five T20s”.

If an index is promoted as a forecast, ask for a separate evaluation on later matches using information available at prediction time. A clear formula explains a number; it does not by itself prove the number predicts future performance.
