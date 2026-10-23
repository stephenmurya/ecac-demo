# Data Model Concepts

| Aggregate | Important concepts |
|---|---|
| Organization | profile, lifecycle, locale, timezone, configuration |
| Person | identity profile, contacts, consent, preferences, tags |
| Membership | visitor/member status, branch relationships, lifecycle history |
| Structure | branch, ministry, group, home cell, leadership assignments |
| Program | event, recurring template, occurrence, audience |
| Attendance | occurrence, person/guest, check-in method, correction history |
| Care | follow-up case, assignment, task, outcome, pastoral note |
| Communication | template, audience snapshot, campaign, delivery attempt |
| Automation | definition, version, trigger, run, step, approval |
| Finance | fund, project, intent, verified transaction, allocation, refund |
| Need | request, item, approval, monetary pledge, in-kind offer, fulfillment |
| Governance | permission, role, scoped assignment, audit event |

## Modeling rules

- Store status history when lifecycle changes matter.
- Separate monetary transactions from in-kind contribution records.
- Snapshot campaign audiences and approved content for auditability.
- Treat sensitive pastoral notes and donor identity as separately authorized data.
- Use stable identifiers; display names are mutable and not keys.
