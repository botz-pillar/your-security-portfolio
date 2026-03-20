

# Student Notes

## Start Here

Before changing anything, make sure you can:

- open the project in VS Code
- use the VS Code terminal
- run `aws --version`
- run `terraform version`
- run `aws sts get-caller-identity`

## Update These First

Start in:

- `assets/js/main.js`

Update:

- site / brand name
- first and last name placeholders
- tagline
- community URL
- LinkedIn URL
- GitHub URL
- email address
- footer text

## Replace Your Images

Replace:

- `assets/img/headshot.png`
- `assets/img/favicon.svg` (optional)

Keep the same filenames unless you also plan to update the paths.

## Best Personalization Order

1. update `main.js`
2. replace your image files
3. update homepage copy
4. update projects page
5. update project detail page
6. update about page
7. update contact page

## Before Deploying

Check:

- links work
- images load
- email button works
- nested project page styling works
- favicon appears

## Deployment Reminder

Infrastructure changes and content changes are different.

- **content changes** → run `bash scripts/deploy-site.sh`
- **Terraform changes** → run `terraform plan` / `terraform apply` from `site/`, then redeploy content

## Common Mistakes

- forgetting to save files before running commands
- leaving placeholder links in the HTML
- forgetting to update the email in `main.js`
- editing content in S3 instead of updating local files first
- forgetting to invalidate CloudFront after manual uploads

## Best Practice

Treat your local project files as the source of truth.

Make changes locally, test locally, then deploy.
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
2. update the required personal info placeholders first
3. replace `assets/img/headshot.png`
4. preview locally
5. deploy when ready

If you only update `main.js`, your site should already be in a strong starting state.

## Update These First

Start in:

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

## What `main.js` Controls

`main.js` is the main control center for first-time customization.

It includes starter language for:

- homepage hero copy
- homepage value boxes
- featured project summary
- focus areas
- projects page hero copy
- about page hero copy
- contact page hero copy
- built-in template promo

That means you should not need to hunt through multiple HTML files just to make normal first-time updates.

## Replace Your Images

Replace:

- `assets/img/headshot.png`
- `assets/img/favicon.svg` (optional)

Keep the same filenames unless you also plan to update the paths.

## When To Edit HTML Pages Directly

After `main.js` is updated, the HTML files are mostly for deeper customization.

Use the HTML files when you want to:

- rewrite longer supporting sections
- change layout or page structure
- tailor the site for a different audience
- go beyond the starter version

## Best Personalization Order

1. update `main.js`
2. replace your image files
3. preview the site locally
4. update HTML only if you want deeper customization
5. deploy

## Before Deploying

Check:

- nav links work
- footer links work
- images load
- email button works
- resume button works
- nested project page styling works
- favicon appears
- `main.js` loads without console errors

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
- editing content in S3 instead of updating local files first
- forgetting to invalidate CloudFront after manual uploads

## Best Practice

Treat your local project files as the source of truth.

Make changes locally, test locally, then deploy.