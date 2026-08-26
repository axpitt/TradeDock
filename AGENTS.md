# Trade Dock — AI Development Rules

## 1. PURPOSE

Trade Dock is a private shared trading workspace initially used by two
traders and designed to scale later.

Its purpose is to replace WhatsApp as the primary place for storing,
discussing, monitoring, scoring, and alerting on upcoming trades.

The `/docs` directory contains the authoritative product documentation.

Read the relevant documentation before implementing a feature.

---

## 2. SOURCE OF TRUTH

The following files are authoritative:

- `/docs/01_Product_Requirements.md`
- `/docs/02_Information_Architecture_and_UX.md`
- `/docs/03_UI_Design_System.md`
- `/docs/04_Trade_and_Radar_Business_Rules.md`
- `/docs/05_Alerts_and_Integrations.md`
- `/docs/06_Data_Model_and_Functional_Requirements.md`
- `/docs/07_Antigravity_Frontend_Build_Spec.md`
- `/docs/08_Testing_and_Acceptance.md`
- `/docs/09_V1_Roadmap.md`

If existing code conflicts with the documentation, do not silently
change the product requirements.

Explain the conflict and ask for clarification.

---

# 3. DEVELOPMENT STRATEGY

Trade Dock must be developed incrementally.

Do NOT attempt to build the entire product in one operation.

Work section-by-section.

Before modifying an existing feature:

1. Inspect the existing implementation.
2. Understand its dependencies.
3. Make the smallest appropriate change.
4. Test the affected feature.
5. Verify that previously completed features still work.

Do not rewrite unrelated parts of the application.

Do not perform large refactors unless explicitly requested.

---

# 4. CURRENT TOOLING STRATEGY

Primary IDE:

Antigravity IDE

Primary UI/UX intelligence:

UI UX Pro Max skill

21.dev MCP:

Use later for targeted:
- UI elements
- components
- morphisms
- micro-interactions
- animations
- polish

Do NOT use 21.dev to redesign the entire application.

Stitch is NOT part of the Trade Dock implementation workflow.

---

# 5. V1 PRODUCT SCOPE

Trade Dock V1 supports:

- NSE equities only
- BUY trades only
- Trade storage
- Trade Radar
- Trade scoring
- Comments
- Multiple trade photos
- Notes
- Alerts
- Alert provider status
- Activity
- Search/filtering
- Basic Analytics foundation
- Settings/integration foundation

---

# 6. EXPLICITLY OUT OF SCOPE

Do NOT introduce these features unless explicitly requested:

- Futures
- Options
- Crypto
- Forex
- Automated trade execution
- AI trade prediction
- Automatic Demand/Supply detection
- Portfolio management
- Advanced technical-analysis engine
- Breakout strategy engine
- Generic Long/Short workflows
- Trailing stops
- Stop-loss workflows
- Unrequested indicators
- Unrequested trading strategies

Do not add features simply because they are common in other trading platforms.

---

# 7. MARKET SCOPE

Trade Dock currently supports:

NSE equities only.

All trades are:

BUY only.

There is no SELL workflow.

There is no LONG/SHORT selector.

---

# 8. TRADE TYPES

The only supported trade types are:

- Yearly
- Half-Yearly
- Quarterly
- Monthly
- Weekly

Default execution timeframe:

Yearly → Quarterly

Half-Yearly → Monthly

Quarterly → Weekly

Monthly → Daily

Weekly → 125m

The execution timeframe MUST remain editable.

---

# 9. ENTRY

A trade has one solid Entry Price.

Do not introduce an entry range unless explicitly requested.

---

# 10. APPROACH ALERT

For BUY trades, the expected approach is:

Price approaches Entry from ABOVE.

The automatic 5% approach level is:

Entry × 1.05

Example:

Entry = ₹1,000

Approach Alert = ₹1,050

Do not invent a different calculation.

---

# 11. RADAR

Radar is the main homepage.

There are two distinct sections:

## Auto Radar

Contains trades that qualify automatically.

Normal eligibility:

CMP is within the 5% approach zone above Entry.

## Pinned Trades

Contains trades manually pinned by users.

Pinned trades are NOT mixed into Auto Radar.

Pinning does NOT increase priority.

---

# 12. RADAR PRIORITY

Radar priority is based ONLY on:

1. Trade Score
2. Distance from Entry

Do NOT use these as priority factors:

- Alert state
- Pin status
- Owner
- Trade type
- Provider status
- Comments
- Number of photos

A trade whose 5% alert triggered does NOT automatically become
more important than a closer trade.

Alert state and Radar priority are separate concepts.

---

# 13. RADAR LIFECYCLE

If a trade enters Auto Radar:

It remains there while active.

When the 5% approach alert triggers:

The trade remains on Radar.

Do NOT move it to another page.

Do NOT duplicate it.

When Entry is reached:

The trade remains on Radar.

