import { useState } from 'react'
import { Button } from './components/ui/button'
import { Code2, Rocket, FileText, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react'

export function App(): JSX.Element {
  const [activeTab, setActiveTab] = useState<'overview' | 'structure' | 'stacks' | 'benefits'>('overview')

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
                    <div className="grid md:grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="font-semibold text-purple-900 mb-1">Key Features:</p>
                        <ul className="text-purple-800 space-y-1">
                          <li>✓ Interactive CLI interface</li>
                          <li>✓ Multi-language code generation</li>
                          <li>✓ Round-robin model distribution</li>
                          <li>✓ Customizable agents via AGENTS.md</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-purple-900 mb-1">Installation:</p>
                        <pre className="bg-gray-900 text-green-400 p-2 rounded text-xs">
{`pip install code-puppy
code-puppy --interactive`}
                        </pre>
                        <p className="text-purple-800 mt-2">
                          <a href="https://github.com/mpfaffenberger/code_puppy" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">
                            GitHub: mpfaffenberger/code_puppy
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
