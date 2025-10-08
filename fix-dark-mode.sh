#!/bin/bash

# Dark Mode Comprehensive Fix Script
# Fixes all missing dark: variants across all 9 tabs in App.tsx

APP_FILE="/root/Projects/agents-md-demo/src/App.tsx"
BACKUP_FILE="/root/Projects/agents-md-demo/src/App.tsx.backup-$(date +%Y%m%d-%H%M%S)"

echo "Creating backup: $BACKUP_FILE"
cp "$APP_FILE" "$BACKUP_FILE"

echo "Applying dark mode fixes..."

# ============================================================================
# TAB 1: OVERVIEW - "What is AGENTS.md?"
# ============================================================================

# Fix: bg-blue-50 border border-blue-200 (line 207)
sed -i 's|bg-blue-50 border border-blue-200|bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700|g' "$APP_FILE"

# Fix: text-blue-900 headings
sed -i 's|text-xl font-semibold text-blue-900|text-xl font-semibold text-blue-900 dark:text-blue-300|g' "$APP_FILE"

# Fix: text-blue-800 body text
sed -i 's|text-sm text-blue-800|text-sm text-blue-800 dark:text-blue-300|g' "$APP_FILE"

# Fix: text-purple-900 headings
sed -i 's|text-xl font-semibold text-purple-900|text-xl font-semibold text-purple-900 dark:text-purple-300|g' "$APP_FILE"

# Fix: text-purple-800 lists
sed -i 's|text-purple-800 space-y-1|text-purple-800 dark:text-purple-300 space-y-1|g' "$APP_FILE"

# Fix: bg-yellow-50 border border-yellow-200
sed -i 's|bg-yellow-50 border border-yellow-200|bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700|g' "$APP_FILE"

# Fix: text-yellow-900
sed -i 's|text-sm text-yellow-900|text-sm text-yellow-900 dark:text-yellow-300|g' "$APP_FILE"

# Fix: text-green-800 in "ALWAYS Include" card
sed -i 's|font-semibold text-green-800|font-semibold text-green-800 dark:text-green-300|g' "$APP_FILE"

# Fix: text-red-800 in "NEVER Include" card
sed -i 's|font-semibold text-red-800|font-semibold text-red-800 dark:text-red-300|g' "$APP_FILE"

# Fix: bg-green-50 border-2 border-green-400
sed -i 's|bg-green-50 border-2 border-green-400|bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-600|g' "$APP_FILE"

# Fix: text-green-900 headings
sed -i 's|text-xl font-semibold text-green-900|text-xl font-semibold text-green-900 dark:text-green-300|g' "$APP_FILE"

# ============================================================================
# TAB 2: FILE STRUCTURE
# ============================================================================

# Fix: Colored section cards backgrounds
sed -i 's|border-l-4 border-blue-500 pl-4 bg-blue-50|border-l-4 border-blue-500 dark:border-blue-600 pl-4 bg-blue-50 dark:bg-blue-900/20|g' "$APP_FILE"
sed -i 's|border-l-4 border-green-500 pl-4 bg-green-50|border-l-4 border-green-500 dark:border-green-600 pl-4 bg-green-50 dark:bg-green-900/20|g' "$APP_FILE"
sed -i 's|border-l-4 border-purple-500 pl-4 bg-purple-50|border-l-4 border-purple-500 dark:border-purple-600 pl-4 bg-purple-50 dark:bg-purple-900/20|g' "$APP_FILE"
sed -i 's|border-l-4 border-yellow-500 pl-4 bg-yellow-50|border-l-4 border-yellow-500 dark:border-yellow-600 pl-4 bg-yellow-50 dark:bg-yellow-900/20|g' "$APP_FILE"
sed -i 's|border-l-4 border-orange-500 pl-4 bg-orange-50|border-l-4 border-orange-500 dark:border-orange-600 pl-4 bg-orange-50 dark:bg-orange-900/20|g' "$APP_FILE"
sed -i 's|border-l-4 border-red-500 pl-4 bg-red-50|border-l-4 border-red-500 dark:border-red-600 pl-4 bg-red-50 dark:bg-red-900/20|g' "$APP_FILE"
sed -i 's|border-l-4 border-pink-500 pl-4 bg-pink-50|border-l-4 border-pink-500 dark:border-pink-600 pl-4 bg-pink-50 dark:bg-pink-900/20|g' "$APP_FILE"
sed -i 's|border-l-4 border-indigo-500 pl-4 bg-indigo-50|border-l-4 border-indigo-500 dark:border-indigo-600 pl-4 bg-indigo-50 dark:bg-indigo-900/20|g' "$APP_FILE"

