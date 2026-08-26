# Trade Dock --- Information Architecture & UX Specification

## 1. Application shell

Desktop-first web application.

Left sidebar navigation:

-   Radar
-   All Trades
-   Alerts
-   Activity
-   Analytics
-   Settings

Fixed global action:

**+ Add Trade**

## 2. Radar

Radar is the default homepage.

It contains two separate trade sections:

### Auto Radar

Trades that qualify automatically because CMP is within the 5% approach
zone above entry.

### Pinned Trades

Trades manually pinned by a user. They are kept separate from Auto
Radar.

Pinned status does not change priority.

## 3. Radar layout

Recommended desktop composition:

-   Main area: Auto Radar card grid
-   Right side: compact Recent Activity box
-   Below the Radar area: Pinned Trades section

Recent Activity should show roughly 4--6 events.

## 4. Radar card

A card should contain:

-   Stock name
-   Score /7
-   Trade type
-   Execution timeframe
-   CMP
-   Entry
-   Distance
-   Alert status
-   First two comments
-   More-comments affordance when applicable
-   Compact blurred photo preview when photos exist
-   Owner/actions
-   Pin state where relevant

Fields may be side-by-side to save space. The card itself should retain
a clear vertical hierarchy.

## 5. Card density

Radar cards must be compact.

Target roughly half the current large-card footprint from the early
prototype.

Do not reserve empty space for missing content.

Photo previews should be compact.

The purpose is to display more priority trades above the fold and
minimize scrolling.

## 6. Score interaction

The score itself is clickable.

Example:

**⭐ 7/7**

Clicking it expands:

-   Freshness
-   Strength
-   Base Candles
-   Total
-   Edit Score

No separate Score button is required.

## 7. Comments

First two actual comments are visible directly on the Radar card.

If more exist:

**+ N more comments**

Clicking expands the full discussion.

## 8. Photo interaction

A small blurred thumbnail indicates that photos exist.

Show:

**VIEW TRADE**

Clicking opens Trade Detail.

## 9. Trade Detail

Trade Detail contains:

-   Full trade information
-   Photos
-   Alerts
-   Provider verification
-   Full score breakdown
-   Score editing
-   Notes
-   Full comments
-   Edit Trade
-   Add Alert
-   Cancel Trade

## 10. Add Trade

Global fixed button opens a focused Add Trade interface.

The interface should minimize scrolling and reduce repeated input.

Fields may be arranged side-by-side.

## 11. All Trades

Optimized for:

-   Search
-   Filtering
-   Sorting
-   Historical lookup

Suggested columns:

Stock, Trade Type, Execution TF, CMP, Entry, Distance, Score, Alert
Status, Trade Status, Date.

## 12. Alerts

Dedicated page showing:

-   Active alerts
-   Triggered alerts
-   Alert issues

This is an alert-management page, not a Triggered Trades page.

## 13. Activity

Shared trade activity timeline.

Events link back to the relevant trade.

This is not a generic chat system.

## 14. Analytics

V1 foundation only. Future scope includes performance and setup-quality
analysis.

## 15. Settings

Account, integrations, alert preferences, trading preferences, and
future team-management foundation.

## 16. Responsive behavior

Desktop-first.

On smaller screens:

-   Sidebar can collapse.
-   Radar cards can become one-column.
-   Fixed Add Trade remains accessible.
-   Core information stays visible without excessive interaction.
