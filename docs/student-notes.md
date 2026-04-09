# Student Notes

## Start Here

Before changing anything, make sure you can:

- open the project in VS Code
- use the VS Code terminal
- run `aws --version`
- run `terraform version`
- run `aws sts get-caller-identity`

## See It Instantly

Open `index.html` in your browser — no setup needed. You'll see the template with placeholder names, which is fine. This lets you explore the layout before editing anything.

## Fastest Path To A Live Portfolio

1. open `assets/js/config.js`
2. update the **5 required fields** at the top (name, role, email, resume link)
3. replace `assets/img/headshot.png` with your own image
4. open `setup.html` in your browser to verify
5. preview `index.html` locally
6. deploy when ready

If you only update those 5 fields, the site is already publish-ready. Everything else is pre-filled.

## What To Update First

Open `assets/js/config.js` and update these 5 fields at the very top:

- `siteFirstName`
- `siteLastName`
- `roleTitle`
- `email`
- `resumeUrl`

Your site name and full name are auto-generated from your first and last name. You don't need to set them separately.

## Optional Links

Fill these in when ready (leave blank to hide):

- `linkedinUrl`
- `githubUrl`
- `youtubeUrl`
- `websiteUrl`
- `schedulingUrl` — Calendly, Cal.com, or any booking link (adds a "Book a Call" card to the contact page)

## Customize Your FAQ

Find the `faq` array in `config.js`. Each item has a `question` and `answer`. Update these to match your own work. The FAQ appears on the homepage and contact page.

## Customize "What I'm Working On"

Find the `currentlyBuilding` array in `config.js`. Update the items to reflect what you're actually building. Set to `[]` to hide the section.

## Add Your Skills

Find the `skills` and `certifications` arrays in `config.js`. Add your own skills and cert names. They show as tags on the About page sidebar. Set either to `[]` to hide.

## Scheduling Link for Job Searches

If you want recruiters to be able to book time with you directly, set `schedulingUrl` to your Calendly or Cal.com link. A "Book a Call" card appears on the contact page. Leave it blank when you don't want it public.

## Replace Your Images

Replace:

- `assets/img/headshot.png` — your photo
- `assets/img/favicon.svg` (optional)
- `assets/img/og-image.png` (optional — used for LinkedIn/social sharing)

Keep the same filenames unless you also plan to update paths in `config.js`.

## Setup Checklist

Open `setup.html` in your browser for a live dashboard showing which fields are set and which still have placeholders.

You can also run the validator from the command line:

```bash
bash scripts/validate.sh
```

## How The JavaScript Files Work

### config.js — Edit this first
Your identity and all starter copy. The 5 required fields are at the top. Everything below is optional and pre-filled.

### content.js — Optional
Deeper content for About, Projects, Contact, and project detail pages. Pre-filled and works out of the box. You can safely ignore or delete this file.

### main.js — Don't touch
The binding engine. You never need to edit this file.

## When To Edit HTML Pages Directly

After `config.js` is updated, the HTML files are mostly for deeper customization.

Edit HTML when you want to:

- rewrite longer supporting sections
- change layout or page structure
- add new sections to a page
- modify bullet point lists
- go beyond the starter version

## How To Add A New Project

1. Copy the template:
   ```bash
   cp projects/project-template.html projects/your-project-name.html
   ```

2. Open your new file and replace all `[BRACKETED]` placeholder text. Search for `[` to find them all.

3. Fill in each content section.

4. Add a project card to `projects.html` — the template includes the exact HTML to copy in its comments at the top.

5. Preview locally, then deploy.

## Best Personalization Order

1. update the 5 required fields in `config.js`
2. replace your image files
3. open `setup.html` to verify
4. preview `index.html` locally
5. customize optional fields when ready (links, skills, FAQ, currently building)
6. add your first real project using the template
7. deploy

## Social Sharing Setup

After your first deploy, update `siteUrl` in `config.js` with your CloudFront domain (e.g., `https://d1234abcd.cloudfront.net`). This makes the OG image show up correctly when sharing on LinkedIn.

## Print-Friendly

The portfolio includes a print stylesheet. If a recruiter prints or saves-as-PDF, it formats cleanly with dark backgrounds removed and content optimized for paper.

## Before Deploying

Check:

- nav links work
- footer links work
- images load
- email button works
- resume button works
- FAQ expands/collapses
- no browser console errors
- `bash scripts/validate.sh` passes

## Deployment Reminder

- **content changes** → `bash scripts/deploy-site.sh`
- **Terraform changes** → `terraform plan` / `terraform apply` from `site/`, then redeploy content

## Common Mistakes

- forgetting to save files before running commands
- editing HTML when the update should have been made in `config.js`
- leaving `[BRACKETED]` placeholder text in published pages
- editing content in S3 instead of updating local files first
- forgetting to set `siteUrl` after first deploy (social sharing won't show images)

## Best Practice

Treat your local project files as the source of truth.

Make changes locally, test locally, then deploy.
