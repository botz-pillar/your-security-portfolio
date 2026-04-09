variable "aws_region" {
  description = "AWS region for the S3 bucket."
  type        = string
}

variable "bucket_name" {
  description = "Globally unique S3 bucket name for the site."
  type        = string
}

variable "project_name" {
  description = "Short project name used for tags and naming."
  type        = string
  default     = "security-portfolio"
}

variable "environment" {
  description = "Environment tag value."
  type        = string
  default     = "prod"
}

variable "tags" {
  description = "Additional tags to apply to resources."
  type        = map(string)
  default     = {}
}

variable "domain_name" {
  description = "Custom domain name (e.g., portfolio.example.com). Leave empty to skip."
  type        = string
  default     = ""
}

variable "hosted_zone_id" {
  description = "Route 53 hosted zone ID for the domain. Required if domain_name is set."
  type        = string
  default     = ""
}