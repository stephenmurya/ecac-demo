# Finance Permissions

Finance access is independent from generic administration.

| Capability | Permission | Typical role |
|---|---|---|
| Aggregate dashboard | `finance.view_summary` | Senior leader/finance viewer |
| Transaction detail | `finance.view_transactions` | Finance officer |
| Donor name/contact | `finance.view_donor_identity` | Restricted finance role |
| Export | `finance.export` | Authorized analyst/officer |
| Create project | `finance.create_project` | Project/finance lead |
| Approve ministry need | `finance.approve_need` | Church administrator/approver |
| Reconcile | `finance.reconcile` | Finance officer |
| Refund | `finance.refund` | Restricted approver |
| Provider settings | `finance.manage_payment_settings` | Very restricted owner/delegate |

High-risk actions may require dual control or step-up authentication. Separation-of-duties rules remain an open decision.
