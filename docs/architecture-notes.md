

# Architecture Notes

## Overview

This project uses a static hosting architecture in AWS:

- **Amazon S3** stores the site files
- **Amazon CloudFront** delivers the site publicly with security headers
- **Terraform** manages the infrastructure
- **GitHub Actions** handles CI/CD deployment (optional)

The goal is to keep the architecture:

- low cost
- easy to understand
- easy to repeat
- professional enough to use in a real portfolio

## Why This Architecture

This setup gives students a practical first cloud deployment without adding unnecessary complexity.

It helps them learn:

- basic static site structure
- how CloudFront sits in front of S3
- how Terraform can create and manage AWS resources
- how to update and tear down a small cloud-hosted project
- how security headers protect a deployed site
- how CI/CD automates deployment

## Security Decisions

- the S3 bucket is not public — CloudFront is the access layer
- HTTPS is enforced via viewer protocol policy
- security response headers are applied via CloudFront (HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- encryption at rest (AES256) is enabled on S3
- versioning is enabled for change tracking
- Terraform makes the setup repeatable and reviewable
- the site is static, which reduces attack surface
- no API keys or external service dependencies

## Current Stack

- HTML, CSS, JavaScript (no frameworks)
- AWS S3, CloudFront
- Terraform
- GitHub Actions (optional CI/CD)

## Custom Domain (Optional)

The template includes Terraform configuration for a custom domain:
- Route 53 for DNS
- ACM for TLS certificate
- Set `domain_name` and `hosted_zone_id` in `terraform.tfvars` to enable

## Future Improvements

Possible future upgrades:

- AWS WAF integration
- architecture diagram screenshots
- automated testing in CI pipeline
- staging environment