Do NOT create a Triggered Trades page.

The trade leaves active Radar only when it is resolved/cancelled
according to the product rules.

---

# 14. RADAR CARD

Radar cards must be compact.

The purpose of Radar is rapid monitoring of many trades.

Avoid unnecessary empty space.

Do NOT reserve large blank areas for missing content.

Individual fields MAY be arranged side-by-side when this improves
information density.

For example:

CMP              ENTRY
₹2,950           ₹2,810

This is allowed.

The card itself should maintain a clear visual hierarchy.

---

# 15. RADAR CARD CONTENT

A Radar card may contain:

- Stock name
- Score /7
- Trade type
- Execution timeframe
- CMP
- Entry
- Distance
- Alert status
- First two comments
- More comments indicator
- Compact trade-photo preview
- Pin state
- Contextual actions

Do not add unnecessary technical-analysis metrics.

---

# 16. SCORE

Trade Score is out of 7.

There are exactly three scoring categories:

### Freshness /3

Never tested = 3

Tested once = 1.5

Tested more than once / 2+ times = 0

### Strength /2

Two or more exciting candles = 2

One exciting candle with gap / high achievement = 2

One exciting candle with low achievement = 1

### Base Candles /2

1–3 candles = 2

4–5 candles = 1

6+ candles = 0

Maximum:

7/7

Do NOT introduce:
- 0–10 scoring
- 0–100 scoring
- generic confluence scoring
- technical indicator scoring

---

# 17. SCORE INTERACTION

The score displayed on a trade card is clickable.

Example:

⭐ 7/7

Clicking it should expand the scoring details.

Show:

Freshness       X/3

Strength        X/2

Base Candles    X/2

TOTAL           X/7

Include an Edit Score action.

Do NOT create a separate Score page.

---

# 18. COMMENTS

Comments are actual discussion messages.

Do NOT represent comments as generic tags/chips.

The first two comments should be visible directly on the Radar card.

If more exist:

+ N more comments

Clicking this expands the full discussion.

---

# 19. PHOTOS

Trades may contain multiple photos.

Preserve their original order.

Do not automatically rename or categorize photos in V1.

Radar should use a compact blurred thumbnail.

Show:

VIEW TRADE

The full images are available in Trade Detail.

---

# 20. ADD TRADE

Add Trade is a global action.

It is NOT a navigation page.

It must be accessible from a fixed consistent location across pages.

The form should minimize scrolling.

Side-by-side fields are allowed.

---

# 21. STOCK AUTOCOMPLETE

Stock search must behave like a TradingView-style autocomplete.

Suggestions appear while the user types.

The user does not need to type the full stock name.

Only NSE equities should be selectable.

---

# 22. ADD TRADE — ALERTS

When a trade is created:

Automatically calculate the 5% approach alert.

Show:

5% Approach Alert

Entry Alert

Entry Alert becomes active after the approach threshold is crossed.

Custom alerts may be added.

Custom alerts are unlimited.

Do not use generic Target / Trailing Stop terminology.

---

# 23. TRADE DETAIL

Trade Detail is contextual.

It is NOT a sidebar navigation page.

It should contain:

- Stock
- Trade type
- Execution timeframe
- CMP
- Entry
- Distance
- Photos
- Alerts
- Provider status
- Score
- Score editing
- Notes
- Comments
- Edit Trade
- Add Alert
- Cancel Trade

---

# 24. ALERT CHANNELS

Target V1 alert channels:

- Website
- Dhan
- Telegram
- Personal WhatsApp

Provider acceptance/rejection must be represented accurately.

Never claim an external provider accepted an alert unless the
integration actually confirms it.

---

# 25. ALERT STATUS

Normal:

ACTIVE

If a provider fails:

ALERT ISSUE

Provider details should be accessible through an appropriate
popover/expanded interaction.

Example:

Website ✓ Active
Dhan ✓ Accepted
Telegram ✓ Accepted
WhatsApp ✓ Accepted

---

# 26. NAVIGATION

The left navigation is:

- Radar
- All Trades
- Alerts
- Activity
- Analytics
- Settings

Do NOT add:

- Add Trade
- Trade Score
- Comments
- Photos
- Triggered Trades

as navigation pages.

---

# 27. RECENT ACTIVITY

Radar includes a compact Recent Activity box.

Keep it compact.

Show approximately 4–6 recent events.

Examples:

Friend updated RELIANCE score

TCS alert issue

INFY entry reached

You pinned HDFCBANK

Use:

VIEW ALL ACTIVITY

Do not call it "View All Logs".

---

# 28. ACTIVITY

Activity is a shared trade activity feed.

Examples:

- Trade created
- Score updated
- Comment added
- Alert triggered
- Provider failure
- Trade pinned
- Trade cancelled

Activity should link to the relevant trade.

It is not a generic chat application.

---

# 29. ALL TRADES

All Trades is the historical trade library.

Support:

