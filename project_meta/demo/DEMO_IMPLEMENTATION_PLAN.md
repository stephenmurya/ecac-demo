# Demo Implementation Plan

| Unit | Implementation | State | Acceptance |
|---|---|---|---|
| Shell | Basecoat components, responsive header/sidebar, view switch, navigation | Verified | Active and placeholder routes are consistent |
| State | Seed data, localStorage updates, reset | Verified | Refresh retains; reset restores |
| Overview | Metrics, attention list, schedules, project summary | Verified | Attention links navigate correctly |
| Visitors | Master/detail, timeline, four local actions | Verified | Status and dashboard counts update |
| Automations | Cards, status toggle, process explanation | Verified | Details and state change visible |
| Giving | Member fund selection and simulated checkout | Verified | Validated amount and success state |
| Projects/needs | Progress, item actions, in-kind choice | Verified | Local amounts/status/offers update |
| Need approval | Submission form and approval queue | Verified | Approved item appears publicly |
| AI follow-up | Loading, generated fields, edit/review/send gates | Verified | Send impossible before review |
| QA | Syntax, accessibility, responsive, flows, persistence | Verified | Results recorded in ledgers |

Implementation uses locally stored Basecoat UI 1.0.2 Maia CSS and JavaScript, `index.html`, `styles.css`, `data.js`, and `app.js`. No package manager or build step.
