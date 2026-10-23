# Decision Log

| ID | Status | Decision | Rationale |
|---|---|---|---|
| D-001 | Decided | Document the full platform before implementation | Align product and prevent prototype choices becoming architecture |
| D-002 | Decided | Current implementation is a static leadership demo only | Validate workflows without production infrastructure |
| D-003 | Decided | Demo state is browser-local and resettable | Useful interactivity without backend |
| D-004 | Decided | Future platform is multi-tenant; first pilot is one church | Preserve growth path without overbuilding pilot |
| D-005 | Decided | Platform owns permissions; organizations compose custom roles | Stable semantics with local flexibility |
| D-006 | Decided | Permissions support organization and narrower scopes | Match church operational structure |
| D-007 | Decided | Protected Organization Owner and separate platform admin | Prevent lockout and control-plane confusion |
| D-008 | Decided | Feature availability, configuration, entitlement, and RBAC are separate | Avoid accidental access coupling |
| D-009 | Decided | Finance permissions are granular and independent | Sensitive data/actions need least privilege |
| D-010 | Decided | AI assists; deterministic systems enforce rules; sensitive outputs use human review | Safety, reliability, accountability |
| D-011 | Decided | In-kind offers are separate from financial donations | Preserve accurate monetary records |
| D-012 | Context | Paystack is likely Nigeria-first, not selected | Provider review is still required |
| D-013 | Decided | Use Basecoat UI 1.0.x, locally vendored, for demo components | User-requested accessible UI layer with offline static behavior |
| D-014 | Decided | Brand the demo as ECA Connect with a cross mark and plain-language interface copy | Keep the product familiar, readable, and appropriate for church leaders |
| D-015 | Decided | Use Basecoat selects, 16px body text, 14px menu labels, and future-only follow-up dates | Improve consistency and usability for a wide age range |
