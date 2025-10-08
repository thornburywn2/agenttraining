#!/bin/bash

# Fix all remaining white table backgrounds in dark mode
# Addresses MCP Servers, AI Patterns, and AI Examples sections

FILE="src/App.tsx"

# Backup file first
cp "$FILE" "$FILE.backup-$(date +%Y%m%d-%H%M%S)"

echo "🔍 Fixing all white table/card backgrounds in dark mode..."

# Fix bg-green-50 instances (Best Practices tables) - need dark variants
sed -i 's/className="\([^"]*\)bg-green-50\([^"]*\)border-2 border-green-300\([^"]*\)"/className="\1bg-green-50 dark:bg-green-900\/20\2border-2 border-green-300 dark:border-green-600\3"/g' "$FILE"

# Fix bg-blue-50 instances (Learn More tables) - need dark variants
sed -i 's/className="\([^"]*\)bg-blue-50\([^"]*\)border border-blue-200\([^"]*\)"/className="\1bg-blue-50 dark:bg-blue-900\/20\2border border-blue-200 dark:border-blue-700\3"/g' "$FILE"

# Fix bg-red-50 instances without dark variants (Common Pitfalls)
sed -i 's/className="\([^"]*\)bg-red-50\([^"]*\)border-2 border-red-300\([^"]*\)"/className="\1bg-red-50 dark:bg-red-900\/20\2border-2 border-red-300 dark:border-red-600\3"/g' "$FILE"

# Fix bg-blue-100 instances (Real-World Workflow cards)
sed -i 's/className="\([^"]*\)bg-blue-100\([^"]*\)rounded-lg p-4\([^"]*\)"/className="\1bg-blue-100 dark:bg-blue-900\/30\2rounded-lg p-4\3"/g' "$FILE"

# Fix bg-teal-50, bg-indigo-50, bg-cyan-50 (Features/Collected Data tables in AI Examples)
sed -i 's/className="\([^"]*\)bg-teal-50\([^"]*\)rounded p-2\([^"]*\)"/className="\1bg-teal-50 dark:bg-teal-900\/20\2rounded p-2\3"/g' "$FILE"
sed -i 's/className="\([^"]*\)bg-indigo-50\([^"]*\)rounded p-2\([^"]*\)"/className="\1bg-indigo-50 dark:bg-indigo-900\/20\2rounded p-2\3"/g' "$FILE"
sed -i 's/className="\([^"]*\)bg-cyan-50\([^"]*\)rounded p-2\([^"]*\)"/className="\1bg-cyan-50 dark:bg-cyan-900\/20\2rounded p-2\3"/g' "$FILE"

echo "✅ Fixed all white table/card backgrounds"
echo "📊 Changes applied to: $FILE"

# Show what was changed
echo ""
echo "📈 Checking fixes:"
grep -c 'bg-green-50 dark:bg-green-900' "$FILE" && echo "  bg-green-50 instances fixed" || echo "  No bg-green-50 to fix"
grep -c 'bg-blue-50 dark:bg-blue-900' "$FILE" && echo "  bg-blue-50 instances fixed" || echo "  No bg-blue-50 to fix"
grep -c 'bg-teal-50 dark:bg-teal-900' "$FILE" && echo "  bg-teal-50 instances fixed" || echo "  No bg-teal-50 to fix"
