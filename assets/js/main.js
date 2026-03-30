/*
  ==========================================================
  SECURITY PORTFOLIO TEMPLATE CONFIG
  ==========================================================

  START HERE
  - Edit the values in SITE_CONFIG first.
  - Replace assets/img/headshot.png with your own image.
  - Preview locally before publishing.

  IMPORTANT
  - Most first-time changes belong in SITE_CONFIG.
  - Leave everything below the helper section alone unless you know what you are doing.
  - Optional links can stay blank.
*/

const SITE_CONFIG = {
  /*
    ========================================================
    TIER 1: REQUIRED PERSONAL INFO
    UPDATE THESE FIRST
    These are the most important fields to change before you publish.
    If you only have 5 minutes, start here.
    ========================================================
  */
  siteName: "[YOUR_SITE_NAME]",
  siteBrand: "[YOUR_BRAND_NAME]",
  siteTitleShort: "Cloud Security Portfolio",
  siteFirstName: "[YOUR_FIRST_NAME]",
  siteLastName: "[YOUR_LAST_NAME]",
  siteFullName: "[YOUR_FULL_NAME]",
  roleTitle: "[YOUR_ROLE_TITLE]",
  email: "[YOUR_EMAIL_ADDRESS]",
  resumeUrl: "[YOUR_RESUME_URL]",

  /*
    ========================================================
    OPTIONAL LINKS
    Leave blank if you do not want to use them yet.
    You can always add them later after your portfolio is live.
    ========================================================
  */
  linkedinUrl: "",
  githubUrl: "",
  youtubeUrl: "",
  websiteUrl: "",

  /*
    ========================================================
    TIER 2: STARTER LANGUAGE
    Pre-filled with a Builder + Learner Hybrid tone:
    confident about what was built, honest about being
    early-career, and shows initiative. AI is mentioned as
    an enabler/accelerant alongside hands-on AWS work.
    Keep it, tweak it, or replace it.
    ========================================================
  */

  // --- Hero / Positioning ---
  focusLine: "AWS security projects, AI-powered workflows, and cloud architecture — built by doing, not just studying.",
  siteTagline: "Cloud Security • AWS • AI-Assisted Development • Secure Architecture",
  siteTaglineShort: "Cloud Security • AWS • AI + Automation",

  homeHeroTitle: "I build cloud security projects in AWS that show what I can actually do.",
  homeHeroSubtitle: "Each project here is something I designed, deployed, and documented — from Terraform infrastructure to security architecture. Browse the work and see for yourself.",

  projectsHeroTitle: "Projects I've built to learn cloud security and prove what I can do.",
  projectsHeroSubtitle: "This page brings together the hands-on projects, labs, and technical writeups I'm building. The goal is to show how I think, how I implement, and what I'm learning through visible, working examples.",

  aboutHeroTitle: "I learn cloud security by building projects, not just passing exams.",
  aboutHeroSubtitle: "I document architecture decisions, security tradeoffs, and implementation details so hiring managers and peers can evaluate my work directly — not just take my word for it.",

  contactHeroTitle: "Start with my AWS projects, then check the resume. The work speaks for itself.",
  contactHeroSubtitle: "Review my projects and background directly, or reach out if you want to discuss specific work. I'm building toward cloud security roles and happy to talk about what I've shipped.",

  // --- Homepage Value Boxes ---
  homeValueOneTitle: "Hands-On Cloud Security Projects",
  homeValueOneBody: "Real AWS projects covering security architecture, hardening, detection, and infrastructure-as-code — built to learn and built to show.",
  homeValueTwoTitle: "Projects Over Promises",
  homeValueTwoBody: "Instead of just listing skills on a resume, I build projects that make my technical ability easier to see, evaluate, and trust.",
  homeValueThreeTitle: "Learning Architecture by Building It",
  homeValueThreeBody: "Every project here includes real design decisions, security tradeoffs, and implementation notes that show how I approach problems — not just the final result.",

  aboutSnapshotStrength: "Building real projects instead of just studying for certs — using AI tools to ship faster and learn deeper.",

  // --- Featured Project ---
  featuredProjectTitle: "Security Portfolio Platform in AWS",
  featuredProjectShortDescription: "A cloud-hosted portfolio platform I built using HTML, CSS, AWS S3, CloudFront, and Terraform. This is both my live portfolio and a hands-on project that demonstrates real cloud deployment, infrastructure-as-code, and professional technical presentation.",
  featuredProjectSlug: "portfolio-platform.html",
  starterProjectLabel: "Featured Project",
  starterProjectEyebrow: "Featured Project • AWS Portfolio Foundation",
  starterProjectOutcome: "A live portfolio I built and deployed to AWS to showcase my cloud security projects and technical growth.",
  starterProjectStackShort: "HTML • CSS • AWS S3 • CloudFront • Terraform",

  // --- Focus Areas ---
  focusAreaOneTitle: "AWS Security Projects",
  focusAreaOneDescription: "Hands-on projects involving AWS architecture, security controls, hardening, and cloud infrastructure — built to learn and demonstrate real implementation skills.",
  focusAreaTwoTitle: "Detection and Security Tooling",
  focusAreaTwoDescription: "Projects focused on logging, monitoring, detection workflows, and security tooling that strengthen cloud visibility and operational awareness.",
  focusAreaThreeTitle: "Architecture and Technical Writeups",
  focusAreaThreeDescription: "Structured writeups and architecture notes that explain design decisions, security reasoning, and implementation logic — some accelerated with AI tools to communicate complex ideas clearly.",
  focusAreasSectionDesc: "These categories represent the kinds of technical work most relevant to cloud security roles and hands-on implementation.",

  // --- Shared Short Copy ---
  communityShort: "A cloud security portfolio showcasing AWS projects, AI-powered workflows, and technical implementations built through the AI Cloud Security Lab.",
  communityShorter: "AWS security projects and AI-powered cloud workflows — built, deployed, and documented in one place.",
  starterShort: "Cloud security projects, AWS labs, and technical writeups that show employers what I build and how I think about security.",
  starterShorter: "AWS security projects and technical writeups that show real implementation, not just certifications.",
  proofOfWorkShort: "Projects, labs, and writeups that make my cloud security skills easier to evaluate and trust — built to be seen, not just described.",

  // --- Template Promo ---
  templatePromoTitle: "Build your own portfolio",
  templatePromoText: "Want a version like this? Join the AI Cloud Security Lab community and use this template to build, deploy, and launch your own portfolio.",
  templatePromoCommunityLabel: "Join the AI Cloud Security Lab",
  templatePromoGithubLabel: "Get the Template",
  skoolUrl: "https://www.skool.com/cloud-security-lab",
  templateRepoUrl: "https://github.com/botz-pillar/your-security-portfolio",

  // --- Assets ---
  headshotPath: "assets/img/headshot.png",
  headshotPathNested: "../assets/img/headshot.png",
  faviconPath: "assets/img/favicon.svg",
  faviconPathNested: "../assets/img/favicon.svg",

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

  // --- Footer / Shared Labels ---
  footerText: "© 2026 [YOUR_SITE_NAME]",
  copyrightYear: "2026",
  manifestPortfolioLabel: "portfolio-overview.json",
  manifestProjectsLabel: "project-index.yml",
  manifestArchitectureLabel: "architecture-summary.yml",

  // --- Meta Descriptions ---
  defaultMetaDescription: "A cloud security portfolio showcasing hands-on AWS projects, AI-assisted development, and real technical implementation.",
  homeMetaDescription: "Cloud security portfolio featuring hands-on AWS projects, security architecture, AI-assisted workflows, and technical implementation experience.",
  projectsMetaDescription: "Hands-on cloud security projects, AWS labs, detection tooling, and architecture writeups built through real implementation.",
  aboutMetaDescription: "Learn about the builder behind this cloud security portfolio — their focus areas, technical approach, and hands-on project work.",
  contactMetaDescription: "Connect directly, review the resume, and explore the cloud security projects featured throughout this portfolio.",
  errorMetaDescription: "The page you were looking for could not be found. Return to the homepage or browse the project collection.",
  projectMetaDescription: "A detailed project page covering AWS hosting, Terraform infrastructure, and the technical decisions behind a live cloud security portfolio.",

  // --- Page Title ---
  pageTitleSuffix: "Cloud Security Portfolio",

  /*
    ========================================================
    ========================================================

    TIER 3: PAGE CONTENT

    You can safely ignore everything below this line for
    your first deployment.

    These values populate the longer content sections on
    individual pages (About, Projects, Contact, and project
    detail pages). They are pre-filled with starter language
    that works out of the box. Come back and personalize
    them once your portfolio is live and you are ready to
    refine.

    ========================================================
    ========================================================
  */

  // --- About Page Content ---
  aboutSectionOneHeading: "What I Focus On",
  aboutSectionOneBody: "I'm focused on cloud security, AWS architecture, and applied implementation. I build projects that demonstrate how security decisions work in production-like environments — not simplified tutorials or theory exercises.",
  aboutSectionTwoHeading: "How I Approach Technical Work",
  aboutSectionTwoBody: "I learn best by building. Each project here includes real implementation decisions, clear documentation, and notes on what worked and what I'd do differently. I use AI tools to move faster and stay focused on what matters — shipping working projects that demonstrate actual skills.",
  aboutSectionThreeHeading: "Why This Portfolio Exists",
  aboutSectionThreeBody: "A resume shows titles and skills. This portfolio shows the actual work — architecture decisions, problems I solved, and how I approach security challenges. That context is what hiring managers want when evaluating early-career candidates.",

  aboutSidebarProjectsDesc: "AWS security projects, hands-on implementations, and portfolio-ready writeups that show real work.",
  aboutSidebarArchitectureDesc: "Design decisions, security tradeoffs, and implementation notes explained clearly for technical and non-technical readers.",
  aboutSidebarDirectionDesc: "A growing body of work that reflects cloud security depth, initiative, and practical execution.",
  aboutFeatureTagOne: "AWS Security",
  aboutFeatureTagTwo: "AI + Automation",
  aboutFeatureTagThree: "Architecture",
  aboutNextStepText: "Start with the projects page to see the technical work directly, then use the contact page if you want to connect.",

  // --- Projects Page Content ---
  featuredSectionDesc: "A featured project gives hiring managers, recruiters, and technical peers a strong starting point for understanding what I build and how I approach implementation.",
  projectsCategorySectionHeading: "Project Categories",
  projectsCategorySectionDesc: "These categories represent the kinds of work I'm building toward — each one connected to real cloud security skills that employers look for.",
  projectsUdpJoke: "Small security joke for the road: I would tell you a UDP joke, but you might not get it.",
  projectsManifestYaml: "featured:\n  - security-portfolio-platform\n\nfocus_areas:\n  - aws-security-projects\n  - detection-and-tooling\n  - ai-assisted-development\n\naudience:\n  - hiring-managers\n  - recruiters\n  - technical-peers\n\ngoal:\n  - show technical depth\n  - demonstrate implementation\n  - make project work easier to evaluate",
  projectsManifestThemes: "AWS • Detection • AI + Architecture",
  projectsManifestWhatShows: "Hands-on implementation with real technical depth",
  suggestedProjectOneTitle: "AWS Hardening Lab",
  suggestedProjectOneDescription: "A future project focused on strengthening AWS configurations, documenting security decisions, and showing practical cloud hardening skills.",
  suggestedProjectTwoTitle: "Detection Engineering Lab",
  suggestedProjectTwoDescription: "A future project focused on logs, alerts, detection logic, and the practical side of improving cloud security visibility.",

  // --- Portfolio Platform Project Content ---
  projectPortfolioOverviewHeading: "Project Overview",
  projectPortfolioOverviewBody: "This project is a cloud-hosted portfolio platform I built to present my technical work in a clear, structured way. Instead of relying only on a resume or LinkedIn summary, it gives me a live environment where projects, labs, and technical writeups can be organized and explained with real context.",
  projectPortfolioProblemHeading: "Problem It Solves",
  projectPortfolioProblemBody: "Most of my early technical work was scattered — class projects in private repos, assignments with no context, skills listed as resume bullets with no proof. I wanted a place where this work was visible, organized, and actually explainable. That is what this site does.",
  projectPortfolioArchHeading: "Architecture Overview",
  projectPortfolioArchBody: "The platform uses a static front end for speed, simplicity, and low operational overhead. Site files are stored in Amazon S3 and delivered through CloudFront, while Terraform manages the infrastructure configuration. This keeps the implementation approachable while still reflecting real cloud deployment decisions and disciplined infrastructure workflow.",
  projectPortfolioArchPlaceholder: "[Add architecture diagram, deploy screenshot, or AWS console image here later]",
  projectPortfolioDemoHeading: "What This Demonstrates",
  projectPortfolioDemoBody: "This project demonstrates practical cloud engineering skills: working with AWS delivery patterns, using infrastructure as code, making architecture decisions that balance simplicity and usefulness, and presenting technical work in a way that others can understand and assess.",
  projectPortfolioWhyHeading: "Why It Works as a Portfolio Foundation",
  projectPortfolioWhyBody: "I built this to be simple to maintain, flexible to expand, and professional enough to share with employers. It gives my future projects a home that is already live, already structured, and aligned to how hiring managers typically evaluate technical candidates.",
  projectPortfolioSnapshotType: "Cloud-Hosted Portfolio Platform",
  projectPortfolioSnapshotBestFor: "Presenting projects, labs, and technical writeups clearly",
  projectPortfolioSnapshotHosting: "AWS S3 + CloudFront",
  projectPortfolioSnapshotInfra: "Terraform",

  // --- Contact Page Content ---
  contactSidebarResumeDesc: "Review my background, skills, and experience in a format designed for hiring managers and recruiters.",
  contactSidebarProjectsDesc: "Explore the projects and technical writeups that show how I approach implementation, architecture, and cloud security.",
  contactSidebarDirectDesc: "Reach out by email or LinkedIn to discuss the work, ask questions, or start a professional conversation.",
  contactResumeCardDesc: "Start here if you want a quick overview of my background, skills, and where I'm headed in cloud security.",
  contactProjectsCardDesc: "Review the technical work directly — AWS projects, implementation notes, and hands-on security-focused builds.",
  contactEmailCardDesc: "Reach out directly for professional inquiries, collaboration, or questions about the projects featured here.",
  contactLinkedInCardDesc: "Connect professionally, follow my progress, and stay current on future projects and technical updates.",
  contactGitHubCardDesc: "Explore repositories, project code, and supporting files that show how the work is structured and maintained.",
  contactWaysToConnectDesc: "Choose the option that works best — whether you want to review my work, check my background, or reach out directly."
};

