# Automation Engine

Automations are deterministic, versioned definitions: trigger, conditions, audience, personalization, action, timing, safeguards, and optional approval.

```text
Event/clock trigger
→ eligibility and feature checks
→ tenant and scope resolution
→ audience snapshot
→ variable resolution
→ approval gate when required
→ queued action
→ outcome and audit
```

Production requirements include idempotency, retries with backoff, duplicate prevention, scheduling/timezones, pause/resume, dry-run previews, versioned definitions, per-run logs, provider failure handling, and cost limits. AI is a possible drafting step, not the scheduler or permission engine.
