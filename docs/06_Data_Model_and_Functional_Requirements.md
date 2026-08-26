# Trade Dock --- Data Model & Functional Requirements

## 1. Core entities

### User

-   id
-   name
-   email/login identity
-   created_at
-   updated_at

### Stock

-   id
-   NSE symbol
-   company name
-   exchange
-   active status

### Trade

-   id
-   stock_id
-   owner_id
-   trade_type
-   execution_timeframe
-   entry_price
-   current_cmp
-   approach_price
-   status
-   pinned
-   notes
-   created_at
-   updated_at
-   resolved_at

### Trade Score

-   id
-   trade_id
-   freshness_points
-   strength_points
-   base_candle_points
-   total
-   updated_by
-   created_at
-   updated_at

### Trade Photo

-   id
-   trade_id
-   storage_reference
-   original_order
-   created_at

### Comment

-   id
-   trade_id
-   user_id
-   body
-   created_at
-   updated_at

### Alert

-   id
-   trade_id
-   type
-   trigger_price
-   status
-   enabled
-   created_at
-   triggered_at
-   updated_at

### Alert Provider Status

-   id
-   alert_id
-   provider
-   provider_alert_id
-   status
-   provider_message
-   last_checked_at

Providers: - website - dhan - telegram - whatsapp

### Activity

-   id
-   user_id
-   trade_id
-   event_type
-   metadata
-   created_at

## 2. Functional requirements

### Authentication

-   Two users initially.
-   Shared workspace.
-   Architecture ready for future users.

### Trade creation

-   Stock autocomplete.
-   Correct default execution TF.
-   Editable execution TF.
-   Entry.
-   Automatic 5% approach price.
-   Photos.
-   Notes.
-   Alerts.
-   Ownership.

### Trade editing

-   Update editable fields.
-   Maintain audit/activity history for meaningful changes.

### Trade cancellation

-   Do not hard-delete historical records.
-   Mark cancelled.

### Score

-   Store component values and total.
-   Validate allowed ranges.
-   Recalculate total.

### Comments

-   Create, edit if permitted, display chronologically.

### Photos

-   Upload, paste, drag/drop.
-   Preserve order.

### Radar

-   Recalculate eligibility when CMP changes.
-   Recalculate distance.
-   Re-rank based on score + distance.

### Alerts

-   Create, activate, trigger, fail, retry, disable.

### Search/filter

-   Search by stock.
-   Filter by type, timeframe, score, owner, status, date.

## 3. Validation

-   Entry price must be positive.
-   Score components must match allowed values.
-   Execution timeframe must be a supported value.
-   Stock must be an NSE equity.
-   Alert prices must be valid positive prices.
