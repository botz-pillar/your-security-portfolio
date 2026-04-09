#!/usr/bin/env bash
set -euo pipefail

# ----------------------------------------------------------
# Setup Validator
# ----------------------------------------------------------
# Checks that required config fields are filled in before deploy.
# Run from the project root:
#   bash scripts/validate.sh
# ----------------------------------------------------------

CONFIG="assets/js/config.js"
ERRORS=0

echo "Checking config..."
echo ""

check_field() {
  local field="$1"
  local label="$2"
  if grep -q "\"\\[YOUR_" <<< "$(grep "$field:" "$CONFIG" 2>/dev/null)"; then
    echo "  MISSING: $label ($field in config.js)"
    ERRORS=$((ERRORS + 1))
  fi
}

check_field "siteFirstName" "First Name"
check_field "siteLastName" "Last Name"
check_field "roleTitle" "Role Title"
check_field "email" "Email Address"
check_field "resumeUrl" "Resume URL"

if [ ! -f "assets/img/headshot.png" ]; then
  echo "  MISSING: headshot.png (replace assets/img/headshot.png with your photo)"
  ERRORS=$((ERRORS + 1))
fi

echo ""

if [ "$ERRORS" -gt 0 ]; then
  echo "Found $ERRORS issue(s). Update config.js before deploying."
  exit 1
else
  echo "All required fields are set. Ready to deploy."
  exit 0
fi
