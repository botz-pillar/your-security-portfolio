#!/usr/bin/env bash
set -euo pipefail

# ----------------------------------------------------------
# Setup Validator
# ----------------------------------------------------------
# Checks that required config fields are filled in before deploy,
# and that no [BRACKETED] placeholder text remains in published HTML.
#
# Run from the project root:
#   bash scripts/validate.sh
# ----------------------------------------------------------

CONFIG="assets/js/config.js"
ERRORS=0
WARNINGS=0

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
echo "Scanning project pages for unreplaced [BRACKETED] placeholder text..."
echo ""

# Find pages in projects/ that still have ALL_CAPS_BRACKETED placeholders.
# We look for [SOMETHING_LIKE_THIS] with at least 3 chars of caps/underscore/space
# and at least one underscore or two-word break, to avoid false positives on
# legitimate inline notes like [optional].
BRACKET_HITS=$(
  grep -rEnH '\[[A-Z][A-Z0-9 _-]{2,}[A-Z0-9_]\]' projects/*.html 2>/dev/null \
    | grep -vE '^\s*<!--' \
    || true
)

if [ -n "$BRACKET_HITS" ]; then
  echo "  WARNING: Possible unreplaced placeholders in published HTML:"
  echo "$BRACKET_HITS" | head -20 | sed 's/^/    /'
  HIT_COUNT=$(echo "$BRACKET_HITS" | wc -l | tr -d ' ')
  if [ "$HIT_COUNT" -gt 20 ]; then
    echo "    ... and $((HIT_COUNT - 20)) more"
  fi
  echo ""
  echo "  Search each file for '[' to find them all. Replace with your real content."
  WARNINGS=$((WARNINGS + 1))
fi

echo ""

if [ "$ERRORS" -gt 0 ]; then
  echo "Found $ERRORS issue(s). Update config.js before deploying."
  exit 1
elif [ "$WARNINGS" -gt 0 ]; then
  echo "Required fields look good, but $WARNINGS warning(s) above. Review before deploying."
  exit 0
else
  echo "All required fields are set and no placeholder text detected. Ready to deploy."
  exit 0
fi
