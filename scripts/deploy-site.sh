#!/usr/bin/env bash
set -euo pipefail

# ----------------------------------------------------------
# Deploy script for the static portfolio
# ----------------------------------------------------------
# What it does:
# 1. validates required config fields
# 2. reads Terraform outputs from ./site
# 3. uploads website files to S3
# 4. invalidates CloudFront cache
#
# Run from the project root:
#   bash scripts/deploy-site.sh
# ----------------------------------------------------------

echo "Validating config..."
bash scripts/validate.sh
echo ""

echo "Reading Terraform outputs..."
BUCKET_NAME=$(cd site && terraform output -raw bucket_name)
DISTRIBUTION_ID=$(cd site && terraform output -raw cloudfront_distribution_id)
CLOUDFRONT_DOMAIN=$(cd site && terraform output -raw cloudfront_domain_name)

if [ -z "$BUCKET_NAME" ] || [ -z "$DISTRIBUTION_ID" ]; then
  echo "Error: Terraform outputs are empty. Run 'terraform apply' in site/ first."
  exit 1
fi

echo "Bucket: $BUCKET_NAME"
echo "Distribution ID: $DISTRIBUTION_ID"
echo "CloudFront domain: $CLOUDFRONT_DOMAIN"

echo ""
echo "Syncing site files to S3..."
aws s3 sync . "s3://$BUCKET_NAME" \
  --exclude "*" \
  --include "*.html" \
  --include "assets/css/*" \
  --include "assets/js/*" \
  --include "assets/img/*" \
  --include "projects/*" \
  --exclude "setup.html"

echo ""
echo "Creating CloudFront invalidation..."
aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" >/dev/null

echo ""
echo "Deploy complete."
echo "Open: https://$CLOUDFRONT_DOMAIN"
