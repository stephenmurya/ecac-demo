# Tenancy Model

The future system is true multi-tenant. An organization is the primary ownership and isolation boundary. The pilot may host one organization but must not hard-code a global church identity into domain concepts.

## Tenant-owned resources

Profiles, branches, people, ministries, groups, home cells, roles, assignments, feature configuration, communications, AI settings, funds, projects, needs, automations, reports, usage, and future billing records.

## Isolation invariants

- Tenant identity comes from authenticated server context, never a trusted client field alone.
- Queries and mutations are tenant constrained by construction.
- Cross-tenant identifiers do not authorize access.
- Storage paths, exports, background jobs, caches, logs, and search indexes preserve tenant boundaries.
- Platform support access is exceptional, time-bounded where possible, and audited.

## Open implementation decisions

Shared versus isolated data stores, tenant key strategy, encryption boundaries, regional hosting, tenant export/deletion process, and enterprise isolation tiers remain undecided.
