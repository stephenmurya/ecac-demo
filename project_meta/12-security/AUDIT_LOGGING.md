# Audit Logging

Sensitive actions create append-only audit events containing tenant, actor, action, target, timestamp, source, outcome, relevant before/after summary, approval linkage, and correlation ID.

## Required coverage

Role/permission changes, owner transfers, finance visibility and exports, refunds/reconciliation/payment settings, need approval, campaign approval/sending, template/config changes, pastoral record access where appropriate, support access, and automation definition changes.

Audit logs must avoid storing secrets or unnecessary message/pastoral content. Retention, tamper evidence, export, access, and legal requirements remain open.
