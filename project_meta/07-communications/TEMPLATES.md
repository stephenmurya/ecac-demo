# Templates

Templates contain organization-owned, channel-specific content with approved variables such as preferred name, branch, program, home-cell meeting details, and responsible contact.

## Lifecycle

`Draft → Review → Approved → Active → Retired`

Variable resolution must fail safely: missing values should not expose raw placeholders or route someone to the wrong cell. Sensitive templates, brand/legal footers, translation variants, and approval requirements are versioned. An automation references a specific active template version.
