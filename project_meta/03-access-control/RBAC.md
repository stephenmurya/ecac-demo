# Role-based Access Control

Organizations create roles by composing platform-owned canonical permissions. They cannot define arbitrary permission keys. A user gains permissions through one or more scoped role assignments.

```text
Effective access = canonical permission
                 ∩ enabled feature
                 ∩ valid entitlement
                 ∩ assignment scope
                 ∩ record/context constraints
```

## Role assignment

An assignment links `person + role + scope type + scope target + validity window`. Multiple assignments combine additively; explicit deny semantics are not yet decided and should not be assumed.

## Safeguards

- Last Organization Owner protection.
- Privileged-role changes require reauthorization and audit.
- Role editors cannot grant permissions they are not allowed to delegate.
- Platform roles and organization roles are separate namespaces.
- Effective-access preview is required before assignment.
- Periodic access review should identify stale or over-broad assignments.
