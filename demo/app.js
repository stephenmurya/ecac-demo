(function () {
  "use strict";

  const STORAGE_KEY = "ecaConnect.v2";
  const app = document.getElementById("app");
  const dialogLayer = document.getElementById("dialog-layer");

  const NAV = [
    ["overview", "Overview", "home", true],
    ["members", "Members", "users", true],
    ["visitors", "Visitors", "user-plus", true],
    ["follow-ups", "Follow-ups", "phone", true],
    ["events", "Events", "calendar", false],
    ["home-cells", "Home Cells", "house", false],
    ["attendance", "Attendance", "check", false],
    ["communications", "Communications", "megaphone", false],
    ["giving", "Giving", "heart", true],
    ["projects", "Projects & Needs", "package", true],
    ["ministries", "Ministries", "layers", false],
    ["automations", "Automations", "workflow", true],
    ["ai", "AI Assistant", "sparkles", true],
    ["reports", "Reports", "chart", false]
  ];

  const GOVERNANCE_NAV = [
    ["roles", "Team Access", "shield", false],
    ["settings", "Settings", "settings", true]
  ];

  const PLACEHOLDERS = {
    members: ["Members", "A complete church directory for member details, families, groups, and care information.", ["Member profiles", "Branches and groups", "Message preferences", "Downloads for church records"]],
    "follow-ups": ["Follow-ups", "A shared list of people to contact, who is responsible, and what should happen next.", ["Assigned follow-ups", "Contact results", "Pastoral review", "Overdue reminders"]],
    events: ["Events", "Publish programs, target the right audience, schedule reminders, capture attendance, and coordinate follow-up.", ["One-time and recurring programs", "Audience and capacity controls", "Reminder schedules", "Post-event follow-up"]],
    "home-cells": ["Home Cells", "Coordinate leaders, membership, meeting details, reminders, attendance, and weekly reports with careful location privacy.", ["Leader and co-leader roles", "Member assignment", "Private meeting details", "Weekly reports"]],
    attendance: ["Attendance", "Record attendance, review missing entries, close each register, and create follow-up tasks when care may be needed.", ["QR, PIN, and assisted check-in", "Completed registers", "Correction history", "Pastoral follow-up"]],
    communications: ["Communications", "Plan push notifications, text messages, and emails for the right people, at the right time.", ["Choose recipients", "Saved messages", "Cost and approval review", "Delivery results"]],
    ministries: ["Ministries", "Give each ministry one place for its people, programmes, schedules, and equipment requests.", ["Ministry members", "Leaders", "Volunteer schedules", "Need requests"]],
    reports: ["Reports", "Turn operational records into clear trends without exposing restricted pastoral or donor identities.", ["Attendance trends", "Visitor connection funnel", "Communication delivery", "Giving and need progress"]],
    roles: ["Team Access", "Choose what each church leader or worker can see and do.", ["Access choices", "Church and branch access", "Custom roles", "Review access before saving"]]
  };

  const ICON_PATHS = {
    home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    "user-plus": '<path d="M15 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8" cy="7" r="4"/><path d="M19 8v6"/><path d="M22 11h-6"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    house: '<path d="M2 12 12 3l10 9"/><path d="M4 10v10h16V10"/><path d="M8 20v-6h8v6"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.3 13 21H7l-1.8-6"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"/>',
    package: '<path d="m16.5 9.4-9-5.2"/><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/>',
    layers: '<path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
    workflow: '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h4a4 4 0 0 1 4 4v5M15 18h-4a4 4 0 0 1-4-4V9"/>',
    sparkles: '<path d="m12 3-1.8 4.2L6 9l4.2 1.8L12 15l1.8-4.2L18 9l-4.2-1.8L12 3z"/><path d="m5 15-.9 2.1L2 18l2.1.9L5 21l.9-2.1L8 18l-2.1-.9L5 15z"/><path d="m19 13-.6 1.4L17 15l1.4.6L19 17l.6-1.4L21 15l-1.4-.6L19 13z"/>',
    chart: '<path d="M3 3v18h18"/><path d="m7 16 4-5 4 3 5-7"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1z"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    alert: '<path d="M10.3 2.9 1.8 17a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 2.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5M12 3v12"/>',
    rotate: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    "chevron-down": '<path d="m6 9 6 6 6-6"/>'
  };

  function icon(name, size = 18) {
    return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICON_PATHS[name] || ICON_PATHS.info}</svg>`;
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function loadState() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (stored && stored.version === window.DEMO_SEED.version) {
        if (stored.ai && stored.ai.status === "generating") stored.ai.status = "idle";
        return stored;
      }
    } catch (error) {
      console.warn("Demo state could not be restored; seed data was used.", error);
    }
    return clone(window.DEMO_SEED);
  }

  let state = loadState();

  function persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function money(value, compact = false) {
    if (compact && value >= 1000000) return `₦${(value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1)}m`;
    return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(value);
  }

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" })[char]);
  }

  function nowLabel() {
    return new Intl.DateTimeFormat("en-NG", { dateStyle: "medium", timeStyle: "short" }).format(new Date());
  }

  function localDateValue(date = new Date()) {
    const offset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - offset).toISOString().slice(0, 10);
  }

  function defaultFollowUpDateTime() {
    const date = new Date();
    date.setMinutes(date.getMinutes() + (30 - date.getMinutes() % 30 || 30), 0, 0);
    return { date: localDateValue(date), time: `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}` };
  }

  function formatDateTime(value) {
    return new Intl.DateTimeFormat("en-NG", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
  }

  function selectControl(id, options, selected = "", placeholder = "Choose an option", attributes = "") {
    const normalized = options.map((option) => typeof option === "string" ? { value: option, label: option } : option);
    const selectedOption = normalized.find((option) => String(option.value) === String(selected));
    const groups = [...new Set(normalized.map((option) => option.group).filter(Boolean))];
    const optionMarkup = (option) => `<div role="option" data-value="${escapeHTML(option.value)}" ${option.disabled ? 'aria-disabled="true"' : ""} ${String(option.value) === String(selected) ? 'aria-selected="true"' : ""}>${escapeHTML(option.label)}</div>`;
    const listMarkup = groups.length ? groups.map((group, index) => `<div role="group" aria-labelledby="${id}-group-${index}"><span role="heading" id="${id}-group-${index}">${escapeHTML(group)}</span>${normalized.filter((option) => option.group === group).map(optionMarkup).join("")}</div>`).join('<hr role="separator" />') : normalized.map(optionMarkup).join("");
    return `<div id="${id}-select" class="select full-select" data-placeholder="${escapeHTML(placeholder)}" ${attributes}><button type="button" id="${id}-trigger" aria-haspopup="listbox" aria-expanded="false" aria-controls="${id}-listbox"><span class="truncate">${escapeHTML(selectedOption?.label || placeholder)}</span>${icon("chevron-down", 16)}</button><div id="${id}-popover" data-popover aria-hidden="true"><div role="listbox" id="${id}-listbox" aria-orientation="vertical" aria-labelledby="${id}-trigger">${listMarkup}</div></div><input type="hidden" id="${id}" value="${escapeHTML(selectedOption?.value || selected)}" /></div>`;
  }

  function toast(title, description, category = "success") {
    const toaster = document.getElementById("toaster");
    if (toaster && typeof toaster.toast === "function") {
      toaster.toast({ title, description, category });
      return;
    }
    const node = document.createElement("div");
    node.className = "toast";
    node.dataset.category = category;
    node.innerHTML = `<div class="toast-content">${icon(category === "success" ? "check" : "info")}<section><h2>${escapeHTML(title)}</h2><p>${escapeHTML(description)}</p></section></div>`;
    toaster.appendChild(node);
    window.setTimeout(() => node.remove(), 3200);
  }

  function statusTone(status) {
    const value = String(status).toLowerCase();
    if (value.includes("active") || value.includes("funded") || value.includes("contacted") || value.includes("approved") || value.includes("member") || value.includes("sent") || value.includes("complete") || value.includes("received")) return "success";
    if (value.includes("await") || value.includes("pending") || value.includes("needed") || value.includes("changes") || value.includes("assignment") || value.includes("today")) return "warning";
    if (value.includes("reject") || value.includes("paused") || value.includes("overdue")) return "danger";
    return "info";
  }

  function badge(label, tone) {
    return `<span class="status-badge" data-tone="${tone || statusTone(label)}">${escapeHTML(label)}</span>`;
  }

  function navMarkup(item) {
    const [id, label, iconName, active] = item;
    return `<li><button class="nav-button" type="button" data-nav="${id}" ${state.currentScreen === id ? 'aria-current="page"' : ""} ${active ? "" : 'disabled aria-disabled="true"'}>${icon(iconName)}<span>${label}</span></button></li>`;
  }

  function renderNavigation() {
    document.getElementById("primary-nav").innerHTML = NAV.map(navMarkup).join("");
    document.getElementById("governance-nav").innerHTML = GOVERNANCE_NAV.map(navMarkup).join("");
    document.querySelectorAll("[data-view]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.view === state.viewMode)));
  }

  function heading(title, description = "", actions = "") {
    return `<header class="page-heading"><div><h1>${escapeHTML(title)}</h1>${description ? `<p>${escapeHTML(description)}</p>` : ""}</div>${actions ? `<div class="page-heading-actions">${actions}</div>` : ""}</header>`;
  }

  function renderOverview() {
    const d = state.dashboard;
    const waitingVisible = state.visitors.filter((v) => v.status === "Awaiting follow-up").length;
    const waitingAdjustment = Math.max(0, 2 - waitingVisible);
    const waiting = Math.max(0, d.awaitingFollowUp - waitingAdjustment);
    const completed = d.completedFollowUps + state.visitors.filter((v) => ["Contacted", "Member"].includes(v.status)).length - 1;
    const pending = state.pendingNeeds.filter((n) => n.status === "Pending").length;
    const project = state.projects[0];
    const projectPct = Math.min(100, Math.round((project.raised / project.goal) * 100));

    return `<div class="page">
      ${heading("Good morning, Amara")}
      <section class="summary-strip" aria-label="Key church metrics">
        <div class="summary-item"><span>Sunday attendance</span><strong>${d.sundayAttendance}</strong><small>Across 3 branches</small></div>
        <div class="summary-item"><span>First-time visitors</span><strong>${d.firstTimeVisitors}</strong><small>4 added today</small></div>
        <div class="summary-item"><span>Awaiting follow-up</span><strong>${waiting}</strong><small>${waitingVisible} shown here</small></div>
        <div class="summary-item"><span>Follow-ups completed</span><strong>${completed}</strong><small>This week</small></div>
        <div class="summary-item"><span>Upcoming programs</span><strong>${d.upcomingPrograms}</strong><small>Next 7 days</small></div>
        <div class="summary-item"><span>Giving this month</span><strong>${money(d.givingThisMonth, true)}</strong><small>Summary access only</small></div>
      </section>

      <div class="dashboard-grid">
        <div class="stack">
          <section class="section-panel">
            <header><div><h2>Needs your attention</h2><p>Work that benefits from a person today</p></div>${badge(`${waiting + pending} open`, "warning")}</header>
            <div class="attention-list">
              <button class="attention-row" type="button" data-nav="visitors"><span class="attention-icon">${icon("user-plus", 16)}</span><span class="attention-copy"><strong>${waiting} visitors need follow-up</strong><small>Two are due before 5:00 PM today</small></span>${icon("arrow")}</button>
              <button class="attention-row" type="button" data-nav="projects"><span class="attention-icon" data-tone="info">${icon("package", 16)}</span><span class="attention-copy"><strong>${pending} ministry needs await approval</strong><small>Music, Media, and Welfare requests</small></span>${icon("arrow")}</button>
              <button class="attention-row" type="button" data-nav="automations"><span class="attention-icon" data-tone="success">${icon("workflow", 16)}</span><span class="attention-copy"><strong>Bible study reminder sends tomorrow</strong><small>1,240 people · Push + SMS · estimated ${money(4960)}</small></span>${icon("arrow")}</button>
              <button class="attention-row" type="button" data-nav="ai"><span class="attention-icon" data-tone="info">${icon("sparkles", 16)}</span><span class="attention-copy"><strong>Sunday follow-up draft is ready to prepare</strong><small>The Power of Consistency · human review required</small></span>${icon("arrow")}</button>
            </div>
          </section>

          <section class="section-panel">
            <header><div><h2>Coming up</h2></div></header>
            <div class="panel-body schedule-list">
              <div class="schedule-row"><span class="date-chip">TUE<br>20</span><span><strong>Midweek Bible Study</strong><small>Abuja Central · 6:00 PM</small></span>${badge("Reminder ready", "success")}</div>
              <div class="schedule-row"><span class="date-chip">FRI<br>23</span><span><strong>Home Cell Gatherings</strong><small>22 locations · Times vary</small></span>${badge("22 groups", "info")}</div>
              <div class="schedule-row"><span class="date-chip">SUN<br>25</span><span><strong>Sunday Services</strong><small>All branches · 3 service times</small></span>${badge("Planning", "warning")}</div>
            </div>
          </section>
        </div>

        <aside class="stack">
          <section class="section-panel">
            <header><div><h2>Church Bus Project</h2></div><button class="btn" data-size="sm" data-variant="ghost" type="button" data-nav="projects">Open</button></header>
            <div class="panel-body">
              <div class="progress-copy"><strong>${money(project.raised, true)} raised</strong><small>${projectPct}% of ${money(project.goal, true)}</small></div>
              <div class="progress-track" role="progressbar" aria-label="Church Bus Project progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${projectPct}"><div class="progress-fill" style="width:${projectPct}%"></div></div>
              <p class="helper" style="margin-top:12px">${project.supporters} members have contributed so far.</p>
            </div>
          </section>

          <section class="section-panel">
            <header><div><h2>Text message budget</h2></div>${badge("On track", "success")}</header>
            <div class="panel-body">
              <div class="progress-copy"><strong>${money(d.smsRemaining)} remaining</strong><small>${money(d.smsBudget)} budget</small></div>
              <div class="progress-track" role="progressbar" aria-label="SMS budget remaining" aria-valuemin="0" aria-valuemax="80000" aria-valuenow="${d.smsRemaining}"><div class="progress-fill" style="width:${Math.round(d.smsRemaining / d.smsBudget * 100)}%"></div></div>
              <p class="helper" style="margin-top:12px">Tomorrow’s Bible study reminder is estimated at ${money(4960)} before send approval.</p>
            </div>
          </section>

          <section class="section-panel">
            <header><div><h2>Follow-up health</h2><p>This week’s visitor care</p></div></header>
            <div class="panel-body">
              <div class="progress-copy"><strong>${completed} completed</strong><small>${waiting} awaiting</small></div>
              <div class="progress-track"><div class="progress-fill" style="width:${Math.round(completed / (completed + waiting) * 100)}%"></div></div>
              <p class="helper" style="margin-top:12px">Care tasks stay human-owned. No absence message is sent automatically.</p>
            </div>
          </section>
        </aside>
      </div>
    </div>`;
  }

  function renderMembers() {
    const selected = state.members.find((member) => member.id === state.selectedMemberId) || state.members[0];
    const channels = Object.entries(selected.communications).filter(([, allowed]) => allowed).map(([channel]) => channel === "sms" ? "Text messages" : channel[0].toUpperCase() + channel.slice(1));
    return `<div class="page">
      ${heading("Members")}
      <section class="split-workspace">
        <aside class="record-list" aria-label="Member list">
          <header><input class="input" type="search" placeholder="Search members" aria-label="Search members" data-action="member-search" /></header>
          <div class="record-list-items" id="member-list">${state.members.map((member) => `<button class="record-button" type="button" data-member="${member.id}" aria-current="${member.id === selected.id}"><span class="avatar">${escapeHTML(member.initials)}</span><span class="record-copy"><span><strong>${escapeHTML(member.name)}</strong></span><small>${escapeHTML(member.branch)} · ${escapeHTML(member.homeCell)}</small><span>${badge(member.status)}</span></span></button>`).join("")}</div>
        </aside>
        <article class="record-detail">
          <header class="detail-header"><div class="person-heading"><span class="avatar">${escapeHTML(selected.initials)}</span><div><h2>${escapeHTML(selected.name)}</h2><p>${escapeHTML(selected.status)} member · ${escapeHTML(selected.branch)}</p></div></div></header>
          <div class="detail-content"><div class="detail-columns"><div>
            <h3 class="section-title">Contact and membership</h3>
            <div class="info-grid"><div class="info-item"><small>Preferred name</small><span>${escapeHTML(selected.preferredName)}</span></div><div class="info-item"><small>Phone</small><span>${escapeHTML(selected.phone)}</span></div><div class="info-item"><small>Email</small><span>${escapeHTML(selected.email)}</span></div><div class="info-item"><small>Primary branch</small><span>${escapeHTML(selected.branch)}</span></div><div class="info-item"><small>Other branch</small><span>${escapeHTML(selected.secondaryBranch || "None")}</span></div><div class="info-item"><small>Member since</small><span>${escapeHTML(selected.joined)}</span></div><div class="info-item"><small>Joined through</small><span>${escapeHTML(selected.source)}</span></div><div class="info-item"><small>Membership stage</small>${badge(selected.status)}</div></div>
            <h3 class="section-title">Church life</h3>
            <div class="info-grid"><div class="info-item"><small>Ministries</small><span class="tag-list">${selected.ministries.map((item) => `<span class="tag">${escapeHTML(item)}</span>`).join("")}</span></div><div class="info-item"><small>Groups</small><span>${escapeHTML(selected.groups.join(", ") || "None")}</span></div><div class="info-item"><small>Home cell</small><span>${escapeHTML(selected.homeCell)}</span></div><div class="info-item"><small>Service</small><span>${escapeHTML(selected.service)}</span></div><div class="info-item"><small>Interests</small><span class="tag-list">${selected.interests.map((item) => `<span class="tag">${escapeHTML(item)}</span>`).join("")}</span></div><div class="info-item"><small>Tags</small><span class="tag-list">${selected.tags.map((item) => `<span class="tag">${escapeHTML(item)}</span>`).join("")}</span></div></div>
          </div><aside><h3 class="section-title">Household</h3><div class="owner-panel"><div class="owner-row"><span class="avatar">${escapeHTML(selected.initials)}</span><span><strong>${escapeHTML(selected.household)}</strong><small>${selected.householdMembers.length ? escapeHTML(selected.householdMembers.join(", ")) : "No linked household members"}</small></span></div></div><h3 class="section-title member-side-heading">Messages</h3><div class="owner-panel"><strong>${channels.length ? channels.map(escapeHTML).join(", ") : "No messages"}</strong><p class="helper" style="margin-top:6px">Only the message types this member has agreed to receive.</p></div><div class="demo-notice member-care-note">Pastoral care details are kept private and are not shown on this general member profile.</div></aside></div></div>
        </article>
      </section>
    </div>`;
  }

  function followUpStatus(task) {
    if (task.status === "Completed") return "Completed";
    if (task.assignee === "Unassigned") return "Needs assignment";
    const dueDate = new Date(task.due);
    const today = localDateValue();
    const dueDay = localDateValue(dueDate);
    if (dueDay < today) return "Overdue";
    if (dueDay === today) return "Due today";
    return "Upcoming";
  }

  function renderFollowUps() {
    const selected = state.followUps.find((task) => task.id === state.selectedFollowUpId) || state.followUps[0];
    const openTasks = state.followUps.filter((task) => followUpStatus(task) !== "Completed");
    const dueToday = openTasks.filter((task) => followUpStatus(task) === "Due today").length;
    const unassigned = openTasks.filter((task) => task.assignee === "Unassigned").length;
    return `<div class="page">
      ${heading("Follow-ups", "", `<button class="btn" type="button" data-action="new-followup">Schedule follow-up</button>`)}
      <section class="followup-summary" aria-label="Follow-up summary"><div><span>Open</span><strong>${openTasks.length}</strong></div><div><span>Due today</span><strong>${dueToday}</strong></div><div><span>Needs assignment</span><strong>${unassigned}</strong></div></section>
      <section class="split-workspace followup-workspace">
        <aside class="record-list" aria-label="Follow-up list"><header><input class="input" type="search" placeholder="Search follow-ups" aria-label="Search follow-ups" data-action="followup-search" /></header><div class="record-list-items">${state.followUps.map((task) => `<button class="record-button" type="button" data-followup="${task.id}" aria-current="${task.id === selected.id}"><span class="attention-icon">${icon("phone", 16)}</span><span class="record-copy"><span><strong>${escapeHTML(task.person)}</strong></span><small>${escapeHTML(formatDateTime(task.due))}</small><span>${badge(followUpStatus(task))}</span></span></button>`).join("")}</div></aside>
        <article class="record-detail"><header class="detail-header"><div class="person-heading"><span class="avatar">${escapeHTML(selected.person.split(" ").map((part) => part[0]).join("").slice(0, 2))}</span><div><h2>${escapeHTML(selected.person)}</h2><p>${escapeHTML(selected.phone)}</p></div></div><div class="detail-actions">${followUpStatus(selected) !== "Completed" ? `<button class="btn" data-size="sm" data-variant="outline" type="button" data-action="reassign-followup">Reassign</button><button class="btn" data-size="sm" type="button" data-action="complete-followup">Mark complete</button>` : ""}</div></header><div class="detail-content"><div class="info-grid"><div class="info-item"><small>When</small><span>${escapeHTML(formatDateTime(selected.due))}</span></div><div class="info-item"><small>Assigned to</small><span>${escapeHTML(selected.assignee)}</span></div><div class="info-item"><small>Purpose</small><span>${escapeHTML(selected.purpose)}</span></div><div class="info-item"><small>Status</small>${badge(followUpStatus(selected))}</div><div class="info-item"><small>Outcome</small><span>${escapeHTML(selected.outcome || "Not completed yet")}</span></div><div class="info-item"><small>Person type</small><span>${selected.personType === "member" ? "Member" : "Visitor"}</span></div></div><div class="demo-notice followup-note">The assigned person is responsible for this follow-up.</div></div></article>
      </section>
    </div>`;
  }

  function renderVisitors() {
    const selected = state.visitors.find((v) => v.id === state.selectedVisitorId) || state.visitors[0];
    return `<div class="page">
      ${heading("Visitors", "", `<button class="btn" type="button" data-action="add-visitor">Add visitor</button>`)}
      <section class="split-workspace">
        <aside class="record-list" aria-label="Visitor list">
          <header><input class="input" type="search" placeholder="Search visitors" aria-label="Search visitors" data-action="visitor-search" /></header>
          <div class="record-list-items" id="visitor-list">
            ${state.visitors.map((visitor) => `<button class="record-button" type="button" data-visitor="${visitor.id}" aria-current="${visitor.id === selected.id}"><span class="avatar">${escapeHTML(visitor.initials)}</span><span class="record-copy"><span><strong>${escapeHTML(visitor.name)}</strong></span><small>${escapeHTML(visitor.location)} · ${escapeHTML(visitor.firstVisit)}</small><span>${badge(visitor.status)}</span></span></button>`).join("")}
          </div>
        </aside>
        <article class="record-detail">
          <header class="detail-header">
            <div class="person-heading"><span class="avatar">${escapeHTML(selected.initials)}</span><div><h2>${escapeHTML(selected.name)}</h2><p>${escapeHTML(selected.location)} · First visit ${escapeHTML(selected.firstVisit)}</p></div></div>
            <div class="detail-actions">
              <button class="btn" data-size="sm" data-variant="outline" type="button" data-action="schedule-followup">Schedule</button>
              <button class="btn" data-size="sm" data-variant="outline" type="button" data-action="assign-cell">Assign cell</button>
              <button class="btn" data-size="sm" type="button" data-action="mark-contacted">Mark contacted</button>
            </div>
          </header>
          <div class="detail-content">
            <div class="detail-columns">
              <div>
                <h3 class="section-title">Visitor details</h3>
                <div class="info-grid">
                  <div class="info-item"><small>Phone</small><span>${escapeHTML(selected.phone)}</span></div>
                  <div class="info-item"><small>Email</small><span>${escapeHTML(selected.email)}</span></div>
                  <div class="info-item"><small>Branch</small><span>${escapeHTML(selected.branch)}</span></div>
                  <div class="info-item"><small>Home cell</small><span>${escapeHTML(selected.homeCell || "Not assigned")}</span></div>
                  <div class="info-item"><small>Follow-up stage</small>${badge(selected.status)}</div>
                  <div class="info-item"><small>Interests</small><span class="tag-list">${selected.interests.map((interest) => `<span class="tag">${escapeHTML(interest)}</span>`).join("")}</span></div>
                </div>
                <h3 class="section-title">Activity timeline</h3>
                <div class="timeline">
                  ${selected.timeline.map((item) => `<div class="timeline-item" data-tone="${item.tone}"><span class="timeline-marker"></span><span class="timeline-copy"><strong>${escapeHTML(item.label)}</strong><span>${escapeHTML(item.detail)}</span><small>${escapeHTML(item.time)}</small></span></div>`).join("")}
                </div>
              </div>
              <aside>
                <h3 class="section-title">Follow-up owner</h3>
                <div class="owner-panel">
                  <div class="owner-row"><span class="avatar">${selected.owner === "Unassigned" ? "?" : selected.owner.split(" ").map((p) => p[0]).join("")}</span><span><strong>${escapeHTML(selected.owner)}</strong><small>Visitor Care Team</small></span></div>
                  <div class="due-row"><span>Next follow-up</span><strong>${escapeHTML(selected.nextFollowUp)}</strong></div>
                </div>
                <div style="margin-top:18px"><button class="btn full-width" data-variant="outline" type="button" data-action="convert-member" ${selected.status === "Member" ? "disabled" : ""}>${selected.status === "Member" ? "Converted to member" : "Convert to member"}</button></div>
                <p class="helper" style="margin-top:10px">Move this person into the member welcome journey when they are ready.</p>
              </aside>
            </div>
          </div>
        </article>
      </section>
    </div>`;
  }

  function renderAutomations() {
    const selected = state.automations.find((a) => a.id === state.selectedAutomationId) || state.automations[0];
    return `<div class="page">
      ${heading("Automations", "", `<button class="btn" data-variant="outline" type="button" data-action="automation-info">How checks work</button><button class="btn" type="button" disabled>New automation</button>`)}
      <div class="automation-layout">
        <div class="automation-list">
          ${state.automations.map((automation) => `<button class="automation-card" type="button" data-automation="${automation.id}" aria-current="${automation.id === selected.id}"><header><h3>${escapeHTML(automation.name)}</h3>${badge(automation.status)}</header><p>${escapeHTML(automation.schedule)}</p><div class="channel-row">${automation.channels.map((channel) => `<span class="channel-chip">${escapeHTML(channel)}</span>`).join("")}</div></button>`).join("")}
        </div>
        <section class="section-panel automation-detail">
          <header><div><h2>${escapeHTML(selected.name)}</h2><p>${escapeHTML(selected.nextRun)}</p></div><button class="btn" data-size="sm" data-variant="${selected.status === "Active" ? "outline" : "default"}" type="button" data-action="toggle-automation">${selected.status === "Active" ? "Pause" : "Activate"}</button></header>
          <div class="panel-body">
            <div class="automation-meta">
              <div><small>Status</small><strong>${selected.status}</strong></div>
              <div><small>Last run</small><strong>${escapeHTML(selected.lastRun)}</strong></div>
              <div><small>Next message cost</small><strong>${selected.estimatedCost ? money(selected.estimatedCost) : "No extra cost"}</strong></div>
            </div>
            <h3 class="section-title">How this automation works</h3>
            <div class="flow-diagram" aria-label="Automation process">
              <div class="flow-step"><span>1</span><div><strong>When</strong><small>${escapeHTML(selected.schedule)}</small></div></div><span class="flow-arrow" aria-hidden="true">→</span>
              <div class="flow-step"><span>2</span><div><strong>Who receives it</strong><small>${escapeHTML(selected.audience)}</small></div></div><span class="flow-arrow" aria-hidden="true">→</span>
              <div class="flow-step"><span>3</span><div><strong>Personal message</strong><small>${escapeHTML(selected.personalization)}</small></div></div><span class="flow-arrow" aria-hidden="true">→</span>
              <div class="flow-step"><span>4</span><div><strong>Delivery</strong><small>${selected.channels.map(escapeHTML).join(" + ")} after a final check</small></div></div>
            </div>
            <div class="automation-note"><strong>People remain in control.</strong> Before anything goes out, ECA Connect checks who should receive it, their message choices, quiet hours, and the available budget. Pastoral messages and AI-written church-wide messages must be reviewed by a person.</div>
          </div>
        </section>
      </div>
    </div>`;
  }

  function renderGiving() {
    if (state.viewMode === "admin") {
      return `<div class="page">
        ${heading("Giving", "", `<button class="btn" type="button" data-action="open-member-giving">Open member view</button>`)}
        <section class="summary-strip" aria-label="Giving summary"><div class="summary-item"><span>This month</span><strong>${money(state.dashboard.givingThisMonth, true)}</strong><small>Total received</small></div><div class="summary-item"><span>General offering</span><strong>₦3.1m</strong><small>37% of monthly giving</small></div><div class="summary-item"><span>Tithes</span><strong>₦4.2m</strong><small>50% of monthly giving</small></div><div class="summary-item"><span>Projects</span><strong>₦920k</strong><small>${state.projects.length} active projects</small></div><div class="summary-item"><span>Other funds</span><strong>₦180k</strong><small>Missions and welfare</small></div><div class="summary-item"><span>Gifts added today</span><strong>${state.givingHistory.length}</strong><small>Current session</small></div></section>
        <div class="dashboard-grid"><section class="section-panel"><header><div><h2>Funds this month</h2></div>${badge("Totals only", "info")}</header><div class="panel-body schedule-list"><div class="schedule-row"><span class="date-chip">50%</span><span><strong>Tithes</strong><small>Regular stewardship giving</small></span><strong class="money">₦4,200,000</strong></div><div class="schedule-row"><span class="date-chip">37%</span><span><strong>General Offering</strong><small>Church work and ministry</small></span><strong class="money">₦3,100,000</strong></div><div class="schedule-row"><span class="date-chip">11%</span><span><strong>Projects</strong><small>Church projects</small></span><strong class="money">₦920,000</strong></div></div></section><aside class="section-panel"><header><div><h2>Private giving details</h2></div></header><div class="panel-body"><p class="helper">This page shows totals. Only the finance team can view individual gifts, download records, issue refunds, or change payment settings.</p></div></aside></div>
      </div>`;
    }

    const targets = givingTargets();
    const target = selectedGivingTarget();
    const projectGiving = state.selectedFund === "projects";
    const remaining = target ? Math.max(0, target.total - target.raised) : 0;
    const progress = target?.total ? Math.min(100, Math.round(target.raised / target.total * 100)) : 0;
    return `<div class="page member-shell">
      <section class="member-welcome"><h1>Give with purpose</h1><p>Choose where you would like your gift to support the work of ECA Connect.</p></section>
      <div class="giving-layout">
        <section><div class="section-heading"><div><h2>Select a fund</h2></div></div><div class="fund-list">${state.funds.map((fund) => `<button class="fund-option" type="button" data-fund="${fund.id}" aria-pressed="${fund.id === state.selectedFund}"><span class="fund-radio"></span><span><strong>${escapeHTML(fund.name)}</strong><small>${escapeHTML(fund.description)}</small></span>${icon("arrow", 16)}</button>`).join("")}</div></section>
        <aside class="section-panel amount-card"><header><div><h2>Your gift</h2><p>${escapeHTML(projectGiving && target ? target.name : state.funds.find((f) => f.id === state.selectedFund)?.name || "Giving")}</p></div></header><div class="panel-body">${projectGiving ? `<div class="field"><label for="giving-project-trigger">Choose a project or need</label>${selectControl("giving-project", targets.map((item) => ({ value: item.key, label: item.raised >= item.total ? `${item.name} — Funded` : item.name, group: item.kind === "project" ? "Church projects" : "Approved ministry needs", disabled: item.raised >= item.total })), target?.key, "Choose a project or need", "data-giving-target")}</div>${target ? `<div class="giving-target-progress"><div><strong>${money(target.raised, true)} raised</strong><span>${progress}% of ${money(target.total, true)}</span></div><div class="progress-track" role="progressbar" aria-label="${escapeHTML(target.name)} progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}"><div class="progress-fill" style="width:${progress}%"></div></div><p>${escapeHTML(target.detail)} · ${money(remaining, true)} remaining</p></div>` : ""}` : ""}<label for="giving-amount" class="helper">Amount</label><div class="currency-input"><span>₦</span><input id="giving-amount" inputmode="numeric" type="number" min="100" ${projectGiving && remaining ? `max="${remaining}"` : ""} step="100" placeholder="0" /></div>${projectGiving && remaining ? `<button class="btn full-width clear-project" data-variant="outline" type="button" data-action="give-remaining" data-remaining="${remaining}">Give the remaining ${money(remaining, true)}</button>` : ""}<button class="btn full-width" type="button" data-action="give-now">Give now</button></div></aside>
      </div>
    </div>`;
  }

  function givingTargets() {
    return [
      ...state.projects.map((project) => ({ key: `project:${project.id}`, kind: "project", id: project.id, name: project.name, detail: "Church project", total: project.goal, raised: project.raised })),
      ...state.publicNeeds.map((need) => ({ key: `need:${need.id}`, kind: "need", id: need.id, name: need.item, detail: `${need.ministry} · ${need.quantity > 1 ? `${need.quantity} items` : "1 item"}`, total: need.cost, raised: need.raised || 0 }))
    ];
  }

  function selectedGivingTarget() {
    const targets = givingTargets();
    let target = targets.find((item) => item.key === state.selectedGivingTarget && item.raised < item.total);
    if (!target) target = targets.find((item) => item.raised < item.total) || targets[0];
    if (target) state.selectedGivingTarget = target.key;
    return target;
  }

  function renderNeedsTable(needs, admin = false) {
    if (!needs.length) return `<div class="empty-state"><span class="empty-icon">${icon("check")}</span><h3>Nothing waiting here</h3><p>New requests will appear when a ministry submits a need.</p></div>`;
    return `<div class="table-wrap"><table class="data-table"><thead><tr><th>Need</th><th>Cost</th><th>Progress</th><th>Status</th><th><span class="sr-only">Actions</span></th></tr></thead><tbody>${needs.map((need) => {
      const pct = need.cost ? Math.min(100, Math.round((need.raised || 0) / need.cost * 100)) : 0;
      const finished = ["Funded", "Item received"].includes(need.status);
      return `<tr><td data-label="Need"><strong>${escapeHTML(need.item)}</strong><small>${escapeHTML(need.ministry)} · Qty ${need.quantity}</small></td><td data-label="Cost"><span class="money">${money(need.cost)}</span></td><td data-label="Progress">${admin ? `<small>${escapeHTML(need.priority)} priority</small>` : `<div class="mini-progress"><small>${need.raised ? `${money(need.raised, true)} raised` : "Not yet funded"}</small><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div></div>`}</td><td data-label="Status">${badge(need.status)}</td><td data-label="Actions"><div class="table-actions">${admin ? `<button class="btn" data-size="sm" data-variant="ghost" type="button" data-need-action="changes" data-need-id="${need.id}">Changes</button><button class="btn" data-size="sm" data-variant="ghost" type="button" data-need-action="reject" data-need-id="${need.id}">Reject</button><button class="btn" data-size="sm" type="button" data-need-action="approve" data-need-id="${need.id}">Approve</button>` : `<button class="btn" data-size="sm" data-variant="outline" type="button" data-contribute-need="${need.id}" ${finished ? "disabled" : ""}>${finished ? "Received" : "Support"}</button>`}</div></td></tr>`;
    }).join("")}</tbody></table></div>`;
  }

  function renderProjects() {
    const pending = state.pendingNeeds.filter((n) => ["Pending", "Changes requested"].includes(n.status));
    return `<div class="page">
      ${heading("Projects & Needs", "", state.viewMode === "admin" ? `<button class="btn" data-variant="outline" type="button" data-action="record-offline-contribution">Record offline gift</button><button class="btn" data-variant="outline" type="button" data-action="create-project">Create project</button><button class="btn" type="button" data-action="submit-need">Submit ministry need</button>` : "")}
      <section><div class="section-heading"><div><h2>Active church projects</h2><p>Members can choose exactly which project to support.</p></div>${state.viewMode === "admin" ? `<button class="btn" data-variant="outline" type="button" data-action="open-member-projects">Open member view</button>` : badge(`${state.projects.length} projects`, "info")}</div><div class="project-grid">${state.projects.map((project) => { const pct = Math.min(100, Math.round(project.raised / project.goal * 100)); const remaining = Math.max(0, project.goal - project.raised); return `<article class="project-card"><div><h3>${escapeHTML(project.name)}</h3><p>${escapeHTML(project.description)}</p></div><div class="project-card-progress"><div><strong>${money(project.raised, true)} raised</strong><span>${pct}%</span></div><div class="progress-track" role="progressbar" aria-label="${escapeHTML(project.name)} progress" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><div class="progress-fill" style="width:${pct}%"></div></div><small>${remaining ? `${money(remaining, true)} remaining` : "Fully funded"}</small></div>${state.viewMode === "member" && remaining ? `<button class="btn" data-variant="outline" type="button" data-project-contribute="${project.id}">Support this project</button>` : ""}</article>`; }).join("")}</div></section>
      <section class="needs-section"><div class="section-heading"><div><h2>Approved ministry needs</h2><p>These requests also appear under Projects when a member gives.</p></div>${badge(`${state.publicNeeds.length} items`, "info")}</div>${renderNeedsTable(state.publicNeeds, false)}</section>
      ${state.viewMode === "admin" ? `<section class="approval-queue"><div class="section-heading"><div><h2>Needs awaiting approval</h2><p>Approve each request before it appears to members.</p></div>${badge(`${pending.length} waiting`, pending.length ? "warning" : "success")}</div>${renderNeedsTable(pending, true)}</section>` : state.inKindOffers.length ? `<section class="approval-queue"><div class="section-heading"><div><h2>Your item offers</h2><p>The church team will confirm the item and arrange delivery.</p></div></div><div class="table-wrap"><table class="data-table"><tbody>${state.inKindOffers.map((offer) => `<tr><td data-label="Item"><strong>${escapeHTML(offer.item)}</strong><small>${escapeHTML(offer.type)}</small></td><td data-label="Condition">${escapeHTML(offer.condition)}</td><td data-label="Status">${badge(offer.status, "warning")}</td></tr>`).join("")}</tbody></table></div></section>` : ""}
      ${state.viewMode === "admin" ? `<section class="needs-section"><div class="section-heading"><div><h2>Offline contributions</h2><p>Money and items received outside the giving page.</p></div></div>${state.offlineContributions.length ? `<div class="table-wrap"><table class="data-table"><thead><tr><th>Contributor</th><th>Project or need</th><th>Contribution</th><th>Date</th></tr></thead><tbody>${state.offlineContributions.map((record) => `<tr><td data-label="Contributor"><strong>${escapeHTML(record.contributor)}</strong></td><td data-label="Project or need">${escapeHTML(record.target)}</td><td data-label="Contribution">${record.type === "money" ? money(record.amount) : escapeHTML(record.item)}</td><td data-label="Date">${escapeHTML(record.date)}</td></tr>`).join("")}</tbody></table></div>` : `<div class="empty-state compact-empty"><span class="empty-icon">${icon("heart")}</span><h3>No offline contributions yet</h3><p>Use “Record offline gift” when money or an item is received directly.</p></div>`}</section>` : ""}
    </div>`;
  }

  function renderAI() {
    const ai = state.ai;
    const statusCopy = ai.status === "sent" ? `Sent ${ai.sentAt}` : ai.status === "reviewed" ? `Reviewed by Amara Okafor ${ai.reviewedAt}` : "A person must review this before it can be sent";
    let editor;
    if (ai.status === "idle") {
      editor = `<div class="empty-state" style="min-height:500px"><span class="empty-icon">${icon("sparkles", 22)}</span><h3>Prepare the Sunday follow-up</h3><p>Create an editable draft from the sermon transcript. It must be reviewed before it can be sent.</p><button class="btn" type="button" data-action="generate-ai">Create draft</button></div>`;
    } else if (ai.status === "generating") {
      editor = `<div class="loading-state"><div><span class="empty-icon" style="margin:auto">${icon("sparkles", 22)}</span><h3 style="margin-top:14px;font-size:1rem;font-weight:700">Preparing your draft</h3><p class="helper" style="margin-top:7px">Gathering the sermon summary, scriptures, reflection, and prayer points.</p><div class="loading-bars" aria-label="Creating draft"><span></span><span></span><span></span></div></div></div>`;
    } else {
      editor = `<div class="ai-gate" data-state="${ai.status}">${icon(ai.status === "draft" ? "alert" : "check", 16)}<strong>${escapeHTML(statusCopy)}</strong></div>
        <form class="editor-form" id="ai-form">
          <div class="field"><label for="ai-subject">Email subject</label><input class="input" id="ai-subject" name="subject" value="${escapeHTML(ai.subject)}" /></div>
          <div class="field"><label for="ai-greeting">Greeting</label><input class="input" id="ai-greeting" name="greeting" value="${escapeHTML(ai.greeting)}" /></div>
          <div class="field"><label for="ai-summary">Sermon summary</label><textarea class="input" id="ai-summary" name="summary">${escapeHTML(ai.summary)}</textarea></div>
          <div class="editor-grid"><div class="field"><label for="ai-scriptures">Key scriptures</label><textarea class="input" id="ai-scriptures" name="scriptures">${escapeHTML(ai.scriptures)}</textarea></div><div class="field"><label for="ai-reflection">Reflection</label><textarea class="input" id="ai-reflection" name="reflection">${escapeHTML(ai.reflection)}</textarea></div></div>
          <div class="editor-grid"><div class="field"><label for="ai-prayer">Prayer points</label><textarea class="input" id="ai-prayer" name="prayer">${escapeHTML(ai.prayer)}</textarea></div><div class="field"><label for="ai-action">Action for the week</label><textarea class="input" id="ai-action" name="action">${escapeHTML(ai.action)}</textarea></div></div>
          <div class="editor-grid"><div class="field"><label for="ai-programs">Upcoming programs</label><textarea class="input" id="ai-programs" name="programs">${escapeHTML(ai.programs)}</textarea></div><div class="field"><label for="ai-links">Sermon and social links</label><textarea class="input" id="ai-links" name="links">${escapeHTML(ai.links)}</textarea></div></div>
        </form>`;
    }

    return `<div class="page">
      ${heading("Sunday follow-up", "", ai.status !== "idle" && ai.status !== "generating" ? `<button class="btn" data-variant="outline" type="button" data-action="save-ai">Save changes</button><button class="btn" data-variant="outline" type="button" data-action="review-ai" ${ai.status === "sent" ? "disabled" : ""}>${ai.status === "reviewed" ? "Reviewed" : "Mark reviewed"}</button><button class="btn" type="button" data-action="send-ai" ${ai.status !== "reviewed" ? "disabled" : ""}>Send follow-up</button>` : "")}
      <div class="ai-layout">
        <aside class="section-panel source-panel"><div class="panel-body" style="padding-top:20px"><div class="source-art">${icon("upload", 42)}</div><h2>${escapeHTML(ai.service)}</h2><p>${escapeHTML(ai.serviceDate)}</p><div class="source-meta"><div><span>Sermon</span><strong>${escapeHTML(ai.transcriptStatus)}</strong></div><div><span>Recipients</span><strong>Sunday service attendees</strong></div><div><span>Review</span><strong>Required before sending</strong></div></div></div></aside>
        <section class="section-panel ai-editor"><header><div><h2>Follow-up email</h2></div>${badge(ai.status === "idle" ? "Not started" : ai.status === "draft" ? "Needs review" : ai.status === "reviewed" ? "Reviewed" : ai.status === "sent" ? "Sent" : "Preparing", ai.status === "draft" ? "warning" : ai.status === "reviewed" || ai.status === "sent" ? "success" : "info")}</header><div class="panel-body">${editor}</div></section>
      </div>
    </div>`;
  }

  function renderSettings() {
    return `<div class="page">
      ${heading("Settings")}
      <div class="settings-list">
        <section class="setting-row"><div><strong>Choose your view</strong><p>Move between the church administration view and the member giving view.</p></div><div class="view-switch" role="group" aria-label="Choose view"><button type="button" data-view="admin" aria-pressed="${state.viewMode === "admin"}">Admin view</button><button type="button" data-view="member" aria-pressed="${state.viewMode === "member"}">Member view</button></div></section>
        <section class="setting-row"><div><strong>Start again</strong><p>Restore the original visitors, gifts, projects, ministry needs, reminders, and Sunday follow-up.</p></div><button class="btn" data-variant="destructive" type="button" data-action="reset-demo">Reset sample data</button></section>
      </div>
    </div>`;
  }

  function renderPlaceholder(screen) {
    const [title, description, bullets] = PLACEHOLDERS[screen] || ["Coming later", "This area is not available yet.", ["Planned for a later release"]];
    const item = [...NAV, ...GOVERNANCE_NAV].find((entry) => entry[0] === screen);
    return `<div class="page"><section class="placeholder"><div class="placeholder-visual"><span class="placeholder-icon">${icon(item ? item[2] : "layers", 32)}</span></div><h1>${escapeHTML(title)}</h1><p>${escapeHTML(description)}</p><ul>${bullets.map((bullet) => `<li>${icon("check", 14)} <span>${escapeHTML(bullet)}</span></li>`).join("")}</ul><button class="btn" style="margin-top:24px" type="button" data-nav="overview">Return to overview</button></section></div>`;
  }

  function render() {
    renderNavigation();
    const renderers = { overview: renderOverview, members: renderMembers, visitors: renderVisitors, "follow-ups": renderFollowUps, automations: renderAutomations, giving: renderGiving, projects: renderProjects, ai: renderAI, settings: renderSettings };
    app.innerHTML = renderers[state.currentScreen] ? renderers[state.currentScreen]() : renderPlaceholder(state.currentScreen);
    app.querySelector("h1")?.setAttribute("tabindex", "-1");
    if (window.basecoat?.initAll) window.basecoat.initAll();
  }

  function navigate(screen) {
    state.currentScreen = screen;
    persist();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    app.querySelector("h1")?.focus({ preventScroll: true });
    const sidebar = document.getElementById("sidebar");
    if (window.innerWidth < 900) {
      sidebar.classList.remove("is-open");
      sidebar.setAttribute("aria-hidden", "true");
      sidebar.setAttribute("inert", "");
    }
  }

  function selectedVisitor() {
    return state.visitors.find((visitor) => visitor.id === state.selectedVisitorId);
  }

  function openDialog({ title, description = "", body, confirmLabel = "Confirm", confirmVariant = "default", onConfirm, hideConfirm = false }) {
    dialogLayer.innerHTML = `<dialog class="demo-dialog"><form method="dialog" class="dialog-card"><header><div><h2>${escapeHTML(title)}</h2>${description ? `<p>${escapeHTML(description)}</p>` : ""}</div><button class="btn icon-button" data-size="sm" data-variant="ghost" value="cancel" aria-label="Close dialog">×</button></header><div class="dialog-body">${body}</div><footer><button class="btn" data-variant="outline" value="cancel">Cancel</button>${hideConfirm ? "" : `<button class="btn" data-variant="${confirmVariant}" value="confirm">${escapeHTML(confirmLabel)}</button>`}</footer></form></dialog>`;
    const dialog = dialogLayer.querySelector("dialog");
    if (window.basecoat?.initAll) window.basecoat.initAll({ force: true });
    dialog.showModal();
    dialog.addEventListener("close", () => {
      if (dialog.returnValue === "confirm" && onConfirm) onConfirm(dialog);
      dialogLayer.innerHTML = "";
    }, { once: true });
    return dialog;
  }

  function updateVisitor(action) {
    const visitor = selectedVisitor();
    if (!visitor) return;
    action(visitor);
    persist();
    render();
  }

  function saveAIForm() {
    const form = document.getElementById("ai-form");
    if (!form) return false;
    const data = new FormData(form);
    ["subject", "greeting", "summary", "scriptures", "reflection", "prayer", "action", "programs", "links"].forEach((key) => { state.ai[key] = data.get(key) || ""; });
    persist();
    return true;
  }

  function openCheckout() {
    const amountInput = document.getElementById("giving-amount");
    const amount = Number(amountInput?.value || 0);
    const fund = state.funds.find((item) => item.id === state.selectedFund);
    const target = state.selectedFund === "projects" ? selectedGivingTarget() : null;
    const remaining = target ? Math.max(0, target.total - target.raised) : 0;
    if (!amount || amount < 100) {
      toast("Enter a valid amount", "The minimum gift is ₦100.", "error");
      amountInput?.focus();
      return;
    }
    if (target && amount > remaining) {
      toast("Amount is too high", `Only ${money(remaining)} remains for ${target.name}.`, "error");
      amountInput?.focus();
      return;
    }
    openDialog({
      title: "Review your gift",
      description: "Check the details below before continuing.",
      body: `<div class="info-grid" style="margin:0"><div class="info-item"><small>${target ? "Project or need" : "Fund"}</small><span>${escapeHTML(target?.name || fund.name)}</span></div><div class="info-item"><small>Amount</small><span class="money">${money(amount)}</span></div><div class="info-item"><small>Member</small><span>Amara Okafor</span></div></div>`,
      confirmLabel: `Confirm ${money(amount)}`,
      onConfirm: () => {
        const reference = `ECA-${String(Date.now()).slice(-6)}`;
        if (target?.kind === "project") {
          const project = state.projects.find((item) => item.id === target.id);
          if (project) { project.raised = Math.min(project.goal, project.raised + amount); project.supporters += 1; }
        } else if (target?.kind === "need") {
          const need = state.publicNeeds.find((item) => item.id === target.id);
          if (need) { need.raised = Math.min(need.cost, (need.raised || 0) + amount); need.status = need.raised >= need.cost ? "Funded" : "Part funded"; need.contributionType = "Money"; }
        }
        state.givingHistory.unshift({ fund: target?.name || fund.name, amount, reference, date: nowLabel() });
        persist();
        toast("Gift recorded", `${money(amount)} to ${target?.name || fund.name}. Reference ${reference}.`);
        render();
      }
    });
  }

  function openNeedContribution(needId) {
    const need = state.publicNeeds.find((item) => item.id === needId);
    if (!need) return;
    let chosen = "money";
    const remaining = Math.max(0, need.cost - need.raised);
    const dialog = openDialog({
      title: `Support ${need.item}`,
      description: `${need.ministry} · ${money(remaining)} remaining`,
      body: `<div class="choice-grid">
        <button class="choice-button" type="button" data-choice="full" aria-pressed="false"><span class="choice-icon">${icon("heart", 16)}</span><span><strong>Fund entirely</strong><small>Cover the remaining ${money(remaining)}</small></span></button>
        <button class="choice-button" type="button" data-choice="money" aria-pressed="true"><span class="choice-icon">₦</span><span><strong>Contribute money</strong><small>Choose a smaller amount</small></span></button>
        <button class="choice-button" type="button" data-choice="supply" aria-pressed="false"><span class="choice-icon">${icon("package", 16)}</span><span><strong>Supply this item</strong><small>Offer to purchase and deliver a new item</small></span></button>
        <button class="choice-button" type="button" data-choice="owned" aria-pressed="false"><span class="choice-icon">${icon("house", 16)}</span><span><strong>Donate one I already own</strong><small>Submit condition and delivery details for review</small></span></button>
      </div><div id="contribution-fields"><div class="field"><label for="contribution-amount">Amount</label><input class="input" id="contribution-amount" type="number" min="100" max="${remaining}" value="${Math.min(100000, remaining)}" /></div></div><div class="demo-notice">Item offers are reviewed separately and do not change the amount raised.</div>`,
      confirmLabel: "Continue",
      onConfirm: (node) => {
        if (chosen === "full") {
          need.raised = need.cost;
          need.status = "Funded";
          need.contributionType = "Money";
          toast("Need fully funded", `${need.item} now shows as funded.`);
        } else if (chosen === "money") {
          const amount = Math.max(0, Number(node.querySelector("#contribution-amount")?.value || 0));
          if (amount < 100) { toast("Contribution not recorded", "Enter at least ₦100.", "error"); return; }
          need.raised = Math.min(need.cost, need.raised + amount);
          need.status = need.raised >= need.cost ? "Funded" : "Part funded";
          need.contributionType = "Money";
          toast("Contribution recorded", `${money(amount)} was added to ${need.item}.`);
        } else {
          const condition = node.querySelector("#item-condition")?.value || (chosen === "supply" ? "New" : "Good");
          state.inKindOffers.unshift({ id: `offer-${Date.now()}`, needId: need.id, item: need.item, type: chosen === "supply" ? "Supply new item" : "Donate owned item", condition, status: "Reviewing", createdAt: nowLabel() });
          need.status = "Offer under review";
          need.contributionType = "In-kind";
          toast("Item offer submitted", `The ${need.item} offer is ready for review.`);
        }
        persist();
        render();
      }
    });
    dialog.querySelectorAll("[data-choice]").forEach((button) => button.addEventListener("click", () => {
      chosen = button.dataset.choice;
      dialog.querySelectorAll("[data-choice]").forEach((choice) => choice.setAttribute("aria-pressed", String(choice === button)));
      const fields = dialog.querySelector("#contribution-fields");
      if (chosen === "money") fields.innerHTML = `<div class="field"><label for="contribution-amount">Amount</label><input class="input" id="contribution-amount" type="number" min="100" max="${remaining}" value="${Math.min(100000, remaining)}" /></div>`;
      else if (chosen === "owned") fields.innerHTML = `<div class="field"><label for="item-condition-trigger">Condition</label>${selectControl("item-condition", ["New", "Good", "Used, serviceable"], "Good", "Choose condition")}</div>`;
      else if (chosen === "supply") fields.innerHTML = `<div class="field"><label for="item-condition-trigger">Expected condition</label>${selectControl("item-condition", ["New", "Manufacturer refurbished"], "New", "Choose condition")}</div>`;
      else fields.innerHTML = `<div class="demo-notice">The full amount is ${money(remaining)}.</div>`;
      if (window.basecoat?.initAll) window.basecoat.initAll();
    }));
  }

  function openProjectContribution(projectId) {
    const project = state.projects.find((item) => item.id === projectId);
    if (!project) return;
    openDialog({
      title: `Contribute to ${project.name}`,
      description: `${money(project.goal - project.raised)} remains toward the goal.`,
      body: `<div class="field"><label for="project-amount">Amount</label><div class="currency-input" style="margin:0"><span>₦</span><input id="project-amount" type="number" min="100" value="100000" /></div></div>`,
      confirmLabel: "Add contribution",
      onConfirm: (dialog) => {
        const amount = Number(dialog.querySelector("#project-amount")?.value || 0);
        if (amount < 100) { toast("Contribution not recorded", "Enter at least ₦100.", "error"); return; }
        project.raised = Math.min(project.goal, project.raised + amount);
        project.supporters += 1;
        persist();
        render();
        toast("Contribution recorded", `${money(amount)} was added to ${project.name}.`);
      }
    });
  }

  function openNeedSubmission() {
    openDialog({
      title: "Submit a ministry need",
      description: "Church administration reviews every item before publication.",
      body: `<div class="editor-grid"><div class="field"><label for="need-ministry-trigger">Ministry</label>${selectControl("need-ministry", ["Music Ministry", "Media Ministry", "Welfare Ministry", "Children's Ministry"], "Music Ministry", "Choose ministry")}</div><div class="field"><label for="need-item">Item name</label><input class="input" id="need-item" required placeholder="e.g. Wireless microphones" /></div></div><div class="field"><label for="need-description">Description</label><textarea class="input" id="need-description" placeholder="What is needed?"></textarea></div><div class="editor-grid"><div class="field"><label for="need-quantity">Quantity</label><input class="input" id="need-quantity" type="number" min="1" value="1" /></div><div class="field"><label for="need-cost">Estimated cost</label><input class="input" id="need-cost" type="number" min="0" placeholder="0" /></div></div><div class="editor-grid"><div class="field"><label for="need-priority-trigger">Priority</label>${selectControl("need-priority", ["High", "Medium", "Low"], "Medium", "Choose priority")}</div><div class="field"><label for="need-image">Optional image</label><input class="input" id="need-image" type="file" accept="image/*" disabled /><small>Image upload is not available yet.</small></div></div><div class="field"><label for="need-reason">Reason</label><textarea class="input" id="need-reason" placeholder="Why is this needed now?"></textarea></div>`,
      confirmLabel: "Submit for approval",
      onConfirm: (dialog) => {
        const item = dialog.querySelector("#need-item").value.trim();
        const cost = Number(dialog.querySelector("#need-cost").value || 0);
        if (!item || cost <= 0) { toast("Need not submitted", "Add an item name and estimated cost.", "error"); return; }
        state.pendingNeeds.unshift({ id: `pending-${Date.now()}`, ministry: dialog.querySelector("#need-ministry").value, item, description: dialog.querySelector("#need-description").value.trim(), quantity: Number(dialog.querySelector("#need-quantity").value || 1), cost, priority: dialog.querySelector("#need-priority").value, reason: dialog.querySelector("#need-reason").value.trim(), status: "Pending" });
        persist();
        render();
        toast("Need submitted", `${item} is now awaiting church administration approval.`);
      }
    });
  }

  function openProjectCreation() {
    openDialog({
      title: "Create a church project",
      description: "Members will be able to choose this project when giving.",
      body: `<div class="field"><label for="project-name">Project name</label><input class="input" id="project-name" placeholder="e.g. Youth Centre Renovation" /></div><div class="field"><label for="project-description">Description</label><textarea class="input" id="project-description" placeholder="What will this project provide?"></textarea></div><div class="editor-grid"><div class="field"><label for="project-goal">Amount needed</label><input class="input" id="project-goal" type="number" min="100" placeholder="0" /></div><div class="field"><label for="project-deadline">Target date</label><input class="input" id="project-deadline" type="date" /></div></div>`,
      confirmLabel: "Create project",
      onConfirm: (dialog) => {
        const name = dialog.querySelector("#project-name").value.trim();
        const goal = Number(dialog.querySelector("#project-goal").value || 0);
        if (!name || goal < 100) { toast("Project not created", "Add a project name and amount needed.", "error"); return; }
        const date = dialog.querySelector("#project-deadline").value;
        const project = { id: `project-${Date.now()}`, name, description: dialog.querySelector("#project-description").value.trim() || "A church project members can support.", goal, raised: 0, supporters: 0, deadline: date ? new Date(`${date}T12:00:00`).toLocaleDateString("en-NG", { dateStyle: "long" }) : "No target date" };
        state.projects.push(project);
        persist();
        render();
        toast("Project created", `${name} is now available for members to support.`);
      }
    });
  }

  function openFollowUpScheduler(person = null) {
    const defaults = defaultFollowUpDateTime();
    const year = new Date().getFullYear();
    const people = [
      ...state.visitors.map((item) => ({ value: `visitor:${item.id}`, label: `${item.name} — Visitor`, group: "Visitors" })),
      ...state.members.map((item) => ({ value: `member:${item.id}`, label: `${item.name} — Member`, group: "Members" }))
    ];
    const selectedPerson = person ? `visitor:${person.id}` : people[0]?.value;
    const defaultAssignee = person?.owner && person.owner !== "Unassigned" ? person.owner : state.followUpWorkers[0];
    const dialog = openDialog({
      title: person ? `Schedule follow-up for ${person.name}` : "Schedule follow-up",
      description: "Choose a future date, time, and the person responsible.",
      body: `${person ? "" : `<div class="field"><label for="followup-person-trigger">Person</label>${selectControl("followup-person", people, selectedPerson, "Choose a person")}</div>`}<div class="schedule-fields"><div class="field"><label for="followup-date">Date</label><input class="input" id="followup-date" type="date" min="${localDateValue()}" max="${year}-12-31" value="${defaults.date}" /><small>Starts from today</small></div><div class="field"><label for="followup-time">Time</label><input class="input" id="followup-time" type="time" value="${defaults.time}" /></div></div><div class="field"><label for="followup-assignee-trigger">Assign to</label>${selectControl("followup-assignee", state.followUpWorkers, defaultAssignee, "Choose a person")}</div><div class="field"><label for="followup-purpose">Purpose</label><input class="input" id="followup-purpose" value="Welcome call and home-cell introduction" /></div>`,
      confirmLabel: "Assign follow-up",
      onConfirm: (node) => {
        const personValue = person ? `visitor:${person.id}` : node.querySelector("#followup-person").value;
        const [personType, personId] = personValue.split(":");
        const personRecord = personType === "visitor" ? state.visitors.find((item) => item.id === personId) : state.members.find((item) => item.id === personId);
        const due = `${node.querySelector("#followup-date").value}T${node.querySelector("#followup-time").value}`;
        const assignee = node.querySelector("#followup-assignee").value;
        if (!personRecord || !due || new Date(due).getTime() <= Date.now()) { toast("Choose a future time", "Follow-ups cannot be scheduled in the past.", "error"); return; }
        const task = { id: `followup-${Date.now()}`, personId, personType, person: personRecord.name, phone: personRecord.phone, assignee, due, purpose: node.querySelector("#followup-purpose").value.trim() || "Follow-up", status: "Upcoming", outcome: null };
        state.followUps.unshift(task);
        state.selectedFollowUpId = task.id;
        if (personType === "visitor") {
          personRecord.owner = assignee;
          personRecord.status = "Contact scheduled";
          personRecord.nextFollowUp = formatDateTime(due);
          personRecord.timeline.unshift({ label: `Follow-up assigned to ${assignee}`, detail: task.purpose, time: nowLabel(), tone: "info" });
        }
        persist();
        render();
        toast("Follow-up assigned", `${assignee} is responsible for following up with ${personRecord.name}.`);
      }
    });
    return dialog;
  }

  function openFollowUpReassignment(task) {
    openDialog({ title: "Reassign follow-up", body: `<div class="field"><label for="reassign-person-trigger">Assign to</label>${selectControl("reassign-person", state.followUpWorkers, task.assignee, "Choose a person")}</div>`, confirmLabel: "Assign", onConfirm: (dialog) => { task.assignee = dialog.querySelector("#reassign-person").value; task.status = "Upcoming"; persist(); render(); toast("Follow-up reassigned", `${task.assignee} is now responsible for ${task.person}.`); } });
  }

  function openFollowUpCompletion(task) {
    const outcomes = ["Reached", "No answer", "Requested a later call", "Visited again", "Joined a home cell", "Declined further contact"];
    openDialog({ title: "Complete follow-up", body: `<div class="field"><label for="followup-outcome-trigger">Outcome</label>${selectControl("followup-outcome", outcomes, "Reached", "Choose an outcome")}</div><div class="field"><label for="followup-result-note">Note</label><textarea class="input" id="followup-result-note" placeholder="Add a short, respectful note"></textarea></div>`, confirmLabel: "Save outcome", onConfirm: (dialog) => { task.status = "Completed"; task.outcome = dialog.querySelector("#followup-outcome").value; task.completedAt = nowLabel(); persist(); render(); toast("Follow-up completed", `${task.person}: ${task.outcome}.`); } });
  }

  function openOfflineContribution() {
    const targets = givingTargets().map((target) => ({ value: target.key, label: target.name, group: target.kind === "project" ? "Church projects" : "Approved ministry needs", disabled: target.raised >= target.total }));
    const defaultTarget = targets.find((target) => !target.disabled)?.value || targets[0]?.value;
    const dialog = openDialog({
      title: "Record an offline contribution",
      description: "Add money or an item received outside the member giving page.",
      body: `<div class="field"><label for="offline-type-trigger">Contribution type</label>${selectControl("offline-type", [{ value: "money", label: "Money" }, { value: "item", label: "Item or equipment" }], "money", "Choose a type", "data-offline-type")}</div><div class="field"><label for="offline-target-trigger">Project or need</label>${selectControl("offline-target", targets, defaultTarget, "Choose a project or need")}</div><div class="editor-grid"><div class="field"><label for="offline-name">Contributor name</label><input class="input" id="offline-name" placeholder="Name or Anonymous" /></div><div class="field"><label for="offline-date">Date received</label><input class="input" id="offline-date" type="date" max="${localDateValue()}" value="${localDateValue()}" /></div></div><div data-offline-money><div class="field"><label for="offline-amount">Amount</label><input class="input" id="offline-amount" type="number" min="100" placeholder="0" /></div></div><div data-offline-item hidden><div class="field"><label for="offline-item">Item details</label><textarea class="input" id="offline-item" placeholder="What was given and what condition is it in?"></textarea></div></div><div class="field"><label for="offline-note">Note</label><textarea class="input" id="offline-note" placeholder="Optional receipt or handover details"></textarea></div>`,
      confirmLabel: "Record contribution",
      onConfirm: (node) => {
        const type = node.querySelector("#offline-type").value;
        const targetKey = node.querySelector("#offline-target").value;
        const target = givingTargets().find((item) => item.key === targetKey);
        const contributor = node.querySelector("#offline-name").value.trim() || "Anonymous";
        if (!target) { toast("Contribution not recorded", "Choose a project or need.", "error"); return; }
        const record = { id: `offline-${Date.now()}`, type, targetKey, target: target.name, contributor, date: node.querySelector("#offline-date").value, note: node.querySelector("#offline-note").value.trim(), createdAt: nowLabel() };
        if (type === "money") {
          const amount = Number(node.querySelector("#offline-amount").value || 0);
          const remaining = Math.max(0, target.total - target.raised);
          if (amount < 100 || amount > remaining) { toast("Contribution not recorded", `Enter an amount between ₦100 and ${money(remaining)}.`, "error"); return; }
          record.amount = amount;
          if (target.kind === "project") { const project = state.projects.find((item) => item.id === target.id); project.raised += amount; project.supporters += 1; }
          else { const need = state.publicNeeds.find((item) => item.id === target.id); need.raised += amount; need.status = need.raised >= need.cost ? "Funded" : "Part funded"; need.contributionType = "Money"; }
        } else {
          const details = node.querySelector("#offline-item").value.trim();
          if (!details) { toast("Contribution not recorded", "Add the item details.", "error"); return; }
          record.item = details;
          if (target.kind === "need") { const need = state.publicNeeds.find((item) => item.id === target.id); need.status = "Item received"; need.contributionType = "In-kind"; }
        }
        state.offlineContributions.unshift(record);
        persist();
        render();
        toast("Contribution recorded", `${contributor}'s contribution to ${target.name} was added.`);
      }
    });
    dialog.addEventListener("change", (event) => {
      if (!event.target.matches("[data-offline-type]")) return;
      const moneyFields = dialog.querySelector("[data-offline-money]");
      const itemFields = dialog.querySelector("[data-offline-item]");
      moneyFields.hidden = event.detail.value !== "money";
      itemFields.hidden = event.detail.value !== "item";
    });
  }

  function handleNeedDecision(id, decision) {
    const need = state.pendingNeeds.find((item) => item.id === id);
    if (!need) return;
    const labels = { approve: ["Approve this need?", "Publish to member-facing needs", "Approve"], reject: ["Reject this need?", "Keep a record without publication", "Reject"], changes: ["Request changes?", "Return it to the ministry for revision", "Request changes"] };
    const [title, description, confirmLabel] = labels[decision];
    openDialog({
      title,
      description,
      body: `<div class="info-grid" style="margin:0"><div class="info-item"><small>Item</small><span>${escapeHTML(need.item)}</span></div><div class="info-item"><small>Ministry</small><span>${escapeHTML(need.ministry)}</span></div><div class="info-item"><small>Estimated cost</small><span>${money(need.cost)}</span></div><div class="info-item"><small>Priority</small><span>${escapeHTML(need.priority)}</span></div></div>${decision !== "approve" ? `<div class="field"><label for="decision-note">Note</label><textarea class="input" id="decision-note" placeholder="Add context for the ministry"></textarea></div>` : ""}`,
      confirmLabel,
      confirmVariant: decision === "reject" ? "destructive" : "default",
      onConfirm: () => {
        if (decision === "approve") {
          need.status = "Approved";
          state.publicNeeds.push({ id: `need-${Date.now()}`, ministry: need.ministry, item: need.item, quantity: need.quantity, cost: need.cost, raised: 0, status: "Needed", priority: need.priority, contributionType: null });
          toast("Need approved", `${need.item} now appears in the member-facing needs list.`);
        } else if (decision === "reject") {
          need.status = "Rejected";
          toast("Need rejected", `${need.item} remains recorded but is not public.`, "info");
        } else {
          need.status = "Changes requested";
          toast("Changes requested", `${need.ministry} can revise ${need.item}.`, "info");
        }
        persist();
        render();
      }
    });
  }

  document.addEventListener("click", (event) => {
    const nav = event.target.closest("[data-nav]");
    if (nav) { navigate(nav.dataset.nav); return; }

    const view = event.target.closest("[data-view]");
    if (view) {
      state.viewMode = view.dataset.view;
      if (state.viewMode === "member" && !["giving", "projects"].includes(state.currentScreen)) state.currentScreen = "giving";
      persist(); render(); return;
    }

    const visitorButton = event.target.closest("[data-visitor]");
    if (visitorButton) { state.selectedVisitorId = visitorButton.dataset.visitor; persist(); render(); return; }

    const memberButton = event.target.closest("[data-member]");
    if (memberButton) { state.selectedMemberId = memberButton.dataset.member; persist(); render(); return; }

    const followUpButton = event.target.closest("[data-followup]");
    if (followUpButton) { state.selectedFollowUpId = followUpButton.dataset.followup; persist(); render(); return; }

    const automationButton = event.target.closest("[data-automation]");
    if (automationButton) { state.selectedAutomationId = automationButton.dataset.automation; persist(); render(); return; }

    const fundButton = event.target.closest("[data-fund]");
    if (fundButton) { state.selectedFund = fundButton.dataset.fund; persist(); render(); return; }

    const needContribution = event.target.closest("[data-contribute-need]");
    if (needContribution) { openNeedContribution(needContribution.dataset.contributeNeed); return; }

    const projectContribution = event.target.closest("[data-project-contribute]");
    if (projectContribution) { openProjectContribution(projectContribution.dataset.projectContribute); return; }

    const needAction = event.target.closest("[data-need-action]");
    if (needAction) { handleNeedDecision(needAction.dataset.needId, needAction.dataset.needAction); return; }

    const action = event.target.closest("[data-action]")?.dataset.action;
    if (!action) return;

    if (action === "automation-info") {
      openDialog({ title: "Checks before sending", body: `<div class="demo-notice">ECA Connect checks who should receive the message, their message choices, quiet hours, and the available budget. Church-wide AI-written messages must also be reviewed by a person.</div>`, hideConfirm: true });
    } else if (action === "add-visitor") {
      openDialog({ title: "Add visitor", body: `<div class="editor-grid"><div class="field"><label for="new-visitor-name">Name</label><input class="input" id="new-visitor-name" placeholder="Full name" /></div><div class="field"><label for="new-visitor-phone">Phone</label><input class="input" id="new-visitor-phone" placeholder="+234..." /></div></div><div class="field"><label for="new-visitor-location">Area</label><input class="input" id="new-visitor-location" placeholder="e.g. Maitama" /></div><div class="demo-notice">Collect only the details needed for a warm and respectful follow-up.</div>`, confirmLabel: "Add visitor", onConfirm: (dialog) => {
        const name = dialog.querySelector("#new-visitor-name").value.trim();
        if (!name) { toast("Visitor not added", "Enter a name.", "error"); return; }
        const id = `visitor-${Date.now()}`;
        state.visitors.unshift({ id, name, initials: name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase(), location: dialog.querySelector("#new-visitor-location").value.trim() || "Abuja", branch: "Abuja Central", firstVisit: "Today", phone: dialog.querySelector("#new-visitor-phone").value.trim() || "Not provided", email: "Not provided", interests: [], owner: "Unassigned", status: "Awaiting follow-up", nextFollowUp: "Not scheduled", homeCell: null, timeline: [{ label: "Visitor registered", detail: "Added today", time: nowLabel(), tone: "neutral" }] });
        state.selectedVisitorId = id; persist(); render(); toast("Visitor added", `${name} is ready for follow-up.`);
      } });
    } else if (action === "mark-contacted") {
      updateVisitor((visitor) => { visitor.status = "Contacted"; visitor.timeline.unshift({ label: "Contacted by phone", detail: "Follow-up completed", time: nowLabel(), tone: "success" }); });
      toast("Contact recorded", "The visitor timeline and status were updated.");
    } else if (action === "schedule-followup") {
      openFollowUpScheduler(selectedVisitor());
    } else if (action === "assign-cell") {
      openDialog({ title: "Assign home cell", body: `<div class="field"><label for="cell-select-trigger">Home cell</label>${selectControl("cell-select", ["Airport Road Cell", "Wuse Cell", "Gwarinpa Central Cell", "Lugbe Cell"], "Airport Road Cell", "Choose a home cell")}</div>`, confirmLabel: "Assign cell", onConfirm: (dialog) => {
        const cell = dialog.querySelector("#cell-select").value;
        updateVisitor((visitor) => { visitor.homeCell = cell; visitor.timeline.unshift({ label: `Assigned to ${cell}`, detail: "Leader introduction pending", time: nowLabel(), tone: "success" }); });
        toast("Home cell assigned", `${cell} now appears on the visitor record.`);
      } });
    } else if (action === "convert-member") {
      openDialog({ title: "Convert to member?", body: `<div class="demo-notice">This person will move from Visitors to Members so their welcome journey can continue there.</div>`, confirmLabel: "Convert to member", onConfirm: () => {
        updateVisitor((visitor) => {
          visitor.status = "Member";
          visitor.timeline.unshift({ label: "Converted to member", detail: "Member welcome journey started", time: nowLabel(), tone: "success" });
          if (!state.members.some((member) => member.phone === visitor.phone)) state.members.unshift({ id: `member-${Date.now()}`, name: visitor.name, preferredName: visitor.name.split(" ")[0], initials: visitor.initials, phone: visitor.phone, email: visitor.email, branch: visitor.branch, secondaryBranch: null, status: "New member", joined: new Intl.DateTimeFormat("en-NG", { dateStyle: "long" }).format(new Date()), source: "Visitor conversion", household: `${visitor.name.split(" ").slice(-1)[0]} Household`, householdMembers: [], ministries: [], groups: ["New Members Class"], homeCell: visitor.homeCell || "Not assigned", tags: ["New member"], interests: visitor.interests, service: "Not yet assigned", communications: { sms: true, email: visitor.email !== "Not provided", push: false } });
        });
        toast("Membership updated", "The visitor now appears as a member.");
      } });
    } else if (action === "toggle-automation") {
      const automation = state.automations.find((item) => item.id === state.selectedAutomationId);
      automation.status = automation.status === "Active" ? "Paused" : "Active"; persist(); render(); toast(`Automation ${automation.status.toLowerCase()}`, `${automation.name} was updated.`, automation.status === "Active" ? "success" : "info");
    } else if (action === "open-member-giving") {
      state.viewMode = "member"; persist(); render();
    } else if (action === "give-now") {
      openCheckout();
    } else if (action === "give-remaining") {
      const amountInput = document.getElementById("giving-amount");
      if (amountInput) { amountInput.value = event.target.closest("[data-remaining]")?.dataset.remaining || ""; amountInput.focus(); }
    } else if (action === "create-project") {
      openProjectCreation();
    } else if (action === "record-offline-contribution") {
      openOfflineContribution();
    } else if (action === "submit-need") {
      openNeedSubmission();
    } else if (action === "new-followup") {
      openFollowUpScheduler();
    } else if (action === "reassign-followup") {
      const task = state.followUps.find((item) => item.id === state.selectedFollowUpId);
      if (task) openFollowUpReassignment(task);
    } else if (action === "complete-followup") {
      const task = state.followUps.find((item) => item.id === state.selectedFollowUpId);
      if (task) openFollowUpCompletion(task);
    } else if (action === "open-member-projects") {
      state.viewMode = "member"; persist(); render();
    } else if (action === "generate-ai") {
      state.ai.status = "generating"; persist(); render();
      window.setTimeout(() => { state.ai.status = "draft"; persist(); render(); toast("Draft ready for review", "Check every section before marking it reviewed."); }, 1100);
    } else if (action === "save-ai") {
      if (saveAIForm()) { if (state.ai.status === "reviewed") { state.ai.status = "draft"; state.ai.reviewedAt = null; } persist(); render(); toast("Draft saved", "Your changes need to be reviewed again.", "info"); }
    } else if (action === "review-ai") {
      saveAIForm(); state.ai.status = "reviewed"; state.ai.reviewedAt = nowLabel(); persist(); render(); toast("Review completed", "The follow-up is ready to send.");
    } else if (action === "send-ai") {
      openDialog({ title: "Send the follow-up?", body: `<div class="info-grid" style="margin:0"><div class="info-item"><small>Recipients</small><span>Sunday service attendees</span></div><div class="info-item"><small>Reviewed by</small><span>Amara Okafor</span></div></div>`, confirmLabel: "Send follow-up", onConfirm: () => { state.ai.status = "sent"; state.ai.sentAt = nowLabel(); persist(); render(); toast("Follow-up sent", "The Sunday follow-up is marked as sent."); } });
    } else if (action === "reset-demo") {
      openDialog({ title: "Reset all sample data?", description: "This returns ECA Connect to its starting information.", body: `<div class="demo-notice">Changes to visitors, giving, projects, ministry needs, reminders, item offers, and the Sunday follow-up will be removed.</div>`, confirmLabel: "Reset sample data", confirmVariant: "destructive", onConfirm: () => { state = clone(window.DEMO_SEED); persist(); render(); toast("Sample data reset", "The original information has been restored."); } });
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.matches('[data-action="visitor-search"]')) {
      const term = event.target.value.trim().toLowerCase();
      document.querySelectorAll("[data-visitor]").forEach((button) => { button.hidden = !button.textContent.toLowerCase().includes(term); });
    }
    if (event.target.matches('[data-action="member-search"]')) {
      const term = event.target.value.trim().toLowerCase();
      document.querySelectorAll("[data-member]").forEach((button) => { button.hidden = !button.textContent.toLowerCase().includes(term); });
    }
    if (event.target.matches('[data-action="followup-search"]')) {
      const term = event.target.value.trim().toLowerCase();
      document.querySelectorAll("[data-followup]").forEach((button) => { button.hidden = !button.textContent.toLowerCase().includes(term); });
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-giving-target]")) {
      state.selectedGivingTarget = event.detail?.value || event.target.value;
      persist();
      render();
    }
  });

  document.getElementById("mobile-menu").addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    const open = sidebar.classList.toggle("is-open");
    sidebar.setAttribute("aria-hidden", String(!open));
    if (open) sidebar.removeAttribute("inert"); else sidebar.setAttribute("inert", "");
  });

  function syncResponsiveSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (window.innerWidth >= 900) {
      sidebar.classList.remove("is-open");
      sidebar.setAttribute("aria-hidden", "false");
      sidebar.removeAttribute("inert");
    } else if (!sidebar.classList.contains("is-open")) {
      sidebar.setAttribute("aria-hidden", "true");
      sidebar.setAttribute("inert", "");
    }
  }

  window.addEventListener("resize", syncResponsiveSidebar);

  document.addEventListener("DOMContentLoaded", () => { syncResponsiveSidebar(); render(); }, { once: true });
})();
