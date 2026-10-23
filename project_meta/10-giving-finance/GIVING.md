# Giving

Organizations define funds such as Tithe, Offering, Thanksgiving, Missions, Welfare, Building, and custom purposes. Members choose a fund, amount, and permitted display/receipt preferences.

## Transaction lifecycle

`Intent created → Provider checkout → Pending verification → Verified success / Failed / Abandoned → Allocated → Reconciled → Refunded where applicable`

Production payment initialization and verification occur server-side. Webhooks are authenticated and idempotent. The client never marks money received based solely on a redirect or local state.

Anonymous public display does not mean anonymous to authorized finance records. Tax/receipt expectations, recurring giving, split allocations, cash/offline entry, and accounting exports remain open.
