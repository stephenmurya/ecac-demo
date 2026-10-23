# Security Model

## Trust boundaries

Clients, application services, data stores, background workers, payment/messaging/AI providers, platform operators, and organization users are distinct boundaries.

## Baseline controls

- Strong identity, session protection, least privilege, scoped authorization.
- Server-derived tenant context and systematic isolation tests.
- Encryption in transit and at rest; managed secret storage and rotation.
- Input validation, output encoding, rate limits, CSRF/XSS protections.
- Secure webhook verification and idempotency.
- Backups, tested recovery, monitoring, vulnerability management, and incident response.
- Audit events protected from application-user alteration.

A formal threat model and security review are required before production.
