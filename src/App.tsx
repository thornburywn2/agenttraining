import { useState } from 'react'
import { Button } from './components/ui/button'
import { Code2, Rocket, FileText, Workflow, BookOpen, Sparkles } from 'lucide-react'

export function App(): JSX.Element {
  const [activeTab, setActiveTab] = useState<'overview' | 'agents' | 'claude' | 'workflow'>('overview')

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
                AGENTS.md + CLAUDE.md Integration Demo
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
            AI Agent Development Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            This project demonstrates the integration of <strong className="text-blue-600">AGENTS.md</strong>{' '}
            (AI agent instructions) with <strong className="text-purple-600">CLAUDE.md</strong>{' '}
            (development lifecycle standards) to create AI-optimized, production-ready applications.
          </p>
        </section>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap" role="tablist" aria-label="Framework sections">
          <Button
            onClick={(): void => setActiveTab('overview')}
            variant={activeTab === 'overview' ? 'default' : 'outline'}
            role="tab"
            aria-selected={activeTab === 'overview'}
            aria-controls="overview-panel"
          >
            <Sparkles className="w-4 h-4 mr-2" aria-hidden="true" />
            Overview
          </Button>
          <Button
            onClick={(): void => setActiveTab('agents')}
            variant={activeTab === 'agents' ? 'default' : 'outline'}
            role="tab"
            aria-selected={activeTab === 'agents'}
            aria-controls="agents-panel"
          >
            <FileText className="w-4 h-4 mr-2" aria-hidden="true" />
            AGENTS.md
          </Button>
          <Button
            onClick={(): void => setActiveTab('claude')}
            variant={activeTab === 'claude' ? 'default' : 'outline'}
            role="tab"
            aria-selected={activeTab === 'claude'}
            aria-controls="claude-panel"
          >
            <BookOpen className="w-4 h-4 mr-2" aria-hidden="true" />
            CLAUDE.md
          </Button>
          <Button
            onClick={(): void => setActiveTab('workflow')}
            variant={activeTab === 'workflow' ? 'default' : 'outline'}
            role="tab"
            aria-selected={activeTab === 'workflow'}
            aria-controls="workflow-panel"
          >
            <Workflow className="w-4 h-4 mr-2" aria-hidden="true" />
            Workflow
          </Button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div id="overview-panel" role="tabpanel" aria-labelledby="overview-tab">
              <h3 className="text-3xl font-bold mb-6">What is This?</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  This is a reference implementation showing how to structure projects for optimal
                  <strong> AI coding agent collaboration</strong> while maintaining <strong>enterprise-grade quality standards</strong>.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5" aria-hidden="true" />
                      AGENTS.md Framework
                    </h4>
                    <p className="text-blue-800">
                      Open standard for providing AI agents with project-specific instructions,
                      code style guidelines, testing procedures, and security requirements.
                    </p>
                    <ul className="mt-3 space-y-1 text-sm text-blue-700">
                      <li>✓ Standardized AI instructions</li>
                      <li>✓ Supported by 20+ tools</li>
                      <li>✓ Living documentation</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-purple-900 mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5" aria-hidden="true" />
                      CLAUDE.md Standards
                    </h4>
                    <p className="text-purple-800">
                      Comprehensive development lifecycle framework with mandatory standards for
                      beauty, accessibility (WCAG 2.2 AA), security, and quality.
                    </p>
                    <ul className="mt-3 space-y-1 text-sm text-purple-700">
                      <li>✓ 7-phase lifecycle (Plan → Optimize)</li>
                      <li>✓ Beauty is mandatory</li>
                      <li>✓ WCAG 2.2 AA compliance</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-2xl font-semibold mb-4 mt-8">Generated Project Structure</h4>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`agents-md-demo/
├── AGENTS.md           ← AI agent instructions
├── CLAUDE.md           ← Development standards (source)
├── PORT_MANAGEMENT.md  ← Port allocation docs
├── README.md           ← Human documentation
├── TODO.md             ← Task tracking (MVP checklist)
├── src/                ← React + TypeScript frontend
├── server/             ← Fastify + TypeScript backend
├── prisma/             ← Database (PostgreSQL)
├── tests/              ← Vitest + jest-axe
└── .lifecycle/         ← Lifecycle automation`}
                </pre>
              </div>
            </div>
          )}

          {/* AGENTS.md Tab */}
          {activeTab === 'agents' && (
            <div id="agents-panel" role="tabpanel" aria-labelledby="agents-tab">
              <h3 className="text-3xl font-bold mb-6">AGENTS.md Framework</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded">AGENTS.md</code> file
                  provides AI coding agents with everything they need to work on your project effectively.
                </p>

                <h4 className="text-xl font-semibold mb-3">Key Sections in Our AGENTS.md:</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold">📋 Project Overview</h5>
                    <p className="text-sm text-gray-600">Tech stack, purpose, quick start commands</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold">🎨 Code Style Guidelines</h5>
                    <p className="text-sm text-gray-600">TypeScript strict mode, React patterns, validation with Zod</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-semibold">♿ Accessibility Requirements (WCAG 2.2 AA)</h5>
                    <p className="text-sm text-gray-600">Mandatory ESLint jsx-a11y, semantic HTML, keyboard nav, ARIA labels</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h5 className="font-semibold">🧪 Testing Instructions</h5>
                    <p className="text-sm text-gray-600">80%+ coverage requirement, Vitest + jest-axe, accessibility tests</p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-semibold">🔒 Security Considerations</h5>
                    <p className="text-sm text-gray-600">No secrets in code, Zod validation, SQL injection prevention</p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4">
                    <h5 className="font-semibold">🤖 AI Agent Instructions</h5>
                    <p className="text-sm text-gray-600">What to ALWAYS do, what to NEVER do, auto-fix workflows</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                  <h4 className="font-semibold text-blue-900 mb-2">📍 Port Management (CRITICAL)</h4>
                  <p className="text-blue-800 text-sm mb-3">
                    Our AGENTS.md includes port management instructions referencing <code>/root/PORTS.md</code>
                  </p>
                  <pre className="bg-blue-900 text-blue-100 p-3 rounded text-xs overflow-x-auto">
{`Assigned Ports (Registered in /root/PORTS.md):
- Frontend: 5175 (Vite Dev Server)
- Backend:  5176 (Fastify API)

Before starting services:
1. Verify ports available: lsof -i :5175
2. Check /root/PORTS.md for conflicts
3. See PORT_MANAGEMENT.md for details`}
                  </pre>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Result:</strong> AI agents can read AGENTS.md and immediately understand
                    project structure, coding standards, testing requirements, and how to run/build the project.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CLAUDE.md Tab */}
          {activeTab === 'claude' && (
            <div id="claude-panel" role="tabpanel" aria-labelledby="claude-tab">
              <h3 className="text-3xl font-bold mb-6">CLAUDE.md Development Standards</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The <code className="bg-purple-100 text-purple-800 px-2 py-1 rounded">CLAUDE.md</code> file
                  defines comprehensive development lifecycle standards that ensure every project is beautiful,
                  accessible, secure, and production-ready.
                </p>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-semibold text-purple-900 mb-3">✨ Core Philosophy</h4>
                  <blockquote className="border-l-4 border-purple-600 pl-4 italic text-purple-800">
                    &ldquo;BEAUTY IS MANDATORY. Every application, every interface, every piece of content must be
                    visually stunning and engaging. Ugly applications are unacceptable, regardless of functionality.&rdquo;
                  </blockquote>
                </div>

                <h4 className="text-2xl font-semibold mb-4">7-Phase Development Lifecycle</h4>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>PLAN</strong> - Requirements, architecture, accessibility planning, data modeling
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>DEVELOP</strong> - Beautiful UI, TypeScript strict, NO mock data, WCAG 2.2 AA compliance
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>BUILD</strong> - Compile, lint, type-check, accessibility validation
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>TEST</strong> - 80%+ coverage, accessibility tests (jest-axe), manual keyboard testing
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong>DEPLOY</strong> - Staging, production, accessibility smoke tests
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">6</span>
                    <div>
                      <strong>OPERATE</strong> - Monitor uptime, accessibility score, user feedback
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">7</span>
                    <div>
                      <strong>OPTIMIZE</strong> - Performance + accessibility, reduced motion, contrast AAA
                    </div>
                  </div>
                </div>

                <h4 className="text-2xl font-semibold mb-4">Mandatory Standards Applied to This Project</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-900 mb-2">✅ Accessibility (WCAG 2.2 AA)</h5>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• ESLint jsx-a11y plugin configured</li>
                      <li>• Form labels with htmlFor/id</li>
                      <li>• Skip links for navigation</li>
                      <li>• ARIA labels on icon buttons</li>
                      <li>• Focus indicators (2px, 3:1 contrast)</li>
                      <li>• Minimum touch targets (44×44px)</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-900 mb-2">✅ Beautiful Design</h5>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Modern UI with Tailwind CSS</li>
                      <li>• shadcn/ui components</li>
                      <li>• Smooth animations (Framer Motion)</li>
                      <li>• Professional typography</li>
                      <li>• Thoughtful color palette</li>
                      <li>• Responsive design (mobile-first)</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-red-900 mb-2">✅ Security</h5>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• No secrets in code (.env only)</li>
                      <li>• Zod validation on all inputs</li>
                      <li>• Prisma ORM (SQL injection prevention)</li>
                      <li>• Helmet + CORS middleware</li>
                      <li>• Rate limiting configured</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-900 mb-2">✅ Quality</h5>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• TypeScript strict mode</li>
                      <li>• ESLint + Prettier</li>
                      <li>• Vitest + jest-axe</li>
                      <li>• 80%+ coverage target</li>
                      <li>• Pre-commit hooks (Husky)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-6">
                  <h4 className="font-semibold text-orange-900 mb-2">🔌 Port Management Standard</h4>
                  <p className="text-orange-800 text-sm mb-3">
                    CLAUDE.md requires all projects to register ports in <code>/root/PORTS.md</code>
                    to avoid conflicts across the system.
                  </p>
                  <div className="bg-orange-900 text-orange-100 p-3 rounded text-xs">
                    <p className="mb-2"><strong>Policy:</strong></p>
                    <ul className="space-y-1">
                      <li>1. Check /root/PORTS.md for available ports</li>
                      <li>2. Reserve ports before starting services</li>
                      <li>3. Document in PORT_MANAGEMENT.md</li>
                      <li>4. Update global registry immediately</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Workflow Tab */}
          {activeTab === 'workflow' && (
            <div id="workflow-panel" role="tabpanel" aria-labelledby="workflow-tab">
              <h3 className="text-3xl font-bold mb-6">How This Project Was Built</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  This project was created by an AI agent (Claude) following both AGENTS.md and CLAUDE.md
                  standards. Here&apos;s the exact workflow that was followed:
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Step 1: Research AGENTS.md Framework</h4>
                    <p className="text-blue-800 mb-3">
                      Fetched and analyzed https://agents.md to understand the framework structure
                    </p>
                    <pre className="bg-blue-900 text-blue-100 p-3 rounded text-xs overflow-x-auto">
{`WebFetch → https://agents.md
- Learned: Open standard for AI agent instructions
- Format: Markdown at repository root
- Sections: Overview, build commands, code style, testing, security
- Supported by 20+ AI tools`}
                    </pre>
                  </div>

                  <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
                    <h4 className="text-xl font-semibold text-purple-900 mb-3">Step 2: Review CLAUDE.md Standards</h4>
                    <p className="text-purple-800 mb-3">
                      Read /root/CLAUDE.md v5.9.0 to understand mandatory requirements
                    </p>
                    <pre className="bg-purple-900 text-purple-100 p-3 rounded text-xs overflow-x-auto">
{`Read → /root/CLAUDE.md
✓ Beauty is mandatory
✓ WCAG 2.2 AA accessibility (18 checkpoints)
✓ 7-phase lifecycle (Plan → Optimize)
✓ Port management (/root/PORTS.md)
✓ No mock data in code (use DB seeds)
✓ TypeScript strict mode
✓ 80%+ test coverage`}
                    </pre>
                  </div>

                  <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Step 3: Create Project Structure</h4>
                    <p className="text-green-800 mb-3">
                      Generated complete project following both frameworks
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="font-semibold text-green-900 mb-1">Documentation:</p>
                        <ul className="text-green-800 space-y-1">
                          <li>✓ AGENTS.md (AI instructions)</li>
                          <li>✓ README.md (human docs)</li>
                          <li>✓ TODO.md (MVP checklist)</li>
                          <li>✓ CHANGELOG.md</li>
                          <li>✓ PORT_MANAGEMENT.md</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-green-900 mb-1">Code:</p>
                        <ul className="text-green-800 space-y-1">
                          <li>✓ React 18 + TypeScript + Vite</li>
                          <li>✓ Fastify backend</li>
                          <li>✓ Prisma ORM + PostgreSQL</li>
                          <li>✓ Tailwind CSS + shadcn/ui</li>
                          <li>✓ Vitest + jest-axe</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
                    <h4 className="text-xl font-semibold text-orange-900 mb-3">Step 4: Port Management</h4>
                    <p className="text-orange-800 mb-3">
                      Registered ports 5175 and 5176 in global /root/PORTS.md registry
                    </p>
                    <pre className="bg-orange-900 text-orange-100 p-3 rounded text-xs overflow-x-auto">
{`Port Assignment Process:
1. Checked /root/PORTS.md for available ports
2. Selected 5175 (frontend) and 5176 (backend)
3. Updated vite.config.ts with strictPort: true
4. Updated server/index.ts with PORT=5176
5. Created PORT_MANAGEMENT.md documentation
6. Updated /root/PORTS.md global registry
7. Committed with detailed port allocation message`}
                    </pre>
                  </div>

                  <div className="border-l-4 border-pink-500 bg-pink-50 p-6 rounded-r-lg">
                    <h4 className="text-xl font-semibold text-pink-900 mb-3">Step 5: Accessibility Implementation</h4>
                    <p className="text-pink-800 mb-3">
                      Configured ESLint jsx-a11y and implemented WCAG 2.2 AA requirements
                    </p>
                    <pre className="bg-pink-900 text-pink-100 p-3 rounded text-xs overflow-x-auto">
{`Accessibility Setup:
✓ eslint-plugin-jsx-a11y installed and configured
✓ Skip links for main content navigation
✓ ARIA labels on all icon buttons (role, aria-label)
✓ Form labels properly associated (htmlFor + id)
✓ Focus indicators: 2px thick, 3:1 contrast (WCAG 2.2)
✓ Touch targets: 44×44px minimum (mobile)
✓ prefers-reduced-motion support
✓ Semantic HTML (nav, main, button, label)
✓ Color contrast: 4.5:1 minimum ratio`}
                    </pre>
                  </div>

                  <div className="border-l-4 border-indigo-500 bg-indigo-50 p-6 rounded-r-lg">
                    <h4 className="text-xl font-semibold text-indigo-900 mb-3">Step 6: Git Initialization</h4>
                    <p className="text-indigo-800 mb-3">
                      Created Git repository with comprehensive commit messages
                    </p>
                    <pre className="bg-indigo-900 text-indigo-100 p-3 rounded text-xs overflow-x-auto">
{`git init
git add .
git commit -m "feat: Initial project setup with AGENTS.md + CLAUDE.md integration

Project follows:
✅ AGENTS.md framework for AI agent optimization
✅ CLAUDE.md development standards
✅ WCAG 2.2 Level AA compliance
✅ TypeScript strict mode
✅ Beautiful, modern UI design

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"`}
                    </pre>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-6 mt-8">
                  <h4 className="text-xl font-semibold mb-3">🎉 Result: Production-Ready Application</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-blue-900 mb-2">For AI Agents:</p>
                      <ul className="text-blue-800 space-y-1">
                        <li>✓ AGENTS.md with clear instructions</li>
                        <li>✓ Code style guidelines</li>
                        <li>✓ Testing procedures</li>
                        <li>✓ Security requirements</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-purple-900 mb-2">For Developers:</p>
                      <ul className="text-purple-800 space-y-1">
                        <li>✓ README.md documentation</li>
                        <li>✓ Quick start guide</li>
                        <li>✓ TODO.md task tracking</li>
                        <li>✓ Architecture docs</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-pink-900 mb-2">Quality Assurance:</p>
                      <ul className="text-pink-800 space-y-1">
                        <li>✓ WCAG 2.2 AA compliant</li>
                        <li>✓ TypeScript strict</li>
                        <li>✓ Security hardened</li>
                        <li>✓ Beautiful UI/UX</li>
                      </ul>
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
              <h3 className="text-xl font-semibold mb-2">AGENTS.md</h3>
              <p className="text-blue-100">
                Standardized AI agent instructions make projects accessible to 20+ AI tools
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2">CLAUDE.md</h3>
              <p className="text-purple-100">
                7-phase lifecycle with mandatory beauty, accessibility, and security standards
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Together</h3>
              <p className="text-pink-100">
                AI-optimized development with enterprise-grade quality and production readiness
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
              Built with ❤️ following{' '}
              <a
                href="https://agents.md"
                className="text-blue-400 hover:text-blue-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                AGENTS.md
              </a>{' '}
              +{' '}
              <a
                href="/CLAUDE.md"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                CLAUDE.md
              </a>{' '}
              standards
            </p>
            <p className="text-gray-400">
              © 2025 AGENTS.md Demo. Licensed under MIT.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