# Fix: bg-green-50 border border-green-200 (Pro Tip card)
sed -i 's|bg-green-50 border border-green-200 rounded-lg p-4|bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4|g' "$APP_FILE"

# Fix: text-green-900 in Pro Tip
sed -i 's|text-sm text-green-900|text-sm text-green-900 dark:text-green-300|g' "$APP_FILE"

# ============================================================================
# TAB 3: CODE PUPPY
# ============================================================================

# Fix: border-2 border-purple-300
sed -i 's|border-2 border-purple-300 rounded-xl|border-2 border-purple-300 dark:border-purple-600 rounded-xl|g' "$APP_FILE"

# Fix: text-purple-900 headings
sed -i 's|text-2xl font-bold text-purple-900|text-2xl font-bold text-purple-900 dark:text-purple-300|g' "$APP_FILE"

# Fix: text-purple-800 body text
sed -i 's|text-purple-800">|text-purple-800 dark:text-purple-300">|g' "$APP_FILE"

# Fix: font-semibold text-purple-900
sed -i 's|font-semibold text-purple-900|font-semibold text-purple-900 dark:text-purple-300|g' "$APP_FILE"

# Fix: bg-blue-50 border border-blue-200 rounded-xl
sed -i 's|bg-blue-50 border border-blue-200 rounded-xl|bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl|g' "$APP_FILE"

# Fix: text-blue-900 headings
sed -i 's|text-2xl font-bold text-blue-900|text-2xl font-bold text-blue-900 dark:text-blue-300|g' "$APP_FILE"

# Fix: font-semibold text-blue-900
sed -i 's|font-semibold text-blue-900|font-semibold text-blue-900 dark:text-blue-300|g' "$APP_FILE"

# Fix: bg-yellow-50 border border-yellow-300
sed -i 's|bg-yellow-50 border border-yellow-300|bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700|g' "$APP_FILE"

# Fix: bg-green-50 border border-green-200 rounded-xl
sed -i 's|bg-green-50 border border-green-200 rounded-xl|bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl|g' "$APP_FILE"

# Fix: text-green-900 headings
sed -i 's|text-2xl font-bold text-green-900|text-2xl font-bold text-green-900 dark:text-green-300|g' "$APP_FILE"

# Fix: bg-purple-50 border border-purple-200 rounded-xl
sed -i 's|bg-purple-50 border border-purple-200 rounded-xl|bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-xl|g' "$APP_FILE"

# Fix: bg-orange-50 border border-orange-200 rounded-xl
sed -i 's|bg-orange-50 border border-orange-200 rounded-xl|bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-xl|g' "$APP_FILE"

# Fix: text-orange-900 headings
sed -i 's|text-2xl font-bold text-orange-900|text-2xl font-bold text-orange-900 dark:text-orange-300|g' "$APP_FILE"

# Fix: font-semibold text-orange-900
sed -i 's|font-semibold text-orange-900|font-semibold text-orange-900 dark:text-orange-300|g' "$APP_FILE"

# Fix: text-orange-800
sed -i 's|text-sm text-orange-800|text-sm text-orange-800 dark:text-orange-300|g' "$APP_FILE"

# Fix: bg-indigo-50 border border-indigo-200 rounded-xl
sed -i 's|bg-indigo-50 border border-indigo-200 rounded-xl|bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700 rounded-xl|g' "$APP_FILE"

# Fix: text-indigo-900 headings
sed -i 's|text-2xl font-bold text-indigo-900|text-2xl font-bold text-indigo-900 dark:text-indigo-300|g' "$APP_FILE"

