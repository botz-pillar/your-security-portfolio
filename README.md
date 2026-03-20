# Security Portfolio Template

A practical portfolio starter for cloud security and technical professionals who want to publish a clean, professional site quickly.

This template is designed to help you:
- present your background clearly
- showcase projects, labs, and technical writeups
- make it easier for employers, recruiters, and peers to understand your work
- launch an MVP portfolio fast, then improve it over time

## Who This Is For

This template is a strong fit for professionals who want to showcase work such as:
- AWS and cloud security projects
- detection and security tooling work
- architecture notes and technical writeups
- implementation-focused labs
- practical security documentation

## Start Here

If you want the fastest path to a live portfolio:

1. Clone or use this template in your own GitHub account.
2. Open `assets/js/main.js`.
3. Update the required personal info placeholders first.
4. Replace `assets/img/headshot.png` with your own image.
5. Preview locally.
6. Deploy when ready.

If you only change `main.js`, your site should already be in a strong starting state.

## What To Edit First

Open:
- `assets/js/main.js`

Update these first:
- `siteName`
- `siteBrand`
- `siteFirstName`
- `siteLastName`
- `siteFullName`
- `roleTitle`
- `email`
- `resumeUrl`
- `templateRepoUrl`

Optional links:
- `linkedinUrl`
- `githubUrl`
- `youtubeUrl`
- `websiteUrl`

## How This Template Works

The template is built so that the most important shared content is centralized in:
- `assets/js/main.js`

That includes starter language for:
- homepage hero copy
- homepage value boxes
- featured project summary
- focus areas
- projects page hero copy
- about page hero copy
- contact page hero copy
- built-in template promo

That means you should not need to hunt through multiple HTML files just to make normal first-time changes.

## What Is Already Pre-Filled

This template includes starter language aimed at a cloud security professional using the site for:
- job search and self-promotion
- technical credibility
- documentation of projects and labs
- clearer presentation of experience

You can keep that language, adjust it, or fully replace it in `main.js`.

## Files and Structure

```text
YOUR-SECURITY-PORTFOLIO/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   ├── favicon.svg
│   │   └── headshot.png
│   └── js/
│       └── main.js
├── docs/
│   ├── architecture-notes.md
│   ├── student-notes.md
│   └── troubleshooting.md
├── projects/
│   └── portfolio-platform.html
├── scripts/
│   └── deploy-site.sh
├── site/
│   ├── main.tf
│   ├── outputs.tf
│   ├── terraform.tfvars
│   └── variables.tf
├── 404.html
├── about.html
├── contact.html
├── index.html
├── projects.html
└── README.md
```

## Current Pages

- `index.html` — homepage
- `projects.html` — project portfolio hub
- `projects/portfolio-platform.html` — featured project page
- `about.html` — professional background and approach
- `contact.html` — ways to connect
- `404.html` — custom not found page

## What Stays In `main.js` vs HTML

### Usually update in `main.js`
Use `main.js` for:
- identity
- role/title
- email
- resume link
- optional social links
- core hero language
- featured project summary
- focus areas
- shared starter messaging

### Usually update in HTML only if you want deeper customization
Use the HTML files when you want to:
- rewrite longer supporting sections
- change layout or page structure
- tailor the site beyond the starter version
- swap section emphasis for a different audience

## Images and Branding

Replace these files with your own versions if desired:
- `assets/img/headshot.png`
- `assets/img/favicon.svg`

If you keep the same filenames, you usually do not need to change paths in the HTML.

## Local Preview

You can:
- open the HTML files directly in a browser, or
- use VS Code Live Server

Recommended checks:
- nav links work
- footer links work
- headshot loads
- nested project page loads correctly from `/projects`
- CSS loads correctly on all pages
- favicon appears
- `main.js` loads without console errors

## GitHub Workflow

Recommended approach:
- create this in your own GitHub account using a template repo or by cloning it
- keep your customized version in your own repository
- use that repo as the source of truth for your portfolio

This is useful because your portfolio itself becomes part of your professional signal: it shows that you can structure, maintain, and publish technical work cleanly.

## Deployment Overview

This template includes Terraform and an AWS deployment workflow using:
- S3
- CloudFront
- Terraform

### First-time setup

Install and verify:

```bash
aws --version
terraform version
```

Configure AWS locally:

```bash
aws configure
aws sts get-caller-identity
```

Then initialize Terraform:

```bash
cd site
terraform init
terraform validate
terraform plan
```

### First deployment

From `site/`:

```bash
terraform apply
terraform output
```

Then from the project root:

```bash
bash scripts/deploy-site.sh
```

### Normal content updates

When you change HTML, CSS, JS, or images:

```bash
bash scripts/deploy-site.sh
```

### Infrastructure updates

When you change Terraform:

```bash
cd site
terraform plan
terraform apply
cd ..
bash scripts/deploy-site.sh
```

## Teardown

If you want to fully remove the AWS resources:

```bash
cd site
terraform plan -destroy
terraform output
```

Empty the bucket first:

```bash
aws s3 rm s3://YOUR_BUCKET_NAME --recursive
```

Then destroy:

```bash
terraform destroy
```

## Security Notes

This template demonstrates a simple, strong hosting pattern:
- private S3 origin
- CloudFront-only access to the bucket
- HTTPS delivery
- encryption at rest
- versioning enabled
- infrastructure as code with Terraform
- low attack surface through a static site architecture

## Final Checklist Before Publish

Update:
- your name
- your role/title
- your email
- your resume link
- your headshot
- your optional links
- your featured project if needed
- your focus areas if needed

Then preview the site and publish.

## The Point Of This Template

This is not just a website starter.
It is a way to make your technical work easier to see, understand, and trust.

A strong portfolio does not need to be huge on day one.
It needs to be live, credible, and clear.

That is enough to get momentum.