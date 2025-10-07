import { useState } from 'react'
import { Button } from './components/ui/button'
import { Code2, Rocket, FileText, BookOpen, Sparkles, CheckCircle2, Dog, FileEdit } from 'lucide-react'

export function App(): JSX.Element {
  const [activeTab, setActiveTab] = useState<'overview' | 'structure' | 'codepuppy' | 'stacks' | 'prd' | 'benefits'>('overview')

  // PRD Generator State
  const [prdData, setPrdData] = useState({
    projectType: '',
    targetUsers: '',
    primaryGoal: '',
    keyFeatures: '',
    stack: '',
    timeline: '',
    teamSize: '',
    budget: ''
  })

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
            onClick={(): void => setActiveTab('prd')}
            variant={activeTab === 'prd' ? 'default' : 'outline'}
            role="tab"
            aria-selected={activeTab === 'prd'}
            aria-controls="prd-panel"
          >
            <FileEdit className="w-4 h-4 mr-2" aria-hidden="true" />
            Generate a PRD
          </Button>
          <Button
            onClick={(): void => setActiveTab('benefits')}
            variant={activeTab === 'benefits' ? 'default' : 'outline'}
            role="tab"
            aria-selected={activeTab === 'benefits'}
            aria-controls="benefits-panel"
          >
            <BookOpen className="w-4 h-4 mr-2" aria-hidden="true" />
            Why Use It?
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
                    🐶 Primary Training Tool: Code Puppy
                  </h4>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-sm text-purple-900 mb-3">
                      <strong>Code Puppy</strong> is our AI-powered CLI tool for code generation and understanding.
                      It supports AGENTS.md and can work with multiple AI models simultaneously.
                    </p>
                    <div className="space-y-3 text-xs">
                      <div>
                        <p className="font-semibold text-purple-900 mb-2">Key Features:</p>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-purple-800">✓ Interactive CLI interface</div>
                          <div className="text-purple-800">✓ Multi-language code generation</div>
                          <div className="text-purple-800">✓ Round-robin model distribution</div>
                          <div className="text-purple-800">✓ Customizable agents via AGENTS.md</div>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-purple-900 mb-2">Installation:</p>

                        <div className="space-y-2">
                          <div>
                            <p className="text-purple-800 font-medium mb-1">🐧 Linux / macOS:</p>
                            <pre className="bg-gray-900 text-green-400 p-2 rounded text-xs">
{`pip install code-puppy
code-puppy --interactive`}
                            </pre>
                          </div>

                          <div>
                            <p className="text-purple-800 font-medium mb-1">🪟 Windows (PowerShell):</p>
                            <pre className="bg-blue-900 text-blue-200 p-2 rounded text-xs">
{`# Installation command will be provided
# Simple PowerShell one-liner coming soon`}
                            </pre>
                          </div>
                        </div>

                        <p className="text-purple-800 mt-2">
                          <a href="https://github.com/mpfaffenberger/code_puppy" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">
                            📚 GitHub: mpfaffenberger/code_puppy
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-purple-900 mb-2">
                    Other Supported AI Tools (20+)
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
                        <li>• Code Puppy ⭐ (primary)</li>
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

          {/* PRD Generator Tab */}
          {activeTab === 'prd' && (
            <div id="prd-panel" role="tabpanel" aria-labelledby="prd-tab">
              <div className="flex items-center gap-3 mb-6">
                <FileEdit className="w-10 h-10 text-green-600" aria-hidden="true" />
                <h3 className="text-3xl font-bold">Generate a Product Requirements Document (PRD)</h3>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Answer the questions below to automatically generate a comprehensive PRD for your project.
                  Choose options that best describe your needs - similar to Mad Libs, but for technical planning!
                </p>

                {/* Interactive Mad Libs Style Form */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-xl p-8 mb-6">
                  <h4 className="text-2xl font-bold text-green-900 mb-6">📝 Build Your PRD</h4>

                  <div className="space-y-6 text-lg leading-relaxed">
                    {/* Sentence 1: Project Type */}
                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                      <p className="text-gray-800">
                        We are building a{' '}
                        <select
                          value={prdData.projectType}
                          onChange={(e): void => setPrdData({ ...prdData, projectType: e.target.value })}
                          className="inline-block mx-1 px-3 py-1 border-2 border-green-400 rounded-lg bg-green-50 font-semibold text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="">-- select --</option>
                          <option value="Minimum Viable Product (MVP)">Minimum Viable Product (MVP)</option>
                          <option value="rapid prototype">rapid prototype</option>
                          <option value="production-ready application">production-ready application</option>
                          <option value="proof of concept">proof of concept</option>
                          <option value="enterprise solution">enterprise solution</option>
                        </select>
                        {' '}to validate our idea and gather user feedback.
                      </p>
                    </div>

                    {/* Sentence 2: Target Users */}
                    <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                      <p className="text-gray-800">
                        Our target users are{' '}
                        <select
                          value={prdData.targetUsers}
                          onChange={(e): void => setPrdData({ ...prdData, targetUsers: e.target.value })}
                          className="inline-block mx-1 px-3 py-1 border-2 border-blue-400 rounded-lg bg-blue-50 font-semibold text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">-- select --</option>
                          <option value="internal employees and teams">internal employees and teams</option>
                          <option value="small business owners">small business owners</option>
                          <option value="enterprise customers">enterprise customers</option>
                          <option value="developers and technical users">developers and technical users</option>
                          <option value="general consumers">general consumers</option>
                          <option value="mobile-first users">mobile-first users</option>
                        </select>
                        {' '}who need a streamlined solution for their daily tasks.
                      </p>
                    </div>

                    {/* Sentence 3: Primary Goal */}
                    <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                      <p className="text-gray-800">
                        The primary goal of this project is to{' '}
                        <select
                          value={prdData.primaryGoal}
                          onChange={(e): void => setPrdData({ ...prdData, primaryGoal: e.target.value })}
                          className="inline-block mx-1 px-3 py-1 border-2 border-purple-400 rounded-lg bg-purple-50 font-semibold text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="">-- select --</option>
                          <option value="automate manual processes and increase efficiency">automate manual processes and increase efficiency</option>
                          <option value="provide real-time data insights and analytics">provide real-time data insights and analytics</option>
                          <option value="improve team collaboration and communication">improve team collaboration and communication</option>
                          <option value="reduce operational costs">reduce operational costs</option>
                          <option value="enhance customer experience">enhance customer experience</option>
                          <option value="validate a new business idea">validate a new business idea</option>
                        </select>
                        {' '}while maintaining simplicity and ease of use.
                      </p>
                    </div>

                    {/* Sentence 4: Key Features */}
                    <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                      <p className="text-gray-800">
                        Key features must include{' '}
                        <select
                          value={prdData.keyFeatures}
                          onChange={(e): void => setPrdData({ ...prdData, keyFeatures: e.target.value })}
                          className="inline-block mx-1 px-3 py-1 border-2 border-orange-400 rounded-lg bg-orange-50 font-semibold text-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                          <option value="">-- select --</option>
                          <option value="user authentication, dashboard with real-time updates, and API integration">user authentication, dashboard with real-time updates, and API integration</option>
                          <option value="data visualization, export functionality, and role-based access control">data visualization, export functionality, and role-based access control</option>
                          <option value="file upload/download, search capabilities, and notifications">file upload/download, search capabilities, and notifications</option>
                          <option value="third-party integrations, webhooks, and automated workflows">third-party integrations, webhooks, and automated workflows</option>
                          <option value="mobile responsiveness, offline mode, and push notifications">mobile responsiveness, offline mode, and push notifications</option>
                        </select>
                        {' '}to meet user needs effectively.
                      </p>
                    </div>

                    {/* Sentence 5: Technology Stack */}
                    <div className="bg-white rounded-lg p-4 border-l-4 border-pink-500">
                      <p className="text-gray-800">
                        For the technology stack, we will use{' '}
                        <select
                          value={prdData.stack}
                          onChange={(e): void => setPrdData({ ...prdData, stack: e.target.value })}
                          className="inline-block mx-1 px-3 py-1 border-2 border-pink-400 rounded-lg bg-pink-50 font-semibold text-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        >
                          <option value="">-- select --</option>
                          <option value="React + Vite + Tailwind for frontend, Fastify + TypeScript for backend, and PostgreSQL + Prisma for the database (Modern SPA Stack)">React + Vite + Tailwind for frontend, Fastify + TypeScript for backend, and PostgreSQL + Prisma for the database (Modern SPA Stack)</option>
                          <option value="Next.js 14+ with Tailwind CSS, Next.js API Routes, and PostgreSQL + Prisma (Full-Stack Framework)">Next.js 14+ with Tailwind CSS, Next.js API Routes, and PostgreSQL + Prisma (Full-Stack Framework)</option>
                          <option value="Svelte + Vite + Tailwind for frontend, Express + TypeScript for backend, and SQLite + Prisma (Lightweight Stack)">Svelte + Vite + Tailwind for frontend, Express + TypeScript for backend, and SQLite + Prisma (Lightweight Stack)</option>
                          <option value="Next.js + TypeScript + shadcn/ui, Azure Functions for serverless backend, and Azure SQL + Prisma (Enterprise Cloud)">Next.js + TypeScript + shadcn/ui, Azure Functions for serverless backend, and Azure SQL + Prisma (Enterprise Cloud)</option>
                          <option value="Vue 3 + Vite + Tailwind for frontend, Hono (edge-optimized) for backend, and SQLite + Drizzle (Rapid Prototyping)">Vue 3 + Vite + Tailwind for frontend, Hono (edge-optimized) for backend, and SQLite + Drizzle (Rapid Prototyping)</option>
                        </select>
                        {' '}based on project requirements.
                      </p>
                    </div>

                    {/* Sentence 6: Timeline */}
                    <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-500">
                      <p className="text-gray-800">
                        Our target timeline for the first release is{' '}
                        <select
                          value={prdData.timeline}
                          onChange={(e): void => setPrdData({ ...prdData, timeline: e.target.value })}
                          className="inline-block mx-1 px-3 py-1 border-2 border-indigo-400 rounded-lg bg-indigo-50 font-semibold text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="">-- select --</option>
                          <option value="1-2 weeks (rapid prototype)">1-2 weeks (rapid prototype)</option>
                          <option value="2-4 weeks (MVP)">2-4 weeks (MVP)</option>
                          <option value="1-3 months (production-ready)">1-3 months (production-ready)</option>
                          <option value="3-6 months (full product)">3-6 months (full product)</option>
                          <option value="6+ months (enterprise solution)">6+ months (enterprise solution)</option>
                        </select>
                        {' '}with iterative improvements based on user feedback.
                      </p>
                    </div>

                    {/* Sentence 7: Team Size */}
                    <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                      <p className="text-gray-800">
                        The development team consists of{' '}
                        <select
                          value={prdData.teamSize}
                          onChange={(e): void => setPrdData({ ...prdData, teamSize: e.target.value })}
                          className="inline-block mx-1 px-3 py-1 border-2 border-yellow-400 rounded-lg bg-yellow-50 font-semibold text-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                          <option value="">-- select --</option>
                          <option value="1 developer (solo project)">1 developer (solo project)</option>
                          <option value="2-3 developers (small team)">2-3 developers (small team)</option>
                          <option value="4-6 developers (mid-size team)">4-6 developers (mid-size team)</option>
                          <option value="7-10 developers (large team)">7-10 developers (large team)</option>
                          <option value="10+ developers (enterprise team)">10+ developers (enterprise team)</option>
                        </select>
                        {' '}with expertise in modern web technologies.
                      </p>
                    </div>

                    {/* Sentence 8: Budget */}
                    <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                      <p className="text-gray-800">
                        Budget considerations include{' '}
                        <select
                          value={prdData.budget}
                          onChange={(e): void => setPrdData({ ...prdData, budget: e.target.value })}
                          className="inline-block mx-1 px-3 py-1 border-2 border-red-400 rounded-lg bg-red-50 font-semibold text-red-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          <option value="">-- select --</option>
                          <option value="minimal infrastructure costs (serverless, free tiers)">minimal infrastructure costs (serverless, free tiers)</option>
                          <option value="moderate hosting and third-party service costs">moderate hosting and third-party service costs</option>
                          <option value="enterprise-grade infrastructure with compliance requirements">enterprise-grade infrastructure with compliance requirements</option>
                          <option value="cloud services with autoscaling capabilities">cloud services with autoscaling capabilities</option>
                          <option value="hybrid on-premise and cloud deployment">hybrid on-premise and cloud deployment</option>
                        </select>
                        {' '}to ensure cost-effective delivery.
                      </p>
                    </div>
                  </div>

                  {/* Generate PRD Button */}
                  <div className="mt-8 text-center">
                    <Button
                      onClick={(): void => {
                        const allFieldsFilled = Object.values(prdData).every(val => val !== '')
                        if (!allFieldsFilled) {
                          alert('Please fill in all fields to generate your PRD')
                        } else {
                          // Scroll to generated PRD section
                          document.getElementById('generated-prd')?.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
                    >
                      Generate Complete PRD
                    </Button>
                  </div>
                </div>

                {/* Generated PRD Output */}
                {Object.values(prdData).every(val => val !== '') && (
                  <div id="generated-prd" className="bg-white border-2 border-blue-400 rounded-xl p-8 mb-6">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-2xl font-bold text-blue-900">📄 Your Generated PRD</h4>
                      <Button
                        onClick={(): void => {
                          const prdText = document.getElementById('prd-content')?.innerText || ''
                          navigator.clipboard.writeText(prdText)
                          alert('PRD copied to clipboard!')
                        }}
                        variant="outline"
                        className="text-sm"
                      >
                        Copy to Clipboard
                      </Button>
                    </div>

                    <div id="prd-content" className="prose max-w-none space-y-6">
                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-2">Project Overview</h5>
                        <p className="text-gray-700 leading-relaxed">
                          We are building a <strong>{prdData.projectType}</strong> to validate our idea and gather user feedback.
                          Our target users are <strong>{prdData.targetUsers}</strong> who need a streamlined solution for their daily tasks.
                        </p>
                      </div>

                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-2">Goals & Objectives</h5>
                        <p className="text-gray-700 leading-relaxed">
                          The primary goal of this project is to <strong>{prdData.primaryGoal}</strong> while maintaining
                          simplicity and ease of use. This will enable our users to work more efficiently and achieve better outcomes.
                        </p>
                      </div>

                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-2">Key Features</h5>
                        <p className="text-gray-700 leading-relaxed">
                          Key features must include <strong>{prdData.keyFeatures}</strong> to meet user needs effectively.
                          These features are essential for delivering value and ensuring user satisfaction.
                        </p>
                      </div>

                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-2">Technical Stack</h5>
                        <p className="text-gray-700 leading-relaxed">
                          For the technology stack, we will use <strong>{prdData.stack}</strong> based on project requirements.
                          This stack has been chosen for its reliability, performance, and developer experience.
                        </p>
                      </div>

                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-2">Timeline & Resources</h5>
                        <p className="text-gray-700 leading-relaxed">
                          Our target timeline for the first release is <strong>{prdData.timeline}</strong> with iterative
                          improvements based on user feedback. The development team consists of <strong>{prdData.teamSize}</strong> with
                          expertise in modern web technologies.
                        </p>
                      </div>

                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-2">Budget & Infrastructure</h5>
                        <p className="text-gray-700 leading-relaxed">
                          Budget considerations include <strong>{prdData.budget}</strong> to ensure cost-effective delivery.
                          Infrastructure choices will be made to balance performance, scalability, and cost efficiency.
                        </p>
                      </div>

                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-2">Success Metrics</h5>
                        <ul className="text-gray-700 space-y-2">
                          <li>✓ User adoption rate and engagement metrics</li>
                          <li>✓ Performance benchmarks (load time, response time, uptime)</li>
                          <li>✓ User satisfaction scores and feedback</li>
                          <li>✓ Feature completion and bug resolution rates</li>
                          <li>✓ Cost efficiency and ROI measurements</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-2">Next Steps</h5>
                        <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                          <li>Finalize requirements and get stakeholder approval</li>
                          <li>Set up development environment and repository</li>
                          <li>Create AGENTS.md file for AI agent collaboration</li>
                          <li>Begin iterative development with sprint planning</li>
                          <li>Establish testing and CI/CD pipeline</li>
                          <li>Schedule regular demo sessions and collect feedback</li>
                        </ol>
                      </div>
                    </div>

                    <div className="mt-8 p-4 bg-green-50 border border-green-300 rounded-lg">
                      <p className="text-sm text-green-900">
                        <strong>💡 Pro Tip:</strong> Use this PRD as a starting point for your project planning.
                        Share it with your team, stakeholders, and AI coding assistants (like Code Puppy) to ensure
                        everyone is aligned on the project goals and technical approach.
                      </p>
                    </div>
                  </div>
                )}

                {/* Reset Button */}
                {Object.values(prdData).some(val => val !== '') && (
                  <div className="text-center mb-6">
                    <Button
                      onClick={(): void => {
                        setPrdData({
                          projectType: '',
                          targetUsers: '',
                          primaryGoal: '',
                          keyFeatures: '',
                          stack: '',
                          timeline: '',
                          teamSize: '',
                          budget: ''
                        })
                      }}
                      variant="outline"
                      className="text-red-600 border-red-400 hover:bg-red-50"
                    >
                      Reset and Start Over
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div id="benefits-panel" role="tabpanel" aria-labelledby="benefits-tab">
              <h3 className="text-3xl font-bold mb-6">Why Use AGENTS.md?</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Adopting AGENTS.md brings immediate benefits to your development workflow,
                  whether you&apos;re working solo or on a large team.
                </p>

                <h4 className="text-2xl font-semibold mb-4">For Individual Developers</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h5 className="font-semibold text-blue-900 mb-2">🚀 Faster Development</h5>
                    <p className="text-sm text-blue-800">
                      AI agents can immediately start helping without asking basic questions
                      about your setup, code style, or how to run tests.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h5 className="font-semibold text-green-900 mb-2">✅ Consistent Quality</h5>
                    <p className="text-sm text-green-800">
                      AI suggestions follow your documented standards, reducing code review
                      comments and rework.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h5 className="font-semibold text-purple-900 mb-2">📚 Self-Documenting</h5>
                    <p className="text-sm text-purple-800">
                      AGENTS.md serves as living documentation that stays in sync with your
                      actual project structure and commands.
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h5 className="font-semibold text-orange-900 mb-2">🔄 Tool Flexibility</h5>
                    <p className="text-sm text-orange-800">
                      Switch between GitHub Copilot, Cursor, Claude Code, or any other AI tool
                      without re-explaining your project each time.
                    </p>
                  </div>
                </div>

                <h4 className="text-2xl font-semibold mb-4">For Engineering Teams</h4>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r">
                    <h5 className="font-semibold text-blue-900 mb-2">👥 Faster Onboarding</h5>
                    <p className="text-sm text-blue-800">
                      New team members (human and AI) can get up to speed faster. AGENTS.md provides
                      a single source of truth for project conventions and workflows.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r">
                    <h5 className="font-semibold text-green-900 mb-2">📏 Standardization</h5>
                    <p className="text-sm text-green-800">
                      All developers use AI tools that follow the same guidelines, reducing
                      inconsistencies across the codebase.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded-r">
                    <h5 className="font-semibold text-purple-900 mb-2">🔒 Security Compliance</h5>
                    <p className="text-sm text-purple-800">
                      Document security rules once in AGENTS.md (no secrets in code, input validation,
                      etc.) and AI agents will follow them consistently.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded-r">
                    <h5 className="font-semibold text-orange-900 mb-2">💰 Cost Efficiency</h5>
                    <p className="text-sm text-orange-800">
                      Reduce time spent in code review, onboarding, and debugging inconsistent code.
                      AI agents that understand your project make fewer mistakes.
                    </p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4 bg-pink-50 p-4 rounded-r">
                    <h5 className="font-semibold text-pink-900 mb-2">📊 Knowledge Preservation</h5>
                    <p className="text-sm text-pink-800">
                      Project knowledge lives in the repository, not just in senior developers&apos; heads.
                      When team members leave, the knowledge remains in AGENTS.md.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-semibold text-yellow-900 mb-3">📈 Real-World Impact</h4>
                  <div className="space-y-3 text-sm text-yellow-900">
                    <div className="flex items-start gap-3">
                      <span className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                      <p><strong>Reduced onboarding time:</strong> From 2 weeks to 3 days for new developers</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                      <p><strong>Fewer code review cycles:</strong> 30-40% reduction in back-and-forth</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                      <p><strong>Consistent code quality:</strong> All AI-generated code follows team standards</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
                      <p><strong>Better security posture:</strong> AI agents follow documented security rules</p>
                    </div>
                  </div>
                </div>

                <h4 className="text-2xl font-semibold mb-4">Getting Started</h4>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <ol className="space-y-3 text-sm text-green-900">
                    <li className="flex items-start gap-3">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                      <div>
                        <strong>View the example:</strong> Check out the AGENTS.md file in this project&apos;s repository
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                      <div>
                        <strong>Copy the template:</strong> Use our AGENTS.md as a starting point
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                      <div>
                        <strong>Customize for your project:</strong> Fill in your tech stack, commands, and standards
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold">4</span>
                      <div>
                        <strong>Commit and test:</strong> Start using AI tools and refine based on feedback
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold">5</span>
                      <div>
                        <strong>Keep it updated:</strong> Treat AGENTS.md like code - update it when project changes
                      </div>
                    </li>
                  </ol>
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
