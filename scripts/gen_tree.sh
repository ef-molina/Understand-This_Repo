#!/usr/bin/env bash
set -euo pipefail
repo_root="${1:-.}"
maxdepth="${2:-2}"
( cd "$repo_root" &&   find . -maxdepth "$maxdepth" -type d \
    \( -name .git -o -name node_modules -o -name vendor -o -name .venv \) -prune -o -print |   sed 's#^./##' | sort ) > docs/_tree.txt
echo "Wrote docs/_tree.txt"
