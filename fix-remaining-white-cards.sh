#!/bin/bash

# Fix remaining white bg-white cards in AI Patterns and MCP Servers sections
# Replace with color-matched backgrounds

FILE="src/App.tsx"

# Backup file first
cp "$FILE" "$FILE.backup-$(date +%Y%m%d-%H%M%S)"

echo "🔍 Fixing remaining white background cards..."

# AI Patterns Section - Pattern cards (lines ~1964-2056)
# Pattern 1: Purple-bordered card (line 1964) - inner purple bg (line 1972)
sed -i '1964s/bg-white dark:bg-gray-800 border-2 border-purple-300/bg-purple-50 dark:bg-purple-900\/20 border-2 border-purple-300 dark:border-purple-600/' "$FILE"

# Pattern 2: Indigo-bordered card (line 1981)
sed -i '1981s/bg-white dark:bg-gray-800 border-2 border-indigo-300 dark:border-indigo-600/bg-indigo-50 dark:bg-indigo-900\/20 border-2 border-indigo-300 dark:border-indigo-600/' "$FILE"

# Pattern 3: Teal-bordered card (line 2001) - already has teal inner bg (line 2009)
sed -i '2001s/bg-white dark:bg-gray-800 border-2 border-teal-300/bg-teal-50 dark:bg-teal-900\/20 border-2 border-teal-300 dark:border-teal-600/' "$FILE"

# Pattern 4: Orange-bordered card (line 2019)
sed -i '2019s/bg-white dark:bg-gray-800 border-2 border-orange-300/bg-orange-50 dark:bg-orange-900\/20 border-2 border-orange-300 dark:border-orange-600/' "$FILE"

# Pattern 5: Pink-bordered card (line 2040)
sed -i '2040s/bg-white dark:bg-gray-800 border-2 border-pink-300 dark:border-pink-600/bg-pink-50 dark:bg-pink-900\/20 border-2 border-pink-300 dark:border-pink-600/' "$FILE"

# Productivity Multipliers section (lines ~2100-2120) - inside purple gradient parent
sed -i '2100s/bg-white dark:bg-gray-800 rounded-lg p-4/bg-purple-50 dark:bg-purple-900\/20 rounded-lg p-4/' "$FILE"
sed -i '2110s/bg-white dark:bg-gray-800 rounded-lg p-4/bg-blue-50 dark:bg-blue-900\/20 rounded-lg p-4/' "$FILE"
sed -i '2120s/bg-white dark:bg-gray-800 rounded-lg p-4/bg-indigo-50 dark:bg-indigo-900\/20 rounded-lg p-4/' "$FILE"

# Real-World Workflow steps (lines ~2211-2219)
sed -i '2211s/bg-white dark:bg-gray-800 rounded-lg p-3/bg-blue-50 dark:bg-blue-900\/20 rounded-lg p-3/' "$FILE"
sed -i '2215s/bg-white dark:bg-gray-800 rounded-lg p-3/bg-green-50 dark:bg-green-900\/20 rounded-lg p-3/' "$FILE"
sed -i '2219s/bg-white dark:bg-gray-800 rounded-lg p-3/bg-purple-50 dark:bg-purple-900\/20 rounded-lg p-3/' "$FILE"

# MCP Servers Section - Learn More & Get Started cards (lines ~3939-3964)
# These are inside a blue parent (bg-blue-50), should be blue-100 for differentiation
sed -i '3939s/bg-white dark:bg-gray-800 rounded-lg p-3/bg-blue-100 dark:bg-blue-900\/30 rounded-lg p-3/' "$FILE"
sed -i '3945s/bg-white dark:bg-gray-800 rounded-lg p-3/bg-blue-100 dark:bg-blue-900\/30 rounded-lg p-3/' "$FILE"
sed -i '3951s/bg-white dark:bg-gray-800 rounded-lg p-3/bg-blue-100 dark:bg-blue-900\/30 rounded-lg p-3/' "$FILE"
sed -i '3957s/bg-white dark:bg-gray-800 rounded-lg p-3/bg-blue-100 dark:bg-blue-900\/30 rounded-lg p-3/' "$FILE"

# MCP Servers - Real-World Use Cases (lines ~3894-3929)
# Inside purple parent, use purple variants
sed -i '3894s/bg-white dark:bg-gray-800 rounded-lg p-4/bg-purple-50 dark:bg-purple-900\/20 rounded-lg p-4/' "$FILE"
sed -i '3903s/bg-white dark:bg-gray-800 rounded-lg p-4/bg-purple-50 dark:bg-purple-900\/20 rounded-lg p-4/' "$FILE"
sed -i '3912s/bg-white dark:bg-gray-800 rounded-lg p-4/bg-purple-50 dark:bg-purple-900\/20 rounded-lg p-4/' "$FILE"
sed -i '3921s/bg-white dark:bg-gray-800 rounded-lg p-4/bg-purple-50 dark:bg-purple-900\/20 rounded-lg p-4/' "$FILE"

echo "✅ Fixed all remaining white background cards"
echo "📊 Changes applied to: $FILE"
echo ""
echo "Summary:"
echo "  • AI Patterns: 5 pattern cards + 3 productivity cards + 3 workflow steps"
echo "  • MCP Servers: 4 use case cards + 4 learn more cards"
echo "  • Total: 19 cards converted from white to colored backgrounds"
