# Permission Catalog

The initial canonical catalog is platform-owned and versioned.

| Domain | Permissions |
|---|---|
| Members | `members.view`, `members.create`, `members.edit`, `members.export` |
| Visitors | `visitors.view`, `visitors.manage`, `followups.manage` |
| Events | `events.view`, `events.create`, `events.edit`, `events.publish` |
| Attendance | `attendance.view`, `attendance.manage` |
| Communications | `communications.view`, `communications.send_push`, `communications.send_sms`, `communications.send_email`, `communications.manage_templates` |
| Groups | `groups.view`, `groups.manage`, `home_cells.manage` |
| Giving | `giving.view`, `giving.manage` |
| Finance | `finance.view_summary`, `finance.view_transactions`, `finance.view_donor_identity`, `finance.export`, `finance.create_project`, `finance.approve_need`, `finance.reconcile`, `finance.refund`, `finance.manage_payment_settings` |
| Automation | `automation.view`, `automation.manage` |
| AI | `ai.use`, `ai.manage` |
| Governance | `roles.view`, `roles.manage`, `settings.view`, `settings.manage` |

Catalog changes require migration guidance. Broad permissions must not silently acquire new sensitive powers.
