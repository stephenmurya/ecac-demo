# System Architecture

## Logical view, technology-neutral

```text
Member mobile app ─┐
Church web admin ──┼─> Application boundary ─> Domain modules ─> Tenant-owned data
Mobile admin ──────┤              │                    │
Platform admin ────┘              ├─> Policy/RBAC      ├─> Audit records
                                  ├─> Automation       ├─> Communication providers
                                  ├─> AI gateway       └─> Payment provider
                                  └─> Reporting
```

## Module boundaries

- Identity and organization context
- People/CRM and pastoral care
- Programs, groups, events, and attendance
- Communications and templates
- Automation orchestration
- Giving, projects, needs, and reconciliation
- Content and AI assistance
- Governance, configuration, audit, and reporting

## Architectural rules

1. Every organization-owned operation resolves and authorizes tenant context server-side.
2. Feature availability, configuration, entitlements, and RBAC are evaluated separately.
3. Provider callbacks are verified server-side and processed idempotently.
4. Sensitive mutations emit immutable audit events.
5. Long-running communications and AI work execute asynchronously with observable status.

No production stack has been selected. SESSIONS’ Flutter/Firebase patterns may be evaluated later, not assumed.
