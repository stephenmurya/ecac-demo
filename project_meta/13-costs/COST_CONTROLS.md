# Cost Controls

| Cost | Controls |
|---|---|
| SMS | Monthly budget, unit estimator, campaign preview, approval threshold, segmenting, fallback |
| AI | Tenant/task budget, model routing, token/input limits, usage meter, caching where safe |
| Email/push | Rate limits, suppression hygiene, provider quotas |
| Storage | File limits, lifecycle policies, transcript/media retention |
| Cloud | Environment budgets, alerts, autoscaling limits, log retention |

Cost controls are visible before action, scoped per organization, auditable when overridden, and resilient to stale provider pricing. Limits should fail safely without losing drafted work.
