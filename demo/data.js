(function () {
  "use strict";

  window.DEMO_SEED = {
    version: 3,
    viewMode: "admin",
    currentScreen: "overview",
    selectedMemberId: "member-amara",
    selectedVisitorId: "visitor-john",
    selectedFollowUpId: "followup-john",
    selectedAutomationId: "auto-bible-study",
    dashboard: {
      sundayAttendance: 842,
      firstTimeVisitors: 31,
      awaitingFollowUp: 7,
      completedFollowUps: 24,
      upcomingPrograms: 5,
      givingThisMonth: 8400000,
      smsBudget: 80000,
      smsRemaining: 51200
    },
    visitors: [
      {
        id: "visitor-john",
        name: "John Musa",
        initials: "JM",
        location: "Airport Road",
        branch: "Abuja Central",
        firstVisit: "Sunday, 18 October",
        phone: "+234 803 555 0184",
        email: "john.musa@example.test",
        interests: ["Youth", "Music", "Home Cell"],
        owner: "Sarah Adeyemi",
        status: "Awaiting follow-up",
        nextFollowUp: "Today, 4:30 PM",
        homeCell: null,
        timeline: [
          { label: "Follow-up reminder scheduled", detail: "Due today at 4:30 PM", time: "Yesterday, 6:02 PM", tone: "warning" },
          { label: "Assigned to Sarah Adeyemi", detail: "Visitor Care Team", time: "Sunday, 1:18 PM", tone: "info" },
          { label: "Welcome SMS sent", detail: "Delivered to ending 0184", time: "Sunday, 12:46 PM", tone: "success" },
          { label: "Visitor registered", detail: "Abuja Central · Second service", time: "Sunday, 12:42 PM", tone: "neutral" }
        ]
      },
      {
        id: "visitor-amina",
        name: "Amina Bello",
        initials: "AB",
        location: "Gwarinpa",
        branch: "Gwarinpa",
        firstVisit: "Sunday, 18 October",
        phone: "+234 806 555 0112",
        email: "amina.bello@example.test",
        interests: ["Bible Study", "Women"],
        owner: "David Eze",
        status: "Contact scheduled",
        nextFollowUp: "Tuesday, 10:00 AM",
        homeCell: null,
        timeline: [
          { label: "Call scheduled", detail: "Tuesday at 10:00 AM", time: "Today, 9:12 AM", tone: "info" },
          { label: "Welcome SMS sent", detail: "Delivered", time: "Sunday, 1:04 PM", tone: "success" },
          { label: "Visitor registered", detail: "Gwarinpa · First service", time: "Sunday, 12:58 PM", tone: "neutral" }
        ]
      },
      {
        id: "visitor-chinedu",
        name: "Chinedu Okafor",
        initials: "CO",
        location: "Wuse 2",
        branch: "Abuja Central",
        firstVisit: "Sunday, 11 October",
        phone: "+234 809 555 0168",
        email: "chinedu.okafor@example.test",
        interests: ["Young Adults", "Media"],
        owner: "Sarah Adeyemi",
        status: "Contacted",
        nextFollowUp: "Friday, 5:00 PM",
        homeCell: "Wuse Cell",
        timeline: [
          { label: "Assigned to Wuse Cell", detail: "Introduction pending", time: "Yesterday, 3:42 PM", tone: "success" },
          { label: "Contacted by phone", detail: "Interested in Young Adults", time: "Monday, 5:22 PM", tone: "success" },
          { label: "Visitor registered", detail: "Abuja Central", time: "11 October", tone: "neutral" }
        ]
      },
      {
        id: "visitor-ruth",
        name: "Ruth Ekanem",
        initials: "RE",
        location: "Lugbe",
        branch: "Airport Road",
        firstVisit: "Sunday, 18 October",
        phone: "+234 812 555 0147",
        email: "ruth.ekanem@example.test",
        interests: ["Children's Ministry"],
        owner: "Unassigned",
        status: "Awaiting follow-up",
        nextFollowUp: "Not scheduled",
        homeCell: null,
        timeline: [
          { label: "Welcome SMS sent", detail: "Delivered", time: "Sunday, 11:34 AM", tone: "success" },
          { label: "Visitor registered", detail: "Airport Road service", time: "Sunday, 11:28 AM", tone: "neutral" }
        ]
      }
    ],
    members: [
      { id: "member-amara", name: "Amara Okafor", preferredName: "Amara", initials: "AO", phone: "+234 803 555 0101", email: "amara.okafor@example.test", branch: "Abuja Central", secondaryBranch: "Gwarinpa", status: "Active", joined: "12 March 2018", source: "Membership class", household: "Okafor Household", householdMembers: ["Chidi Okafor", "Nneka Okafor"], ministries: ["Church Administration", "Women Fellowship"], groups: ["Pastorate Support"], homeCell: "Wuse Cell", tags: ["Church Administrator", "Home-cell member"], interests: ["Prayer", "Women", "Administration"], service: "Church administration and member care", communications: { sms: true, email: true, push: true } },
      { id: "member-david", name: "David Eze", preferredName: "David", initials: "DE", phone: "+234 806 555 0122", email: "david.eze@example.test", branch: "Gwarinpa", secondaryBranch: null, status: "Active", joined: "7 July 2020", source: "Visitor follow-up", household: "Eze Household", householdMembers: ["Ifeoma Eze"], ministries: ["Visitor Care", "Men Fellowship"], groups: ["Welcome Team"], homeCell: "Gwarinpa Central Cell", tags: ["Follow-up worker"], interests: ["Outreach", "Bible Study"], service: "Visitor calls and welcome desk", communications: { sms: true, email: true, push: true } },
      { id: "member-sarah", name: "Sarah Adeyemi", preferredName: "Sarah", initials: "SA", phone: "+234 809 555 0134", email: "sarah.adeyemi@example.test", branch: "Abuja Central", secondaryBranch: null, status: "Active", joined: "19 November 2019", source: "Transferred membership", household: "Adeyemi Household", householdMembers: [], ministries: ["Visitor Care", "Youth Ministry"], groups: ["Welcome Team"], homeCell: "Wuse Cell", tags: ["Follow-up worker", "Youth leader"], interests: ["Youth", "Music"], service: "Visitor follow-up and youth mentoring", communications: { sms: true, email: true, push: true } },
      { id: "member-grace", name: "Grace Udo", preferredName: "Grace", initials: "GU", phone: "+234 812 555 0190", email: "grace.udo@example.test", branch: "Airport Road", secondaryBranch: null, status: "New member", joined: "4 October 2026", source: "Visitor conversion", household: "Udo Household", householdMembers: [], ministries: ["Choir"], groups: ["New Members Class"], homeCell: "Airport Road Cell", tags: ["New member"], interests: ["Music", "Prayer"], service: "Choir", communications: { sms: true, email: true, push: false } },
      { id: "member-emeka", name: "Emeka Nwosu", preferredName: "Emeka", initials: "EN", phone: "+234 805 555 0176", email: "emeka.nwosu@example.test", branch: "Abuja Central", secondaryBranch: "Airport Road", status: "Active", joined: "23 May 2016", source: "Membership class", household: "Nwosu Household", householdMembers: ["Ada Nwosu", "Chika Nwosu"], ministries: ["Media Ministry"], groups: ["Technical Team"], homeCell: "Lugbe Cell", tags: ["Media volunteer"], interests: ["Media", "Technology"], service: "Livestream and Sunday media", communications: { sms: true, email: false, push: true } },
      { id: "member-halima", name: "Halima Ibrahim", preferredName: "Halima", initials: "HI", phone: "+234 807 555 0155", email: "halima.ibrahim@example.test", branch: "Gwarinpa", secondaryBranch: null, status: "Inactive", joined: "15 January 2021", source: "Community outreach", household: "Ibrahim Household", householdMembers: [], ministries: ["Welfare Ministry"], groups: [], homeCell: "Gwarinpa Central Cell", tags: ["Care volunteer"], interests: ["Welfare", "Community"], service: "Community care", communications: { sms: true, email: true, push: false } }
    ],
    followUpWorkers: ["Sarah Adeyemi", "David Eze", "Amara Okafor", "Grace Udo"],
    followUps: [
      { id: "followup-john", personId: "visitor-john", personType: "visitor", person: "John Musa", phone: "+234 803 555 0184", assignee: "Sarah Adeyemi", due: "2026-10-23T16:30", purpose: "Welcome call and home-cell introduction", status: "Due today", outcome: null },
      { id: "followup-amina", personId: "visitor-amina", personType: "visitor", person: "Amina Bello", phone: "+234 806 555 0112", assignee: "David Eze", due: "2026-10-24T10:00", purpose: "Check in after first visit", status: "Upcoming", outcome: null },
      { id: "followup-ruth", personId: "visitor-ruth", personType: "visitor", person: "Ruth Ekanem", phone: "+234 812 555 0147", assignee: "Unassigned", due: "2026-10-25T15:00", purpose: "Welcome call", status: "Needs assignment", outcome: null },
      { id: "followup-chinedu", personId: "visitor-chinedu", personType: "visitor", person: "Chinedu Okafor", phone: "+234 809 555 0168", assignee: "Sarah Adeyemi", due: "2026-10-22T17:00", purpose: "Home-cell introduction", status: "Completed", outcome: "Reached" }
    ],
    automations: [
      {
        id: "auto-bible-study",
        name: "Tuesday Bible Study Reminder",
        schedule: "Every Tuesday · 2:00 PM",
        audience: "Abuja branches · 1,240 people",
        personalization: "First name + nearest branch",
        channels: ["Push", "SMS"],
        status: "Active",
        lastRun: "13 October · 1,218 delivered",
        nextRun: "Tomorrow · 2:00 PM",
        estimatedCost: 4960
      },
      {
        id: "auto-home-cell",
        name: "Home Cell Reminder",
        schedule: "Every Friday · 4:00 PM",
        audience: "Active home-cell members",
        personalization: "Cell name, leader, time, location",
        channels: ["Push"],
        status: "Active",
        lastRun: "16 October · 684 delivered",
        nextRun: "Friday · 4:00 PM",
        estimatedCost: 0
      },
      {
        id: "auto-sunday-email",
        name: "Sunday Follow-up Email",
        schedule: "Sunday · after content approval",
        audience: "People who attended Sunday service",
        personalization: "Preferred name + upcoming branch programs",
        channels: ["Email"],
        status: "Active",
        lastRun: "18 October · 796 delivered",
        nextRun: "Sunday · 3:30 PM",
        estimatedCost: 0
      }
    ],
    funds: [
      { id: "tithe", name: "Tithe", description: "Regular giving in worship and stewardship" },
      { id: "offering", name: "Offering", description: "General church work and ministry" },
      { id: "projects", name: "Projects", description: "Choose a church project or approved ministry need" },
      { id: "missions", name: "Missions", description: "Outreach and mission partnerships" },
      { id: "thanksgiving", name: "Thanksgiving", description: "A special gift of gratitude" },
      { id: "other", name: "Other", description: "Choose another approved fund" }
    ],
    selectedFund: "tithe",
    selectedGivingTarget: "project:project-solar",
    givingHistory: [],
    projects: [
      {
        id: "project-solar",
        name: "Solar Project",
        description: "Reliable solar power for worship services, offices, and weekly church activities.",
        goal: 12000000,
        raised: 7400000,
        supporters: 94,
        deadline: "28 February 2027"
      },
      {
        id: "project-women-bus",
        name: "Women Fellowship Bus",
        description: "A dedicated bus for fellowship meetings, care visits, conferences, and outreach.",
        goal: 28000000,
        raised: 9800000,
        supporters: 72,
        deadline: "30 June 2027"
      },
      {
        id: "project-padding",
        name: "Church Padding",
        description: "Improve seating comfort throughout the main auditorium.",
        goal: 5500000,
        raised: 3200000,
        supporters: 61,
        deadline: "31 January 2027"
      },
      {
        id: "project-line-array",
        name: "Line Array Speakers",
        description: "Upgrade the main auditorium sound system for clear and even coverage.",
        goal: 18000000,
        raised: 6600000,
        supporters: 48,
        deadline: "30 April 2027"
      },
      {
        id: "project-shore-microphones",
        name: "3 pairs of Shore Microphones",
        description: "Wireless microphones for worship, teaching, and church programs.",
        goal: 1350000,
        raised: 450000,
        supporters: 18,
        deadline: "31 December 2026"
      },
      {
        id: "project-bus",
        name: "Church Bus Project",
        description: "A reliable 35-seater bus for Sunday routes, home-cell gatherings, and outreach programs.",
        goal: 45000000,
        raised: 18500000,
        supporters: 146,
        deadline: "31 March 2027"
      }
    ],
    publicNeeds: [
      { id: "need-keyboard", ministry: "Music Ministry", item: "Yamaha Keyboard", quantity: 1, cost: 2400000, raised: 0, status: "Needed", priority: "High", contributionType: null },
      { id: "need-mixers", ministry: "Music Ministry", item: "P16 Personal Mixers", quantity: 6, cost: 3600000, raised: 1200000, status: "Part funded", priority: "High", contributionType: null },
      { id: "need-drums", ministry: "Music Ministry", item: "Drum Kit", quantity: 1, cost: 2500000, raised: 2500000, status: "Funded", priority: "Medium", contributionType: "Money" },
      { id: "need-guitar", ministry: "Music Ministry", item: "Electric Guitar", quantity: 1, cost: 900000, raised: 0, status: "Needed", priority: "Medium", contributionType: null }
    ],
    pendingNeeds: [
      { id: "pending-projector", ministry: "Media Ministry", item: "4K Projector", description: "Replace the dim auditorium projector used for lyrics and sermon visuals.", quantity: 1, cost: 3200000, priority: "High", reason: "Current unit is unreliable and no longer bright enough.", status: "Pending" },
      { id: "pending-chairs", ministry: "Welfare Ministry", item: "Stackable Chairs", description: "Additional seating for the counselling and care room.", quantity: 50, cost: 1750000, priority: "Medium", reason: "Weekly support groups now exceed available seating.", status: "Pending" },
      { id: "pending-camera", ministry: "Media Ministry", item: "Video Camera", description: "Second camera for sermon recording and livestream coverage.", quantity: 1, cost: 4100000, priority: "Medium", reason: "Improve sermon recording and livestream coverage.", status: "Pending" }
    ],
    inKindOffers: [],
    offlineContributions: [],
    ai: {
      status: "idle",
      service: "The Power of Consistency",
      serviceDate: "Sunday, 18 October 2026",
      transcriptStatus: "Transcript uploaded · 38 minutes",
      subject: "Keep showing up: this week's reflection",
      greeting: "Dear {{ preferred_name }},",
      summary: "Consistency is not about dramatic moments. It is the quiet decision to remain faithful in small acts of obedience, service, prayer, and love. Sunday's message reminded us that steady faithfulness prepares the ground for lasting fruit.",
      scriptures: "Galatians 6:9; Luke 16:10; Daniel 6:10",
      reflection: "Where have you been tempted to stop because progress feels slow? Consider one faithful practice that you can continue this week, even when the result is not yet visible.",
      prayer: "Lord, give us grace to remain faithful in the small things. Renew our strength when we are weary, and help our daily choices reflect trust in You.",
      action: "Choose one 15-minute practice for the next seven days: prayer, Scripture reading, checking on someone, or serving your household.",
      programs: "Tuesday Bible Study · 6:00 PM\nFriday Home Cells · Times vary by location",
      links: "Watch the sermon: ecaconnect.example/sermons/consistency\nFollow: @ECAConnect",
      reviewedAt: null,
      sentAt: null
    }
  };
})();
