---
title: "Follow-on rules: how to calculate the runs needed"
excerpt: "Calculate runs needed to avoid the follow-on, compare match-duration thresholds and see how a first-day washout changes the applicable lead."
status: draft
---

To avoid the follow-on, the side batting second must finish close enough to the first side's total that the lead is below the applicable threshold. In a standard five-day men's Test, that threshold is 200 runs. If Team A makes 450, Team B needs 251, not 250: 450 minus 250 is still a 200-run lead. [ICC men's Test conditions, clause 14](https://images.icc-cricket.com/image/upload/prd/a8114zro5tkioifz0jqg.pdf).

The follow-on is an option for the side that batted first, not an automatic instruction. It changes the innings order by requiring the other side to bat again. [MCC Law 14](https://www.lords.org/getattachment/e8b12929-1e84-4927-af4e-2a5875b53589/Laws-of-Cricket-2017-Code-4th-Edition-%282026%29.pdf).

## The threshold table

MCC's rule applies to two-innings matches:

| Match duration | Minimum first-innings lead for the option |
| --- | --- |
| Five days or longer | 200 runs |
| Three or four days | 150 runs |
| Two days | 100 runs |
| One day | 75 runs |

“One day” in this table means a one-day **two-innings** match under this Law, not an ODI. [MCC Law 14.1](https://www.lords.org/getattachment/e8b12929-1e84-4927-af4e-2a5875b53589/Laws-of-Cricket-2017-Code-4th-Edition-%282026%29.pdf).

## Calculate the score needed

Let A be the first side's completed total and L the applicable lead threshold.

**Minimum total to avoid the follow-on = max(0, A − L + 1).**

If the second side currently has B runs:

**Further runs needed = max(0, A − L + 1 − B).**

These are arithmetic shortcuts derived from the requirement that A − B must be less than L. They are not a forecast or an official scorer's decision.

For A = 450, L = 200 and B = 183, the minimum total is 251 and another 68 runs are required. Test the boundary rather than trusting the formula blindly: at 250 the lead is 200; at 251 it is 199. The extra one is the whole point.

For a four-day example, A = 380 and L = 150 gives a minimum of 231. At 231, the deficit is 149. Reusing the five-day threshold here would produce the wrong target.

## What if rain wipes out the first day?

If there is no play on day one, the ICC Test rule uses the number of days remaining when play starts. The starting day counts in full, however late play begins. Play has begun for this purpose once the first over starts after the call of Play. [ICC Test clause 14.3](https://images.icc-cricket.com/image/upload/prd/a8114zro5tkioifz0jqg.pdf).

So a scheduled five-day game beginning on day two has four days for this calculation and a 150-run threshold. This is not a general rule to subtract a day whenever rain costs six hours. A first-day start and a completely washed-out first day are different facts.

## Does reaching the threshold force the captain's hand?

No. The qualifying lead creates a choice. Once the captain notifies the opponent and umpires that the follow-on will be enforced, that decision cannot be changed. [MCC Law 14.2](https://www.lords.org/getattachment/e8b12929-1e84-4927-af4e-2a5875b53589/Laws-of-Cricket-2017-Code-4th-Edition-%282026%29.pdf).

For tactical analysis, separate eligibility from preference. A calculator can establish whether the option exists. It cannot decide how tired the bowlers are, how the pitch will play later or how a captain values batting again.

For a Ranji Trophy or other domestic fixture, confirm the season's playing conditions and scheduled duration before entering a threshold. Record the first-innings total, the applicable lead and the first day on which play actually started. Those are the inputs that make the answer reproducible.

## Related reading

- [A tie versus a draw in Test cricket](/blog/tie-vs-draw-test-cricket)
