# Trade Dock --- Trade, Scoring & Radar Business Rules

## 1. Market scope

-   NSE only
-   Equity only
-   BUY only

## 2. Entry model

Each trade has one solid entry price.

No entry range in V1.

## 3. Approach alert

For a BUY setup approaching from above:

**5% Approach Level = Entry × 1.05**

Example:

Entry ₹1,000 → Approach Level ₹1,050.

## 4. Radar eligibility

Normal Auto Radar eligibility:

**CMP \<= Entry × 1.05 and CMP \>= Entry**

For the intended drop-entry workflow, the price is above or at entry
while approaching downward.

If a trade is saved while CMP is already inside the 5% approach zone, it
immediately qualifies for Auto Radar.

If CMP has already crossed the approach threshold, the system must not
issue a redundant approach notification.

Pinned trades can appear in the separate Pinned section regardless of
automatic eligibility.

## 5. Radar priority

Priority uses only:

1.  Trade Score
2.  Distance from Entry

Alert state is not a priority factor.

Pin state is not a priority factor.

Owner, trade type, provider status, and alert state are not priority
factors.

If two trades have comparable scores, the closer trade should rank
higher.

The exact weighting formula can be finalized during
implementation/testing.

## 6. Alert state transitions

Before approach threshold: - Approach alert active - Entry alert waiting

Approach threshold crossed: - Trade remains on Radar - Approach alert
becomes triggered - Entry alert becomes active

Entry reached: - Trade remains on Radar - Status becomes Entry Reached

Resolution: - Trade leaves active Radar after the user resolves/cancels
it.

## 7. Scoring

### Freshness --- /3

-   Never tested: 3
-   Tested once: 1.5
-   Tested more than once / 2+ times: 0

### Strength --- /2

-   Two or more exciting candles: 2
-   One exciting candle with gap / high achievement: 2
-   One exciting candle with low achievement: 1

### Base Candles --- /2

-   1--3: 2
-   4--5: 1
-   6+: 0

Maximum: 7/7.

## 8. Score editing

Both users can edit scoring.

The system should retain who changed the score and when.

## 9. Pinning

Pinning is a visibility mechanism, not a priority boost.

Pinned trades appear in a separate Pinned Trades section.

## 10. Comments

Unlimited comments per trade.

First two shown on Radar.

Remaining comments accessible through expansion.

## 11. Photos

Multiple photos per trade.

Preserve original order.

Do not automatically categorize or rename in V1.

## 12. Trade statuses

Suggested internal states:

-   Active
-   Approach Triggered
-   Entry Reached
-   Cancelled
-   Resolved

Avoid deleting historical trades.
