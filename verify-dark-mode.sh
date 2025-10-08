#!/bin/bash

# Comprehensive dark mode text verification and fix script
# Fixes all -800 and -700 text colors missing dark mode variants

FILE="src/App.tsx"

# Backup file first
cp "$FILE" "$FILE.backup-$(date +%Y%m%d-%H%M%S)"

echo "🔍 Fixing remaining text color issues..."

# Fix text-{color}-800 instances (medium-dark colors need lighter variants in dark mode)
sed -i 's/className="\([^"]*\)text-blue-800\([^"]*\)"/className="\1text-blue-800 dark:text-blue-300\2"/g' "$FILE"
sed -i 's/className="\([^"]*\)text-purple-800\([^"]*\)"/className="\1text-purple-800 dark:text-purple-300\2"/g' "$FILE"
sed -i 's/className="\([^"]*\)text-teal-800\([^"]*\)"/className="\1text-teal-800 dark:text-teal-300\2"/g' "$FILE"
sed -i 's/className="\([^"]*\)text-indigo-800\([^"]*\)"/className="\1text-indigo-800 dark:text-indigo-300\2"/g' "$FILE"
sed -i 's/className="\([^"]*\)text-cyan-800\([^"]*\)"/className="\1text-cyan-800 dark:text-cyan-300\2"/g' "$FILE"
sed -i 's/className="\([^"]*\)text-orange-800\([^"]*\)"/className="\1text-orange-800 dark:text-orange-300\2"/g' "$FILE"
sed -i 's/className="\([^"]*\)text-pink-800\([^"]*\)"/className="\1text-pink-800 dark:text-pink-300\2"/g' "$FILE"
sed -i 's/className="\([^"]*\)text-green-800\([^"]*\)"/className="\1text-green-800 dark:text-green-300\2"/g' "$FILE"
sed -i 's/className="\([^"]*\)text-red-800\([^"]*\)"/className="\1text-red-800 dark:text-red-300\2"/g' "$FILE"
sed -i 's/className="\([^"]*\)text-yellow-800\([^"]*\)"/className="\1text-yellow-800 dark:text-yellow-300\2"/g' "$FILE"

# Fix text-green-700 (for "Pros" headings - needs to be lighter in dark mode)
sed -i 's/className="\([^"]*\)text-green-700\([^"]*\)"/className="\1text-green-700 dark:text-green-400\2"/g' "$FILE"

# Fix text-red-700 (for "Cons" headings - needs to be lighter in dark mode)
sed -i 's/className="\([^"]*\)text-red-700\([^"]*\)"/className="\1text-red-700 dark:text-red-400\2"/g' "$FILE"

# Remove duplicate dark: classes (in case some already had them)
sed -i 's/dark:text-\([a-z]*\)-\([0-9]*\) dark:text-\1-\2/dark:text-\1-\2/g' "$FILE"
sed -i 's/dark:text-\([a-z]*\)-\([0-9]*\) dark:text-\1-\([0-9]*\)/dark:text-\1-\3/g' "$FILE"

echo "✅ Fixed all text-{color}-800 and text-{color}-700 instances"
echo "📊 Changes applied to: $FILE"

# Count total fixes
echo ""
echo "📈 Statistics:"
grep -c 'text-.*-800 dark:text-' "$FILE" && echo " text-*-800 instances with dark variants" || true
grep -c 'text-green-700 dark:' "$FILE" && echo " text-green-700 instances with dark variants" || true
grep -c 'text-red-700 dark:' "$FILE" && echo " text-red-700 instances with dark variants" || true
