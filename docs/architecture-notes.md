

# Architecture Notes

## Overview

This project uses a simple static hosting architecture in AWS:

- **Amazon S3** stores the site files
- **Amazon CloudFront** delivers the site publicly
- **Terraform** manages the infrastructure

The goal is to keep the architecture:

- low cost
- easy to understand
- easy to repeat
- professional enough to use in a real portfolio

## Why This Architecture

This setup was chosen because it gives students a practical first cloud deployment without adding unnecessary complexity.

It helps them learn:

- basic static site structure
- how CloudFront sits in front of S3
- how Terraform can create and manage AWS resources
- how to update and tear down a small cloud-hosted project

## Security Decisions

The project uses a few important security-minded choices:

- the S3 bucket is not intended to be public directly
- CloudFront is the public access layer
- HTTPS is used for delivery
- Terraform makes the setup repeatable and reviewable
- the site is static, which reduces attack surface

## Current Stack

- HTML
- CSS
- minimal JavaScript
- AWS S3
- CloudFront
- Terraform

## Future Improvements

Possible future upgrades:

- custom domain
- stronger security headers
- AWS WAF
- CI/CD deployment workflow
- architecture diagram screenshots