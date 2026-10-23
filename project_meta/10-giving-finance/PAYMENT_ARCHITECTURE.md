# Payment Architecture

Paystack is the likely Nigeria-first provider but is not selected or integrated.

```text
Member app
→ server creates payment intent and provider transaction
→ provider-hosted or approved checkout
→ provider webhook reaches server
→ signature, amount, currency, reference, and status verified
→ idempotent transaction update
→ allocation, receipt, and audit event
```

Never trust the client alone. Required production work includes provider review, webhook replay handling, secret management, reconciliation, refunds, disputes, abandoned intents, duplicate references, partial failures, settlement reporting, privacy, and incident response.
