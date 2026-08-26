# Trade Dock --- Alerts & Integration Specification

## 1. Alert channels

V1 target channels:

-   Website
-   Dhan
-   Telegram
-   Personal WhatsApp

## 2. Provider status

The UI should distinguish:

-   Request sent
-   Accepted
-   Rejected
-   Unknown / unable to verify
-   Active
-   Triggered

Do not claim acceptance without provider confirmation.

## 3. Card status

Normal state:

**ACTIVE**

If one required provider fails:

**ALERT ISSUE**

Hover/focus popover should show provider-level status.

Example:

Website ✓ Active Dhan ✓ Accepted Telegram ✓ Accepted WhatsApp ✓ Accepted

## 4. Approach alert

Automatically created at 5% above Entry.

No manual calculation required.

## 5. Entry alert

Initially waiting.

It becomes active when the approach threshold has been crossed.

If a trade is created while the approach threshold has already been
crossed, the system should activate the Entry alert immediately
according to the current CMP state.

## 6. Custom alerts

Unlimited custom alerts.

Users can add, edit, enable, disable, and remove custom alerts.

## 7. Dhan integration

The application should eventually:

1.  Submit the alert request to Dhan.
2.  Capture the provider response.
3.  Store provider status.
4.  Display status on the trade.
5.  Surface failures in Alerts and Activity.

Exact Dhan API capabilities and authorization requirements must be
verified before implementation.

## 8. Telegram

Same pattern:

Request → provider response → stored status → UI verification → alert
delivery.

## 9. WhatsApp

Same pattern, subject to the supported WhatsApp integration/API and
account requirements.

## 10. Alert idempotency

The same logical alert must not be registered multiple times
accidentally.

The system should maintain a unique provider-side alert identity where
supported.

## 11. Failure handling

If a provider fails:

-   Do not silently ignore it.
-   Show Alert Issue.
-   Record the failure.
-   Allow retry where appropriate.
-   Do not affect Radar priority.

## 12. Security

Integration credentials/tokens must never be exposed in the frontend.

Use secure server-side handling and environment/secret management.
