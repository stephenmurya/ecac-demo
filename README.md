# Church Digital Operations Platform

This repository defines a future multi-tenant church operations and engagement platform and contains a lightweight interactive leadership demo.

## Current status

- `project_meta/` is the authoritative product, architecture, security, cost, roadmap, and demo documentation.
- `demo/` is the only implementation. It uses Basecoat UI with plain HTML and vanilla JavaScript plus browser-local state.
- No backend, authentication, database, payment gateway, messaging provider, AI service, or SESSIONS integration is included.

The demo is not production architecture and must not be used for live member, pastoral, or finance data.

## Run locally

Open `demo/index.html` directly, or serve the repository with any static file server and visit `/demo/`. Basecoat assets are stored locally, so no install, build step, or network connection is required.

## Deploy to Vercel

Create a Vercel project from this repository and set the root directory to `demo`. Use no framework preset and no build command. The output directory is the same static directory. No environment variables are required.

## Documentation map

- `project_meta/00-overview` through `project_meta/15-decisions`: full-platform definition.
- `project_meta/16-ledgers`: implementation, verification, and change records.
- `project_meta/demo`: demo scope, flows, data, plan, verification, and changelog.
- `PRODUCT.md` and `DESIGN.md`: interface strategy and visual system for design work.
