#!/bin/bash

# Fix unreadable -900 text colors in dark mode
# Adds dark:text-{color}-300 variants to all text-{color}-900 classes

FILE="src/App.tsx"

# Backup file first
cp "$FILE" "$FILE.backup-$(date +%Y%m%d-%H%M%S)"

# Fix text-purple-900 instances (without existing dark: variant)
sed -i 's/className="\([^"]*\)text-purple-900\([^"]*\)"/className="\1text-purple-900 dark:text-purple-300\2"/g' "$FILE"

# Fix text-blue-900 instances (without existing dark: variant)
sed -i 's/className="\([^"]*\)text-blue-900\([^"]*\)"/className="\1text-blue-900 dark:text-blue-300\2"/g' "$FILE"

# Fix text-green-900 instances (without existing dark: variant)
sed -i 's/className="\([^"]*\)text-green-900\([^"]*\)"/className="\1text-green-900 dark:text-green-300\2"/g' "$FILE"

# Fix text-orange-900 instances (without existing dark: variant)
sed -i 's/className="\([^"]*\)text-orange-900\([^"]*\)"/className="\1text-orange-900 dark:text-orange-300\2"/g' "$FILE"

# Fix text-pink-900 instances (without existing dark: variant)
sed -i 's/className="\([^"]*\)text-pink-900\([^"]*\)"/className="\1text-pink-900 dark:text-pink-300\2"/g' "$FILE"

# Fix text-red-900 instances (without existing dark: variant)
sed -i 's/className="\([^"]*\)text-red-900\([^"]*\)"/className="\1text-red-900 dark:text-red-300\2"/g' "$FILE"

# Fix text-yellow-900 instances (without existing dark: variant)
sed -i 's/className="\([^"]*\)text-yellow-900\([^"]*\)"/className="\1text-yellow-900 dark:text-yellow-300\2"/g' "$FILE"

# Fix text-teal-900 instances (without existing dark: variant)
sed -i 's/className="\([^"]*\)text-teal-900\([^"]*\)"/className="\1text-teal-900 dark:text-teal-300\2"/g' "$FILE"

# Fix text-indigo-900 instances (without existing dark: variant)
sed -i 's/className="\([^"]*\)text-indigo-900\([^"]*\)"/className="\1text-indigo-900 dark:text-indigo-300\2"/g' "$FILE"

# Fix text-cyan-900 instances (without existing dark: variant)
sed -i 's/className="\([^"]*\)text-cyan-900\([^"]*\)"/className="\1text-cyan-900 dark:text-cyan-300\2"/g' "$FILE"

# Remove duplicate dark: classes (in case some already had them)
sed -i 's/dark:text-\([a-z]*\)-300 dark:text-\1-300/dark:text-\1-300/g' "$FILE"

echo "✅ Fixed all text-{color}-900 instances with dark mode variants"
echo "📊 Changes applied to: $FILE"
