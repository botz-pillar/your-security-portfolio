# Student Notes

## Start Here

Before changing anything, make sure you can:

- open the project in VS Code
- use the VS Code terminal
- run `aws --version`
- run `terraform version`
- run `aws sts get-caller-identity`

## Fastest Path To A Live Portfolio

If your goal is to get an MVP portfolio live quickly:

1. open `assets/js/main.js`
2. update the **Tier 1: Required Personal Info** fields
3. replace `assets/img/headshot.png` with your own image
4. preview locally
5. deploy when ready

If you only update the Tier 1 fields in `main.js`, your site should already be in a strong starting state. The Tier 2 starter language is pre-written and works out of the box.

## What To Update First

Open `assets/js/main.js` and update these Tier 1 fields:

- `siteName`
- `siteBrand`
- `siteFirstName`
- `siteLastName`
- `siteFullName`
- `roleTitle`
- `email`
- `resumeUrl`

Optional links (leave blank if you do not have them yet):

- `linkedinUrl`
- `githubUrl`
- `youtubeUrl`
- `websiteUrl`

## How main.js Is Organized (Three Tiers)

The `SITE_CONFIG` object in `main.js` is organized into three tiers:

### Tier 1: Required Personal Info
The 8 fields you must update before publishing. This is your name, role, email, resume link, etc. **Start here.**

### Tier 2: Starter Language
Pre-written copy for hero sections, value boxes, focus areas, featured project, and shared messaging. This is written in a "Builder + Learner" tone that works out of the box for someone in the AI Cloud Security Lab. **Tweak this when you want to personalize your voice.**

### Tier 3: Page Content
Deeper content for individual pages (about, projects, contact, portfolio project). These have good defaults and you can ignore them entirely for your first deployment. **Customize these when you want full control over every section.**

You can safely ignore everything in Tier 3 for your first deployment. It is all pre-filled with starter language.

## What main.js Controls

`main.js` is the main control center for customization. It controls:

- homepage hero copy and value boxes
- projects page hero copy and category descriptions
- about page hero copy and all section content
- contact page hero copy and card descriptions
- featured project summary
- focus areas
- template promo section
- page titles (set dynamically)
- meta descriptions
- shared labels, links, and CTA text

That means you should not need to hunt through multiple HTML files just to make normal first-time updates.

## Replace Your Images

Replace:

- `assets/img/headshot.png`
- `assets/img/favicon.svg` (optional)

Keep the same filenames unless you also plan to update the paths in `main.js`.

## When To Edit HTML Pages Directly

After `main.js` is updated, the HTML files are mostly for deeper customization.

Use the HTML files when you want to:

- rewrite longer supporting sections
- change layout or page structure
- add new sections to a page
- modify bullet point lists (implementation notes, etc.)
- go beyond the starter version

## How To Add A New Project

1. Copy `projects/project-template.html` to a new file:
   ```bash
   cp projects/project-template.html projects/your-project-name.html
   ```

2. Open your new file and replace all `[BRACKETED]` placeholder text with your own content. Search for `[` to find them all.

3. Update the content sections:
   - Project Overview
   - Problem It Solves
   - Architecture Overview
   - Implementation Notes
   - What This Demonstrates
   - What I Learned

4. Update the sidebar:
   - Project Snapshot metadata
   - Core Technologies tags
   - What Reviewers Can See Here

5. Add a link to your new project from `projects.html`. Copy one of the existing project cards in the `projects-grid` section and update the title, description, tags, and link.

6. If you want to feature the new project, update the `featuredProjectTitle` and related fields in `main.js`.

7. Preview locally, then deploy with `bash scripts/deploy-site.sh`.

## Best Personalization Order

1. update Tier 1 fields in `main.js`
2. replace your image files
3. preview the site locally
4. customize Tier 2 starter language if desired
5. add your first real project using the template
6. deploy

## Before Deploying

Check:

- nav links work
- footer links work
- images load
- email button works
- resume button works
- nested project page styling works
- favicon appears
- `main.js` loads without browser console errors

## Deployment Reminder

Infrastructure changes and content changes are different.

- **content changes** → run `bash scripts/deploy-site.sh`
- **Terraform changes** → run `terraform plan` / `terraform apply` from `site/`, then redeploy content

## Common Mistakes

- forgetting to save files before running commands
- changing HTML when the update should have been made in `main.js`
- forgetting to update `roleTitle`
- forgetting to update `email`
- forgetting to update `resumeUrl`
- leaving `[BRACKETED]` placeholder text in published pages
- editing content in S3 instead of updating local files first
- forgetting to invalidate CloudFront after manual uploads

## Best Practice

Treat your local project files as the source of truth.

Make changes locally, test locally, then deploy.
