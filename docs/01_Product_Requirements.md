# Trade Dock --- Product Requirements Document (PRD)

## 1. Product

**Name:** Trade Dock

Trade Dock is a private shared trading workspace initially used by two
traders and designed to scale later.

Its purpose is to replace WhatsApp as the primary place for storing,
discussing, monitoring, scoring, and alerting on upcoming trades.

## 2. V1 Scope

Trade Dock V1 supports:

-   Indian NSE equities only
-   BUY trades only
-   Trade storage
-   Trade Radar
-   Trade scoring
-   Comments/discussion
-   Multiple trade photos
-   Notes
-   Alerts
-   Alert-provider status
-   Shared activity
-   Search/filtering
-   Basic analytics foundation
-   Settings and integrations foundation

## 3. Explicitly out of scope

Do not add in V1:

-   Futures
-   Options
-   Crypto
-   Forex
-   Automated trade execution
-   AI trade prediction
-   Automatic Demand/Supply detection
-   Portfolio management
-   Advanced technical-analysis engine
-   Breakout strategy engine
-   Stop-loss/trailing-stop workflow unless later requested

## 4. Core user principle

**Fast to add → Easy to understand → Difficult to lose a trade → Easy to
discuss → Automatic alerts.**

## 5. Main navigation

Left sidebar:

-   Radar
-   All Trades
-   Alerts
-   Activity
-   Analytics
-   Settings

The Add Trade action is global and fixed on every page. It is not a
navigation item.

Trade Score is not a navigation page.

Trade Detail is contextual, not a permanent sidebar item.

There is no Triggered Trades page.

## 6. Users

V1 is for two users with shared trade visibility.

The architecture should later support more users, roles, and
permissions.

## 7. Trade types

-   Yearly
-   Half-Yearly
-   Quarterly
-   Monthly
-   Weekly

Default execution timeframe:

  Trade Type    Default Execution TF
  ------------- ----------------------
  Yearly        Quarterly
  Half-Yearly   Monthly
  Quarterly     Weekly
  Monthly       Daily
  Weekly        125m

Execution timeframe remains editable.

## 8. Trade data

A trade contains at minimum:

-   Stock
-   NSE symbol/instrument identity
-   Trade type
-   Execution timeframe
-   Entry price
-   Current CMP
-   5% approach alert level
-   Entry alert state
-   Custom alerts
-   Notes
-   Photos
-   Score
-   Comments
-   Owner
-   Status
-   Created/updated timestamps

## 9. Stock selection

Use TradingView-style autocomplete:

-   Suggestions appear while typing.
-   Full stock name is not required.
-   Only NSE equities are selectable.

## 10. Trade lifecycle

New trade → monitoring → Auto Radar when eligible → approach alert →
entry alert active → entry reached → user resolves/cancels.

A trade remains on Radar after approach alert and after entry is reached
until resolved.

## 11. Success criteria

A user should be able to:

1.  Add a trade quickly.
2.  See whether it belongs on Radar immediately.
3.  Understand its score and distance without opening it.
4.  See relevant comments and photo presence on the card.
5.  Know whether alert providers accepted the request.
6.  Open the complete trade record when needed.
7.  Search old trades quickly.
8.  See what the other user changed recently.
