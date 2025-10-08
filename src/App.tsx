import { useState } from 'react'
import { Button } from './components/ui/button'
import { Code2, Rocket, FileText, BookOpen, Sparkles, CheckCircle2, Dog, FileEdit, FileCode, Lightbulb, Copy, Check, Network, Brain } from 'lucide-react'

export function App(): JSX.Element {
  const [activeTab, setActiveTab] = useState<'overview' | 'structure' | 'codepuppy' | 'stacks' | 'examples' | 'patterns' | 'myagents' | 'mcp'>('overview')
  const [copied, setCopied] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
        <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Code2 className="w-8 h-8 text-primary" aria-hidden="true" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AGENTS.md Training
              </h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                Ports: 5175 (UI) / 5176 (API)
              </span>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main id="main-content" className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12" aria-labelledby="hero-heading">
          <h2
            id="hero-heading"
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Understanding AGENTS.md
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            An <strong className="text-blue-600">open standard</strong> for AI agent instructions.
            Learn how AGENTS.md enables seamless collaboration between{' '}
            <strong className="text-purple-600">human developers</strong> and{' '}
            <strong className="text-pink-600">AI coding assistants</strong>.
          </p>
          <div className="flex justify-center gap-4 flex-wrap mb-4">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">
              ✅ Open Standard
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm">
              🤖 20+ AI Tools Supported
            </div>
            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm">
              🚀 Production-Ready
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap" role="tablist" aria-label="Training sections">
          <Button
            onClick={(): void => setActiveTab('overview')}
            variant={activeTab === 'overview' ? 'default' : 'outline'}
            role="tab"
            aria-selected={activeTab === 'overview'}
            aria-controls="overview-panel"
          >
            <Sparkles className="w-4 h-4 mr-2" aria-hidden="true" />
            What is AGENTS.md?
          </Button>
          <Button
            onClick={(): void => setActiveTab('structure')}
            variant={activeTab === 'structure' ? 'default' : 'outline'}
            role="tab"
            aria-selected={activeTab === 'structure'}
            aria-controls="structure-panel"
          >
            <FileText className="w-4 h-4 mr-2" aria-hidden="true" />
            File Structure
          </Button>
          <Button
            onClick={(): void => setActiveTab('codepuppy')}
            variant={activeTab === 'codepuppy' ? 'default' : 'outline'}
            role="tab"
            aria-selected={activeTab === 'codepuppy'}
            aria-controls="codepuppy-panel"
          >
            <Dog className="w-4 h-4 mr-2" aria-hidden="true" />
            Code Puppy
          </Button>
          <Button
            onClick={(): void => setActiveTab('stacks')}
            variant={activeTab === 'stacks' ? 'default' : 'outline'}
            role="tab"
            aria-selected={activeTab === 'stacks'}
            aria-controls="stacks-panel"
          >
            <Code2 className="w-4 h-4 mr-2" aria-hidden="true" />
            Tech Stacks
          </Button>
          <Button
            onClick={(): void => setActiveTab('examples')}
            variant={activeTab === 'examples' ? 'default' : 'outline'}
            role="tab"
            aria-selected={activeTab === 'examples'}
            aria-controls="examples-panel"
          >
            <Lightbulb className="w-4 h-4 mr-2" aria-hidden="true" />
            AI Examples
          </Button>
          <Button
            onClick={(): void => setActiveTab('patterns')}
            variant={activeTab === 'patterns' ? 'default' : 'outline'}
            role="tab"
            aria-selected={activeTab === 'patterns'}
            aria-controls="patterns-panel"
          >
            <Brain className="w-4 h-4 mr-2" aria-hidden="true" />
            AI Patterns
          </Button>
          <Button
            onClick={(): void => setActiveTab('myagents')}
            variant={activeTab === 'myagents' ? 'default' : 'outline'}
            role="tab"
            aria-selected={activeTab === 'myagents'}
            aria-controls="myagents-panel"
          >
            <FileCode className="w-4 h-4 mr-2" aria-hidden="true" />
            My AGENTS.md
          </Button>
          <Button
            onClick={(): void => setActiveTab('mcp')}
            variant={activeTab === 'mcp' ? 'default' : 'outline'}
            role="tab"
            aria-selected={activeTab === 'mcp'}
            aria-controls="mcp-panel"
          >
            <Network className="w-4 h-4 mr-2" aria-hidden="true" />
            MCP Servers
          </Button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div id="overview-panel" role="tabpanel" aria-labelledby="overview-tab">
              <h3 className="text-3xl font-bold mb-6">What is AGENTS.md?</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>AGENTS.md</strong> is an open standard that provides AI coding assistants with
                  a standardized way to understand your project. It&apos;s a single Markdown file placed
                  at the root of your repository that tells AI agents everything they need to know to
                  work effectively on your codebase.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-semibold text-blue-900 mb-3">
                    📝 The Problem AGENTS.md Solves
                  </h4>
                  <div className="space-y-3 text-sm text-blue-800">
                    <p><strong>Without AGENTS.md:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>AI agents don&apos;t know your project structure</li>
                      <li>AI agents don&apos;t know which commands to run</li>
                      <li>AI agents don&apos;t know your code style preferences</li>
                      <li>AI agents make incorrect assumptions about tech stack</li>
                      <li>AI agents can&apos;t follow your security practices</li>
                      <li>Developers waste time explaining the same things repeatedly</li>
                    </ul>

                    <p className="mt-4"><strong>With AGENTS.md:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>✅ AI agents know exactly how to build, test, and deploy</li>
                      <li>✅ AI agents follow your code style and security rules</li>
                      <li>✅ AI agents understand your project conventions</li>
                      <li>✅ Consistent AI behavior across GitHub Copilot, Cursor, Cline, etc.</li>
                      <li>✅ Onboarding new team members becomes faster</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-semibold text-purple-900 mb-3">
                    🤖 Supported AI Tools (20+)
                  </h4>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <p className="font-semibold text-purple-900 mb-2">Editor Integrations:</p>
                      <ul className="text-purple-800 space-y-1">
                        <li>• GitHub Copilot</li>
                        <li>• Cursor</li>
                        <li>• Windsurf (Codeium)</li>
                        <li>• Zed AI</li>
                        <li>• Continue</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-purple-900 mb-2">CLI Tools:</p>
                      <ul className="text-purple-800 space-y-1">
                        <li>• Code Puppy</li>
                        <li>• Claude Code</li>
                        <li>• Cline</li>
                        <li>• Aider</li>
                        <li>• GPT Engineer</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-purple-900 mb-2">Enterprise:</p>
                      <ul className="text-purple-800 space-y-1">
                        <li>• Sourcegraph Cody</li>
                        <li>• Azure AI Code Assist</li>
                        <li>• Google Gemini Code Assist</li>
                        <li>• Tabnine</li>
                        <li>• And many more...</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-yellow-900">
                    <strong>💡 Key Insight:</strong> AGENTS.md is like a README.md file, but specifically
                    designed for AI agents. While README.md explains the project to humans, AGENTS.md
                    provides structured instructions that AI tools can parse and follow consistently.
                  </p>
                </div>

                <h4 className="text-2xl font-semibold mb-4 mt-8">How It Works</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">1</span>
                    <div>
                      <strong>Create AGENTS.md file</strong> at the root of your repository
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">2</span>
                    <div>
                      <strong>Document your project</strong> using the standard sections (see next tab)
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">3</span>
                    <div>
                      <strong>AI agents automatically read it</strong> when you start coding with them
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">4</span>
                    <div>
                      <strong>Enjoy consistent AI behavior</strong> across all tools and team members
                    </div>
                  </div>
                </div>

                <h4 className="text-2xl font-semibold mb-4 mt-8">What Goes in AGENTS.md?</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white border-2 border-green-300 rounded-lg p-4">
                    <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                      ✅ ALWAYS Include
                    </h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Project overview and tech stack</li>
                      <li>• Setup and build commands</li>
                      <li>• Code style rules (TypeScript, React, etc.)</li>
                      <li>• Testing instructions and coverage goals</li>
                      <li>• Security rules (validation, no secrets in code)</li>
                      <li>• Development environment tips</li>
                      <li>• Deployment procedures</li>
                      <li>• Common development tasks</li>
                    </ul>
                  </div>
                  <div className="bg-white border-2 border-red-300 rounded-lg p-4">
                    <h5 className="font-semibold text-red-800 mb-2">❌ NEVER Include</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• API keys or secrets</li>
                      <li>• Hardcoded credentials</li>
                      <li>• Personal information</li>
                      <li>• Production database URLs</li>
                      <li>• Private implementation details</li>
                      <li>• Business-sensitive information</li>
                      <li>• Customer data</li>
                      <li>• Mock/test data arrays</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-semibold text-blue-900 mb-3">
                    🎯 Core Principles of AGENTS.md
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-blue-800 mb-1">📝 Clear & Specific</p>
                      <p className="text-gray-700">Write explicit instructions. AI agents follow exactly what you say, so be precise about data types, validation rules, and error handling.</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-blue-800 mb-1">🔒 Security-First</p>
                      <p className="text-gray-700">Define mandatory security rules: input validation with Zod, no secrets in code, use environment variables, SQL injection prevention.</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-blue-800 mb-1">🧪 Quality Standards</p>
                      <p className="text-gray-700">Set clear quality gates: 80%+ test coverage, TypeScript strict mode, no linting errors, proper error handling.</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-blue-800 mb-1">📚 Examples Over Theory</p>
                      <p className="text-gray-700">Show code examples of what TO do and what NOT to do. AI agents learn better from examples than descriptions.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-400 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-green-900 mb-3">
                    💡 Real-World Benefits
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-green-800 mb-2">For Developers:</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>• ⚡ Faster onboarding (minutes vs. days)</li>
                        <li>• 🎯 Consistent code across team</li>
                        <li>• 🤖 AI agents that "get" your project</li>
                        <li>• 📖 Single source of truth</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-green-800 mb-2">For Teams:</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>• ✅ Enforced best practices</li>
                        <li>• 🔄 Easier code reviews</li>
                        <li>• 🛡️ Better security by default</li>
                        <li>• 🚀 Ship quality code faster</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Structure Tab */}
          {activeTab === 'structure' && (
            <div id="structure-panel" role="tabpanel" aria-labelledby="structure-tab">
              <h3 className="text-3xl font-bold mb-6">AGENTS.md File Structure</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The AGENTS.md standard defines a clear structure that AI agents expect.
                  Each section serves a specific purpose and helps AI understand different aspects of your project.
                </p>

                <h4 className="text-xl font-semibold mb-3">Required Sections:</h4>
                <div className="space-y-3 mb-6">
                  <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-3 rounded-r">
                    <h5 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" aria-hidden="true" />
                      📋 Project Overview
                    </h5>
                    <p className="text-sm text-gray-600 mt-1">
                      What the project does, tech stack, key features. AI reads this first.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded-r">
                    <h5 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" aria-hidden="true" />
                      🚀 Setup Commands
                    </h5>
                    <p className="text-sm text-gray-600 mt-1">
                      Installation, development, build, test commands. Copy-paste ready.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-3 rounded-r">
                    <h5 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600" aria-hidden="true" />
                      🎨 Code Style Guidelines
                    </h5>
                    <p className="text-sm text-gray-600 mt-1">
                      TypeScript rules, React patterns, naming conventions, what to ALWAYS/NEVER do.
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-3 rounded-r">
                    <h5 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600" aria-hidden="true" />
                      💻 Development Environment Tips
                    </h5>
                    <p className="text-sm text-gray-600 mt-1">
                      VSCode extensions, debugging tips, project structure, hot reload info.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-3 rounded-r">
                    <h5 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600" aria-hidden="true" />
                      🧪 Testing Instructions
                    </h5>
                    <p className="text-sm text-gray-600 mt-1">
                      How to run tests, write tests, coverage requirements (e.g., 80%+).
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded-r">
                    <h5 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-red-600" aria-hidden="true" />
                      📝 Pull Request Instructions
                    </h5>
                    <p className="text-sm text-gray-600 mt-1">
                      Commit message format, PR checklist, code review guidelines.
                    </p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4 bg-pink-50 p-3 rounded-r">
                    <h5 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-pink-600" aria-hidden="true" />
                      🔒 Security Considerations
                    </h5>
                    <p className="text-sm text-gray-600 mt-1">
                      No secrets in code, input validation rules, SQL injection prevention.
                    </p>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-3 rounded-r">
                    <h5 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600" aria-hidden="true" />
                      🚀 Deployment Steps
                    </h5>
                    <p className="text-sm text-gray-600 mt-1">
                      Environment configuration, deployment process, rollback procedures.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-semibold text-blue-900 mb-3">
                    📂 Example Project Structure with AGENTS.md
                  </h4>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded text-xs overflow-x-auto">
{`~/Projects/your-project/
├── AGENTS.md              ← AI agent instructions (you are here)
├── README.md              ← Human documentation
├── package.json           ← Dependencies
├── tsconfig.json          ← TypeScript config
├── .env.example           ← Environment variables template
├── src/                   ← Frontend source
├── server/                ← Backend source
├── prisma/                ← Database schema
├── tests/                 ← Test suites
└── docs/                  ← Additional documentation`}
                  </pre>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-900">
                    <strong>💡 Pro Tip:</strong> Keep AGENTS.md up to date! When you change your build
                    process, add new npm scripts, or update code standards, update AGENTS.md too.
                    This ensures AI agents always have accurate information.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Code Puppy Tab */}
          {activeTab === 'codepuppy' && (
            <div id="codepuppy-panel" role="tabpanel" aria-labelledby="codepuppy-tab">
              <div className="flex items-center gap-3 mb-6">
                <Dog className="w-10 h-10 text-purple-600" aria-hidden="true" />
                <h3 className="text-3xl font-bold">Code Puppy - AI-Powered CLI Tool</h3>
              </div>

              <div className="prose prose-lg max-w-none">
                {/* Overview */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-6 mb-6">
                  <h4 className="text-2xl font-bold text-purple-900 mb-3">🐶 What is Code Puppy?</h4>
                  <p className="text-purple-900 mb-4">
                    <strong>Code Puppy</strong> is our primary AI-powered CLI tool for code generation, understanding, and multi-model orchestration.
                    It supports the AGENTS.md standard and provides an interactive interface for working with multiple AI models simultaneously.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-purple-900 mb-1">🎯 Purpose</div>
                      <div className="text-purple-800">Primary CLI training tool for engineering teams</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-purple-900 mb-1">📦 Type</div>
                      <div className="text-purple-800">Interactive command-line interface</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-purple-900 mb-1">📜 License</div>
                      <div className="text-purple-800">MIT License (Open Source)</div>
                    </div>
                  </div>
                </div>

                {/* Installation */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                  <h4 className="text-2xl font-bold text-blue-900 mb-4">📥 Installation</h4>

                  <div className="mb-4">
                    <div className="bg-white rounded-lg p-4 mb-3">
                      <p className="font-semibold text-blue-900 mb-2">📋 Requirements:</p>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>✓ Python 3.11 or higher</li>
                        <li>✓ pip (Python package manager)</li>
                        <li>✓ API keys for AI models (OpenAI, Gemini, Cerebras, Anthropic)</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-blue-900 font-semibold mb-2 flex items-center gap-2">
                          <span className="text-2xl">🐧</span> Linux / macOS Installation:
                        </p>
                        <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm">
{`# Install via pip
pip install code-puppy

# Verify installation
code-puppy --version`}
                        </pre>
                      </div>

                      <div>
                        <p className="text-blue-900 font-semibold mb-2 flex items-center gap-2">
                          <span className="text-2xl">🪟</span> Windows PowerShell Installation:
                        </p>
                        <pre className="bg-blue-900 text-blue-200 p-3 rounded text-sm">
{`# Installation command will be provided
# Simple PowerShell one-liner coming soon

# After installation, verify:
code-puppy --version`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 text-sm text-yellow-900">
                    <strong>💡 Setup Tip:</strong> Set your API keys as environment variables before using Code Puppy.
                    See the Configuration section below for details.
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                  <h4 className="text-2xl font-bold text-green-900 mb-4">✨ Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                      <h5 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" aria-hidden="true" />
                        Multi-Language Code Generation
                      </h5>
                      <p className="text-sm text-green-800">
                        Generate code in Python, JavaScript, TypeScript, C++, Go, Rust, and more.
                        Supports cross-language workflows.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                      <h5 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600" aria-hidden="true" />
                        Interactive CLI Interface
                      </h5>
                      <p className="text-sm text-blue-800">
                        Conversational mode for iterative development. Ask questions, refine code,
                        and get detailed explanations in real-time.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                      <h5 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-purple-600" aria-hidden="true" />
                        Round-Robin Model Distribution
                      </h5>
                      <p className="text-sm text-purple-800">
                        Automatically distribute requests across multiple AI models.
                        Optimize costs and leverage strengths of different models.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                      <h5 className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-orange-600" aria-hidden="true" />
                        Customizable Agent System
                      </h5>
                      <p className="text-sm text-orange-800">
                        Define custom agents with Python or JSON. Configure system prompts,
                        tool access, and behavior per agent.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-pink-500">
                      <h5 className="font-semibold text-pink-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-pink-600" aria-hidden="true" />
                        AGENTS.md Support
                      </h5>
                      <p className="text-sm text-pink-800">
                        Automatically reads and follows AGENTS.md instructions.
                        Ensures consistency with your project standards.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-500">
                      <h5 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600" aria-hidden="true" />
                        Code Quality Enforcement
                      </h5>
                      <p className="text-sm text-indigo-800">
                        Built-in quality principles enforced across all generated code.
                        Follows best practices and coding standards.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Usage Examples */}
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
                  <h4 className="text-2xl font-bold text-purple-900 mb-4">🚀 Usage Examples</h4>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-purple-900 mb-2">1. Interactive Mode (Recommended for Training)</h5>
                      <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm mb-2">
{`# Start interactive session
code-puppy --interactive

# In the interactive shell:
> write me a Python hello world program
> explain how async/await works in JavaScript
> create a REST API endpoint in Express`}
                      </pre>
                      <p className="text-sm text-purple-800">
                        Perfect for learning, experimentation, and iterative development.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-purple-900 mb-2">2. Direct Task Execution</h5>
                      <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm mb-2">
{`# Execute a specific task
code-puppy "write me a C++ hello world program in /tmp/main.cpp then compile it and run it"

# Generate and execute in one command
code-puppy "create a Node.js Express server on port 3000 with a /health endpoint"`}
                      </pre>
                      <p className="text-sm text-purple-800">
                        Great for automation and scripting workflows.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-purple-900 mb-2">3. With Environment Variables</h5>
                      <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm mb-2">
{`# Set your preferred model and API key
export MODEL_NAME=gpt-4
export OPENAI_API_KEY=your_api_key_here

# Run Code Puppy
code-puppy --interactive`}
                      </pre>
                      <p className="text-sm text-purple-800">
                        Configure model selection and authentication via environment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interactive Commands */}
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
                  <h4 className="text-2xl font-bold text-orange-900 mb-4">⌨️ Interactive Commands</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 border-l-4 border-orange-400">
                      <code className="font-semibold text-orange-900">/agent</code>
                      <p className="text-sm text-orange-800 mt-1">
                        Check current agent or switch to a different agent configuration.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border-l-4 border-orange-400">
                      <code className="font-semibold text-orange-900">/truncate &lt;N&gt;</code>
                      <p className="text-sm text-orange-800 mt-1">
                        Manage message history by truncating to last N messages. Useful for long sessions.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border-l-4 border-orange-400">
                      <code className="font-semibold text-orange-900">/mcp</code>
                      <p className="text-sm text-orange-800 mt-1">
                        Manage Model Context Protocol (MCP) servers for extended capabilities.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border-l-4 border-orange-400">
                      <code className="font-semibold text-orange-900">/exit</code> or <code className="font-semibold text-orange-900">/quit</code>
                      <p className="text-sm text-orange-800 mt-1">
                        Exit the interactive session.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Configuration */}
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-6">
                  <h4 className="text-2xl font-bold text-indigo-900 mb-4">⚙️ Configuration</h4>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-indigo-900 mb-2">Environment Variables (API Keys)</h5>
                      <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm">
{`# OpenAI (GPT-4, GPT-3.5)
export OPENAI_API_KEY=your_openai_key

# Google Gemini
export GEMINI_API_KEY=your_gemini_key

# Anthropic Claude
export ANTHROPIC_API_KEY=your_anthropic_key

# Cerebras
export CEREBRAS_API_KEY=your_cerebras_key

# Select default model
export MODEL_NAME=gpt-4`}
                      </pre>
                    </div>

                    <div>
                      <h5 className="font-semibold text-indigo-900 mb-2">Custom Agents (JSON Configuration)</h5>
                      <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`{
  "agent_name": "my-custom-agent",
  "system_prompt": "You are a helpful coding assistant...",
  "tools": ["read_file", "write_file", "execute_code"],
  "model": "gpt-4",
  "temperature": 0.7
}`}
                      </pre>
                      <p className="text-sm text-indigo-800 mt-2">
                        Define custom agents with specific behaviors, tool access, and model preferences.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-indigo-900 mb-2">Python-Based Agents</h5>
                      <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`from code_puppy import Agent

class MyAgent(Agent):
    def __init__(self):
        super().__init__(
            name="my-python-agent",
            system_prompt="Custom behavior..."
        )

    def execute(self, task):
        # Custom logic here
        return self.process(task)`}
                      </pre>
                      <p className="text-sm text-indigo-800 mt-2">
                        Advanced: Create Python-based agents with full programmatic control.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Multi-Model Support */}
                <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 mb-6">
                  <h4 className="text-2xl font-bold text-pink-900 mb-4">🤖 Supported AI Models</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-pink-900 mb-1">OpenAI</div>
                      <ul className="text-sm text-pink-800 space-y-1">
                        <li>• GPT-4</li>
                        <li>• GPT-3.5 Turbo</li>
                        <li>• Custom models</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-pink-900 mb-1">Google</div>
                      <ul className="text-sm text-pink-800 space-y-1">
                        <li>• Gemini Pro</li>
                        <li>• Gemini Flash</li>
                        <li>• Gemini models</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-pink-900 mb-1">Anthropic</div>
                      <ul className="text-sm text-pink-800 space-y-1">
                        <li>• Claude 3 Opus</li>
                        <li>• Claude 3 Sonnet</li>
                        <li>• Claude 3 Haiku</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-pink-900 mb-1">Cerebras</div>
                      <ul className="text-sm text-pink-800 space-y-1">
                        <li>• Fast inference</li>
                        <li>• Custom models</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-pink-900 mb-1">Round-Robin</div>
                      <ul className="text-sm text-pink-800 space-y-1">
                        <li>• Auto-distribute</li>
                        <li>• Load balancing</li>
                        <li>• Cost optimization</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-pink-900 mb-1">Extensible</div>
                      <ul className="text-sm text-pink-800 space-y-1">
                        <li>• Add custom models</li>
                        <li>• Local models</li>
                        <li>• API compatible</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Getting Started Guide */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-xl p-6">
                  <h4 className="text-2xl font-bold text-blue-900 mb-4">🎓 Getting Started Guide</h4>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                      <div>
                        <strong className="text-blue-900">Install Code Puppy</strong>
                        <p className="text-sm text-blue-800">Follow installation instructions above for your OS.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                      <div>
                        <strong className="text-green-900">Set up API Keys</strong>
                        <p className="text-sm text-green-800">Export your AI model API keys as environment variables.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                      <div>
                        <strong className="text-purple-900">Start Interactive Mode</strong>
                        <p className="text-sm text-purple-800">Run <code className="bg-purple-200 px-2 py-1 rounded">code-puppy --interactive</code> to begin.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
                      <div>
                        <strong className="text-orange-900">Try Example Tasks</strong>
                        <p className="text-sm text-orange-800">Start with simple tasks: "write hello world in Python", "explain async/await".</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</span>
                      <div>
                        <strong className="text-pink-900">Explore Advanced Features</strong>
                        <p className="text-sm text-pink-800">Use custom agents, multi-model distribution, and AGENTS.md integration.</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="mt-6 text-center">
                  <a
                    href="https://github.com/mpfaffenberger/code_puppy"
                    className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Dog className="w-5 h-5" aria-hidden="true" />
                    View Code Puppy on GitHub
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Tech Stacks Tab */}
          {activeTab === 'stacks' && (
            <div id="stacks-panel" role="tabpanel" aria-labelledby="stacks-tab">
              <h3 className="text-3xl font-bold mb-6">Technology Stack Options</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>There is no one-size-fits-all solution.</strong> The right technology stack depends on
                  your project requirements, team expertise, performance needs, and scalability goals.
                  Below are proven combinations with their strengths and ideal use cases.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-900">
                    <strong>💡 Philosophy:</strong> Choose technologies that solve YOUR specific problems.
                    Don't follow trends blindly. Each stack below has proven value in the right context.
                  </p>
                </div>

                {/* Stack 1: Modern SPA */}
                <div className="bg-white border-2 border-blue-300 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500 text-white rounded-lg px-3 py-1 font-semibold text-sm">
                      Stack #1
                    </div>
                    <h4 className="text-2xl font-bold text-blue-900">Modern SPA Stack</h4>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-blue-900 mb-2">🔧 Technology Combination:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      <div className="bg-white rounded px-3 py-2 text-blue-800">
                        <strong>Frontend:</strong> React 18 + Vite
                      </div>
                      <div className="bg-white rounded px-3 py-2 text-blue-800">
                        <strong>Styling:</strong> Tailwind CSS
                      </div>
                      <div className="bg-white rounded px-3 py-2 text-blue-800">
                        <strong>Backend:</strong> Fastify + TypeScript
                      </div>
                      <div className="bg-white rounded px-3 py-2 text-blue-800">
                        <strong>Database:</strong> PostgreSQL + Prisma
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="font-semibold text-green-700 mb-2">✅ Pros (When to Use):</p>
                      <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li>Lightning-fast development with Vite HMR</li>
                        <li>Large ecosystem of React components</li>
                        <li>Fastify is one of the fastest Node.js frameworks</li>
                        <li>PostgreSQL for relational data with ACID compliance</li>
                        <li>Prisma provides excellent TypeScript integration</li>
                        <li>Great for real-time dashboards and interactive UIs</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-red-700 mb-2">❌ Cons (When NOT to Use):</p>
                      <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li>Client-side rendering = poor initial SEO</li>
                        <li>Not ideal for content-heavy marketing sites</li>
                        <li>Requires separate frontend/backend deployment</li>
                        <li>PostgreSQL setup may be overkill for simple apps</li>
                        <li>Learning curve for developers new to React</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-3 text-sm text-blue-900">
                    <strong>🎯 Best For:</strong> Admin dashboards, internal tools, data-intensive SPAs, real-time applications,
                    projects where SEO is not critical, teams familiar with React ecosystem
                  </div>
                </div>

                {/* Stack 2: Full-Stack Framework */}
                <div className="bg-white border-2 border-green-300 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-500 text-white rounded-lg px-3 py-1 font-semibold text-sm">
                      Stack #2
                    </div>
                    <h4 className="text-2xl font-bold text-green-900">Full-Stack Framework Stack</h4>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-green-900 mb-2">🔧 Technology Combination:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      <div className="bg-white rounded px-3 py-2 text-green-800">
                        <strong>Framework:</strong> Next.js 14+
                      </div>
                      <div className="bg-white rounded px-3 py-2 text-green-800">
                        <strong>Styling:</strong> Tailwind CSS
                      </div>
                      <div className="bg-white rounded px-3 py-2 text-green-800">
                        <strong>Backend:</strong> Next.js API Routes
                      </div>
                      <div className="bg-white rounded px-3 py-2 text-green-800">
                        <strong>Database:</strong> PostgreSQL + Prisma
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="font-semibold text-green-700 mb-2">✅ Pros (When to Use):</p>
                      <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li>Excellent SEO with server-side rendering (SSR)</li>
                        <li>Static site generation (SSG) for fast page loads</li>
                        <li>Full-stack in one framework (no separate backend)</li>
                        <li>Built-in API routes for backend logic</li>
                        <li>Automatic code splitting and optimization</li>
                        <li>Great developer experience with file-based routing</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-red-700 mb-2">❌ Cons (When NOT to Use):</p>
                      <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li>More complex deployment than simple SPAs</li>
                        <li>Server costs (requires Node.js hosting)</li>
                        <li>Steeper learning curve for Next.js patterns</li>
                        <li>Overkill for simple client-side only apps</li>
                        <li>API routes limited compared to dedicated backend</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-lg p-3 text-sm text-green-900">
                    <strong>🎯 Best For:</strong> Marketing websites, e-commerce, blogs, content-heavy sites,
                    projects requiring excellent SEO, full-stack apps with simple backend needs, teams wanting one framework for everything
                  </div>
                </div>

                {/* Stack 3: Lightweight */}
                <div className="bg-white border-2 border-purple-300 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-500 text-white rounded-lg px-3 py-1 font-semibold text-sm">
                      Stack #3
                    </div>
                    <h4 className="text-2xl font-bold text-purple-900">Lightweight Performance Stack</h4>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-purple-900 mb-2">🔧 Technology Combination:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      <div className="bg-white rounded px-3 py-2 text-purple-800">
                        <strong>Frontend:</strong> Svelte + Vite
                      </div>
                      <div className="bg-white rounded px-3 py-2 text-purple-800">
                        <strong>Styling:</strong> Tailwind CSS
                      </div>
                      <div className="bg-white rounded px-3 py-2 text-purple-800">
                        <strong>Backend:</strong> Express + TypeScript
                      </div>
                      <div className="bg-white rounded px-3 py-2 text-purple-800">
                        <strong>Database:</strong> SQLite + Prisma
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="font-semibold text-green-700 mb-2">✅ Pros (When to Use):</p>
                      <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li>Smallest bundle size (Svelte compiles to vanilla JS)</li>
                        <li>Blazing fast performance</li>
                        <li>Simple, intuitive Svelte syntax</li>
                        <li>SQLite = zero database configuration</li>
                        <li>Express is mature with huge middleware ecosystem</li>
                        <li>Perfect for embedded or edge deployments</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-red-700 mb-2">❌ Cons (When NOT to Use):</p>
                      <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li>Smaller Svelte ecosystem vs React</li>
                        <li>SQLite not suitable for high-concurrency apps</li>
                        <li>Express is slower than Fastify/Hono</li>
                        <li>Fewer job opportunities for Svelte developers</li>
                        <li>Not ideal for large enterprise applications</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-lg p-3 text-sm text-purple-900">
                    <strong>🎯 Best For:</strong> Performance-critical apps, lightweight tools, personal projects,
                    embedded systems, single-user desktop apps, prototypes, projects prioritizing bundle size
                  </div>
                </div>

                {/* Stack 4: Enterprise */}
                <div className="bg-white border-2 border-orange-300 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-500 text-white rounded-lg px-3 py-1 font-semibold text-sm">
                      Stack #4
                    </div>
                    <h4 className="text-2xl font-bold text-orange-900">Enterprise Cloud Stack</h4>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-orange-900 mb-2">🔧 Technology Combination:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      <div className="bg-white rounded px-3 py-2 text-orange-800">
                        <strong>Frontend:</strong> Next.js + TypeScript
                      </div>
                      <div className="bg-white rounded px-3 py-2 text-orange-800">
                        <strong>Styling:</strong> Tailwind + shadcn/ui
                      </div>
                      <div className="bg-white rounded px-3 py-2 text-orange-800">
                        <strong>Backend:</strong> Next.js + Azure Functions
                      </div>
                      <div className="bg-white rounded px-3 py-2 text-orange-800">
                        <strong>Database:</strong> Azure SQL + Prisma
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="font-semibold text-green-700 mb-2">✅ Pros (When to Use):</p>
                      <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li>Enterprise-grade security and compliance (Azure)</li>
                        <li>Serverless scaling (pay per use)</li>
                        <li>Built-in authentication (Azure AD, Entra ID)</li>
                        <li>Global CDN and edge deployment</li>
                        <li>Managed database with automatic backups</li>
                        <li>Integration with Microsoft ecosystem</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-red-700 mb-2">❌ Cons (When NOT to Use):</p>
                      <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li>Higher costs at scale (cloud services)</li>
                        <li>Vendor lock-in to Azure ecosystem</li>
                        <li>More complex setup and configuration</li>
                        <li>Overkill for small projects or MVPs</li>
                        <li>Requires cloud/DevOps expertise</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg p-3 text-sm text-orange-900">
                    <strong>🎯 Best For:</strong> Large-scale enterprise applications, government projects,
                    healthcare/finance apps requiring compliance, global applications, organizations already using Azure/Microsoft stack
                  </div>
                </div>

                {/* Stack 5: Rapid Prototype */}
                <div className="bg-white border-2 border-pink-300 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-pink-500 text-white rounded-lg px-3 py-1 font-semibold text-sm">
                      Stack #5
                    </div>
                    <h4 className="text-2xl font-bold text-pink-900">Rapid Prototyping Stack</h4>
                  </div>

                  <div className="bg-pink-50 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-pink-900 mb-2">🔧 Technology Combination:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      <div className="bg-white rounded px-3 py-2 text-pink-800">
                        <strong>Frontend:</strong> Vue 3 + Vite
                      </div>
                      <div className="bg-white rounded px-3 py-2 text-pink-800">
                        <strong>Styling:</strong> Tailwind CSS
                      </div>
                      <div className="bg-white rounded px-3 py-2 text-pink-800">
                        <strong>Backend:</strong> Hono (Edge)
                      </div>
                      <div className="bg-white rounded px-3 py-2 text-pink-800">
                        <strong>Database:</strong> SQLite + Drizzle
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="font-semibold text-green-700 mb-2">✅ Pros (When to Use):</p>
                      <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li>Fastest time to MVP (simple, intuitive APIs)</li>
                        <li>Vue is easier to learn than React</li>
                        <li>Hono is ultralight and edge-optimized</li>
                        <li>Zero database configuration with SQLite</li>
                        <li>Deploy to Cloudflare Workers for free</li>
                        <li>Minimal boilerplate and setup</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-red-700 mb-2">❌ Cons (When NOT to Use):</p>
                      <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li>Vue ecosystem smaller than React</li>
                        <li>Hono is newer with fewer resources</li>
                        <li>SQLite limitations for production scale</li>
                        <li>Edge workers have execution time limits</li>
                        <li>Not suitable for complex backend logic</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-pink-100 to-pink-50 rounded-lg p-3 text-sm text-pink-900">
                    <strong>🎯 Best For:</strong> MVPs and prototypes, hackathon projects, landing pages,
                    simple web apps, startups validating ideas quickly, edge-optimized lightweight APIs
                  </div>
                </div>

                {/* Decision Matrix */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl p-6 mt-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">📊 Quick Decision Matrix</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="text-left p-2 border border-gray-300">Your Need</th>
                          <th className="text-left p-2 border border-gray-300">Recommended Stack</th>
                          <th className="text-left p-2 border border-gray-300">Why?</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="p-2 border border-gray-300">SEO is critical</td>
                          <td className="p-2 border border-gray-300 font-semibold text-green-700">Stack #2 (Next.js)</td>
                          <td className="p-2 border border-gray-300">Server-side rendering for search engines</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-2 border border-gray-300">Admin dashboard (internal tool)</td>
                          <td className="p-2 border border-gray-300 font-semibold text-blue-700">Stack #1 (React + Fastify)</td>
                          <td className="p-2 border border-gray-300">Fast dev, SEO not needed, real-time updates</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-2 border border-gray-300">Smallest bundle size</td>
                          <td className="p-2 border border-gray-300 font-semibold text-purple-700">Stack #3 (Svelte)</td>
                          <td className="p-2 border border-gray-300">Compiles to vanilla JS, minimal overhead</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-2 border border-gray-300">Enterprise compliance</td>
                          <td className="p-2 border border-gray-300 font-semibold text-orange-700">Stack #4 (Azure)</td>
                          <td className="p-2 border border-gray-300">Built-in security, compliance, governance</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-2 border border-gray-300">Weekend MVP</td>
                          <td className="p-2 border border-gray-300 font-semibold text-pink-700">Stack #5 (Vue + Hono)</td>
                          <td className="p-2 border border-gray-300">Fastest setup, deploy to edge for free</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 mt-6">
                  <p className="text-sm text-yellow-900">
                    <strong>⚡ Remember:</strong> The "best" stack is the one that fits YOUR project requirements,
                    team expertise, and constraints. Don't chase trends—choose technologies that solve real problems
                    for your specific use case. Start simple, scale when needed.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* AI Examples Tab */}
          {activeTab === 'examples' && (
            <div id="examples-panel" role="tabpanel" aria-labelledby="examples-tab">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-10 h-10 text-yellow-600" aria-hidden="true" />
                <h3 className="text-3xl font-bold">Amazing AI-Powered Projects</h3>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Real-world examples of applications built with AI assistance using <strong>AGENTS.md</strong> and modern AI tools.
                  These projects were "vibe coded" - rapidly prototyped from concept to production with AI pair programming.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-lg p-6 mb-8">
                  <h4 className="text-2xl font-semibold text-purple-900 mb-3">
                    🚀 What is "Vibe Coding"?
                  </h4>
                  <p className="text-purple-800 mb-4">
                    <strong>Vibe coding</strong> is the practice of rapidly building applications by collaborating with AI agents.
                    Instead of spending weeks on boilerplate and configuration, you describe what you want, and AI helps you build it—fast.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-purple-900 mb-2">Traditional Development</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Weeks of setup and configuration</li>
                        <li>• Manual boilerplate coding</li>
                        <li>• Repetitive CRUD operations</li>
                        <li>• Documentation hunting</li>
                        <li>• Trial and error debugging</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-green-900 mb-2">AI-Powered "Vibe Coding"</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• ✨ Minutes to functional prototype</li>
                        <li>• 🤖 AI generates boilerplate</li>
                        <li>• ⚡ Instant CRUD scaffolding</li>
                        <li>• 📚 AI knows the docs</li>
                        <li>• 🔍 AI helps debug instantly</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h4 className="text-2xl font-semibold mb-4">🌟 Real-World Examples</h4>

                {/* Example 1: Team Onboarding Portal */}
                <div className="bg-white border-2 border-blue-300 rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                      <Rocket className="w-8 h-8 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-semibold text-blue-900 mb-2">
                        Team Onboarding Portal (Azure VDI)
                      </h5>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Built in:</strong> 2-3 days with AI assistance | <strong>Stack:</strong> React + TypeScript + Fastify + SQLite
                      </p>
                      <p className="text-gray-700 mb-4">
                        A comprehensive Azure Virtual Desktop provisioning platform with hierarchical organization structure,
                        dynamic pricing calculator, and admin portal. Features a 5-step wizard for VDI configuration with
                        real-time cost estimation and auto-approval workflows.
                      </p>
                      <div className="grid md:grid-cols-3 gap-3 text-sm">
                        <div className="bg-blue-50 rounded p-2">
                          <p className="font-semibold text-blue-800">Key Features</p>
                          <ul className="text-gray-700 text-xs mt-1 space-y-1">
                            <li>• 5-step intake wizard</li>
                            <li>• Real-time pricing calc</li>
                            <li>• Admin approval workflow</li>
                            <li>• Audit trail logging</li>
                          </ul>
                        </div>
                        <div className="bg-green-50 rounded p-2">
                          <p className="font-semibold text-green-800">AI Contributions</p>
                          <ul className="text-gray-700 text-xs mt-1 space-y-1">
                            <li>• Form validation logic</li>
                            <li>• Pricing algorithms</li>
                            <li>• Database schema design</li>
                            <li>• API endpoint generation</li>
                          </ul>
                        </div>
                        <div className="bg-purple-50 rounded p-2">
                          <p className="font-semibold text-purple-800">Time Saved</p>
                          <ul className="text-gray-700 text-xs mt-1 space-y-1">
                            <li>• Setup: 2 hours vs 2 days</li>
                            <li>• CRUD ops: 30 min vs 3 days</li>
                            <li>• UI polish: 1 hour vs 1 week</li>
                            <li>• <strong>Total: 80% faster</strong></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Example 2: Network Performance Tester */}
                <div className="bg-white border-2 border-green-300 rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                      <CheckCircle2 className="w-8 h-8 text-green-600" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-semibold text-green-900 mb-2">
                        Agnostic Network Performance Tester
                      </h5>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Built in:</strong> 1-2 days with AI assistance | <strong>Stack:</strong> Node.js + Express + Real-time WebSockets
                      </p>
                      <p className="text-gray-700 mb-4">
                        A comprehensive network testing tool optimized for H.264 multimedia and virtual desktop environments.
                        Tests network performance across 30+ Azure regions with protocol-specific packet sizes (RDP, Citrix HDX, VMware Blast).
                        Provides real-time visualization of latency, jitter, packet loss, and bandwidth.
                      </p>
                      <div className="grid md:grid-cols-3 gap-3 text-sm">
                        <div className="bg-green-50 rounded p-2">
                          <p className="font-semibold text-green-800">Key Features</p>
                          <ul className="text-gray-700 text-xs mt-1 space-y-1">
                            <li>• 30+ Azure regions</li>
                            <li>• VDI protocol optimization</li>
                            <li>• Real-time metrics</li>
                            <li>• MTU discovery</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 rounded p-2">
                          <p className="font-semibold text-blue-800">AI Contributions</p>
                          <ul className="text-gray-700 text-xs mt-1 space-y-1">
                            <li>• WebSocket implementation</li>
                            <li>• Chart.js visualization</li>
                            <li>• Packet size algorithms</li>
                            <li>• System info detection</li>
                          </ul>
                        </div>
                        <div className="bg-purple-50 rounded p-2">
                          <p className="font-semibold text-purple-800">Complexity</p>
                          <ul className="text-gray-700 text-xs mt-1 space-y-1">
                            <li>• Real-time data streaming</li>
                            <li>• Multi-region testing</li>
                            <li>• Performance optimization</li>
                            <li>• <strong>Built solo in days</strong></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Example 3: Remote Training App */}
                <div className="bg-white border-2 border-purple-300 rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                      <Dog className="w-8 h-8 text-purple-600" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-semibold text-purple-900 mb-2">
                        Puppy Trainer (Windows Remote Training)
                      </h5>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Built in:</strong> 1 week with AI assistance | <strong>Stack:</strong> React + TypeScript + Electron + PowerShell
                      </p>
                      <p className="text-gray-700 mb-4">
                        A unified Windows application for remote technical training. Consolidates terminal, video streaming, chat,
                        and web browsing into one WCAG 2.2 AA-compliant interface. Features secure PowerShell/CMD integration,
                        Zoom webinar embedding, and real-time Q&A chat.
                      </p>
                      <div className="grid md:grid-cols-3 gap-3 text-sm">
                        <div className="bg-purple-50 rounded p-2">
                          <p className="font-semibold text-purple-800">Key Features</p>
                          <ul className="text-gray-700 text-xs mt-1 space-y-1">
                            <li>• Integrated terminal</li>
                            <li>• Video streaming embed</li>
                            <li>• Real-time chat (Socket.io)</li>
                            <li>• Accessibility (WCAG 2.2 AA)</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 rounded p-2">
                          <p className="font-semibold text-blue-800">AI Contributions</p>
                          <ul className="text-gray-700 text-xs mt-1 space-y-1">
                            <li>• Electron setup</li>
                            <li>• PowerShell integration</li>
                            <li>• Socket.io chat logic</li>
                            <li>• A11y compliance</li>
                          </ul>
                        </div>
                        <div className="bg-green-50 rounded p-2">
                          <p className="font-semibold text-green-800">Innovation</p>
                          <ul className="text-gray-700 text-xs mt-1 space-y-1">
                            <li>• All-in-one training app</li>
                            <li>• Cross-platform (Electron)</li>
                            <li>• Secure terminal access</li>
                            <li>• <strong>Zero fragmentation</strong></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Example 4: Command Center Dashboard */}
                <div className="bg-white border-2 border-orange-300 rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                      <Sparkles className="w-8 h-8 text-orange-600" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-semibold text-orange-900 mb-2">
                        Claude Command Center (Project Management Dashboard)
                      </h5>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Built in:</strong> 2 days with AI assistance | <strong>Stack:</strong> React + Node.js + Socket.io + PM2
                      </p>
                      <p className="text-gray-700 mb-4">
                        A comprehensive web-based management interface for Claude Code projects. Features real-time system monitoring
                        (CPU, RAM, disk, network), project management, session tracking, and integrated terminal—all accessible
                        through a beautiful web UI running on port 9090.
                      </p>
                      <div className="grid md:grid-cols-3 gap-3 text-sm">
                        <div className="bg-orange-50 rounded p-2">
                          <p className="font-semibold text-orange-800">Key Features</p>
                          <ul className="text-gray-700 text-xs mt-1 space-y-1">
                            <li>• Real-time monitoring</li>
                            <li>• Project dashboard</li>
                            <li>• Session tracking</li>
                            <li>• Built-in terminal</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 rounded p-2">
                          <p className="font-semibold text-blue-800">AI Contributions</p>
                          <ul className="text-gray-700 text-xs mt-1 space-y-1">
                            <li>• WebSocket setup</li>
                            <li>• System info APIs</li>
                            <li>• Dashboard UI design</li>
                            <li>• PM2 integration</li>
                          </ul>
                        </div>
                        <div className="bg-purple-50 rounded p-2">
                          <p className="font-semibold text-purple-800">Impact</p>
                          <ul className="text-gray-700 text-xs mt-1 space-y-1">
                            <li>• Centralized management</li>
                            <li>• Auto-start with PM2</li>
                            <li>• Real-time updates</li>
                            <li>• <strong>Single pane of glass</strong></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Infrastructure & Automation Examples Section */}
                <div className="mt-10 mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    🔧 Infrastructure Automation & PowerShell Examples
                  </h4>
                  <p className="text-gray-700 mb-6">
                    AI excels at infrastructure automation, system integrations, and enterprise tooling.
                    Here are real-world examples of PowerShell-based tools built with AI assistance:
                  </p>

                  {/* Example 1: VMware Horizon Integration */}
                  <div className="bg-white border-2 border-orange-300 rounded-lg p-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                        <Rocket className="w-8 h-8 text-orange-600" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xl font-semibold text-orange-900 mb-2">
                          VMware Horizon PowerShell Integration
                        </h5>
                        <p className="text-sm text-gray-600 mb-3">
                          <strong>Use Case:</strong> Automate VDI desktop provisioning and management
                        </p>
                        <p className="text-gray-700 mb-4">
                          Build PowerShell scripts to interact with <a href="https://docs.omnissa.com/category/Horizon_8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">VMware Horizon 8</a> APIs.
                          Automate desktop pool management, user session monitoring, and resource allocation.
                          AI can generate REST API calls, handle authentication, and parse responses.
                        </p>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                          <div className="bg-orange-50 rounded p-2">
                            <p className="font-semibold text-orange-800">Key Tasks</p>
                            <ul className="text-gray-700 text-xs mt-1 space-y-1">
                              <li>• Create desktop pools</li>
                              <li>• Monitor user sessions</li>
                              <li>• Provision VMs</li>
                              <li>• Resource health checks</li>
                            </ul>
                          </div>
                          <div className="bg-blue-50 rounded p-2">
                            <p className="font-semibold text-blue-800">AI Helps With</p>
                            <ul className="text-gray-700 text-xs mt-1 space-y-1">
                              <li>• API authentication logic</li>
                              <li>• JSON parsing/formatting</li>
                              <li>• Error handling patterns</li>
                              <li>• PowerShell cmdlet structure</li>
                            </ul>
                          </div>
                          <div className="bg-purple-50 rounded p-2">
                            <p className="font-semibold text-purple-800">Example Output</p>
                            <ul className="text-gray-700 text-xs mt-1 space-y-1">
                              <li>• Automated provisioning script</li>
                              <li>• Session report generator</li>
                              <li>• Health dashboard data</li>
                              <li>• <strong>Hours → Minutes</strong></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Example 2: Broadcom Log Insight Frontend */}
                  <div className="bg-white border-2 border-teal-300 rounded-lg p-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-teal-100 rounded-full p-3 flex-shrink-0">
                        <FileText className="w-8 h-8 text-teal-600" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xl font-semibold text-teal-900 mb-2">
                          Broadcom Log Insight Custom Frontend
                        </h5>
                        <p className="text-sm text-gray-600 mb-3">
                          <strong>Use Case:</strong> Build intuitive UI for log analysis and visualization
                        </p>
                        <p className="text-gray-700 mb-4">
                          Create a React/Vue frontend that connects to Broadcom Log Insight APIs. Display logs in real-time dashboards,
                          create custom queries, and visualize trends. AI generates API integration code, chart components, and query builders.
                        </p>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                          <div className="bg-teal-50 rounded p-2">
                            <p className="font-semibold text-teal-800">Features</p>
                            <ul className="text-gray-700 text-xs mt-1 space-y-1">
                              <li>• Real-time log streaming</li>
                              <li>• Custom query builder</li>
                              <li>• Chart visualizations</li>
                              <li>• Alert configuration</li>
                            </ul>
                          </div>
                          <div className="bg-blue-50 rounded p-2">
                            <p className="font-semibold text-blue-800">AI Contributions</p>
                            <ul className="text-gray-700 text-xs mt-1 space-y-1">
                              <li>• REST API client setup</li>
                              <li>• WebSocket log streaming</li>
                              <li>• Chart.js/Recharts integration</li>
                              <li>• Query DSL generator</li>
                            </ul>
                          </div>
                          <div className="bg-purple-50 rounded p-2">
                            <p className="font-semibold text-purple-800">Time Saved</p>
                            <ul className="text-gray-700 text-xs mt-1 space-y-1">
                              <li>• UI: 2 days → 4 hours</li>
                              <li>• API integration: 1 week → 1 day</li>
                              <li>• Charts: 3 days → 2 hours</li>
                              <li>• <strong>90% faster</strong></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Example 3: Log Analysis & Trend Detection */}
                  <div className="bg-white border-2 border-indigo-300 rounded-lg p-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-indigo-100 rounded-full p-3 flex-shrink-0">
                        <Sparkles className="w-8 h-8 text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xl font-semibold text-indigo-900 mb-2">
                          Intelligent Log Analysis & Pattern Detection
                        </h5>
                        <p className="text-sm text-gray-600 mb-3">
                          <strong>Use Case:</strong> Automatically detect anomalies and trends in system logs
                        </p>
                        <p className="text-gray-700 mb-4">
                          Build PowerShell or Python scripts that parse log files, detect patterns, and identify anomalies.
                          AI helps with regex patterns, statistical analysis, and ML-based anomaly detection.
                          Generate visual reports and automated alerts for critical events.
                        </p>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                          <div className="bg-indigo-50 rounded p-2">
                            <p className="font-semibold text-indigo-800">Capabilities</p>
                            <ul className="text-gray-700 text-xs mt-1 space-y-1">
                              <li>• Regex pattern matching</li>
                              <li>• Anomaly detection</li>
                              <li>• Trend analysis</li>
                              <li>• Automated alerting</li>
                            </ul>
                          </div>
                          <div className="bg-blue-50 rounded p-2">
                            <p className="font-semibold text-blue-800">AI Helps With</p>
                            <ul className="text-gray-700 text-xs mt-1 space-y-1">
                              <li>• Complex regex generation</li>
                              <li>• Statistical algorithms</li>
                              <li>• Data aggregation logic</li>
                              <li>• Report formatting</li>
                            </ul>
                          </div>
                          <div className="bg-purple-50 rounded p-2">
                            <p className="font-semibold text-purple-800">Results</p>
                            <ul className="text-gray-700 text-xs mt-1 space-y-1">
                              <li>• 99% pattern accuracy</li>
                              <li>• Real-time alerts</li>
                              <li>• Trend visualization</li>
                              <li>• <strong>Proactive monitoring</strong></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Example 4: Capacity Trending Dashboard */}
                  <div className="bg-white border-2 border-pink-300 rounded-lg p-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-pink-100 rounded-full p-3 flex-shrink-0">
                        <CheckCircle2 className="w-8 h-8 text-pink-600" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xl font-semibold text-pink-900 mb-2">
                          Infrastructure Capacity Trending & Forecasting
                        </h5>
                        <p className="text-sm text-gray-600 mb-3">
                          <strong>Use Case:</strong> Predict capacity needs before resources run out
                        </p>
                        <p className="text-gray-700 mb-4">
                          Collect metrics from multiple systems (CPU, memory, disk, network), analyze historical trends,
                          and forecast future capacity needs. AI generates data collection scripts, time-series analysis,
                          and predictive models with visualizations.
                        </p>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                          <div className="bg-pink-50 rounded p-2">
                            <p className="font-semibold text-pink-800">Data Sources</p>
                            <ul className="text-gray-700 text-xs mt-1 space-y-1">
                              <li>• Performance counters</li>
                              <li>• WMI queries (Windows)</li>
                              <li>• SNMP (network devices)</li>
                              <li>• vCenter/Horizon APIs</li>
                            </ul>
                          </div>
                          <div className="bg-blue-50 rounded p-2">
                            <p className="font-semibold text-blue-800">AI Contributions</p>
                            <ul className="text-gray-700 text-xs mt-1 space-y-1">
                              <li>• Data collection scripts</li>
                              <li>• Time-series analysis</li>
                              <li>• Forecasting algorithms</li>
                              <li>• Dashboard visualizations</li>
                            </ul>
                          </div>
                          <div className="bg-purple-50 rounded p-2">
                            <p className="font-semibold text-purple-800">Business Value</p>
                            <ul className="text-gray-700 text-xs mt-1 space-y-1">
                              <li>• Prevent outages</li>
                              <li>• Optimize spending</li>
                              <li>• Plan expansions</li>
                              <li>• <strong>Proactive planning</strong></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Example 5: Remote Machine Inventory & Troubleshooting */}
                  <div className="bg-white border-2 border-cyan-300 rounded-lg p-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-cyan-100 rounded-full p-3 flex-shrink-0">
                        <Code2 className="w-8 h-8 text-cyan-600" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xl font-semibold text-cyan-900 mb-2">
                          Remote Machine Inventory & Diagnostic Tool
                        </h5>
                        <p className="text-sm text-gray-600 mb-3">
                          <strong>Use Case:</strong> Gather system info from remote machines for troubleshooting
                        </p>
                        <p className="text-gray-700 mb-4">
                          PowerShell script that connects to remote Windows/Linux machines, gathers comprehensive system information
                          (hardware, software, network, services, events), and generates troubleshooting reports.
                          AI helps with WMI queries, SSH connections, error handling, and report formatting.
                        </p>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                          <div className="bg-cyan-50 rounded p-2">
                            <p className="font-semibold text-cyan-800">Collected Data</p>
                            <ul className="text-gray-700 text-xs mt-1 space-y-1">
                              <li>• Hardware specs</li>
                              <li>• Installed software</li>
                              <li>• Network config</li>
                              <li>• Event logs (errors)</li>
                            </ul>
                          </div>
                          <div className="bg-blue-50 rounded p-2">
                            <p className="font-semibold text-blue-800">AI Helps With</p>
                            <ul className="text-gray-700 text-xs mt-1 space-y-1">
                              <li>• PowerShell remoting</li>
                              <li>• WMI/CIM queries</li>
                              <li>• SSH connection logic</li>
                              <li>• HTML/CSV report gen</li>
                            </ul>
                          </div>
                          <div className="bg-purple-50 rounded p-2">
                            <p className="font-semibold text-purple-800">Impact</p>
                            <ul className="text-gray-700 text-xs mt-1 space-y-1">
                              <li>• Troubleshooting: hours → minutes</li>
                              <li>• Comprehensive reports</li>
                              <li>• Batch processing</li>
                              <li>• <strong>Support efficiency +300%</strong></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 mt-8">
                  <h4 className="text-xl font-semibold text-yellow-900 mb-3">
                    🚀 Ready to "Vibe Code" Your Own Project?
                  </h4>
                  <p className="text-yellow-800 mb-4">
                    Start by creating an <strong>AGENTS.md</strong> file in your repository. Define your project structure,
                    tech stack, code style, and security rules. Then fire up your favorite AI tool (Cursor, GitHub Copilot,
                    Claude Code, etc.) and start building!
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-800 mb-2">Quick Start Checklist:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• ✅ Create <code className="bg-gray-200 px-1 rounded">AGENTS.md</code> file (use examples from this site)</li>
                      <li>• ✅ Choose your tech stack (React/Vue/Next + Fastify/Express + PostgreSQL/SQLite)</li>
                      <li>• ✅ Define code style rules (TypeScript strict, ESLint, Prettier)</li>
                      <li>• ✅ Set security standards (Zod validation, no secrets in code)</li>
                      <li>• ✅ Start coding with AI assistance</li>
                      <li>• ✅ Use AI for boilerplate, you focus on business logic</li>
                      <li>• ✅ Ship fast, iterate faster!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI Patterns & Best Practices Tab */}
          {activeTab === 'patterns' && (
            <div id="patterns-panel" role="tabpanel" aria-labelledby="patterns-tab">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-10 h-10 text-purple-600" aria-hidden="true" />
                <h3 className="text-3xl font-bold">AI Development Patterns & Best Practices</h3>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-8">
                  Understanding the patterns of AI-powered development is crucial for success. This guide shows you what AI excels at,
                  what you should own, and how to maximize productivity with AI coding assistants like Claude Code, GitHub Copilot, and Cursor.
                </p>

                {/* Core Division of Responsibility */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-400 rounded-lg p-6 mb-8">
                  <h4 className="text-2xl font-semibold text-green-900 mb-4">
                    🎯 The Golden Rule: Division of Responsibility
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                      <h5 className="font-semibold text-green-800 mb-3 text-lg">What AI Excels At:</h5>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">⚡</span>
                          <div>
                            <strong>Boilerplate Code Generation:</strong> API routes, CRUD operations, database schemas, configuration files
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">🎨</span>
                          <div>
                            <strong>UI Component Scaffolding:</strong> React/Vue components, forms, modals, responsive layouts
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">🔌</span>
                          <div>
                            <strong>API Endpoint Creation:</strong> REST/GraphQL endpoints with validation and error handling
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">📊</span>
                          <div>
                            <strong>Database Schema Design:</strong> Prisma models, migrations, relationships, indexes
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">🔍</span>
                          <div>
                            <strong>Debugging & Error Fixing:</strong> Stack trace analysis, bug fixes, edge case handling
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">📚</span>
                          <div>
                            <strong>Documentation Writing:</strong> README files, API docs, inline comments, JSDoc
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">♿</span>
                          <div>
                            <strong>Accessibility Implementation:</strong> ARIA labels, keyboard navigation, WCAG compliance
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">🧪</span>
                          <div>
                            <strong>Test Case Generation:</strong> Unit tests, integration tests, mocks, fixtures
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">🔄</span>
                          <div>
                            <strong>Refactoring:</strong> Code cleanup, DRY principles, extract functions/components
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">🚀</span>
                          <div>
                            <strong>Configuration Files:</strong> ESLint, Prettier, TypeScript, Vite, Webpack configs
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                      <h5 className="font-semibold text-blue-800 mb-3 text-lg">What You Still Own:</h5>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">🎯</span>
                          <div>
                            <strong>Product Vision & Requirements:</strong> What to build, why it matters, success criteria
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">🏗️</span>
                          <div>
                            <strong>Architecture Decisions:</strong> Tech stack choices, system design, scalability planning
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">🎨</span>
                          <div>
                            <strong>UX/UI Design Direction:</strong> User flows, wireframes, design systems, branding
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">🔒</span>
                          <div>
                            <strong>Security Policy Enforcement:</strong> Authentication strategy, data privacy, compliance
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">✅</span>
                          <div>
                            <strong>Code Review & Quality Gates:</strong> PR reviews, standards enforcement, acceptance criteria
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">🚀</span>
                          <div>
                            <strong>Deployment Strategy:</strong> CI/CD pipelines, staging/production environments, rollback plans
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">📈</span>
                          <div>
                            <strong>Performance Optimization:</strong> Profiling, bottleneck identification, caching strategy
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">🤝</span>
                          <div>
                            <strong>Stakeholder Communication:</strong> Status updates, demos, requirement clarification
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">🧠</span>
                          <div>
                            <strong>Business Logic:</strong> Complex algorithms, domain-specific rules, workflow orchestration
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">🔬</span>
                          <div>
                            <strong>Innovation & Creativity:</strong> Novel solutions, competitive advantages, unique features
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Effective AI Collaboration Patterns */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    🤖 Effective AI Collaboration Patterns
                  </h4>

                  {/* Pattern 1 */}
                  <div className="bg-white border-2 border-purple-300 rounded-lg p-6 mb-4">
                    <h5 className="text-xl font-semibold text-purple-900 mb-3">
                      1. Start with Clear Requirements (AGENTS.md)
                    </h5>
                    <p className="text-gray-700 mb-3">
                      Before writing any code, create an <strong>AGENTS.md</strong> file that defines your project structure, tech stack, code style, and security rules.
                      This gives AI consistent context and reduces hallucinations.
                    </p>
                    <div className="bg-purple-50 rounded p-3">
                      <p className="text-sm font-semibold text-purple-800 mb-2">Example Prompt:</p>
                      <code className="text-sm text-gray-800">
                        "Following the AGENTS.md file, create a user authentication API with email/password login using Fastify, Prisma, and JWT."
                      </code>
                    </div>
                  </div>

                  {/* Pattern 2 */}
                  <div className="bg-white border-2 border-indigo-300 rounded-lg p-6 mb-4">
                    <h5 className="text-xl font-semibold text-indigo-900 mb-3">
                      2. Iterate Incrementally
                    </h5>
                    <p className="text-gray-700 mb-3">
                      Build features in small, testable chunks. Ask AI to generate one component/endpoint at a time, test it, then move to the next.
                      This prevents overwhelming complexity and makes debugging easier.
                    </p>
                    <div className="bg-indigo-50 rounded p-3 space-y-2">
                      <p className="text-sm font-semibold text-indigo-800">Good Sequence:</p>
                      <ol className="text-sm text-gray-800 list-decimal list-inside space-y-1">
                        <li>Create database schema → Test migrations</li>
                        <li>Build API endpoint → Test with Postman/curl</li>
                        <li>Create UI component → Test in isolation</li>
                        <li>Integrate components → Test end-to-end</li>
                      </ol>
                    </div>
                  </div>

                  {/* Pattern 3 */}
                  <div className="bg-white border-2 border-teal-300 rounded-lg p-6 mb-4">
                    <h5 className="text-xl font-semibold text-teal-900 mb-3">
                      3. Let AI Handle Boilerplate, You Focus on Logic
                    </h5>
                    <p className="text-gray-700 mb-3">
                      Use AI to generate scaffolding (routes, components, types), then add your business logic and domain-specific rules.
                      AI is great at structure, you're better at strategy.
                    </p>
                    <div className="bg-teal-50 rounded p-3">
                      <p className="text-sm font-semibold text-teal-800 mb-2">Example:</p>
                      <p className="text-sm text-gray-800">
                        <strong>AI generates:</strong> REST API with CRUD endpoints<br />
                        <strong>You add:</strong> Custom pricing logic, discount rules, inventory checks
                      </p>
                    </div>
                  </div>

                  {/* Pattern 4 */}
                  <div className="bg-white border-2 border-orange-300 rounded-lg p-6 mb-4">
                    <h5 className="text-xl font-semibold text-orange-900 mb-3">
                      4. Always Validate & Test AI Output
                    </h5>
                    <p className="text-gray-700 mb-3">
                      AI can make mistakes. Always run tests, check for edge cases, and validate security implications.
                      Never blindly accept generated code, especially for authentication, payments, or data handling.
                    </p>
                    <div className="bg-orange-50 rounded p-3">
                      <p className="text-sm font-semibold text-orange-800 mb-2">Validation Checklist:</p>
                      <ul className="text-sm text-gray-800 space-y-1">
                        <li>✓ Does it compile/run without errors?</li>
                        <li>✓ Does it handle edge cases (null, empty, invalid input)?</li>
                        <li>✓ Is it secure (no SQL injection, XSS, secrets in code)?</li>
                        <li>✓ Does it follow project standards (AGENTS.md)?</li>
                        <li>✓ Are there tests covering critical paths?</li>
                      </ul>
                    </div>
                  </div>

                  {/* Pattern 5 */}
                  <div className="bg-white border-2 border-pink-300 rounded-lg p-6 mb-4">
                    <h5 className="text-xl font-semibold text-pink-900 mb-3">
                      5. Use AI for Refactoring & Optimization
                    </h5>
                    <p className="text-gray-700 mb-3">
                      After building a working feature, ask AI to refactor for better performance, readability, or maintainability.
                      AI excels at identifying code smells and suggesting improvements.
                    </p>
                    <div className="bg-pink-50 rounded p-3">
                      <p className="text-sm font-semibold text-pink-800 mb-2">Example Prompts:</p>
                      <ul className="text-sm text-gray-800 space-y-1">
                        <li>"Refactor this function to reduce complexity (Cyclomatic &lt; 10)"</li>
                        <li>"Optimize this database query to reduce N+1 problems"</li>
                        <li>"Extract this logic into reusable utility functions"</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Common Pitfalls to Avoid */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    ⚠️ Common Pitfalls to Avoid
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
                      <h5 className="font-semibold text-red-900 mb-2">❌ Don't Do This:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Accepting AI code without reviewing it</li>
                        <li>• Building entire features in one AI prompt</li>
                        <li>• Skipping tests because "AI wrote it"</li>
                        <li>• Using AI for complex business logic without validation</li>
                        <li>• Ignoring security best practices</li>
                        <li>• Not providing context (no AGENTS.md file)</li>
                        <li>• Asking AI to make architectural decisions</li>
                        <li>• Blindly copying AI-generated secrets/credentials</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
                      <h5 className="font-semibold text-green-900 mb-2">✅ Do This Instead:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Review every line of AI-generated code</li>
                        <li>• Break features into small, testable chunks</li>
                        <li>• Write comprehensive tests (80%+ coverage)</li>
                        <li>• Validate business logic with domain experts</li>
                        <li>• Follow security checklists (OWASP, SANS)</li>
                        <li>• Create AGENTS.md for consistent context</li>
                        <li>• Make architecture decisions yourself</li>
                        <li>• Use environment variables for all secrets</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Productivity Multipliers */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-400 rounded-lg p-6 mb-8">
                  <h4 className="text-2xl font-semibold text-purple-900 mb-4">
                    🚀 Productivity Multipliers
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-semibold text-purple-800 mb-2">Speed Gains</h5>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Boilerplate: <strong>80% faster</strong></li>
                        <li>• CRUD APIs: <strong>70% faster</strong></li>
                        <li>• UI components: <strong>60% faster</strong></li>
                        <li>• Tests: <strong>50% faster</strong></li>
                        <li>• Documentation: <strong>90% faster</strong></li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-semibold text-purple-800 mb-2">Quality Improvements</h5>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Fewer bugs (AI catches edge cases)</li>
                        <li>• Better accessibility (AI knows WCAG)</li>
                        <li>• Consistent code style</li>
                        <li>• Comprehensive error handling</li>
                        <li>• Up-to-date best practices</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-semibold text-purple-800 mb-2">Learning Acceleration</h5>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Learn new frameworks faster</li>
                        <li>• Understand unfamiliar codebases</li>
                        <li>• Discover new patterns/techniques</li>
                        <li>• Get instant explanations</li>
                        <li>• Stay current with tech trends</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Real-World Workflow */}
                <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-blue-900 mb-3">
                    📝 Real-World Workflow Example
                  </h4>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                      <div>
                        <strong>Define Requirements:</strong> Create AGENTS.md with project structure, tech stack, and standards
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                      <div>
                        <strong>AI Generates Scaffold:</strong> "Create a Fastify server with TypeScript, Prisma, and auth routes"
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                      <div>
                        <strong>You Add Business Logic:</strong> Implement domain-specific rules, validations, workflows
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                      <div>
                        <strong>AI Generates Tests:</strong> "Write unit tests for the authentication service with 80%+ coverage"
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">5</span>
                      <div>
                        <strong>You Review & Validate:</strong> Run tests, check security, verify edge cases
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">6</span>
                      <div>
                        <strong>AI Refactors:</strong> "Optimize this code for performance and readability"
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">7</span>
                      <div>
                        <strong>AI Documents:</strong> "Generate API documentation and update README with setup instructions"
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">8</span>
                      <div>
                        <strong>Ship It:</strong> Deploy with confidence knowing AI handled tedious work, you handled critical logic
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* My AGENTS.md Tab */}
          {activeTab === 'myagents' && (
            <div id="myagents-panel" role="tabpanel" aria-labelledby="myagents-tab">
              <h3 className="text-3xl font-bold mb-6">My AGENTS.md File</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  This is the actual <strong>AGENTS.md</strong> file from my Claude Code instance at <code className="bg-gray-100 px-2 py-1 rounded text-sm">~/AGENTS.md</code>.
                  It demonstrates a real-world implementation of the AGENTS.md standard.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-semibold text-blue-900 mb-3">
                    📂 File Location: ~/AGENTS.md
                  </h4>
                  <p className="text-sm text-blue-800 mb-3">
                    Version: 1.0.0 | Last Updated: 2025-10-07 | Framework: AGENTS.md Standard
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-blue-900 mb-1">Tech Stack</p>
                      <p className="text-gray-700">React 18 + TypeScript + Vite + Fastify + PostgreSQL</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-blue-900 mb-1">Testing</p>
                      <p className="text-gray-700">Vitest + React Testing Library (80%+ coverage)</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-blue-900 mb-1">Supported Tools</p>
                      <p className="text-gray-700">20+ AI tools (Copilot, Cursor, Claude Code, etc.)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
                    <span className="font-mono text-sm">AGENTS.md</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-400">Markdown</span>
                      <Button
                        onClick={async (): Promise<void> => {
                          const agentsContent = `# AGENTS.md

**Project:** Modern Full-Stack Application
**Version:** 1.0.0
**Last Updated:** 2025-10-07
**Framework:** AGENTS.md Standard

> **🎯 Purpose**: This file provides AI agents with everything they need to understand, build, and maintain this project. Following the [AGENTS.md](https://agents.md) open standard for AI agent instructions.

---

## 📋 Project Overview

### What is This Project?

A modern full-stack application built with enterprise-grade development standards. This project demonstrates professional software development practices optimized for AI agent collaboration.

**Key Features:**
- ✨ Beautiful, modern UI/UX
- 🔒 Security best practices (input validation, authentication)
- 🧪 Comprehensive testing (80%+ coverage)
- 📚 Production-ready code quality
- 🤖 AI agent optimized (supported by 20+ AI tools)

### Tech Stack (Choose Your Tools)

**Frontend Options:**
- React 18+ with TypeScript (recommended)
- Next.js 14+ for SSR/SSG needs
- Vue 3+ for simpler learning curve
- Svelte for minimal bundle size

**Styling Options:**
- Tailwind CSS (utility-first, recommended)
- CSS Modules
- Styled Components
- Material-UI / shadcn/ui component libraries

**Backend Options:**
- Fastify (fast, TypeScript-friendly, recommended)
- Express (popular, mature ecosystem)
- Hono (edge-optimized, lightweight)
- Next.js API routes (full-stack in one framework)

**Database Options:**
- PostgreSQL (relational, production-ready)
- SQLite (simple, embedded)
- MongoDB (document-based, flexible schema)
- Prisma ORM (recommended for TypeScript)

**Current Implementation:**
- Frontend: React 18 + TypeScript + Vite + Tailwind CSS
- Backend: Fastify + TypeScript + Prisma
- Database: PostgreSQL 15
- Testing: Vitest + React Testing Library

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL 15+
- Git

### Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>
cd <project-name>

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials

# Run database migrations
npm run db:migrate

# Seed database with demo data (optional)
npm run db:seed

# Start development server
npm run dev:all  # Starts both frontend and backend
\`\`\`

### Available Commands

\`\`\`bash
# Development
npm run dev              # Start frontend dev server
npm run dev:backend      # Start backend dev server
npm run dev:all          # Start both frontend and backend

# Build
npm run build            # Build for production
npm run preview          # Preview production build

# Testing
npm test                 # Run all tests
npm run test:coverage    # Run tests with coverage report
npm run test:watch       # Run tests in watch mode

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix linting issues
npm run format           # Format code with Prettier
npm run type-check       # Check TypeScript types

# Database
npm run db:migrate       # Run database migrations
npm run db:seed          # Seed database
npm run db:studio        # Open Prisma Studio
\`\`\`

---

## 📁 Project Structure

\`\`\`
project-root/
├── src/                  # Frontend source code
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   └── ...          # Feature components
│   ├── services/         # API clients
│   ├── utils/            # Helper functions
│   ├── types/            # TypeScript types
│   └── App.tsx           # Root component
│
├── server/               # Backend source code
│   ├── routes/           # API routes
│   ├── middleware/       # Middleware functions
│   ├── services/         # Business logic
│   └── index.ts          # Server entry point
│
├── prisma/               # Database
│   ├── schema.prisma     # Database schema
│   ├── migrations/       # Migration files
│   └── seed.ts           # Seed data
│
├── tests/                # Test files
│   ├── unit/             # Unit tests
│   ├── integration/      # Integration tests
│   └── e2e/              # End-to-end tests
│
├── docs/                 # Documentation
│   ├── API.md            # API documentation
│   └── ARCHITECTURE.md   # System architecture
│
├── .env.example          # Environment variables template
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── AGENTS.md             # This file (AI agent instructions)
\`\`\`

---

## 🎨 Code Style & Standards

### TypeScript

**ALWAYS use TypeScript strict mode:**

\`\`\`typescript
// ✅ Good: Explicit types
interface User {
  id: string
  email: string
  name: string
}

function getUser(id: string): Promise<User> {
  // implementation
}

// ❌ Bad: Using 'any'
function getUser(id: any): any {
  // implementation
}
\`\`\`

### React Components

**Use functional components with TypeScript:**

\`\`\`tsx
// ✅ Good: Typed props
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={\`btn btn-\${variant}\`}
    >
      {label}
    </button>
  )
}

// ❌ Bad: No types
export function Button({ label, onClick, variant }) {
  return <button onClick={onClick}>{label}</button>
}
\`\`\`

### API Routes

**Use Zod for input validation:**

\`\`\`typescript
import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'

// Define validation schema
const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  password: z.string().min(8)
})

// Use in route handler
async function createUser(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  try {
    // Validate input
    const data = createUserSchema.parse(request.body)

    // Business logic
    const user = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        passwordHash: await hashPassword(data.password)
      }
    })

    reply.code(201).send({ user })
  } catch (error) {
    if (error instanceof z.ZodError) {
      reply.code(400).send({ error: 'Validation failed', details: error.errors })
    }
    throw error
  }
}
\`\`\`

### Error Handling

**Always handle errors gracefully:**

\`\`\`typescript
// ✅ Good: Proper error handling
try {
  const data = await fetchData()
  return { success: true, data }
} catch (error) {
  if (error instanceof ApiError) {
    return { success: false, error: error.message }
  }
  throw error
}

// ❌ Bad: Silent failures
try {
  const data = await fetchData()
  return data
} catch {
  return null
}
\`\`\`

---

## 🧪 Testing

### Test Coverage Requirements

**REQUIRED: Minimum 80% code coverage**

\`\`\`bash
# Run tests with coverage
npm run test:coverage

# Coverage should show:
# Statements: 80% or higher
# Branches: 80% or higher
# Functions: 80% or higher
# Lines: 80% or higher
\`\`\`

### Writing Tests

**Unit Tests:**

\`\`\`typescript
import { describe, it, expect } from 'vitest'
import { formatDate } from '../utils/formatDate'

describe('formatDate', () => {
  it('should format date correctly', () => {
    const date = new Date('2025-10-07')
    expect(formatDate(date)).toBe('October 7, 2025')
  })

  it('should handle invalid dates', () => {
    expect(() => formatDate(null)).toThrow()
  })
})
\`\`\`

**Component Tests:**

\`\`\`tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from '../components/Button'

describe('Button', () => {
  it('should call onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button label="Click me" onClick={handleClick} />)

    const button = screen.getByRole('button', { name: /click me/i })
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
\`\`\`

**API Tests:**

\`\`\`typescript
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { build } from '../server'

describe('User API', () => {
  let app

  beforeAll(async () => {
    app = await build()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should create a user', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/api/users',
      payload: {
        email: 'test@example.com',
        name: 'Test User',
        password: 'password123'
      }
    })

    expect(response.statusCode).toBe(201)
    expect(response.json()).toHaveProperty('user')
  })
})
\`\`\`

---

## 🔒 Security Best Practices

### Environment Variables

**NEVER hardcode secrets in code:**

\`\`\`typescript
// ✅ Good: Use environment variables
const JWT_SECRET = process.env.JWT_SECRET
const DATABASE_URL = process.env.DATABASE_URL

// ❌ Bad: Hardcoded secrets
const JWT_SECRET = 'my-secret-key-123'
const DATABASE_URL = 'postgresql://user:password@localhost:5432/db'
\`\`\`

### Input Validation

**ALWAYS validate user input:**

\`\`\`typescript
// ✅ Good: Validate with Zod
const schema = z.object({
  email: z.string().email(),
  age: z.number().min(0).max(120)
})

const data = schema.parse(userInput)

// ❌ Bad: No validation
const data = userInput
\`\`\`

### SQL Injection Prevention

**Use Prisma ORM (parameterized queries):**

\`\`\`typescript
// ✅ Good: Prisma (safe)
const user = await prisma.user.findUnique({
  where: { email: userEmail }
})

// ❌ Bad: Raw SQL with string concatenation
const user = await prisma.$queryRaw\`
  SELECT * FROM users WHERE email = '\${userEmail}'
\`
\`\`\`

### Authentication

**Use JWT with proper expiration:**

\`\`\`typescript
import jwt from 'jsonwebtoken'

// ✅ Good: JWT with expiration
const token = jwt.sign(
  { userId: user.id },
  process.env.JWT_SECRET,
  { expiresIn: '24h' }
)

// ❌ Bad: No expiration
const token = jwt.sign(
  { userId: user.id },
  process.env.JWT_SECRET
)
\`\`\`

---

## 🚀 Deployment

### Environment Setup

**Production environment variables:**

\`\`\`bash
# Database
DATABASE_URL=postgresql://user:password@host:5432/production_db

# JWT
JWT_SECRET=your-production-secret-min-32-characters

# Server
PORT=3001
NODE_ENV=production

# Frontend
VITE_API_URL=https://api.yourapp.com
\`\`\`

### Build Process

\`\`\`bash
# 1. Install dependencies
npm ci

# 2. Run tests
npm test

# 3. Build frontend and backend
npm run build

# 4. Run database migrations
npm run db:migrate

# 5. Start production server
npm start
\`\`\`

### Performance Checklist

- ✅ Bundle size < 250KB gzipped
- ✅ First Contentful Paint < 1.8s
- ✅ Lighthouse score ≥90 (all categories)
- ✅ Database queries optimized (indexes, proper joins)
- ✅ API response time < 200ms
- ✅ Caching strategy implemented (Redis/in-memory)

---

## 📚 Additional Resources

- [AGENTS.md Standard](https://agents.md) - Open standard for AI agent instructions
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React Documentation](https://react.dev)
- [Fastify Documentation](https://fastify.dev)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Zod Documentation](https://zod.dev)

---

## 🤝 Contributing

### Pull Request Checklist

Before submitting a PR, ensure:

- ✅ All tests pass (\`npm test\`)
- ✅ Code coverage ≥80% (\`npm run test:coverage\`)
- ✅ No linting errors (\`npm run lint\`)
- ✅ Code is formatted (\`npm run format\`)
- ✅ TypeScript compiles (\`npm run type-check\`)
- ✅ All new features have tests
- ✅ Documentation is updated (if needed)

### Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/):

\`\`\`
feat: add user authentication
fix: resolve memory leak in API routes
docs: update README with new commands
test: add tests for user service
chore: update dependencies
\`\`\`

---

## 🐛 Troubleshooting

### Common Issues

**Issue: "Cannot connect to database"**
- Check \`.env\` file exists and has correct \`DATABASE_URL\`
- Ensure PostgreSQL is running: \`pg_isready\`
- Run migrations: \`npm run db:migrate\`

**Issue: "Module not found" errors**
- Clear node_modules: \`rm -rf node_modules && npm install\`
- Check TypeScript paths in \`tsconfig.json\`

**Issue: "Tests failing unexpectedly"**
- Clear test cache: \`npm test -- --clearCache\`
- Check for stale mocks or fixtures

**Issue: "Build fails on production"**
- Verify all environment variables are set
- Check for missing dependencies in \`package.json\`
- Run \`npm run type-check\` to catch TypeScript errors

---

## 📞 Support

- **Documentation:** \`/docs\` directory
- **Issues:** GitHub Issues (if applicable)
- **AI Agents:** This AGENTS.md file is your primary reference

---

**Supported AI Tools:** GitHub Copilot, Cursor, Cline, Windsurf, Zed, Continue, Sourcegraph Cody, Code Puppy, Azure AI Code Assist, Google Gemini Code Assist, and 10+ more.

---

**Last Updated:** 2025-10-07
**Version:** 1.0.0
**Maintained By:** Development Team + AI Agents
**Framework:** AGENTS.md Open Standard`
                          try {
                            await navigator.clipboard.writeText(agentsContent)
                            setCopied(true)
                            setTimeout(() => setCopied(false), 2000)
                          } catch (err) {
                            console.error('Failed to copy:', err)
                          }
                        }}
                        variant="ghost"
                        size="sm"
                        className="h-7 px-2 text-gray-300 hover:text-white hover:bg-gray-700"
                        aria-label={copied ? 'Copied to clipboard' : 'Copy AGENTS.md to clipboard'}
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3 mr-1" aria-hidden="true" />
                            <span className="text-xs">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 mr-1" aria-hidden="true" />
                            <span className="text-xs">Copy</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 overflow-x-auto max-h-[800px] overflow-y-auto">
                    <pre className="text-sm font-mono leading-relaxed whitespace-pre-wrap">
{`# AGENTS.md

**Project:** Modern Full-Stack Application
**Version:** 1.0.0
**Last Updated:** 2025-10-07
**Framework:** AGENTS.md Standard

> **🎯 Purpose**: This file provides AI agents with everything they need to understand, build, and maintain this project. Following the [AGENTS.md](https://agents.md) open standard for AI agent instructions.

---

## 📋 Project Overview

### What is This Project?

A modern full-stack application built with enterprise-grade development standards. This project demonstrates professional software development practices optimized for AI agent collaboration.

**Key Features:**
- ✨ Beautiful, modern UI/UX
- 🔒 Security best practices (input validation, authentication)
- 🧪 Comprehensive testing (80%+ coverage)
- 📚 Production-ready code quality
- 🤖 AI agent optimized (supported by 20+ AI tools)

### Tech Stack (Choose Your Tools)

**Frontend Options:**
- React 18+ with TypeScript (recommended)
- Next.js 14+ for SSR/SSG needs
- Vue 3+ for simpler learning curve
- Svelte for minimal bundle size

**Styling Options:**
- Tailwind CSS (utility-first, recommended)
- CSS Modules
- Styled Components
- Material-UI / shadcn/ui component libraries

**Backend Options:**
- Fastify (fast, TypeScript-friendly, recommended)
- Express (popular, mature ecosystem)
- Hono (edge-optimized, lightweight)
- Next.js API routes (full-stack in one framework)

**Database Options:**
- PostgreSQL (relational, production-ready)
- SQLite (simple, embedded)
- MongoDB (document-based, flexible schema)
- Prisma ORM (recommended for TypeScript)

**Current Implementation:**
- Frontend: React 18 + TypeScript + Vite + Tailwind CSS
- Backend: Fastify + TypeScript + Prisma
- Database: PostgreSQL
- Testing: Vitest + React Testing Library

---

## 🚀 Setup Commands

### Installation

\`\`\`bash
# Clone repository
git clone https://github.com/your-username/your-project.git
cd your-project

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Set up database (if using Prisma)
npm run db:migrate
npm run db:seed

# Start development server
npm run dev:all
\`\`\`

### Development

\`\`\`bash
# Start frontend only (port 5175)
npm run dev

# Start backend only (port 5176)
npm run dev:backend

# Start both frontend and backend
npm run dev:all

# Open browser to http://localhost:5175
\`\`\`

### Build

\`\`\`bash
# Build for production
npm run build

# Build frontend only
npm run build:frontend

# Build backend only
npm run build:backend

# Preview production build
npm run preview
\`\`\`

### Testing

\`\`\`bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# View coverage report
open coverage/index.html
\`\`\`

### Code Quality

\`\`\`bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Type check
npm run type-check
\`\`\`

### Database

\`\`\`bash
# Run migrations
npm run db:migrate

# Create new migration
npm run db:migrate:create

# Seed database with demo data
npm run db:seed

# Reset database (caution!)
npm run db:reset

# Open Prisma Studio (database GUI)
npm run db:studio
\`\`\`

---

## 🎨 Code Style Guidelines

### TypeScript Standards

**✅ ALWAYS:**
- Use TypeScript strict mode (no \`any\` types without justification)
- Define interfaces for all data structures
- Use proper type annotations on function parameters and return values
- Prefer \`interface\` over \`type\` for object shapes
- Use \`const\` and \`let\` (never \`var\`)

**❌ NEVER:**
- Use \`any\` type without explicit comment explaining why
- Ignore TypeScript errors or use \`@ts-ignore\` without reason
- Mix JavaScript and TypeScript files in the same module

### React/Frontend Patterns

**✅ ALWAYS:**
- Use functional components with hooks (no class components)
- Destructure props for clarity
- Use meaningful component and variable names
- Keep components small and focused (single responsibility)
- Use proper semantic HTML (\`<button>\`, \`<nav>\`, \`<main>\`, \`<label>\`)

**❌ NEVER:**
- Put business logic in components (use custom hooks or services)
- Use inline styles (use Tailwind classes or CSS modules)
- Forget to add \`key\` prop when rendering lists
- Use \`<div>\` for interactive elements (use \`<button>\`)

### Data Management: NO Mock Data in Code

**✅ ALWAYS:**
- Load data from database or API endpoints
- Use database seed files for test/demo data (\`~/prisma/seed.ts\`)
- Use environment variables for configuration (\`~/.env\`)
- Define data schemas with Zod for validation

**❌ NEVER:**
- Hardcode mock data arrays in source code
- Hardcode API URLs or database connections
- Commit secrets or credentials to Git

### Security Rules

**✅ ALWAYS:**
- Validate ALL user inputs with Zod schemas
- Use Prisma ORM parameterized queries (prevents SQL injection)
- Store secrets in environment variables (never in code)
- Use helmet + CORS middleware on backend
- Hash passwords with bcrypt (10+ salt rounds)
- Use JWT tokens with expiration

**❌ NEVER:**
- Trust user input without validation
- Use string concatenation for SQL queries
- Commit \`.env\` files to Git (use \`.env.example\` instead)
- Store passwords in plain text
- Expose sensitive information in error messages

---

## 💻 Development Environment Tips

### Recommended VSCode Extensions

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **Prisma** - Prisma schema syntax highlighting
- **Error Lens** - Inline error display
- **GitLens** - Git supercharged

### Project Structure

\`\`\`
~/Projects/your-project/
├── AGENTS.md           # This file (AI agent instructions)
├── README.md           # Human documentation
├── TODO.md             # Task tracking
├── CHANGELOG.md        # Version history
├── PORT_MANAGEMENT.md  # Port allocation
├── src/                # Frontend source code
│   ├── components/     # React components
│   ├── services/       # API clients
│   ├── utils/          # Helper functions
│   ├── types/          # TypeScript types
│   └── App.tsx         # Main app component
├── server/             # Backend source code
│   ├── routes/         # API routes
│   ├── middleware/     # Middleware
│   └── index.ts        # Server entry point
├── prisma/             # Database schema & migrations
│   ├── schema.prisma   # Database schema
│   ├── migrations/     # Migration files
│   └── seed.ts         # Demo data (NOT in src!)
├── tests/              # Test suites
│   ├── unit/           # Unit tests
│   ├── integration/    # Integration tests
│   └── e2e/            # End-to-end tests
├── docs/               # Additional documentation
└── .env.example        # Environment variables template
\`\`\`

---

## 🧪 Testing Instructions

### Testing Requirements

**Minimum Standards:**
- 80%+ code coverage (lines, statements, branches, functions)
- All tests must pass before merging to main
- Zero critical bugs or regressions
- Performance benchmarks met

---

## 📝 Pull Request Instructions

### Commit Message Convention

Use [Conventional Commits](https://www.conventionalcommits.org/):

\`\`\`bash
# Format: <type>(<scope>): <description>

# Types:
feat:     # New feature
fix:      # Bug fix
docs:     # Documentation changes
style:    # Code style changes (formatting, no logic changes)
refactor: # Code refactoring
test:     # Adding or updating tests
chore:    # Build process or auxiliary tool changes
perf:     # Performance improvements
\`\`\`

### Pull Request Checklist

Before creating a pull request, ensure:

- ✅ All tests pass (\`npm test\`)
- ✅ Code coverage is 80%+ (\`npm run test:coverage\`)
- ✅ No linting errors (\`npm run lint\`)
- ✅ No TypeScript errors (\`npm run type-check\`)
- ✅ Code is formatted (\`npm run format\`)
- ✅ Environment variables documented in \`.env.example\`
- ✅ Database migrations included (if schema changed)
- ✅ README updated (if setup process changed)
- ✅ CHANGELOG updated with changes

---

## 🔒 Security Considerations

### Critical Security Rules

**1. No Secrets in Code (MANDATORY)**

✅ **DO:** Use environment variables
❌ **DON'T:** Hardcode secrets

**2. Input Validation (MANDATORY)**

✅ **DO:** Use Zod schemas for all user inputs
❌ **DON'T:** Trust user input without validation

**3. SQL Injection Prevention**

✅ **DO:** Use Prisma ORM with parameterized queries
❌ **DON'T:** Use string concatenation for SQL queries

---

## 🤖 AI Agent Specific Instructions

### What to ALWAYS Do

1. **Read AGENTS.md first** - Always read this file before making changes
2. **Validate inputs** - Use Zod schemas for all user inputs
3. **Use environment variables** - Never hardcode secrets or configuration
4. **Write tests** - Add tests for new features and bug fixes
5. **Follow TypeScript strict mode** - No \`any\` types without justification
6. **Use semantic HTML** - Proper \`<button>\`, \`<nav>\`, \`<main>\`, \`<label>\` elements
7. **Add error handling** - Try-catch blocks, error boundaries, clear error messages
8. **Update documentation** - Keep README, CHANGELOG, and comments up to date

### What to NEVER Do

1. **Never commit secrets** - No API keys, passwords, or tokens in code
2. **Never use mock data in code** - Use database seed files instead
3. **Never skip validation** - Always validate user inputs
4. **Never ignore TypeScript errors** - Fix them or add proper comments
5. **Never use \`any\` type casually** - Use proper types or \`unknown\` with type guards
6. **Never skip tests** - Maintain 80%+ coverage requirement
7. **Never deploy without testing** - Run full test suite before deployment

---

## 📚 Resources & Documentation

### Official Documentation

- **AGENTS.md Standard:** https://agents.md
- **React:** https://react.dev
- **TypeScript:** https://www.typescriptlang.org/docs
- **Vite:** https://vitejs.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Fastify:** https://fastify.dev
- **Prisma:** https://www.prisma.io/docs
- **Vitest:** https://vitest.dev

### Project Documentation

- **README.md** - Project overview and setup
- **TODO.md** - Task tracking and roadmap
- **CHANGELOG.md** - Version history and changes
- **PORT_MANAGEMENT.md** - Port allocation registry

---

## ✅ Compliance Summary

This project follows the **AGENTS.md** open standard for AI agent instructions:

✅ **Project Overview** - Clear description, tech stack, key features
✅ **Setup Commands** - Installation, development, build, test commands
✅ **Code Style Guidelines** - TypeScript, React, security, data management
✅ **Development Environment Tips** - VSCode extensions, project structure, debugging
✅ **Testing Instructions** - Requirements, running tests, writing tests
✅ **Pull Request Instructions** - Commit conventions, PR checklist, code review
✅ **Security Considerations** - Critical security rules and examples
✅ **AI Agent Instructions** - What to always/never do, auto-fix workflows

**Supported AI Tools:** GitHub Copilot, Cursor, Cline, Windsurf, Zed, Continue, Sourcegraph Cody, Code Puppy, Azure AI Code Assist, Google Gemini Code Assist, and 10+ more.

---

**Last Updated:** 2025-10-07
**Version:** 1.0.0
**Maintained By:** Development Team + AI Agents
**Framework:** AGENTS.md Open Standard`}
                    </pre>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-400 rounded-lg p-6 mt-6">
                  <h4 className="text-xl font-semibold text-green-900 mb-3">
                    💡 How This File Helps AI Agents
                  </h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <p><strong>Instant Context:</strong> AI agents read this file first to understand the entire project structure, tech stack, and development standards.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <p><strong>Consistent Behavior:</strong> All AI tools follow the same guidelines, whether it's Cursor, GitHub Copilot, Claude Code, or any other tool.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <p><strong>Security by Default:</strong> AI agents know to validate inputs with Zod, never hardcode secrets, and use proper TypeScript types.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <p><strong>Quality Enforcement:</strong> Testing requirements (80%+ coverage), code style rules, and PR checklists are clearly defined.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MCP Servers Tab */}
          {activeTab === 'mcp' && (
            <div id="mcp-panel" role="tabpanel" aria-labelledby="mcp-tab">
              <div className="flex items-center gap-3 mb-6">
                <Network className="w-10 h-10 text-blue-600" aria-hidden="true" />
                <h3 className="text-3xl font-bold">Model Context Protocol (MCP) Servers</h3>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-400 rounded-lg p-6 mb-8">
                  <h4 className="text-2xl font-semibold text-blue-900 mb-3">
                    🚀 What is the Model Context Protocol (MCP)?
                  </h4>
                  <p className="text-gray-700 mb-4">
                    The <strong>Model Context Protocol (MCP)</strong> is an open-source standard that enables AI applications (like Claude Code, chatbots, and AI agents) to seamlessly connect with external data sources and tools. Think of it as a universal adapter that lets AI systems safely access your databases, APIs, file systems, and enterprise tools.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Official Documentation:</strong>{' '}
                    <a href="https://modelcontextprotocol.io/docs/getting-started/intro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      modelcontextprotocol.io
                    </a>
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-800 mb-2">Key Benefits:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Universal Integration:</strong> Connect AI to any data source (databases, APIs, filesystems)</li>
                      <li>• <strong>Secure by Design:</strong> Built-in permission controls and user approval flows</li>
                      <li>• <strong>Standardized:</strong> Works with all MCP-compatible AI tools (Claude Code, Desktop, etc.)</li>
                      <li>• <strong>Extensible:</strong> Build custom servers for proprietary systems and tools</li>
                      <li>• <strong>Production-Ready:</strong> Used by Anthropic's Claude and other AI platforms</li>
                    </ul>
                  </div>
                </div>

                {/* How MCP Works Section */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    🏗️ How MCP Works: Client-Server Architecture
                  </h4>
                  <div className="bg-white border-2 border-gray-300 rounded-lg p-6 mb-6">
                    <div className="mb-6">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6 mb-4">
                        <pre className="text-sm font-mono whitespace-pre">
{`┌─────────────────────────────────────────────────────────────┐
│                     MCP ARCHITECTURE                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐    MCP Protocol    ┌──────────────────┐  │
│  │              │ ◄─────────────────► │                  │  │
│  │  MCP Client  │                     │   MCP Server     │  │
│  │ (Claude Code)│                     │ (Your Tool/API)  │  │
│  │              │                     │                  │  │
│  └──────────────┘                     └──────────────────┘  │
│         │                                      │            │
│         │                                      │            │
│         ▼                                      ▼            │
│  ┌──────────────┐                     ┌──────────────────┐  │
│  │   AI Model   │                     │  External System │  │
│  │   (Claude)   │                     │ (DB, API, Files) │  │
│  └──────────────┘                     └──────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘`}
                        </pre>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h5 className="font-semibold text-blue-900 mb-2">MCP Client (Host Application)</h5>
                          <p className="text-gray-700 mb-2">Examples: Claude Code, Claude Desktop, custom AI apps</p>
                          <ul className="text-gray-700 space-y-1">
                            <li>• Connects to MCP servers</li>
                            <li>• Sends AI requests</li>
                            <li>• Manages user permissions</li>
                            <li>• Displays results to users</li>
                          </ul>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4">
                          <h5 className="font-semibold text-purple-900 mb-2">MCP Server (Data/Tool Provider)</h5>
                          <p className="text-gray-700 mb-2">Examples: PostgreSQL connector, GitHub integration, file system</p>
                          <ul className="text-gray-700 space-y-1">
                            <li>• Exposes tools/resources</li>
                            <li>• Handles AI requests</li>
                            <li>• Executes operations safely</li>
                            <li>• Returns data to client</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Concepts Section */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    📚 Core MCP Concepts
                  </h4>

                  {/* Prompts */}
                  <div className="bg-white border-2 border-green-300 rounded-lg p-6 mb-4">
                    <h5 className="text-xl font-semibold text-green-900 mb-3">1. Prompts (AI Instructions)</h5>
                    <p className="text-gray-700 mb-3">
                      <strong>What:</strong> Pre-defined instructions/templates that the AI model can use to perform specific tasks.
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>Example:</strong> A "generate-sql-query" prompt that helps the AI write database queries based on user questions.
                    </p>
                    <div className="bg-green-50 rounded p-3">
                      <pre className="text-xs font-mono text-gray-800">
{`// MCP Server exposes a prompt
{
  "name": "generate-sql-query",
  "description": "Convert natural language to SQL",
  "arguments": [
    { "name": "question", "description": "User's question", "required": true }
  ]
}`}
                      </pre>
                    </div>
                  </div>

                  {/* Resources */}
                  <div className="bg-white border-2 border-blue-300 rounded-lg p-6 mb-4">
                    <h5 className="text-xl font-semibold text-blue-900 mb-3">2. Resources (Data Access)</h5>
                    <p className="text-gray-700 mb-3">
                      <strong>What:</strong> Data sources that the AI can read from (databases, files, APIs, web pages).
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>Example:</strong> A "file://users.csv" resource that lets the AI read user data from a CSV file.
                    </p>
                    <div className="bg-blue-50 rounded p-3">
                      <pre className="text-xs font-mono text-gray-800">
{`// MCP Server exposes a resource
{
  "uri": "file://data/users.csv",
  "name": "User Database",
  "description": "CSV file containing user records",
  "mimeType": "text/csv"
}`}
                      </pre>
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="bg-white border-2 border-purple-300 rounded-lg p-6 mb-4">
                    <h5 className="text-xl font-semibold text-purple-900 mb-3">3. Tools (Actions & Operations)</h5>
                    <p className="text-gray-700 mb-3">
                      <strong>What:</strong> Executable functions that the AI can call to perform actions (create records, send emails, run scripts).
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>Example:</strong> A "create-github-issue" tool that lets the AI create issues in GitHub repositories.
                    </p>
                    <div className="bg-purple-50 rounded p-3">
                      <pre className="text-xs font-mono text-gray-800">
{`// MCP Server exposes a tool
{
  "name": "create-github-issue",
  "description": "Create a new GitHub issue",
  "inputSchema": {
    "type": "object",
    "properties": {
      "title": { "type": "string" },
      "body": { "type": "string" },
      "labels": { "type": "array", "items": { "type": "string" } }
    },
    "required": ["title", "body"]
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* How to Use MCP Section */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    🛠️ How to Use MCP with CodePuppy (and AGENTS.md)
                  </h4>
                  <p className="text-gray-700 mb-4">
                    MCP servers extend your AI coding assistant's capabilities by connecting to external data sources and tools.
                    This guide shows you how to integrate MCP servers with <strong>CodePuppy</strong> (or any MCP-compatible AI assistant)
                    and document them in your <strong>AGENTS.md</strong> file for consistent team usage.
                  </p>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-lg p-6 mb-6">
                    <h5 className="text-xl font-semibold text-yellow-900 mb-3">Step 1: Install an MCP Server</h5>
                    <p className="text-gray-700 mb-3">
                      MCP servers are Node.js packages or Python scripts that expose tools/resources. You can use pre-built servers or create your own.
                    </p>
                    <div className="bg-white rounded p-4">
                      <p className="font-semibold text-gray-800 mb-2">Popular MCP Servers:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>@modelcontextprotocol/server-filesystem</strong> - Access local files and directories</li>
                        <li>• <strong>@modelcontextprotocol/server-postgres</strong> - Connect to PostgreSQL databases</li>
                        <li>• <strong>@modelcontextprotocol/server-github</strong> - Interact with GitHub repositories</li>
                        <li>• <strong>@modelcontextprotocol/server-sqlite</strong> - Query SQLite databases</li>
                        <li>• <strong>@modelcontextprotocol/server-slack</strong> - Send messages to Slack</li>
                      </ul>
                    </div>
                    <div className="bg-gray-900 text-white rounded-lg p-4 mt-4">
                      <pre className="text-sm font-mono">
{`# Install an MCP server (example: filesystem)
npm install -g @modelcontextprotocol/server-filesystem

# Or for PostgreSQL
npm install -g @modelcontextprotocol/server-postgres`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-400 rounded-lg p-6 mb-6">
                    <h5 className="text-xl font-semibold text-blue-900 mb-3">Step 2: Configure CodePuppy to Use the Server</h5>
                    <p className="text-gray-700 mb-3">
                      Add the MCP server to your CodePuppy configuration file. This tells CodePuppy where to find the server and what permissions to use.
                    </p>
                    <div className="bg-gray-900 text-white rounded-lg p-4">
                      <pre className="text-sm font-mono">
{`# Edit CodePuppy config file
# Location: ~/.codepuppy/config.json (Linux/Mac)
# Location: %APPDATA%\\codepuppy\\config.json (Windows)

{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/directory"],
      "env": {}
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "POSTGRES_CONNECTION": "postgresql://user:pass@localhost:5432/mydb"
      }
    }
  }
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-400 rounded-lg p-6 mb-6">
                    <h5 className="text-xl font-semibold text-purple-900 mb-3">Step 3: Document MCP Servers in AGENTS.md</h5>
                    <p className="text-gray-700 mb-3">
                      Add MCP server configurations to your <strong>AGENTS.md</strong> file so your team (and AI assistants) know what tools are available.
                      This ensures consistent usage across your organization.
                    </p>
                    <div className="bg-gray-900 text-white rounded-lg p-4">
                      <pre className="text-sm font-mono whitespace-pre-wrap">
{`# AGENTS.md - MCP Servers Section

## 🔌 Available MCP Servers

### ServiceNow Server
**Purpose:** Query incidents, create tickets, update change requests
**Config:** ~/.codepuppy/config.json
**Connection:** ServiceNow instance at https://yourcompany.service-now.com

\`\`\`json
{
  "servicenow": {
    "command": "npx",
    "args": ["-y", "@your-org/mcp-servicenow"],
    "env": {
      "SERVICENOW_INSTANCE": "yourcompany.service-now.com",
      "SERVICENOW_USERNAME": "api_user",
      "SERVICENOW_PASSWORD": "\${SERVICENOW_PASSWORD}"
    }
  }
}
\`\`\`

**Example Prompts:**
- "Show me all P1 incidents from the last 24 hours"
- "Create a ServiceNow ticket for database outage"
- "Update change request CHG0030123 status to 'Approved'"

---

### Confluence Server
**Purpose:** Search documentation, create pages, update content
**Config:** ~/.codepuppy/config.json
**Connection:** Confluence at https://yourcompany.atlassian.net

\`\`\`json
{
  "confluence": {
    "command": "npx",
    "args": ["-y", "@your-org/mcp-confluence"],
    "env": {
      "CONFLUENCE_URL": "https://yourcompany.atlassian.net",
      "CONFLUENCE_EMAIL": "api@yourcompany.com",
      "CONFLUENCE_API_TOKEN": "\${CONFLUENCE_API_TOKEN}"
    }
  }
}
\`\`\`

**Example Prompts:**
- "Search Confluence for 'API authentication guide'"
- "Create a new Confluence page in 'Engineering' space titled 'Deployment Process'"
- "Update the 'Runbook' page with latest troubleshooting steps"

---

### Microsoft Ecosystem Server
**Purpose:** Interact with Microsoft Graph API (Teams, Outlook, OneDrive, SharePoint)
**Config:** ~/.codepuppy/config.json
**Connection:** Microsoft Graph API

\`\`\`json
{
  "microsoft": {
    "command": "npx",
    "args": ["-y", "@your-org/mcp-microsoft-graph"],
    "env": {
      "MICROSOFT_TENANT_ID": "\${MICROSOFT_TENANT_ID}",
      "MICROSOFT_CLIENT_ID": "\${MICROSOFT_CLIENT_ID}",
      "MICROSOFT_CLIENT_SECRET": "\${MICROSOFT_CLIENT_SECRET}"
    }
  }
}
\`\`\`

**Example Prompts:**
- "Send a Teams message to #engineering channel: 'Deployment complete'"
- "Search my OneDrive for files containing 'Q4 roadmap'"
- "Create an Outlook calendar event for 'Sprint Planning' tomorrow at 10am"
- "List all SharePoint sites I have access to"
`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-lg p-6 mb-6">
                    <h5 className="text-xl font-semibold text-green-900 mb-3">Step 4: Use the Server in CodePuppy</h5>
                    <p className="text-gray-700 mb-3">
                      Once configured, CodePuppy will automatically detect available MCP tools and resources. You can ask CodePuppy to use them in natural language.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-gray-800 mb-2">Example Prompts:</p>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li className="bg-gray-50 rounded p-2">
                          💬 <strong>Filesystem:</strong> "List all TypeScript files in the src/ directory"
                        </li>
                        <li className="bg-gray-50 rounded p-2">
                          💬 <strong>PostgreSQL:</strong> "Show me all users in the database who signed up this month"
                        </li>
                        <li className="bg-gray-50 rounded p-2">
                          💬 <strong>ServiceNow:</strong> "What are the open P1 incidents assigned to the database team?"
                        </li>
                        <li className="bg-gray-50 rounded p-2">
                          💬 <strong>Confluence:</strong> "Find the deployment runbook and summarize the rollback procedure"
                        </li>
                        <li className="bg-gray-50 rounded p-2">
                          💬 <strong>Microsoft Teams:</strong> "Send a message to the #devops channel that the build passed"
                        </li>
                        <li className="bg-gray-50 rounded p-2">
                          💬 <strong>GitHub:</strong> "Create a GitHub issue titled 'Fix login bug' with labels 'bug' and 'priority:high'"
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Enterprise MCP Server Examples */}
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-400 rounded-lg p-6 mb-6">
                    <h5 className="text-xl font-semibold text-indigo-900 mb-3">
                      🏢 Enterprise MCP Server Examples
                    </h5>
                    <p className="text-gray-700 mb-4">
                      Real-world examples of MCP servers for enterprise systems:
                    </p>

                    <div className="space-y-4">
                      {/* ServiceNow */}
                      <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                        <h6 className="font-semibold text-gray-900 mb-2">🎫 ServiceNow MCP Server</h6>
                        <p className="text-sm text-gray-700 mb-3">
                          Connect to ServiceNow for incident management, change requests, and CMDB queries.
                        </p>
                        <div className="bg-gray-900 text-white rounded p-3 text-xs font-mono">
{`// Available Tools:
- servicenow_query_incidents
- servicenow_create_incident
- servicenow_update_incident
- servicenow_create_change_request
- servicenow_query_cmdb

// Example Usage:
"Show all critical incidents assigned to me"
"Create incident: Database server DB-PROD-01 is down"
"Update INC0010123 status to 'Resolved'"`}
                        </div>
                      </div>

                      {/* Confluence */}
                      <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                        <h6 className="font-semibold text-gray-900 mb-2">📚 Confluence MCP Server</h6>
                        <p className="text-sm text-gray-700 mb-3">
                          Search, create, and update Confluence documentation programmatically.
                        </p>
                        <div className="bg-gray-900 text-white rounded p-3 text-xs font-mono">
{`// Available Tools:
- confluence_search
- confluence_get_page
- confluence_create_page
- confluence_update_page
- confluence_list_spaces

// Example Usage:
"Search Confluence for API authentication docs"
"Create a page in 'Engineering' space with deployment steps"
"Update the 'Runbook' page with new troubleshooting steps"`}
                        </div>
                      </div>

                      {/* Microsoft Graph */}
                      <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                        <h6 className="font-semibold text-gray-900 mb-2">🪟 Microsoft Graph MCP Server</h6>
                        <p className="text-sm text-gray-700 mb-3">
                          Integrate with Teams, Outlook, OneDrive, and SharePoint via Microsoft Graph API.
                        </p>
                        <div className="bg-gray-900 text-white rounded p-3 text-xs font-mono">
{`// Available Tools:
- teams_send_message
- outlook_send_email
- onedrive_search_files
- onedrive_upload_file
- sharepoint_list_sites
- calendar_create_event

// Example Usage:
"Send Teams message to #engineering: 'Build successful'"
"Email john@company.com with deployment summary"
"Search OneDrive for 'Q4 roadmap' files"
"Create calendar event 'Sprint Planning' tomorrow at 10am"`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Build Your Own MCP Server Section */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    🔨 Build Your Own MCP Server
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Creating a custom MCP server lets you connect Claude to proprietary systems, internal APIs, or specialized tools.
                    MCP servers can be built in TypeScript/JavaScript or Python.
                  </p>

                  <div className="bg-white border-2 border-indigo-300 rounded-lg p-6 mb-6">
                    <h5 className="text-xl font-semibold text-indigo-900 mb-3">TypeScript/Node.js Example</h5>
                    <div className="bg-gray-900 text-white rounded-lg p-4">
                      <pre className="text-sm font-mono whitespace-pre-wrap">
{`import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

// Create MCP server
const server = new Server(
  {
    name: "my-custom-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
      resources: {},
    },
  }
);

// Define a tool: Get weather for a city
server.setRequestHandler("tools/list", async () => ({
  tools: [
    {
      name: "get_weather",
      description: "Get current weather for a city",
      inputSchema: {
        type: "object",
        properties: {
          city: { type: "string", description: "City name" },
        },
        required: ["city"],
      },
    },
  ],
}));

// Handle tool execution
server.setRequestHandler("tools/call", async (request) => {
  if (request.params.name === "get_weather") {
    const city = request.params.arguments.city;

    // Call weather API (example)
    const response = await fetch(\`https://api.weather.com/\${city}\`);
    const data = await response.json();

    return {
      content: [
        {
          type: "text",
          text: \`Weather in \${city}: \${data.temperature}°F, \${data.condition}\`,
        },
      ],
    };
  }
});

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-pink-300 rounded-lg p-6 mb-6">
                    <h5 className="text-xl font-semibold text-pink-900 mb-3">Python Example</h5>
                    <div className="bg-gray-900 text-white rounded-lg p-4">
                      <pre className="text-sm font-mono whitespace-pre-wrap">
{`from mcp.server import Server
from mcp.server.stdio import stdio_server
import httpx

# Create MCP server
app = Server("my-custom-server")

# Define a tool
@app.list_tools()
async def list_tools():
    return [
        {
            "name": "get_weather",
            "description": "Get current weather for a city",
            "inputSchema": {
                "type": "object",
                "properties": {
                    "city": {"type": "string", "description": "City name"}
                },
                "required": ["city"]
            }
        }
    ]

# Handle tool execution
@app.call_tool()
async def call_tool(name: str, arguments: dict):
    if name == "get_weather":
        city = arguments["city"]

        # Call weather API (example)
        async with httpx.AsyncClient() as client:
            response = await client.get(f"https://api.weather.com/{city}")
            data = response.json()

        return {
            "content": [
                {
                    "type": "text",
                    "text": f"Weather in {city}: {data['temperature']}°F, {data['condition']}"
                }
            ]
        }

# Run server
if __name__ == "__main__":
    import asyncio
    asyncio.run(stdio_server(app))`}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Security & Best Practices */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    🔒 Security & Best Practices
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
                      <h5 className="font-semibold text-red-900 mb-2">Security Considerations</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• ⚠️ MCP servers run with your user permissions</li>
                        <li>• ⚠️ Only connect trusted servers</li>
                        <li>• ⚠️ Limit filesystem access to specific directories</li>
                        <li>• ⚠️ Never expose sensitive credentials in config</li>
                        <li>• ⚠️ Use environment variables for secrets</li>
                        <li>• ⚠️ Review tool permissions before granting access</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
                      <h5 className="font-semibold text-green-900 mb-2">Best Practices</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• ✅ Use read-only resources when possible</li>
                        <li>• ✅ Implement input validation in tools</li>
                        <li>• ✅ Add descriptive tool/resource documentation</li>
                        <li>• ✅ Log all tool executions for audit trails</li>
                        <li>• ✅ Use TypeScript for type safety</li>
                        <li>• ✅ Test servers thoroughly before production</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Real-World Use Cases */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-400 rounded-lg p-6 mb-8">
                  <h4 className="text-2xl font-semibold text-purple-900 mb-4">
                    🌟 Real-World MCP Use Cases
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-purple-800 mb-2">Internal Tools</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Connect to internal databases (user data, analytics)</li>
                        <li>• Query enterprise APIs (CRM, ticketing systems)</li>
                        <li>• Access knowledge bases (Confluence, SharePoint)</li>
                        <li>• Automate workflows (Jira, ServiceNow)</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-purple-800 mb-2">Development Workflows</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Read/write project files and codebases</li>
                        <li>• Execute tests and view results</li>
                        <li>• Create GitHub issues/PRs automatically</li>
                        <li>• Query deployment logs and metrics</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-purple-800 mb-2">Data Analysis</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Query SQL/NoSQL databases in natural language</li>
                        <li>• Generate reports from business data</li>
                        <li>• Visualize trends and patterns</li>
                        <li>• Export data to various formats (CSV, JSON, PDF)</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-purple-800 mb-2">DevOps & Infrastructure</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Monitor server health and logs</li>
                        <li>• Deploy applications via CI/CD</li>
                        <li>• Manage cloud resources (AWS, Azure, GCP)</li>
                        <li>• Troubleshoot production issues</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Resources & Next Steps */}
                <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-blue-900 mb-3">
                    📚 Learn More & Get Started
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-blue-800 mb-1">Official Documentation</p>
                      <a href="https://modelcontextprotocol.io/docs/getting-started/intro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        https://modelcontextprotocol.io/docs/getting-started/intro
                      </a>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-blue-800 mb-1">GitHub Repository</p>
                      <a href="https://github.com/modelcontextprotocol" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        https://github.com/modelcontextprotocol
                      </a>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-blue-800 mb-1">Pre-built MCP Servers</p>
                      <a href="https://github.com/modelcontextprotocol/servers" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        https://github.com/modelcontextprotocol/servers
                      </a>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-blue-800 mb-1">Quick Start Guide</p>
                      <p className="text-gray-700">
                        1. Install an MCP server: <code className="bg-gray-100 px-1 rounded">npm install -g @modelcontextprotocol/server-filesystem</code><br />
                        2. Configure Claude Code (add to config.json)<br />
                        3. Start using: "List files in my project directory"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Key Takeaways */}
        <section className="mt-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-6">Key Takeaways</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Open Standard</h3>
              <p className="text-blue-100">
                AGENTS.md is a community-driven standard supported by 20+ AI tools,
                ensuring your instructions work everywhere.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Consistent AI Behavior</h3>
              <p className="text-purple-100">
                Document once, benefit everywhere. All AI tools follow the same guidelines,
                reducing surprises and improving code quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Production-Ready</h3>
              <p className="text-pink-100">
                Used by thousands of projects worldwide. Proven to reduce onboarding time,
                improve code quality, and accelerate development.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-lg mb-4">
              Learn more about{' '}
              <a
                href="https://agents.md"
                className="text-blue-400 hover:text-blue-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                AGENTS.md
              </a>{' '}
              - the open standard for AI agent instructions
            </p>
            <p className="text-gray-400 text-sm">
              Supported by 20+ AI tools including GitHub Copilot, Cursor, Claude Code, and more
            </p>
            <p className="text-gray-400 mt-2">
              © 2025 AGENTS.md Training Portal. Licensed under MIT.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
