# Demo Verification

Verified on 2026-10-23 using static source checks and a local browser session. The browser state was reset to seed data after testing.

| Check | Expected | Result |
|---|---|---|
| Required structure/docs | All specified paths present | Pass: 76/76 required `project_meta` files |
| Load/runtime | No console-breaking errors | Pass: scripts parse; browser warning/error log empty |
| Navigation | Available screens work; unfinished items are muted | Pass: 9 available screens; unfinished items disabled |
| Members | Directory and member details work | Pass: search, selection, household, church life, and message preferences |
| Visitor flow | Four actions update local UI | Pass: contacted, scheduled, cell assigned, converted |
| Follow-ups | Assignment, date/time, reassignment, and completion work | Pass: date starts today; past times rejected; Basecoat assignee/outcome selectors |
| Automation flow | Detail and active/paused state work | Pass: four-step explanation and status toggle |
| Giving | Fund and project-specific giving work | Pass: project picker, progress, exact remaining balance, and review |
| Projects/needs | Online and offline money/item paths work | Pass: admin project creation, offline gift entry, project contribution, and owned-item offer |
| Need approval | Submission and approval publication work | Pass: new submission and Projector approval |
| AI follow-up | Create, edit, review, and send flow works | Pass: send disabled before review, enabled after; fixed-radius multiline fields |
| Persistence/reset | Refresh retains and reset restores | Pass: visitor, automation, project retained; seed restored |
| Responsive/accessibility | Desktop/tablet/narrow and keyboard basics pass | Pass: 1280, 768, 390 widths; no horizontal overflow; named controls; no duplicate IDs |
| Boundaries | No secrets or production integrations | Pass: source scan found no API/network integration code |

## Not production validation

This verification does not cover authentication, real tenant isolation, payment/webhook security, messaging delivery, AI safety evaluation, database integrity, penetration testing, or real-data privacy. Those systems do not exist in the demo.
