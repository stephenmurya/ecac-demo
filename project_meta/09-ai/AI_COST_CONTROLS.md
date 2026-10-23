# AI Cost Controls

Controls should include organization/month budget, per-feature limit, model routing, maximum input/output size, transcript duration limits, caching where safe, usage dashboards, approval thresholds, and graceful limit messages.

```text
Estimated cost → policy check → execute → actual usage recorded → alert/limit evaluation
```

Development inference assumptions through OpenRouter, DeepSeek, and GLM-family models do not choose the production provider. Codex/ChatGPT and Hermes relate to development workflow, not member-facing runtime architecture.
