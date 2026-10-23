# Design System

## Direction

Scene: a church operations lead reviews Sunday follow-up on a bright 24-inch office display on Monday morning, moving quickly between people, approvals, and communications. Use a light, restrained product UI with warm paper-tinted surfaces and an aubergine accent. The mood is composed and accountable.

## Color

All implementation colors use OKLCH.

| Token | Role |
|---|---|
| `--ink` | Primary text, deep warm charcoal |
| `--muted` | Secondary text |
| `--canvas` | Warm-tinted application background |
| `--surface` | Primary work surface |
| `--surface-2` | Sidebar and recessed areas |
| `--line` | Dividers and control borders |
| `--accent` | Aubergine selection and primary action |
| `--accent-soft` | Selected-row and information tint |
| `--success`, `--warning`, `--danger`, `--info` | Semantic states |

Accent is reserved for navigation state, primary actions, and focus. Semantic colors always pair with labels or icons.

## Typography

Use the native UI stack: `Inter` where available, then `Segoe UI`, system UI, and sans-serif. Product labels stay familiar and crisp. Numeric summaries use tabular numerals. Body copy is 14–15px; screen titles are 26px; section headings are 18px; compact labels are 12–13px. Long copy stays below 72ch.

## Layout

- Desktop shell: 244px sidebar, flexible main region, compact top bar.
- Main content maximum width: 1440px, with 28–36px gutters.
- Attention and workflow sections use asymmetric layouts rather than repeated identical cards.
- Tables become stacked records on narrow screens; sidebar becomes an off-canvas panel below 900px.
- Spacing rhythm: 4, 8, 12, 16, 20, 28, 36, 48px.

## Components

- Basecoat UI 1.0.x supplies the accessible component vocabulary, using its Maia style bundle vendored locally for the static demo.
- Product CSS customizes Basecoat theme tokens and layout without replacing its component behaviors.
- Buttons: one consistent 10px radius; primary, secondary, quiet, and danger variants.
- Status pills: compact, semantic, text-labeled.
- Tables: sticky headings where useful, generous row height, direct row actions.
- Panels: subtle full border and minimal shadow; no nested card stacks.
- Drawers: used for contextual records and workflows; dialog reserved for focused commitment or confirmation.
- Toasts: short-lived feedback paired with persistent state changes.
- Forms: visible labels, clear help text, inline errors, and keyboard-friendly ordering.

## Motion

State transitions use 160–220ms ease-out-quint. Loading uses restrained progress/skeleton treatments. Respect `prefers-reduced-motion`. No page-load choreography.

## Content and Demo Honesty

Use realistic Nigerian church operations data and Naira formatting. Simulated payment, message, AI, and approval outcomes are labeled as demo behavior in contextual helper text. Avoid developer jargon in presentation surfaces.
