# Organization Model

```text
Platform
└── Organization
    ├── Branches / campuses
    ├── Ministries / departments
    ├── Groups and home cells
    ├── People and relationships
    ├── Roles, assignments, features, and settings
    └── Operational records
```

## Organization lifecycle

`Draft → Provisioning → Active → Suspended → Closing → Archived`

Suspension blocks normal access without destroying data. Archival and deletion need explicit retention rules.

## Protected ownership

Each organization has at least one protected Organization Owner. The last active owner cannot be removed, disabled, or stripped of recovery authority without a controlled transfer. Platform operators are not ordinary organization owners.

## Branch behavior

Branches provide scope, reporting, local schedules, leaders, and audiences. People may relate to multiple branches; a primary branch does not imply exclusive membership. Cross-branch operations require organization-scoped permission.
