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
    REQUIRED PERSONAL INFO: UPDATE THESE FIRST
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
    STARTER LANGUAGE: HERO / POSITIONING
    This is pre-filled for a cloud security professional.
    Keep it, tweak it, or replace it.
    Example roleTitle: "Cloud Security Engineer"
    ========================================================
  */
  focusLine: "Cloud security, secure architecture, and hands-on implementation across AWS environments.",
  siteTagline: "Cloud Security • AWS • Detection • Secure Architecture",
  siteTaglineShort: "Cloud Security • AWS • Secure Architecture",

  homeHeroTitle:
    "I build safer cloud environments through practical security engineering.",
  homeHeroSubtitle:
    "This portfolio highlights AWS projects, security tooling, architecture decisions, and technical work that demonstrate how I approach cloud security in practice.",

  projectsHeroTitle:
    "Projects that show how I approach cloud security in practice.",
  projectsHeroSubtitle:
    "This page brings together the projects, labs, and technical writeups that best represent my work. The goal is to make my technical approach easier to understand through visible implementation, clearer architecture thinking, and practical examples.",

  aboutHeroTitle:
    "I build cloud security work that is practical, explainable, and grounded in real implementation.",
  aboutHeroSubtitle:
    "I use this portfolio to document the projects, architecture decisions, and technical work that best reflect how I approach cloud security. The goal is to make my experience easier to understand through visible execution, clearer communication, and projects that show how I think.",

  contactHeroTitle:
    "The best way to understand my work is to review the projects, resume, and technical details directly.",
  contactHeroSubtitle:
    "This page makes it easy to connect, review my background, and explore the work that best reflects my cloud security experience.",

  /*
    ========================================================
    STARTER LANGUAGE: HOMEPAGE VALUE BOXES
    These are written for employers, recruiters, and technical peers.
    ========================================================
  */
  homeValueOneTitle: "Cloud Security Experience",
  homeValueOneBody:
    "Explore hands-on work related to AWS security, hardening, logging, detection, and architecture decisions in real technical environments.",
  homeValueTwoTitle: "Projects That Show How I Work",
  homeValueTwoBody:
    "See projects, labs, and writeups that make my technical approach easier to evaluate than a resume bullet ever could.",
  homeValueThreeTitle: "Security Architecture Thinking",
  homeValueThreeBody:
    "This portfolio includes projects and writeups that show how I approach secure design, implementation decisions, and technical tradeoffs.",

  aboutSnapshotStrength:
    "Turning technical work into clear, visible projects that are easier to understand and discuss.",

  /*
    ========================================================
    FEATURED PROJECT
    Change this later if you want a different project featured first.
    ========================================================
  */
  featuredProjectTitle: "Security Portfolio Platform in AWS",
  featuredProjectShortDescription:
    "A practical static portfolio platform built with HTML, CSS, AWS S3, CloudFront, and Terraform. This project serves as both a live portfolio foundation and a repeatable example of cloud-hosted technical implementation presented in a professional way.",
  featuredProjectSlug: "portfolio-platform.html",
  starterProjectLabel: "Featured Project",
  starterProjectEyebrow: "Featured Project • AWS Portfolio Foundation",
  starterProjectOutcome:
    "A professional site for presenting projects, technical depth, and cloud security experience.",
  starterProjectStackShort: "HTML • CSS • AWS S3 • CloudFront • Terraform",

  /*
    ========================================================
    STARTER LANGUAGE: FOCUS AREAS
    These are pre-filled for a cloud / security professional.
    ========================================================
  */
  focusAreaOneTitle: "AWS Security Projects",
  focusAreaOneDescription:
    "Hands-on work involving AWS architecture, security controls, hardening decisions, and cloud-focused implementation.",
  focusAreaTwoTitle: "Detection & Security Tooling",
  focusAreaTwoDescription:
    "Projects involving logging, monitoring, detection workflows, and security platforms that support stronger operational visibility.",
  focusAreaThreeTitle: "Architecture & Technical Writeups",
  focusAreaThreeDescription:
    "Technical notes and structured writeups that explain design choices, implementation logic, and security reasoning clearly.",

  /*
    ========================================================
    STARTER LANGUAGE: SHARED SHORT COPY
    Keep these if they fit. Edit them if you want a stronger personal angle.
    ========================================================
  */
  communityShort:
    "A cloud security portfolio designed to showcase AWS projects, security tooling, architecture thinking, and hands-on implementation experience.",
  communityShorter:
    "Show AWS security projects, technical depth, and hands-on implementation experience in one place.",
  starterShort:
    "This portfolio showcases cloud security projects, labs, and technical work that help employers and peers understand what I build and how I think.",
  starterShorter:
    "Cloud security projects, AWS labs, and technical work that reflect real implementation experience.",
  proofOfWorkShort:
    "This site highlights projects, labs, and technical writeups that make my cloud security skills easier to understand, evaluate, and trust.",

  /*
    ========================================================
    BUILT-IN TEMPLATE PROMO / SELF-REFERRAL
    Keep this by default in the template version.
    If you want to remove it later, search your HTML files for:
    data-template-promo
    and either delete that section or swap in your own CTA.
    ========================================================
  */
  templatePromoTitle: "Build your own portfolio",
  templatePromoText:
    "Want a version like this? Join the community and use the template starter to build and deploy your own portfolio.",
  templatePromoCommunityLabel: "Learn in the Community",
  templatePromoGithubLabel: "Get the Template",
  skoolUrl: "https://www.skool.com/security-builder-lab-2699",
  templateRepoUrl: "https://github.com/botz-pillar/your-security-portfolio",

  /*
    ========================================================
    ASSETS
    Keep the filenames the same unless you want to change paths.
    Easiest move: just replace headshot.png with your own image and keep rolling.
    ========================================================
  */
  headshotPath: "assets/img/headshot.png",
  headshotPathNested: "../assets/img/headshot.png",
  faviconPath: "assets/img/favicon.svg",
  faviconPathNested: "../assets/img/favicon.svg",

  /*
    ========================================================
    COMMON CTA LABELS
    ========================================================
  */
  ctaJoinCommunity: "Join the Community",
  ctaJoinFreeCommunity: "Build Yours in the Community",
  ctaViewProjects: "View Projects",
  ctaBrowseProjects: "Browse Projects",
  ctaOpenStarterProject: "Open Featured Project",
  ctaReadProjectDetails: "Read Project Details",
  ctaGoHome: "Go Home",

  /*
    ========================================================
    BUTTON / LINK LABELS
    ========================================================
  */
  linkedinLabel: "Connect on LinkedIn",
  githubLabel: "View GitHub",
  emailLabel: "Send Email",
  youtubeLabel: "View YouTube",
  websiteLabel: "Visit Website",
  resumeLabel: "View Resume",

  /*
    ========================================================
    FOOTER / SHARED LABELS
    Leave placeholders where the user should clearly personalize.
    ========================================================
  */
  footerText: "© 2026 [YOUR_SITE_NAME]",
  copyrightYear: "2026",
  manifestPortfolioLabel: "portfolio-overview.json",
  manifestProjectsLabel: "project-index.yml",
  manifestArchitectureLabel: "architecture-summary.yml",

  /*
    ========================================================
    OPTIONAL META DESCRIPTIONS
    Leave these as placeholders for now if you want.
    This is not where careers are won or lost on day one.
    ========================================================
  */
  defaultMetaDescription: "[DEFAULT_META_DESCRIPTION]",
  homeMetaDescription: "[HOME_PAGE_META_DESCRIPTION]",
  projectsMetaDescription: "[PROJECTS_PAGE_META_DESCRIPTION]",
  aboutMetaDescription: "[ABOUT_PAGE_META_DESCRIPTION]",
  contactMetaDescription: "[CONTACT_PAGE_META_DESCRIPTION]",
  errorMetaDescription: "[404_PAGE_META_DESCRIPTION]",
  projectMetaDescription: "[PROJECT_DETAIL_META_DESCRIPTION]"
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

  console.log("Template site config loaded.");
});