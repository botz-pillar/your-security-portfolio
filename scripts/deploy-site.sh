#!/usr/bin/env bash
set -euo pipefail

# ----------------------------------------------------------
# Simple deploy script for the static portfolio
# ----------------------------------------------------------
# What it does:
# 1. reads Terraform outputs from ./site
# 2. uploads website files to S3
# 3. invalidates CloudFront cache
#
# Run from the project root:
#   bash scripts/deploy-site.sh
# ----------------------------------------------------------

echo "Reading Terraform outputs..."
BUCKET_NAME=$(cd site && terraform output -raw bucket_name)
DISTRIBUTION_ID=$(cd site && terraform output -raw cloudfront_distribution_id)
CLOUDFRONT_DOMAIN=$(cd site && terraform output -raw cloudfront_domain_name)

echo "Bucket: $BUCKET_NAME"
echo "Distribution ID: $DISTRIBUTION_ID"
echo "CloudFront domain: $CLOUDFRONT_DOMAIN"

echo ""
echo "Syncing site files to S3..."
aws s3 sync . "s3://$BUCKET_NAME" \
  --exclude "*" \
  --include "*.html" \
  --include "assets/*" \
  --include "assets/*/*" \
  --include "projects/*"

echo ""
echo "Creating CloudFront invalidation..."
aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" >/dev/null

echo ""
echo "Deploy complete."
echo "Open: https://$CLOUDFRONT_DOMAIN"