/*
  ==========================================================
  HELPER FUNCTIONS
  Leave this section alone unless you know what you are doing.
  ==========================================================
*/

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((el) => {
    el.textContent = value;
  });
}


function setHref(selector, value) {
  document.querySelectorAll(selector).forEach((el) => {
    el.setAttribute("href", value);
  });
}

function setSrc(selector, value) {
  document.querySelectorAll(selector).forEach((el) => {
    el.setAttribute("src", value);
  });
}

function setMailto(selector, value) {
  document.querySelectorAll(selector).forEach((el) => {
    el.setAttribute("href", `mailto:${value}`);
  });
}

function hideElements(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    el.style.display = "none";
  });
}

function bindOptionalHref(selector, value) {
  const trimmed = typeof value === "string" ? value.trim() : "";

  if (!trimmed) {
    hideElements(selector);
    return;
  }

  setHref(selector, trimmed);
}


/*
  ==========================================================
  PAGE BINDING
  Leave this section alone unless you know what you are doing.
  ==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {
  const isNestedProjectPage =
    window.location.pathname.includes("/projects/") ||
    window.location.href.includes("/projects/");

  const headshotPath = isNestedProjectPage
    ? SITE_CONFIG.headshotPathNested
    : SITE_CONFIG.headshotPath;

  const faviconPath = isNestedProjectPage
    ? SITE_CONFIG.faviconPathNested
    : SITE_CONFIG.faviconPath;

  // Core identity
  setText("[data-site-name]", SITE_CONFIG.siteName);
  setText("[data-site-brand]", SITE_CONFIG.siteBrand);
  setText("[data-site-title-short]", SITE_CONFIG.siteTitleShort);
  setText("[data-site-first-name]", SITE_CONFIG.siteFirstName);
  setText("[data-site-last-name]", SITE_CONFIG.siteLastName);
  setText("[data-site-full-name]", SITE_CONFIG.siteFullName);
  setText("[data-site-tagline]", SITE_CONFIG.siteTagline);
  setText("[data-site-tagline-short]", SITE_CONFIG.siteTaglineShort);
  setText("[data-home-hero-title]", SITE_CONFIG.homeHeroTitle);
  setText("[data-home-hero-subtitle]", SITE_CONFIG.homeHeroSubtitle);
  setText("[data-projects-hero-title]", SITE_CONFIG.projectsHeroTitle);
  setText("[data-projects-hero-subtitle]", SITE_CONFIG.projectsHeroSubtitle);
  setText("[data-about-hero-title]", SITE_CONFIG.aboutHeroTitle);
  setText("[data-about-hero-subtitle]", SITE_CONFIG.aboutHeroSubtitle);
  setText("[data-contact-hero-title]", SITE_CONFIG.contactHeroTitle);
  setText("[data-contact-hero-subtitle]", SITE_CONFIG.contactHeroSubtitle);
  setText("[data-site-role-title]", SITE_CONFIG.roleTitle);
  setText("[data-site-focus-line]", SITE_CONFIG.focusLine);

  // CTA labels
  setText("[data-cta-join-community]", SITE_CONFIG.ctaJoinCommunity);
  setText("[data-cta-join-free-community]", SITE_CONFIG.ctaJoinFreeCommunity);
  setText("[data-cta-view-projects]", SITE_CONFIG.ctaViewProjects);
  setText("[data-cta-browse-projects]", SITE_CONFIG.ctaBrowseProjects);
  setText("[data-cta-open-starter-project]", SITE_CONFIG.ctaOpenStarterProject);
  setText("[data-cta-read-project-details]", SITE_CONFIG.ctaReadProjectDetails);
  setText("[data-cta-go-home]", SITE_CONFIG.ctaGoHome);

  // Repeated short copy
  setText("[data-community-short]", SITE_CONFIG.communityShort);
  setText("[data-community-shorter]", SITE_CONFIG.communityShorter);
  setText("[data-starter-short]", SITE_CONFIG.starterShort);
  setText("[data-starter-shorter]", SITE_CONFIG.starterShorter);
  setText("[data-proof-of-work-short]", SITE_CONFIG.proofOfWorkShort);
  setText("[data-home-value-one-title]", SITE_CONFIG.homeValueOneTitle);
  setText("[data-home-value-one-body]", SITE_CONFIG.homeValueOneBody);
  setText("[data-home-value-two-title]", SITE_CONFIG.homeValueTwoTitle);
  setText("[data-home-value-two-body]", SITE_CONFIG.homeValueTwoBody);
  setText("[data-home-value-three-title]", SITE_CONFIG.homeValueThreeTitle);
  setText("[data-home-value-three-body]", SITE_CONFIG.homeValueThreeBody);
  setText("[data-about-snapshot-strength]", SITE_CONFIG.aboutSnapshotStrength);

  // Featured project / starter values
  setText("[data-featured-project-title]", SITE_CONFIG.featuredProjectTitle);
  setText(
    "[data-featured-project-short-description]",
    SITE_CONFIG.featuredProjectShortDescription
  );
  setText("[data-starter-project-label]", SITE_CONFIG.starterProjectLabel);
  setText("[data-starter-project-eyebrow]", SITE_CONFIG.starterProjectEyebrow);
  setText("[data-starter-project-outcome]", SITE_CONFIG.starterProjectOutcome);
  setText(
    "[data-starter-project-stack-short]",
    SITE_CONFIG.starterProjectStackShort
  );

  // Focus areas
  setText("[data-focus-area-one-title]", SITE_CONFIG.focusAreaOneTitle);
  setText("[data-focus-area-one-description]", SITE_CONFIG.focusAreaOneDescription);
  setText("[data-focus-area-two-title]", SITE_CONFIG.focusAreaTwoTitle);
  setText("[data-focus-area-two-description]", SITE_CONFIG.focusAreaTwoDescription);
  setText("[data-focus-area-three-title]", SITE_CONFIG.focusAreaThreeTitle);
  setText("[data-focus-area-three-description]", SITE_CONFIG.focusAreaThreeDescription);

  // Footer / year
  setText("[data-site-year]", SITE_CONFIG.copyrightYear);
  setText("[data-site-footer]", SITE_CONFIG.footerText);

  // Required links
  setHref("[data-site-skool]", SITE_CONFIG.skoolUrl);
  setHref("[data-site-template-repo]", SITE_CONFIG.templateRepoUrl);
  setMailto("[data-site-email]", SITE_CONFIG.email);
  setText("[data-site-email-text]", SITE_CONFIG.email);
  setHref("[data-site-resume]", SITE_CONFIG.resumeUrl);

  // Optional links
  bindOptionalHref("[data-site-linkedin]", SITE_CONFIG.linkedinUrl);
  bindOptionalHref("[data-site-github]", SITE_CONFIG.githubUrl);
  bindOptionalHref("[data-site-youtube]", SITE_CONFIG.youtubeUrl);
  bindOptionalHref("[data-site-website]", SITE_CONFIG.websiteUrl);

  // Link / button labels
  setText("[data-site-linkedin-label]", SITE_CONFIG.linkedinLabel);
  setText("[data-site-github-label]", SITE_CONFIG.githubLabel);
  setText("[data-site-email-label]", SITE_CONFIG.emailLabel);
  setText("[data-site-youtube-label]", SITE_CONFIG.youtubeLabel);
  setText("[data-site-website-label]", SITE_CONFIG.websiteLabel);
  setText("[data-site-resume-label]", SITE_CONFIG.resumeLabel);

  // Built-in template promo
  setText("[data-template-promo-title]", SITE_CONFIG.templatePromoTitle);
  setText("[data-template-promo-text]", SITE_CONFIG.templatePromoText);
  setText(
    "[data-template-promo-community-label]",
    SITE_CONFIG.templatePromoCommunityLabel
  );
  setText(
    "[data-template-promo-github-label]",
    SITE_CONFIG.templatePromoGithubLabel
  );

  // Shared assets
  setSrc("[data-site-headshot]", headshotPath);
  setHref("[data-site-favicon]", faviconPath);

  // Shared labels
  setText("[data-manifest-portfolio-label]", SITE_CONFIG.manifestPortfolioLabel);
  setText("[data-manifest-projects-label]", SITE_CONFIG.manifestProjectsLabel);
  setText(
    "[data-manifest-architecture-label]",
    SITE_CONFIG.manifestArchitectureLabel
  );

  // Optional meta description support
  document.querySelectorAll("meta[data-meta-description]").forEach((el) => {
    const key = el.getAttribute("data-meta-description");
    if (key && SITE_CONFIG[key]) {
      el.setAttribute("content", SITE_CONFIG[key]);
    }
  });

  // --- About page bindings ---
  setText("[data-about-section-one-heading]", SITE_CONFIG.aboutSectionOneHeading);
  setText("[data-about-section-one-body]", SITE_CONFIG.aboutSectionOneBody);
  setText("[data-about-section-two-heading]", SITE_CONFIG.aboutSectionTwoHeading);
  setText("[data-about-section-two-body]", SITE_CONFIG.aboutSectionTwoBody);
  setText("[data-about-section-three-heading]", SITE_CONFIG.aboutSectionThreeHeading);
  setText("[data-about-section-three-body]", SITE_CONFIG.aboutSectionThreeBody);
  setText("[data-about-sidebar-projects-desc]", SITE_CONFIG.aboutSidebarProjectsDesc);
  setText("[data-about-sidebar-architecture-desc]", SITE_CONFIG.aboutSidebarArchitectureDesc);
  setText("[data-about-sidebar-direction-desc]", SITE_CONFIG.aboutSidebarDirectionDesc);
  setText("[data-about-feature-tag-one]", SITE_CONFIG.aboutFeatureTagOne);
  setText("[data-about-feature-tag-two]", SITE_CONFIG.aboutFeatureTagTwo);
  setText("[data-about-feature-tag-three]", SITE_CONFIG.aboutFeatureTagThree);
  setText("[data-about-next-step-text]", SITE_CONFIG.aboutNextStepText);

  // --- Projects page bindings ---
  setText("[data-featured-section-desc]", SITE_CONFIG.featuredSectionDesc);
  setText("[data-projects-category-section-heading]", SITE_CONFIG.projectsCategorySectionHeading);
  setText("[data-projects-category-section-desc]", SITE_CONFIG.projectsCategorySectionDesc);
  setText("[data-projects-udp-joke]", SITE_CONFIG.projectsUdpJoke);
  setText("[data-projects-manifest-yaml]", SITE_CONFIG.projectsManifestYaml);
  setText("[data-projects-manifest-themes]", SITE_CONFIG.projectsManifestThemes);
  setText("[data-projects-manifest-what-shows]", SITE_CONFIG.projectsManifestWhatShows);
  setText("[data-suggested-project-one-title]", SITE_CONFIG.suggestedProjectOneTitle);
  setText("[data-suggested-project-one-description]", SITE_CONFIG.suggestedProjectOneDescription);
  setText("[data-suggested-project-two-title]", SITE_CONFIG.suggestedProjectTwoTitle);
  setText("[data-suggested-project-two-description]", SITE_CONFIG.suggestedProjectTwoDescription);

  // --- Portfolio platform project page bindings ---
  setText("[data-project-portfolio-overview-heading]", SITE_CONFIG.projectPortfolioOverviewHeading);
  setText("[data-project-portfolio-overview-body]", SITE_CONFIG.projectPortfolioOverviewBody);
  setText("[data-project-portfolio-problem-heading]", SITE_CONFIG.projectPortfolioProblemHeading);
  setText("[data-project-portfolio-problem-body]", SITE_CONFIG.projectPortfolioProblemBody);
  setText("[data-project-portfolio-arch-heading]", SITE_CONFIG.projectPortfolioArchHeading);
  setText("[data-project-portfolio-arch-body]", SITE_CONFIG.projectPortfolioArchBody);
  setText("[data-project-portfolio-arch-placeholder]", SITE_CONFIG.projectPortfolioArchPlaceholder);
  setText("[data-project-portfolio-demo-heading]", SITE_CONFIG.projectPortfolioDemoHeading);
  setText("[data-project-portfolio-demo-body]", SITE_CONFIG.projectPortfolioDemoBody);
  setText("[data-project-portfolio-why-heading]", SITE_CONFIG.projectPortfolioWhyHeading);
  setText("[data-project-portfolio-why-body]", SITE_CONFIG.projectPortfolioWhyBody);
  setText("[data-project-portfolio-snapshot-type]", SITE_CONFIG.projectPortfolioSnapshotType);
  setText("[data-project-portfolio-snapshot-best-for]", SITE_CONFIG.projectPortfolioSnapshotBestFor);
  setText("[data-project-portfolio-snapshot-hosting]", SITE_CONFIG.projectPortfolioSnapshotHosting);
  setText("[data-project-portfolio-snapshot-infra]", SITE_CONFIG.projectPortfolioSnapshotInfra);

  // --- Contact page bindings ---
  setText("[data-contact-sidebar-resume-desc]", SITE_CONFIG.contactSidebarResumeDesc);
  setText("[data-contact-sidebar-projects-desc]", SITE_CONFIG.contactSidebarProjectsDesc);
  setText("[data-contact-sidebar-direct-desc]", SITE_CONFIG.contactSidebarDirectDesc);
  setText("[data-contact-resume-card-desc]", SITE_CONFIG.contactResumeCardDesc);
  setText("[data-contact-projects-card-desc]", SITE_CONFIG.contactProjectsCardDesc);
  setText("[data-contact-email-card-desc]", SITE_CONFIG.contactEmailCardDesc);
  setText("[data-contact-linkedin-card-desc]", SITE_CONFIG.contactLinkedInCardDesc);
  setText("[data-contact-github-card-desc]", SITE_CONFIG.contactGitHubCardDesc);
  setText("[data-contact-ways-to-connect-desc]", SITE_CONFIG.contactWaysToConnectDesc);

  // --- Shared bindings (index + projects) ---
  setText("[data-focus-areas-section-desc]", SITE_CONFIG.focusAreasSectionDesc);

  // Page title
  const pageId = document.body.getAttribute("data-page-id");
  if (pageId === "home") {
    document.title = SITE_CONFIG.siteName + " | " + SITE_CONFIG.pageTitleSuffix;
  } else if (pageId === "project-detail") {
    document.title = SITE_CONFIG.featuredProjectTitle + " | " + SITE_CONFIG.siteName;
  } else if (pageId) {
    const pageTitles = {
      projects: "Projects",
      about: "About",
      contact: "Contact",
      error: "Page Not Found"
    };
    document.title = (pageTitles[pageId] || pageId) + " | " + SITE_CONFIG.siteName;
  }

  console.log("Template site config loaded.");
});