# Fix: font-semibold text-indigo-900
sed -i 's|font-semibold text-indigo-900|font-semibold text-indigo-900 dark:text-indigo-300|g' "$APP_FILE"

# Fix: text-indigo-800
sed -i 's|text-sm text-indigo-800|text-sm text-indigo-800 dark:text-indigo-300|g' "$APP_FILE"

# Fix: bg-pink-50 border border-pink-200 rounded-xl
sed -i 's|bg-pink-50 border border-pink-200 rounded-xl|bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-700 rounded-xl|g' "$APP_FILE"

# Fix: text-pink-900 headings
sed -i 's|text-2xl font-bold text-pink-900|text-2xl font-bold text-pink-900 dark:text-pink-300|g' "$APP_FILE"

# Fix: font-semibold text-pink-900
sed -i 's|font-semibold text-pink-900|font-semibold text-pink-900 dark:text-pink-300|g' "$APP_FILE"

# Fix: text-pink-800
sed -i 's|text-sm text-pink-800 space-y-1|text-sm text-pink-800 dark:text-pink-300 space-y-1|g' "$APP_FILE"

# Fix: bg-purple-200 in code tag
sed -i 's|bg-purple-200 px-2|bg-purple-200 dark:bg-purple-700 px-2|g' "$APP_FILE"

# Fix: text-green-800
sed -i 's|text-sm text-green-800|text-sm text-green-800 dark:text-green-300|g' "$APP_FILE"

# Fix: border-2 border-blue-300 rounded-xl
sed -i 's|border-2 border-blue-300 rounded-xl|border-2 border-blue-300 dark:border-blue-600 rounded-xl|g' "$APP_FILE"

# ============================================================================
# TAB 4: TECH STACKS
# ============================================================================

# Fix: border-2 border-blue-300 rounded-xl (Stack cards)
sed -i 's|border-2 border-blue-300 rounded-xl|border-2 border-blue-300 dark:border-blue-600 rounded-xl|g' "$APP_FILE"
sed -i 's|border-2 border-green-300 rounded-xl|border-2 border-green-300 dark:border-green-600 rounded-xl|g' "$APP_FILE"
sed -i 's|border-2 border-purple-300 rounded-xl|border-2 border-purple-300 dark:border-purple-600 rounded-xl|g' "$APP_FILE"
sed -i 's|border-2 border-orange-300 rounded-xl|border-2 border-orange-300 dark:border-orange-600 rounded-xl|g' "$APP_FILE"
sed -i 's|border-2 border-pink-300 rounded-xl|border-2 border-pink-300 dark:border-pink-600 rounded-xl|g' "$APP_FILE"

# Fix: bg-blue-50 rounded-lg (tech combo sections)
sed -i 's|bg-blue-50 rounded-lg p-4|bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4|g' "$APP_FILE"
sed -i 's|bg-green-50 rounded-lg p-4|bg-green-50 dark:bg-green-900/20 rounded-lg p-4|g' "$APP_FILE"
sed -i 's|bg-purple-50 rounded-lg p-4|bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4|g' "$APP_FILE"
sed -i 's|bg-orange-50 rounded-lg p-4|bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4|g' "$APP_FILE"
sed -i 's|bg-pink-50 rounded-lg p-4|bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4|g' "$APP_FILE"

# Fix: text-blue-800 in tech items
sed -i 's|text-blue-800">|text-blue-800 dark:text-blue-300">|g' "$APP_FILE"
sed -i 's|text-green-800">|text-green-800 dark:text-green-300">|g' "$APP_FILE"
sed -i 's|text-purple-800">|text-purple-800 dark:text-purple-300">|g' "$APP_FILE"
sed -i 's|text-orange-800">|text-orange-800 dark:text-orange-300">|g' "$APP_FILE"
sed -i 's|text-pink-800">|text-pink-800 dark:text-pink-300">|g' "$APP_FILE"

