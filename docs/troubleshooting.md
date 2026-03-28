# Troubleshooting

## Start With The Simplest Checks

Before assuming something is broken:

1. save all files
2. make sure you are in the correct folder
3. preview locally if possible
4. re-run the command carefully
5. redeploy if needed

A lot of problems come from small misses, not major failures.

## AWS CLI Not Working

Check:

```bash
aws --version
aws sts get-caller-identity
```

If credentials are not working, re-run:

```bash
aws configure
```

Then verify again:

```bash
aws sts get-caller-identity
```

## Terraform Red Warnings in VS Code

If VS Code shows red Terraform errors but commands still work, run:

```bash
terraform validate
```

If validation passes:

- save all files
- reload VS Code
- make sure you are inside the correct `site/` folder

## `terraform plan` Shows No Changes Unexpectedly

Check:

- your `.tf` files are not empty
- your files were saved
- you are inside the correct `site/` folder
- you are working in the correct project copy

If needed, run:

```bash
terraform validate
terraform plan
```

## Bucket Name Already Taken

S3 bucket names must be globally unique.

Update `bucket_name` in `site/terraform.tfvars`, then run:

```bash
terraform plan
```

If you copied this project from another version, also make sure other AWS resource names are unique enough to avoid collisions.

## Site Looks Unstyled After Deploy

Usually this means:

- CSS files did not upload
- CloudFront is serving cached files
- a file path is wrong

Run:

```bash
bash scripts/deploy-site.sh
```

Then hard refresh the browser.

Also check:

- `assets/css/style.css` exists
- nested pages use `../assets/css/style.css`
- the browser is not showing an older cached version

## Headshot or Images Not Showing

Check:

- the image file exists in `assets/img/`
- the filename matches exactly
- the path in `main.js` is correct
- nested pages use the nested image path from `main.js`

Recommended default image files:

- `assets/img/headshot.png`
- `assets/img/favicon.svg`

## Email Button Not Working

Check the `email` value in `assets/js/main.js`.

That value controls the `mailto:` link.

Also verify:

- the email field is not still a placeholder
- the page was refreshed after changes
- `main.js` loaded without browser console errors

## Resume Button Not Working

Check the `resumeUrl` value in `assets/js/main.js`.

Make sure:

- it is a real URL
- it includes `https://` if needed
- it is not still the placeholder value

## Optional Links Not Showing

Optional links such as LinkedIn or GitHub are hidden automatically if left blank in `main.js`.

Check:

- `linkedinUrl`
- `githubUrl`
- `youtubeUrl`
- `websiteUrl`

If the value is blank, the related element is hidden on purpose. Fill in the URL to make it appear.

## Changes In `main.js` Are Not Showing On The Page

Check:

- the HTML element uses the correct `data-*` attribute
- `main.js` is linked on that page
- the file was saved
- the browser was refreshed

Also open the browser console and confirm there is no JavaScript error.

## CloudFront Invalidation Command Gets Stuck

If your terminal shows `dquote>`, the quote marks were entered incorrectly.

Press:

- `Control + C`

Then re-run the command carefully.

## Nested Project Page Looks Broken

Check that nested pages use `../` for shared assets.

Examples:

- `../assets/css/style.css`
- `../assets/js/main.js`
- `../assets/img/favicon.svg`

If a nested page looks broken but the homepage looks normal, this is usually the first place to check.

## `terraform destroy` Fails

The S3 bucket may still contain files.

Empty it first:

```bash
aws s3 rm s3://YOUR_BUCKET_NAME --recursive
```

Then run:

```bash
terraform destroy
```

## Best Reset Rule

If something feels off:

1. save all files
2. check `main.js` first
3. validate Terraform if needed
4. preview locally
5. redeploy with the script
6. hard refresh the browser
