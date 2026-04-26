/*
  ==========================================================
  PORTFOLIO CONFIG
  ==========================================================

  START HERE — 5 fields, then preview.

  1. Update the 5 required fields below.
  2. Replace assets/img/headshot.png with your own image.
  3. Open index.html in a browser to preview.
  4. Deploy when ready.

  Everything else is pre-filled and publish-ready.
*/

const SITE_CONFIG = {

  /*
    ========================================================
    REQUIRED — UPDATE THESE 5 FIELDS
    ========================================================
  */
  siteFirstName: "[YOUR_FIRST_NAME]",
  siteLastName: "[YOUR_LAST_NAME]",
  roleTitle: "[YOUR_ROLE_TITLE]",
  email: "[YOUR_EMAIL_ADDRESS]",
  resumeUrl: "[YOUR_RESUME_URL]",

  /*
    ========================================================
    OPTIONAL LINKS — leave blank to hide, fill in when ready.
    ========================================================
  */
  linkedinUrl: "",
  githubUrl: "",
  youtubeUrl: "",
  websiteUrl: "",

  // Scheduling link (Calendly, Cal.com, etc.) — leave blank to hide.
  // When set, a "Book a Call" card appears on the contact page.
  schedulingUrl: "",

  // Site URL — fill this in after your first deploy (for social sharing).
  // Example: "https://d1234abcd.cloudfront.net" or "https://yourname.com"
  siteUrl: "",

  // Last updated — shown in the footer. Update when you deploy changes.
  lastUpdated: "",

  /*
    ========================================================
    SKILLS & CERTIFICATIONS
    Shown on the About page sidebar. Set to [] to hide.
    ========================================================
  */
  skills: [
    "AWS Security",
    "Cloud Incident Response",
    "Detection Engineering",
    "Threat Hunting",
    "SOC 2 / Trust Services Criteria",
    "MITRE ATT&CK",
    "Terraform",
    "IAM",
    "CloudTrail",
    "GuardDuty",
    "Wazuh / SIEM",
    "AI-Augmented Workflows"
  ],

  certifications: [
    // "AWS Security Specialty",
    // "CompTIA Security+",
  ],

  /*
    ========================================================
    CURRENTLY BUILDING — shown on the homepage.
    Update to reflect what you're working on now.
    Set to [] to hide this section.
    ========================================================
  */
  currentlyBuilding: [
    "Sharpening detection rules and tuning against fresh baseline data",
    "Writing up a recent threat hunt and the assumptions it tested",
    "Pairing with AI to compress the mechanical parts of cloud security work"
  ],

  /*
    ========================================================
    FAQ — shown on the homepage and contact page.
    Update the answers to match your own work and background.
    ========================================================
  */
  faq: [
    {
      question: "What does \"AI-augmented\" actually mean in your work?",
      answer: "AI does the mechanical work — clustering events, drafting first-pass language, summarizing telemetry. I do the judgment work — scoping the engagement, validating findings against source evidence, rating severity, signing the report. The decisions that matter stay with me. AI raises the ceiling on what I can ship without lowering the bar on what I should defend."
    },
    {
      question: "How do you decide what's in scope on an assessment or hunt?",
      answer: "Start from the evidence available, the question being asked, and the time window. Name what's in, name what's out, and surface the limitations on the deliverable itself — every project page here has a Limitations section for exactly this reason. Honest scoping is a senior-practitioner move, not a hedge."
    },
    {
      question: "What's your stack?",
      answer: "AWS for cloud — IAM, CloudTrail, GuardDuty, S3, CloudFront, Wazuh, MCP. Terraform for infrastructure-as-code. Claude Code as the AI surface. Markdown and HTML for the writing the work demands. Whatever the role's stack is, I'll learn it the same way — by shipping a project in it."
    },
    {
      question: "How can I reach you?",
      answer: "Email or LinkedIn — both are on the contact page. If you're hiring, share the role; if you're a peer practitioner, reach out and let's compare notes."
    }
  ],

  /*
    ========================================================
    EVERYTHING BELOW IS PRE-FILLED — tweak when ready.
    You can safely ignore all of this for your first deploy.
    ========================================================
  */

  // --- Site Identity (auto-derived from your name if left blank) ---
  siteName: "",           // defaults to "FirstName LastName" if blank
  pageTitleSuffix: "Cloud Security Portfolio",

  // --- Hero / Positioning ---
  focusLine: "AWS cloud security work, shipped — using AI to compress hours into minutes without giving up the judgment that makes the work defensible.",
  siteTagline: "AWS Cloud Security \u2022 AI-Augmented Practitioner \u2022 Built and Shipped",
  siteTaglineShort: "AWS Cloud Security \u2022 AI-Augmented \u2022 Shipped",

  homeHeroTitle: "AI-augmented cloud security work, built to be evaluated.",
  homeHeroSubtitle: "I ship cloud security projects in AWS and use AI to move at the speed of intent — without giving up the judgment that makes the work defensible. Every project here is real. Every implementation choice is mine.",

  projectsHeroTitle: "Projects you can read end to end.",
  projectsHeroSubtitle: "AWS security work documented the way it would be reviewed in the role: evidence-backed, framework-aligned, and honest about what was in scope and what wasn't.",

  aboutHeroTitle: "How I work, and what I'm building toward.",
  aboutHeroSubtitle: "I came into cloud security to build things that are both functional and defensible. I stayed because AI-augmented work raised the ceiling on what one practitioner can actually ship.",

  contactHeroTitle: "Open to the right next step.",
  contactHeroSubtitle: "If you're hiring for cloud security work, building a team that uses AI seriously, or want to compare notes on practitioner workflows — reach out.",

  // --- Homepage Value Boxes ---
  homeValueOneTitle: "Real AWS Work, Not Slides",
  homeValueOneBody: "Production-shaped projects in AWS &mdash; assessment, response, detection, compliance &mdash; documented with the evidence and tradeoffs a reviewer expects.",
  homeValueTwoTitle: "AI as Multiplier, Not Magic",
  homeValueTwoBody: "AI compresses the mechanical work so I can spend the saved time on the decisions that actually require security judgment. Every artifact here is mine.",
  homeValueThreeTitle: "Built to Be Reviewed",
  homeValueThreeBody: "Each project names what was in scope, what was out, and what I'd do differently next time. Honest scoping is a strength, not a hedge.",

  aboutSnapshotStrength: "Practitioner-first: I build real projects, ship them, and use AI to raise the ceiling on what one person can do without lowering the bar on what they should defend.",

  // --- Featured Project ---
  featuredProjectTitle: "Security Portfolio Platform in AWS",
  featuredProjectShortDescription: "A cloud-hosted portfolio built with HTML, CSS, AWS S3, CloudFront, and Terraform. This is both my live portfolio and a hands-on project demonstrating real cloud deployment and infrastructure-as-code.",
  starterProjectLabel: "Featured Project",
  starterProjectEyebrow: "Featured Project \u2022 AWS Portfolio Foundation",
  starterProjectOutcome: "A live portfolio built and deployed to AWS to showcase cloud security projects and technical work.",
  starterProjectStackShort: "HTML \u2022 CSS \u2022 AWS S3 \u2022 CloudFront \u2022 Terraform",

  // --- Focus Areas ---
  focusAreaOneTitle: "Cloud Security Assessment &amp; Response",
  focusAreaOneDescription: "AWS posture reviews grounded in real evidence, cloud incident response from alert to written closeout, and remediation that closes process gaps not just findings.",
  focusAreaTwoTitle: "Detection Engineering &amp; Threat Hunting",
  focusAreaTwoDescription: "SIEM deployment, custom rule authoring tuned against real baselines, hypothesis-driven hunts, and AI-augmented investigation that keeps decisions with the practitioner.",
  focusAreaThreeTitle: "Compliance, Audit Readiness &amp; Evidence",
  focusAreaThreeDescription: "Trust Services Criteria control mapping, audit-grade narrative writing, evidence-to-source-system planning, and gap analysis with named owners and target dates.",
  focusAreasSectionDesc: "Three categories of cloud security work, all shipped with the same discipline: real evidence, honest scoping, AI used responsibly.",

  // --- Shared Short Copy ---
  communityShort: "An AI-augmented cloud security portfolio: AWS projects shipped end to end, documented for review, and honest about what was in scope.",
  communityShorter: "AI-augmented cloud security work in AWS &mdash; shipped, documented, defensible.",
  starterShort: "Cloud security projects you can read like real engagements: scoping, evidence, decisions, limitations, lessons.",
  starterShorter: "Cloud security work shipped and documented for the role, not the resume bullet.",
  proofOfWorkShort: "Projects written so a reviewer can scan them in 30 seconds and a senior practitioner can see real depth on a slow read.",

  // --- Template Promo ---
  templatePromoTitle: "Build your own portfolio",
  templatePromoText: "Want a version like this? Join the AI Cloud Security Lab community and use this template to build, deploy, and launch your own portfolio.",
  templatePromoCommunityLabel: "Join the AI Cloud Security Lab",
  templatePromoGithubLabel: "Get the Template",
  skoolUrl: "https://www.skool.com/cloud-security-lab",
  templateRepoUrl: "https://github.com/botz-pillar/your-security-portfolio",

  // --- Community Badge ---
  showCommunityBadge: true,

  // --- Assets ---
  headshotPath: "assets/img/headshot.png",
  headshotPathNested: "../assets/img/headshot.png",
  faviconPath: "assets/img/favicon.svg",
  faviconPathNested: "../assets/img/favicon.svg",

  // --- OG / Social Sharing ---
  ogImage: "assets/img/og-image.png",
  ogSiteName: "",

  // --- CTA Labels ---
  ctaJoinCommunity: "Join the Community",
  ctaJoinFreeCommunity: "Build Yours in the Community",
  ctaViewProjects: "View Projects",
  ctaBrowseProjects: "Browse Projects",
  ctaOpenStarterProject: "Open Featured Project",
  ctaReadProjectDetails: "Read Project Details",
  ctaGoHome: "Go Home",

  // --- Button / Link Labels ---
  linkedinLabel: "Connect on LinkedIn",
  githubLabel: "View GitHub",
  emailLabel: "Send Email",
  youtubeLabel: "View YouTube",
  websiteLabel: "Visit Website",
  resumeLabel: "View Resume",
  schedulingLabel: "Book a Call",

  // --- Footer ---
  copyrightYear: "2026",
  manifestPortfolioLabel: "portfolio-overview.json",
  manifestProjectsLabel: "project-index.yml",
  manifestArchitectureLabel: "architecture-summary.yml",

  // --- Meta Descriptions ---
  defaultMetaDescription: "A cloud security portfolio showcasing hands-on AWS projects, architecture decisions, and real technical implementation.",
  homeMetaDescription: "Cloud security portfolio featuring hands-on AWS projects, security architecture, and technical implementation.",
  projectsMetaDescription: "Hands-on cloud security projects, AWS labs, detection tooling, and architecture writeups built through real implementation.",
  aboutMetaDescription: "Background, approach, and direction — learn about the builder behind this cloud security portfolio.",
  contactMetaDescription: "Connect directly, review the resume, and explore the cloud security projects featured in this portfolio.",
  errorMetaDescription: "The page you were looking for could not be found. Return to the homepage or browse the project collection.",
  projectMetaDescription: "A detailed project page covering AWS hosting, Terraform infrastructure, and the technical decisions behind a live cloud security portfolio.",

  // --- Projects Page ---
  featuredSectionDesc: "A starting point for understanding what I build and how I approach implementation.",
  projectsCategorySectionHeading: "Project Categories",
  projectsCategorySectionDesc: "The kinds of work I'm building toward — each connected to real cloud security skills.",
  projectsUdpJoke: "Small security joke for the road: I would tell you a UDP joke, but you might not get it.",
  projectsManifestYaml: "featured:\n  - security-portfolio-platform\n\nfocus_areas:\n  - assessment-and-response\n  - detection-and-hunting\n  - compliance-and-evidence\n\ndiscipline:\n  - real-evidence-not-narrative\n  - honest-scope-not-hedge\n  - ai-as-multiplier-not-magic",
  projectsManifestThemes: "Assessment \u2022 Response \u2022 Detection \u2022 Compliance",
  projectsManifestWhatShows: "Real cloud security work, shipped with discipline",
  suggestedProjectOneTitle: "Your Original Project",
  suggestedProjectOneDescription: "Drop in your own work here &mdash; a lab you built, an engagement you can write about, a side project that proves something specific. Use project-template.html as the starting structure.",
  suggestedProjectTwoTitle: "Course Project Showcase",
  suggestedProjectTwoDescription: "Add showcase pages from the course-pages companion repo for each AI Cloud Security Lab course you've completed. Drop the file into projects/, customize, and add a card here.",

  // --- Contact Page ---
  contactSchedulingCardDesc: "Skip the back-and-forth — pick a time that works and let's talk.",
  contactWaysToConnectDesc: "Choose the option that works best for you."
};
