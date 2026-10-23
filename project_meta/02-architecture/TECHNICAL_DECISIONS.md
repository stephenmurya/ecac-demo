# Technical Decisions

## Decided

| Decision | Rationale |
|---|---|
| Current implementation is static HTML/CSS/JS | Leadership demo needs zero infrastructure |
| Basecoat UI 1.0.x is vendored for demo components | Requested UI layer; local assets preserve offline/static behavior |
| Browser state uses `localStorage` | Refresh persistence without a backend |
| Production architecture remains technology-neutral | Avoid turning SESSIONS history into an unreviewed commitment |
| Tenant authorization and payment confirmation must be server-side | Client state is not a trust boundary |
| Platform permissions are canonical | Stable audit and support semantics |

## Context, not production commitments

SESSIONS used Flutter and Firebase services and provides useful patterns. Paystack is the likely Nigeria-first payment provider. OpenRouter, DeepSeek/GLM, Codex, Hermes, and a dedicated VPS are development-tooling assumptions only.

## Deferred selections

Application framework, cloud, database, identity provider, queue, search, analytics, observability, payment provider contract, SMS/email vendors, mobile architecture, and AI gateway design.
