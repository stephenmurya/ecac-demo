# Feature Entitlements

Entitlements are platform/commercial allowances, distinct from organization flags and user permissions.

Potential entitlements include enabled modules, member limits, SMS/AI budgets, storage, reporting depth, retention, and support tier. The future SaaS packaging model is undecided.

## Rules

- Limits must be visible before they block work.
- Usage counters use a defined billing/timezone period.
- Over-limit behavior should prefer safe read-only or queued states over data loss.
- Platform operators can change entitlements; organization admins configure only within them.
- Pilot exceptions are explicit and auditable, not hidden code paths.
