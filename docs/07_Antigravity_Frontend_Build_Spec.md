# Trade Dock --- Antigravity Frontend Build Specification

## Purpose

Build the Trade Dock frontend foundation in Antigravity IDE.

Use the **UI UX Pro Max skill** as the primary UI/UX design authority.

Do not use Stitch.

Do not use 21.dev for the initial foundation pass. 21.dev will be
introduced later for targeted component/effect/morphism refinement after
the base UI is stable.

## Phase 1 objective

Build a polished, coherent frontend using realistic mock data.

Do not build the backend yet.

Do not build real Dhan/Telegram/WhatsApp integrations yet.

Do not invent product features.

## Pages

1.  Radar
2.  All Trades
3.  Alerts
4.  Activity
5.  Analytics
6.  Settings

Contextual: - Trade Detail - Add Trade interface - Score expansion -
Comments expansion

Global: - Fixed Add Trade action

## Build order

### Step 1 --- App shell

-   Left sidebar
-   Main content
-   Responsive behavior
-   Active navigation state
-   Fixed Add Trade

### Step 2 --- Radar

-   Auto Radar section
-   Compact card grid
-   Recent Activity box
-   Pinned Trades section
-   Filters
-   Empty state

### Step 3 --- Trade Card

Implement all card states: - Normal active - Alert issue - Approach
alert triggered - Entry reached - Pinned - Score expanded - Comments
expanded - Photo present/absent

### Step 4 --- Add Trade

Implement: - Stock autocomplete mock interaction - Trade type -
Automatic execution TF - Editable execution TF - Entry - Automatic
approach calculation - Entry alert state - Custom alerts - Notes -
Multiple photos - Upload/drop/paste UI - Save/cancel

### Step 5 --- Trade Detail

Implement: - Full trade header - Price information - Photos - Alerts -
Provider status - Score - Notes - Comments - Actions

### Step 6 --- All Trades

Implement: - Search - Filters - Sorting - Compact table/list - Trade
detail navigation

### Step 7 --- Alerts

Implement: - Active - Triggered - Issues

### Step 8 --- Activity

Implement: - Shared timeline - Trade-linked events

### Step 9 --- Analytics

Create the foundation only.

### Step 10 --- Settings

Create the foundation for account, integrations, alerts, trading
preferences.

## Visual requirements

Use one consistent Trade Dock design system.

Do not change the visual identity between pages.

Avoid: - generic SaaS styling - spreadsheet styling - TradingView clone
styling - unnecessary gradients - excessive animation - card-within-card
nesting

Radar cards should be compact enough to display multiple trades without
excessive scrolling.

Individual fields may be side-by-side inside a card where this improves
density.

## Mock data

Use realistic NSE examples: - RELIANCE - TCS - INFY - HDFCBANK - SBIN -
TATAMOTORS - LT

Include varied states: - 7/7 - 6/7 - 5.5/7 - Alert issue - Approach
triggered - Entry reached - Pinned - Photos - Multiple comments

## Hard business constraints

-   NSE equity only
-   BUY only
-   Five trade types
-   Exact default timeframe mapping
-   Editable execution TF
-   One solid entry
-   5% approach alert above entry
-   Entry alert activates after approach threshold
-   Radar eligibility based on 5% zone
-   Radar priority based only on score + distance
-   Pinned separate from Auto Radar
-   No Triggered page
-   Trade remains on Radar after approach/entry until resolved
-   Score = /7
-   Correct 3/2/2 scoring
-   First two comments visible
-   Compact blurred photo preview
-   Fixed Add Trade on every page

## First-day rule

Prioritize quality of: 1. Radar 2. Trade Card 3. Add Trade 4. Trade
Detail

Then: 5. All Trades 6. Alerts 7. Activity

Then: 8. Analytics 9. Settings

Do not spend the first day on backend architecture.