# Fix: gradient backgrounds in "Best For" sections
sed -i 's|from-blue-100 to-blue-50|from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-900/10|g' "$APP_FILE"
sed -i 's|from-green-100 to-green-50|from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-900/10|g' "$APP_FILE"
sed -i 's|from-purple-100 to-purple-50|from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-900/10|g' "$APP_FILE"
sed -i 's|from-orange-100 to-orange-50|from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-900/10|g' "$APP_FILE"

# ============================================================================
# TAB 5-9: AI EXAMPLES, PATTERNS, MY AGENTS.MD, MCP, REFERENCES
# ============================================================================

# Fix: All bg-{color}-100 rounded-full (icon containers)
sed -i 's|bg-blue-100 rounded-full|bg-blue-100 dark:bg-blue-900/30 rounded-full|g' "$APP_FILE"
sed -i 's|bg-green-100 rounded-full|bg-green-100 dark:bg-green-900/30 rounded-full|g' "$APP_FILE"
sed -i 's|bg-purple-100 rounded-full|bg-purple-100 dark:bg-purple-900/30 rounded-full|g' "$APP_FILE"
sed -i 's|bg-orange-100 rounded-full|bg-orange-100 dark:bg-orange-900/30 rounded-full|g' "$APP_FILE"
sed -i 's|bg-indigo-100 rounded-full|bg-indigo-100 dark:bg-indigo-900/30 rounded-full|g' "$APP_FILE"
sed -i 's|bg-pink-100 rounded-full|bg-pink-100 dark:bg-pink-900/30 rounded-full|g' "$APP_FILE"

# Fix: All bg-{color}-50 rounded p-2/p-3 (sub-items)
sed -i 's|bg-blue-50 rounded p-2|bg-blue-50 dark:bg-blue-900/20 rounded p-2|g' "$APP_FILE"
sed -i 's|bg-green-50 rounded p-2|bg-green-50 dark:bg-green-900/20 rounded p-2|g' "$APP_FILE"
sed -i 's|bg-purple-50 rounded p-2|bg-purple-50 dark:bg-purple-900/20 rounded p-2|g' "$APP_FILE"
sed -i 's|bg-orange-50 rounded p-2|bg-orange-50 dark:bg-orange-900/20 rounded p-2|g' "$APP_FILE"
sed -i 's|bg-indigo-50 rounded p-2|bg-indigo-50 dark:bg-indigo-900/20 rounded p-2|g' "$APP_FILE"
sed -i 's|bg-pink-50 rounded p-2|bg-pink-50 dark:bg-pink-900/20 rounded p-2|g' "$APP_FILE"
sed -i 's|bg-blue-50 rounded p-3|bg-blue-50 dark:bg-blue-900/20 rounded p-3|g' "$APP_FILE"
sed -i 's|bg-purple-50 rounded p-3|bg-purple-50 dark:bg-purple-900/20 rounded p-3|g' "$APP_FILE"
sed -i 's|bg-green-50 rounded p-3|bg-green-50 dark:bg-green-900/20 rounded p-3|g' "$APP_FILE"
sed -i 's|bg-indigo-50 rounded p-3|bg-indigo-50 dark:bg-indigo-900/20 rounded p-3|g' "$APP_FILE"
sed -i 's|bg-orange-50 rounded p-3|bg-orange-50 dark:bg-orange-900/20 rounded p-3|g' "$APP_FILE"
sed -i 's|bg-pink-50 rounded p-3|bg-pink-50 dark:bg-pink-900/20 rounded p-3|g' "$APP_FILE"

# Fix: border-2 border-red-300
sed -i 's|border-2 border-red-300|border-2 border-red-300 dark:border-red-600|g' "$APP_FILE"

# Fix: bg-red-50 border-2
sed -i 's|bg-red-50 border-2 border-red-300|bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-600|g' "$APP_FILE"

# Fix: border-2 border-purple-400, blue-400, green-400, yellow-400, indigo-400
sed -i 's|border-2 border-blue-400|border-2 border-blue-400 dark:border-blue-600|g' "$APP_FILE"
sed -i 's|border-2 border-purple-400|border-2 border-purple-400 dark:border-purple-600|g' "$APP_FILE"
sed -i 's|border-2 border-green-400|border-2 border-green-400 dark:border-green-600|g' "$APP_FILE"
sed -i 's|border-2 border-yellow-400|border-2 border-yellow-400 dark:border-yellow-600|g' "$APP_FILE"
sed -i 's|border-2 border-indigo-400|border-2 border-indigo-400 dark:border-indigo-600|g' "$APP_FILE"