- Search
- Filters
- Sorting
- Trade status
- Score
- Date

Suggested information:

Stock
Trade Type
Execution TF
CMP
Entry
Distance
Score
Alert Status
Trade Status
Date

Do not add LONG/SHORT.

Do not add generic Target fields.

---

# 30. ANALYTICS

Analytics V1 is a foundation.

Do not overbuild.

Potential future metrics:

- Trade performance
- Score performance
- Trade type performance
- Monthly statistics
- Setup statistics

Do not invent unrelated analytics.

---

# 31. SETTINGS

Settings should provide a foundation for:

- Account
- Connections
- Alert Preferences
- Trading Preferences

Integrations:

- Dhan
- Telegram
- WhatsApp

Architecture should be ready for future scaling to more users.

---

# 32. VISUAL DESIGN

Use ONE consistent Trade Dock visual system.

UI UX Pro Max is the primary UI/UX authority.

All pages must look like the same application.

Reuse established:

- Colors
- Typography
- Spacing
- Buttons
- Inputs
- Cards
- Borders
- Radius
- Shadows
- Icons
- Status indicators
- Navigation
- Headers

Do not redesign the visual identity when creating a new page.

Do not randomly change colors between pages.

Do not randomly change typography between pages.

Do not introduce a different card style on another page.

---

# 33. RESPONSIVE DESIGN

The product is desktop-first.

On smaller screens:

- Sidebar may collapse
- Cards may become one-column
- Add Trade remains accessible
- Critical information remains visible
- Touch interaction must remain usable

Do not create a completely different mobile product.

---

# 34. DEVELOPMENT PHASES

Build in this order:

1. Project setup
2. Design system
3. Application shell
4. Radar
5. Trade Card
6. Add Trade
7. Trade Detail
8. All Trades
9. Alerts
10. Activity
11. Analytics
12. Settings
13. 21.dev refinement
14. Backend
15. Market data
16. Integrations
17. Testing
18. Deployment

Do not jump ahead without instruction.

---

# 35. FRONTEND-FIRST RULE

During the initial frontend phase:

Do NOT build:

- Real database
- Real authentication
- Real Dhan integration
- Real Telegram integration
- Real WhatsApp integration
- Real market data

Use realistic mock data.

The frontend must be approved before backend integration begins.

---

# 36. MOCK DATA

Use realistic NSE examples such as:

- RELIANCE
- TCS
- INFY
- HDFCBANK
- SBIN
- TATAMOTORS
- LT

Use multiple trade states.

Include:

- Different scores
- Different distances
- Alert issue
- Approach triggered
- Entry reached
- Pinned trades
- Photos
- Multiple comments

---

# 37. SCOPE CONTROL

Do not implement a feature merely because:

- another trading platform has it
- a UI library provides it
- an AI tool suggests it
- it seems "cool"
- it seems standard

If a feature is not documented or explicitly requested:

STOP and ask.

---

# 38. CHANGE DISCIPLINE

When asked to modify one section:

Modify that section.

Do not redesign unrelated sections.

Do not rewrite working components unnecessarily.

Do not change business logic while performing visual work.

Do not change visual design while performing backend work.

---

# 39. DEPENDENCY DISCIPLINE

Do not install unnecessary dependencies.

Before installing a package:

1. Check whether an existing dependency already solves the problem.
2. Check whether the framework already provides the capability.
3. Only install if genuinely necessary.

Explain new dependencies before adding them when the dependency
could materially affect architecture.

---

# 40. TESTING DISCIPLINE

After every meaningful implementation:

- Check the affected UI.
- Check the console.
- Check for TypeScript/build errors.
- Check previously working areas.
- Verify the relevant acceptance criteria.

Do not declare a task complete merely because the page renders.

---

# 41. GIT DISCIPLINE

Use Git checkpoints after meaningful milestones.

Recommended commits:

- chore: initialize Trade Dock
- docs: add product documentation
- chore: add AI development rules
- feat: establish application shell
- feat: build Radar
- feat: build Trade Cards
- feat: build Add Trade
- feat: build Trade Detail
- feat: build All Trades
- feat: build Alerts
- feat: build Activity
- feat: build Analytics foundation
- feat: build Settings

Do not create one giant unreviewed commit after building the entire application.

---

# 42. CURRENT WORKFLOW

The current task should always be explicit.

Do not automatically continue into future phases.

Wait for the next instruction after completing the requested section.

When a task is complete, report:

1. What was changed
2. Files changed
3. Dependencies added
4. Tests/checks performed
5. Known issues
6. Recommended next step

Then STOP.

---

# 43. MOST IMPORTANT RULE

Do not silently change Trade Dock's product decisions.

If there is ambiguity:

ASK.

If there is a conflict between an implementation idea and the documented
product requirements:

ASK.

If an existing component already works:

PRESERVE IT.

Build Trade Dock incrementally, precisely, and consistently.