variable "aws_region" {
  description = "AWS region for the S3 bucket."
  type        = string
}

variable "bucket_name" {
  description = "Globally unique S3 bucket name for the site."
  type        = string

  validation {
    condition     = !can(regex("\\[", var.bucket_name)) && !startswith(var.bucket_name, "REPLACE-")
    error_message = "bucket_name still has the example placeholder. Edit terraform.tfvars and set a globally unique S3 bucket name (lowercase, 3-63 chars, no underscores or square brackets)."
  }

  validation {
    condition     = can(regex("^[a-z0-9.-]{3,63}$", var.bucket_name))
    error_message = "bucket_name must be 3-63 characters and contain only lowercase letters, numbers, dots, and hyphens (S3 naming rules)."
  }
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