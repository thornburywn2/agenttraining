import { useState } from 'react'
import { Button } from './components/ui/button'
import { Code2, Rocket, FileText, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react'

export function App(): JSX.Element {
  const [activeTab, setActiveTab] = useState<'overview' | 'structure' | 'benefits'>('overview')

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

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 mb-6">
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
                        <li>• Claude Code (this!)</li>
                        <li>• Cline</li>
                        <li>• Aider</li>
                        <li>• GPT Engineer</li>
                        <li>• Smol Developer</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-purple-900 mb-2">Enterprise:</p>
                      <ul className="text-purple-800 space-y-1">
                        <li>• Sourcegraph Cody</li>
                        <li>• Amazon Q Developer</li>
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
