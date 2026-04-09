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
    "Terraform",
    "CloudFront",
    "IAM",
    "S3",
    "GuardDuty"
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
    "Setting up AWS GuardDuty detection rules for a cloud hardening lab",
    "Documenting architecture decisions for a multi-account security project",
    "Studying for the AWS Security Specialty certification"
  ],

  /*
    ========================================================
    FAQ — shown on the homepage and contact page.
    Update the answers to match your own work and background.
    ========================================================
  */
  faq: [
    {
      question: "What projects have you built?",
      answer: "I've built a cloud-hosted portfolio platform using AWS S3, CloudFront, and Terraform. I'm also working on additional projects in AWS security hardening and detection engineering. Check the projects page for the full list."
    },
    {
      question: "What's your tech stack?",
      answer: "HTML, CSS, and JavaScript on the front end. AWS (S3, CloudFront, IAM, GuardDuty) and Terraform for infrastructure-as-code. GitHub for version control and collaboration."
    },
    {
      question: "What are you learning right now?",
      answer: "I'm focused on deepening my AWS security skills — building detection engineering workflows, hardening cloud environments, and preparing for the AWS Security Specialty certification."
    },
    {
      question: "How can I contact you?",
      answer: "The best way to reach me is through email or LinkedIn. You can find all the options on the contact page, or use the links in the footer."
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
  focusLine: "AWS security projects, AI-powered workflows, and cloud architecture — built by doing, not just studying.",
  siteTagline: "Cloud Security \u2022 AWS \u2022 AI-Assisted Development \u2022 Secure Architecture",
  siteTaglineShort: "Cloud Security \u2022 AWS \u2022 AI + Automation",

  homeHeroTitle: "Cloud security projects built through real implementation.",
  homeHeroSubtitle: "This portfolio is where I document projects, architecture decisions, and technical work — built in AWS, managed with Terraform, and designed to be evaluated directly.",

  projectsHeroTitle: "Projects and technical work.",
  projectsHeroSubtitle: "Hands-on AWS security projects, labs, and writeups — each one built to learn something real and show how I approach implementation.",

  aboutHeroTitle: "Background, approach, and where I'm headed.",
  aboutHeroSubtitle: "I got into cloud security because I like building things that are both functional and defensible. Here's more about how I work and what I'm focused on.",

  contactHeroTitle: "Get in touch.",
  contactHeroSubtitle: "Review my projects or reach out directly — I'm always open to connecting with people working in cloud security.",

  // --- Homepage Value Boxes ---
  homeValueOneTitle: "Hands-On AWS Security Projects",
  homeValueOneBody: "Real projects covering security architecture, hardening, detection, and infrastructure-as-code — built in AWS and documented with context.",
  homeValueTwoTitle: "Built to Be Evaluated",
  homeValueTwoBody: "Each project includes architecture decisions, implementation notes, and security tradeoffs — making it easier for anyone reviewing to understand the work.",
  homeValueThreeTitle: "Always Building",
  homeValueThreeBody: "This portfolio grows over time as I ship new projects, learn new patterns, and deepen my cloud security skills.",

  aboutSnapshotStrength: "Building real projects instead of just studying for certs — using AI tools to ship faster and learn deeper.",

  // --- Featured Project ---
  featuredProjectTitle: "Security Portfolio Platform in AWS",
  featuredProjectShortDescription: "A cloud-hosted portfolio built with HTML, CSS, AWS S3, CloudFront, and Terraform. This is both my live portfolio and a hands-on project demonstrating real cloud deployment and infrastructure-as-code.",
  starterProjectLabel: "Featured Project",
  starterProjectEyebrow: "Featured Project \u2022 AWS Portfolio Foundation",
  starterProjectOutcome: "A live portfolio built and deployed to AWS to showcase cloud security projects and technical work.",
  starterProjectStackShort: "HTML \u2022 CSS \u2022 AWS S3 \u2022 CloudFront \u2022 Terraform",

  // --- Focus Areas ---
  focusAreaOneTitle: "AWS Security Projects",
  focusAreaOneDescription: "Hands-on projects involving AWS architecture, security controls, hardening, and cloud infrastructure — built to learn and demonstrate real implementation skills.",
  focusAreaTwoTitle: "Detection and Security Tooling",
  focusAreaTwoDescription: "Projects focused on logging, monitoring, detection workflows, and security tooling that strengthen cloud visibility and operational awareness.",
  focusAreaThreeTitle: "Architecture and Technical Writeups",
  focusAreaThreeDescription: "Structured writeups and architecture notes that explain design decisions, security reasoning, and implementation logic clearly.",
  focusAreasSectionDesc: "These categories represent the kinds of technical work most relevant to cloud security roles and hands-on implementation.",

  // --- Shared Short Copy ---
  communityShort: "A cloud security portfolio showcasing AWS projects, AI-powered workflows, and technical implementations built through the AI Cloud Security Lab.",
  communityShorter: "AWS security projects and AI-powered cloud workflows — built, deployed, and documented.",
  starterShort: "Cloud security projects, AWS labs, and technical writeups that show real implementation and how I think about security.",
  starterShorter: "AWS security projects and technical writeups — real implementation, not just certifications.",
  proofOfWorkShort: "Projects, labs, and writeups that make cloud security skills easier to evaluate — built to be seen, not just described.",

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
  projectsManifestYaml: "featured:\n  - security-portfolio-platform\n\nfocus_areas:\n  - aws-security-projects\n  - detection-and-tooling\n  - architecture-writeups\n\ngoal:\n  - show real implementation\n  - document decisions clearly\n  - make work easy to evaluate",
  projectsManifestThemes: "AWS \u2022 Detection \u2022 Architecture",
  projectsManifestWhatShows: "Hands-on implementation with real technical depth",
  suggestedProjectOneTitle: "AWS Hardening Lab",
  suggestedProjectOneDescription: "A future project focused on strengthening AWS configurations, documenting security decisions, and showing practical cloud hardening skills.",
  suggestedProjectTwoTitle: "Detection Engineering Lab",
  suggestedProjectTwoDescription: "A future project focused on logs, alerts, detection logic, and the practical side of improving cloud security visibility.",

  // --- Contact Page ---
  contactSchedulingCardDesc: "Skip the back-and-forth — pick a time that works and let's talk.",
  contactWaysToConnectDesc: "Choose the option that works best for you."
};
