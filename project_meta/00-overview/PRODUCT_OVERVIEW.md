# Product Overview

The Church Digital Operations Platform is a multi-tenant operations and engagement system combining church CRM, visitor follow-up, groups and home cells, events, attendance, communications, automations, giving, ministry needs, content, AI assistance, reporting, and administration.

## Problem

Church work is often split across spreadsheets, messaging apps, paper registers, payment dashboards, and individual memory. Teams lose context between Sunday attendance, visitor care, program reminders, ministry requests, and finance reporting. The platform should make ownership, next actions, and history visible without replacing pastoral judgment.

## Surfaces

| Surface | Primary purpose |
|---|---|
| Member mobile app | Engagement, content, events, giving, groups, check-in, notifications |
| Church web admin | Primary operational workspace for staff and leaders |
| Lightweight mobile admin | Permission-scoped tasks such as attendance or announcements |
| Platform admin | Later-stage tenant, support, usage, and platform configuration |

## Delivery boundary

The initial pilot targets one church but production design must preserve organization isolation. This repository currently implements only a static web-admin/member-view demo. SESSIONS is an idea and pattern source, not an integration dependency.
