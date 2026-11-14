---
title: "Cricket weather forecasts and why rain chance is not washout chance"
excerpt: "Read cricket weather forecasts without confusing rain probability, humidity and match status. Includes interval, dew and timestamp examples."
status: draft
---

A weather app’s rain percentage is not the probability that a cricket match will be abandoned. It concerns a defined weather event at a location over a specified period. A washout is a different outcome. Before interpreting the number, check what the weather provider has actually measured or forecast.

Three distinctions do most of the work: probability is not rainfall amount, humidity is not observed dew, and a forecast is not an official match-status update.

## Read the forecast interval and threshold

The [US National Weather Service definition](https://www.weather.gov/ppg/forecast_terms) describes precipitation probability as the chance of a measurable amount at a particular point during a specified period. Check the threshold, location and period used by your own provider before comparing numbers. A daily probability and an hourly probability cover different events.

A 70% figure therefore does not mean rain for 70% of the match, 70 mm of rainfall or a 70% chance of no result. The forecast event and the cricket outcome must not exchange labels.

Read any rainfall amount separately and preserve its units and accumulation period. A daily total is not an hourly intensity, just as a forecast for the whole afternoon is not a measurement at the scheduled toss.

## Two hourly percentages cannot simply be added

Consider an invented model with 100 equally likely two-hour scenarios. Each hour has a 40% chance of crossing the same rain threshold. Here are two different ways those scenarios could be arranged.

| Hypothetical arrangement | Rain in hour one | Rain in hour two | Rain in at least one hour |
| --- | ---: | ---: | ---: |
| The same 40 scenarios are wet in both hours | 40 of 100 | 40 of 100 | 40 of 100 |
| Forty scenarios are wet only in hour one and a different forty only in hour two | 40 of 100 | 40 of 100 | 80 of 100 |

Both arrangements have identical hourly percentages, yet the two-hour probability differs. Adding 40% and 40% is valid for the second constructed arrangement, not a general rule.

If the two events were independent, the probability of at least one wet hour would instead be 1 − (0.6 × 0.6) = 64%. Independence is an extra assumption, not information supplied by two percentage labels. None of these three calculations estimates abandonment, lost overs or a match winner.

## Separate a forecast from an observation

An observation records conditions at a particular place and time. A forecast describes a future period. They can appear beside each other without being interchangeable.

The [India Meteorological Department’s API reference](https://api.imd.gov.in/public/api_reference.html) provides a useful example. Its city-forecast documentation includes humidity recorded at 08:30 and 17:30 alongside forecast daily temperatures. Its current-weather observation time is labelled UTC. A field’s presence in a forecast response does not turn every value into a future prediction.

Imagine a hypothetical card retrieved at 16:00 IST that contains a humidity observation made at 08:30 IST. That observation is seven hours and thirty minutes old. The retrieval time does not make it a fresh 16:00 measurement or a prediction for an evening match.

Likewise, identify the location. A city or airport reading should remain labelled as such rather than quietly becoming a measurement on the stadium outfield.

## Humidity does not confirm dew on the grass

Dew depends on the surface cooling to the dew point of the air beside it. The [Met Office dew explanation](https://weather.metoffice.gov.uk/learn-about/weather/types-of-weather/temperature/dew) describes condensation on surfaces such as grass. Air temperature and grass temperature are not the same measurement.

Suppose the local dew point is hypothetically 18°C. A grass surface at 20°C and one at 17°C are on opposite sides of that threshold, even if a nearby weather screen shows the same air reading. Without the surface condition, a humidity percentage alone cannot establish whether dew has formed.

This is a physical illustration, not a stadium forecast. It supplies neither a measured amount of outfield moisture nor an automatic advantage for the chasing side. Observed dew, an expectation of dew and an assumed fantasy-points adjustment are separate claims.

## Keep weather risk and match status on separate lines

A useful match update should identify the weather source, location, issue or observation time, valid period and units. It should separately state whether play is scheduled, delayed, underway or officially abandoned, with the source and time of that status.

During an interruption, use the official match update for the next inspection or revised arrangements. A changing weather icon does not itself announce a restart or a result. Rain-adjusted targets belong to a separate cricket-rules explanation, not a conversion from the forecast percentage.

The practical reading order is simple: check where and when the number applies, what event it describes, whether it is observed or predicted, and what the match officials have actually announced. That produces a more useful preview than a confident washout label built from one weather statistic.
