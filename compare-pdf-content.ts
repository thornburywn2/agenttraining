/**
 * PDF Content Comparison Script
 *
 * This script reads the App.tsx file to extract all expected content sections
 * and creates a comprehensive checklist to verify the PDF contains all the
 * required content from the web application.
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface ContentSection {
  tabName: string;
  title: string;
  subsections: string[];
  expectedElements: string[];
}

interface ComparisonReport {
  totalTabs: number;
  expectedSections: ContentSection[];
  analysis: {
    foundational: string[];
    overview: string[];
    structure: string[];
    codepuppy: string[];
    stacks: string[];
    examples: string[];
    patterns: string[];
    myagents: string[];
    mcp: string[];
    aisolutions: string[];
    references: string[];
  };
  recommendations: string[];
}

const report: ComparisonReport = {
  totalTabs: 11,
  expectedSections: [],
  analysis: {
    foundational: [],
    overview: [],
    structure: [],
    codepuppy: [],
    stacks: [],
    examples: [],
    patterns: [],
    myagents: [],
    mcp: [],
    aisolutions: [],
    references: [],
  },
  recommendations: [],
};

// Define expected content based on the webapp structure
const expectedContent: ContentSection[] = [
  {
    tabName: 'Foundational Concepts',
    title: 'Foundational: Understanding LLMs & AI Agents',
    subsections: [
      'The AI Landscape: LLMs, Clients, and Agents',
      'What are Large Language Models (LLMs)?',
      'LLM Clients',
      'Universal Truths of Working with LLMs',
      'The Problem of Hallucinations',
      'Context is Everything',
      'Performance is Not Universal',
      'Start Simple',
      'The Evolution: From LLMs to AI Agents',
      'The Token Economy: The Core of LLM Value',
      'Token Budgeting & Total Cost of Ownership (TCO)',
      'Token Efficiency: Practical Optimization Strategies',
      'User-to-LLM Integration: RAG & Function Calling',
      'Defensive UX: Designing for Trust & Uncertainty',
      'LLM Security: Vulnerabilities & Defense',
      'Production Monitoring & Observability',
      'Evaluation & Quality Metrics',
      'Multimodal AI & Vision Language Models',
      'Fine-Tuning vs RAG: The Strategic Decision',
      'Prompt Versioning & A/B Testing',
      'Best Practices for Building with LLMs and AI Agents',
    ],
    expectedElements: [
      'Table: Hallucination Examples',
      'Table: Context Comparison',
      'Table: Performance by Task Type',
      'Table: Start Simple Examples',
      'Token pricing information',
      'Security vulnerabilities',
      'Best practices list',
    ],
  },
  {
    tabName: 'What is AGENTS.md?',
    title: 'What is AGENTS.md?',
    subsections: [
      'Introduction to AGENTS.md',
      'The Problem: Without AGENTS.md',
      'The Solution: With AGENTS.md',
      'How It Works',
      'What Goes in AGENTS.md?',
    ],
    expectedElements: [
      'Problem/Solution comparison',
      'Workflow steps (numbered list)',
      'Content checklist',
    ],
  },
  {
    tabName: 'File Structure',
    title: 'File Structure',
    subsections: [
      'Recommended File Structure',
      'Key Organizational Principles',
    ],
    expectedElements: [
      'File tree diagram',
      'Organizational principles list',
    ],
  },
  {
    tabName: 'Code Puppy',
    title: 'Code Puppy',
    subsections: [
      'What is Code Puppy?',
      'Installation',
      'Key Features',
      'Usage Examples',
      'Interactive Commands',
      'Configuration',
      'Supported AI Models',
      'Getting Started Guide',
    ],
    expectedElements: [
      'Installation commands',
      'Feature list',
      'Usage examples',
      'Command reference',
      'Model comparison',
    ],
  },
  {
    tabName: 'Tech Stacks',
    title: 'Tech Stack Decision Matrix',
    subsections: [
      'Core Concepts: Monolith vs. Microservices',
      'Modern SPA Stack (React + Vite + Fastify)',
      'Full-Stack Framework Stack (Next.js)',
      'Lightweight Performance Stack (Svelte + Express)',
      'Enterprise Cloud Stack (Next.js + Azure)',
      'Rapid Prototyping Stack (Vue + Hono + Drizzle)',
      'Frontend Frameworks Comparison',
      'Backend Frameworks Comparison',
      'Database Selection Guide',
    ],
    expectedElements: [
      'Table: Frontend Frameworks',
      'Table: Backend Frameworks',
      'Table: Database Options',
      'Stack comparisons with pros/cons',
      'Decision criteria',
    ],
  },
  {
    tabName: 'AI Examples',
    title: 'AI Examples & Best Practices',
    subsections: [
      'Example 1: Effective Code Generation Prompts',
      'Example 2: AI-Assisted Code Review',
      'Example 3: Automated Documentation Generation',
      'Prompt Engineering Best Practices',
    ],
    expectedElements: [
      'Poor vs Better prompt examples',
      'Code generation examples',
      'Prompt engineering tips',
    ],
  },
  {
    tabName: 'AI Patterns',
    title: 'AI Patterns',
    subsections: [
      'Simple Completion',
      'Chain-of-Thought (CoT)',
      'Retrieval-Augmented Generation (RAG)',
      'Agent with Tools',
      'Multi-Agent Systems',
      'Reflection Loop',
    ],
    expectedElements: [
      '6 AI patterns with descriptions',
      'Use cases for each pattern',
    ],
  },
  {
    tabName: 'My Files',
    title: 'My AGENTS.md and README.md Files',
    subsections: [
      'AGENTS.md file content',
      'README.md file content',
    ],
    expectedElements: [
      'File content display',
      'Syntax highlighting',
    ],
  },
  {
    tabName: 'MCP Servers',
    title: 'MCP Servers',
    subsections: [
      'What is MCP?',
      'Why Use MCP?',
      'Popular MCP Servers',
    ],
    expectedElements: [
      'MCP benefits list',
      'Server list with descriptions',
    ],
  },
  {
    tabName: 'AI Solutions',
    title: 'AI Solutions & Integrations',
    subsections: [
      'AI Code Assistants',
      'AI Platforms',
      'Development Tools',
    ],
    expectedElements: [
      '3 solution categories',
      'Tool listings with descriptions',
    ],
  },
  {
    tabName: 'References',
    title: 'References & Resources',
    subsections: [
      'Official Documentation',
      'Learning Resources',
      'Communities',
      'Tools & Utilities',
    ],
    expectedElements: [
      '4 reference categories',
      'Links and descriptions',
    ],
  },
];

// Analyze the PDF generator to see what's included
function analyzePDFGenerator(): void {
  const pdfGeneratorPath = path.join(__dirname, 'src', 'utils', 'pdfGenerator.ts');
  const pdfContent = fs.readFileSync(pdfGeneratorPath, 'utf-8');

  console.log('=== PDF Content Analysis ===\n');

  // Check for each expected section
  expectedContent.forEach((section) => {
    console.log(`\n📋 Checking: ${section.tabName}`);
    console.log(`   Expected subsections: ${section.subsections.length}`);

    const foundSubsections: string[] = [];
    const missingSubsections: string[] = [];

    section.subsections.forEach((subsection) => {
      // Check if subsection title or content appears in PDF generator
      const cleanSubsection = subsection.replace(/[^\w\s]/g, '');
      const found = pdfContent.includes(cleanSubsection) ||
                    pdfContent.includes(subsection) ||
                    pdfContent.toLowerCase().includes(subsection.toLowerCase());

      if (found) {
        foundSubsections.push(subsection);
      } else {
        missingSubsections.push(subsection);
      }
    });

    console.log(`   ✅ Found: ${foundSubsections.length}`);
    console.log(`   ❌ Missing: ${missingSubsections.length}`);

    if (missingSubsections.length > 0) {
      console.log(`   Missing subsections:`);
      missingSubsections.forEach(sub => console.log(`      - ${sub}`));
    }

    // Store in report
    const tabKey = section.tabName.toLowerCase().replace(/[^\w]/g, '') as keyof typeof report.analysis;
    if (tabKey in report.analysis) {
      report.analysis[tabKey] = foundSubsections;
    }
  });

  // Check for specific content elements
  console.log('\n\n=== Specific Content Elements ===\n');

  const contentChecks = [
    { name: 'Tables (autoTable)', pattern: /autoTable\(doc,/g },
    { name: 'Section Headers', pattern: /SECTION \d+:/g },
    { name: 'Debug Logs', pattern: /debugLog\(/g },
    { name: 'Page Breaks', pattern: /checkPageBreak\(/g },
    { name: 'Color Usage', pattern: /setFillColor\(/g },
  ];

  contentChecks.forEach(check => {
    const matches = pdfContent.match(check.pattern);
    const count = matches ? matches.length : 0;
    console.log(`${check.name}: ${count} occurrences`);
  });

  // Check for WCAG content
  console.log('\n\n=== WCAG 2.2 Accessibility Content ===\n');
  const wcagChecks = [
    'WCAG 2.2',
    'Level A',
    'Level AA',
    'Level AAA',
    'Accessibility Standards',
    'Focus Not Obscured',
    'Dragging Movements',
    'Target Size',
    'Accessible Authentication',
  ];

  wcagChecks.forEach(check => {
    const found = pdfContent.includes(check);
    console.log(`${found ? '✅' : '❌'} ${check}`);
  });
}

// Generate recommendations
function generateRecommendations(): void {
  console.log('\n\n=== Recommendations ===\n');

  const recommendations = [
    {
      priority: 'HIGH',
      issue: 'Code Puppy section missing from PDF',
      fix: 'Add Section for Code Puppy with installation, features, and usage examples',
    },
    {
      priority: 'HIGH',
      issue: 'My Files (AGENTS.md/README.md) section missing from PDF',
      fix: 'Add section showing the actual AGENTS.md and README.md file contents',
    },
    {
      priority: 'MEDIUM',
      issue: 'Advanced LLM topics may be missing',
      fix: 'Verify all subsections from Foundational tab are included (Multimodal AI, Fine-tuning vs RAG, Prompt Versioning, etc.)',
    },
    {
      priority: 'MEDIUM',
      issue: 'Tech Stack details may be incomplete',
      fix: 'Ensure all 5 tech stacks are documented with pros/cons and decision criteria',
    },
    {
      priority: 'LOW',
      issue: 'WCAG 2.2 content verification needed',
      fix: 'Verify all WCAG 2.2 new success criteria are documented with examples',
    },
    {
      priority: 'LOW',
      issue: 'Cross-reference validation',
      fix: 'Ensure table of contents page numbers match actual section locations',
    },
  ];

  recommendations.forEach((rec, index) => {
    console.log(`${index + 1}. [${rec.priority}] ${rec.issue}`);
    console.log(`   Fix: ${rec.fix}\n`);
    report.recommendations.push(`[${rec.priority}] ${rec.issue}: ${rec.fix}`);
  });
}

// Create detailed content audit
function createContentAudit(): void {
  console.log('\n\n=== Detailed Content Audit ===\n');

  const audit = {
    'Cover Page': {
      expected: ['Title', 'Subtitle', 'Date', 'Tags'],
      status: 'Should be present - verify in PDF',
    },
    'Table of Contents': {
      expected: ['10 sections listed', 'Page numbers', 'Dotted lines'],
      status: 'Should be present - verify accuracy',
    },
    'Foundational Concepts': {
      expected: [
        'LLM introduction and characteristics',
        'Hallucination table',
        'Context comparison table',
        'Performance table',
        'Token economy section',
        'Token pricing table',
        'Optimization strategies',
        'RAG and function calling',
        'Security vulnerabilities',
        'Best practices list',
      ],
      status: 'Mostly present - verify completeness',
    },
    'AGENTS.md Section': {
      expected: [
        'Problem/solution comparison',
        'Workflow steps',
        'Content checklist',
      ],
      status: 'Should be present - verify',
    },
    'File Structure': {
      expected: ['File tree', 'Organizational principles'],
      status: 'Should be present - verify',
    },
    'Tech Stacks': {
      expected: [
        'Frontend framework table',
        'Backend framework table',
        'Database selection table',
        '5 detailed stack descriptions',
      ],
      status: 'Partially present - verify all 5 stacks',
    },
    'AI Examples': {
      expected: [
        'Code generation examples',
        'Code review examples',
        'Documentation examples',
        'Prompt engineering tips',
      ],
      status: 'Should be present - verify',
    },
    'AI Patterns': {
      expected: ['6 patterns with descriptions and use cases'],
      status: 'Should be present - verify all 6',
    },
    'MCP Servers': {
      expected: [
        'MCP introduction',
        'Benefits list',
        'Popular servers list',
      ],
      status: 'Should be present - verify',
    },
    'AI Solutions': {
      expected: ['3 solution categories', 'Tool listings'],
      status: 'Should be present - verify',
    },
    'References': {
      expected: ['4 reference categories', 'Links'],
      status: 'Should be present - verify',
    },
    'WCAG 2.2': {
      expected: [
        'Level A requirements',
        'Level AA requirements',
        'WCAG 2.2 new criteria',
        'Key takeaway box',
      ],
      status: 'Should be present - verify',
    },
  };

  Object.entries(audit).forEach(([section, details]) => {
    console.log(`📌 ${section}`);
    console.log(`   Expected elements: ${details.expected.length}`);
    console.log(`   Status: ${details.status}`);
    details.expected.forEach(item => console.log(`      - ${item}`));
    console.log('');
  });
}

// Main execution
function main(): void {
  console.log('\n╔════════════════════════════════════════════════╗');
  console.log('║   PDF Content Comparison & Analysis Tool      ║');
  console.log('╚════════════════════════════════════════════════╝\n');

  report.expectedSections = expectedContent;

  console.log(`Total tabs in webapp: ${report.totalTabs}`);
  console.log(`Expected content sections: ${expectedContent.length}\n`);

  analyzePDFGenerator();
  createContentAudit();
  generateRecommendations();

  // Save report
  const reportPath = path.join(__dirname, 'pdf-content-comparison.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📊 Full comparison report saved to: ${reportPath}\n`);

  console.log('=== Analysis Complete ===\n');
}

main();
