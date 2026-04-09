# ==========================================================
# Custom Domain (Optional)
# ==========================================================
# To use a custom domain:
# 1. Set domain_name to your domain (e.g., "portfolio.example.com")
# 2. Set hosted_zone_id to your Route 53 hosted zone ID
#
# If both variables are empty, no domain resources are created.
# The ACM certificate must be in us-east-1 for CloudFront.

locals {
  use_custom_domain = var.domain_name != "" && var.hosted_zone_id != ""
}

# ACM certificate — must be in us-east-1 for CloudFront
resource "aws_acm_certificate" "site" {
  count = local.use_custom_domain ? 1 : 0

  # Note: If your default region is not us-east-1, you need a provider
  # alias for us-east-1. Uncomment and configure the provider block below.
  # provider = aws.us_east_1

  domain_name       = var.domain_name
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  tags = local.common_tags
}

# DNS validation record
resource "aws_route53_record" "cert_validation" {
  for_each = local.use_custom_domain ? {
    for dvo in aws_acm_certificate.site[0].domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  } : {}

  zone_id = var.hosted_zone_id
  name    = each.value.name
  type    = each.value.type
  ttl     = 60
  records = [each.value.record]

  allow_overwrite = true
}

# Wait for certificate validation
resource "aws_acm_certificate_validation" "site" {
  count = local.use_custom_domain ? 1 : 0

  certificate_arn         = aws_acm_certificate.site[0].arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

# A record pointing to CloudFront
resource "aws_route53_record" "site" {
  count = local.use_custom_domain ? 1 : 0

  zone_id = var.hosted_zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}