# Fix: gradient backgrounds from-purple-50 to-pink-50
sed -i 's|from-purple-50 to-pink-50 border-2|from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2|g' "$APP_FILE"

# Fix: from-blue-50 to-teal-50
sed -i 's|from-blue-50 to-teal-50|from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20|g' "$APP_FILE"

# Fix: from-green-50 to-emerald-50
sed -i 's|from-green-50 to-emerald-50|from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20|g' "$APP_FILE"

# Fix: from-yellow-50 to-orange-50
sed -i 's|from-yellow-50 to-orange-50|from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20|g' "$APP_FILE"

# Fix: from-indigo-50 to-blue-50
sed -i 's|from-indigo-50 to-blue-50|from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20|g' "$APP_FILE"

# Fix: from-green-50 to-blue-50
sed -i 's|from-green-50 to-blue-50|from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20|g' "$APP_FILE"

# Fix: from-purple-50 to-blue-50
sed -i 's|from-purple-50 to-blue-50|from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20|g' "$APP_FILE"

# Fix: border-l-4 border-red-500
sed -i 's|border-l-4 border-red-500|border-l-4 border-red-500 dark:border-red-600|g' "$APP_FILE"

# Fix: border-l-4 border-orange-400
sed -i 's|border-l-4 border-orange-400|border-l-4 border-orange-400 dark:border-orange-600|g' "$APP_FILE"

# Fix: border-2 border-indigo-300
sed -i 's|border-2 border-indigo-300 rounded-lg|border-2 border-indigo-300 dark:border-indigo-600 rounded-lg|g' "$APP_FILE"

# Fix: border-2 border-pink-300 rounded-lg
sed -i 's|border-2 border-pink-300 rounded-lg|border-2 border-pink-300 dark:border-pink-600 rounded-lg|g' "$APP_FILE"

# ============================================================================
# GLOBAL FIXES: Headings and colored text that span multiple tabs
# ============================================================================

# Fix: Dog icon color (Code Puppy tab)
sed -i 's|w-10 h-10 text-purple-600|w-10 h-10 text-purple-600 dark:text-purple-400|g' "$APP_FILE"

# Fix: CheckCircle2 icon colors
sed -i 's|w-5 h-5 text-blue-600"|w-5 h-5 text-blue-600 dark:text-blue-400"|g' "$APP_FILE"
sed -i 's|w-5 h-5 text-green-600"|w-5 h-5 text-green-600 dark:text-green-400"|g' "$APP_FILE"
sed -i 's|w-5 h-5 text-purple-600"|w-5 h-5 text-purple-600 dark:text-purple-400"|g' "$APP_FILE"
sed -i 's|w-5 h-5 text-yellow-600"|w-5 h-5 text-yellow-600 dark:text-yellow-400"|g' "$APP_FILE"
sed -i 's|w-5 h-5 text-orange-600"|w-5 h-5 text-orange-600 dark:text-orange-400"|g' "$APP_FILE"
sed -i 's|w-5 h-5 text-red-600"|w-5 h-5 text-red-600 dark:text-red-400"|g' "$APP_FILE"
sed -i 's|w-5 h-5 text-pink-600"|w-5 h-5 text-pink-600 dark:text-pink-400"|g' "$APP_FILE"
sed -i 's|w-5 h-5 text-indigo-600"|w-5 h-5 text-indigo-600 dark:text-indigo-400"|g' "$APP_FILE"

echo "✅ All dark mode fixes applied successfully!"
echo "Backup saved to: $BACKUP_FILE"
echo ""
echo "Next steps:"
echo "1. Review changes: git diff src/App.tsx"
echo "2. Test in browser: npm run dev"
echo "3. Toggle dark mode and verify all tabs"
echo "4. If satisfied, commit changes"
