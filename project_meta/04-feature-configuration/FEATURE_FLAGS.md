# Feature Flags

Feature availability answers: “Can this organization use this module?” Examples include community discussions, attendance, leaderboards, trivia, live audio, giving, SMS, email, AI, home cells, visitor follow-up, resources, and automations.

## Evaluation order

```text
Platform availability
→ organization entitlement
→ organization feature flag
→ organization configuration validity
→ user permission and scope
```

Flags do not grant access. `giving.enabled = true` does not reveal donor identity. Disabling a feature should preserve data by default and stop new actions predictably; retention and read-only behavior are product decisions per module.
