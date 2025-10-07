import { useState } from 'react'
import { Button } from './components/ui/button'
import { Github, Code2, Accessibility, Shield, Rocket } from 'lucide-react'

export function App(): JSX.Element {
  const [count, setCount] = useState(0)

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
                AGENTS.md Demo
              </h1>
            </div>
            <a
              href="https://github.com/your-username/agents-md-demo"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on GitHub (opens in new tab)"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
              <span>View on GitHub</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main id="main-content" className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16" aria-labelledby="hero-heading">
          <h2
            id="hero-heading"
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Beautiful. Accessible. AI-Friendly.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            A modern full-stack TypeScript application showcasing{' '}
            <strong>AGENTS.md</strong> framework integration with{' '}
            <strong>CLAUDE.md</strong> development standards.
          </p>

          {/* Interactive Counter Demo */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto mb-12">
            <h3 className="text-2xl font-semibold mb-4">Interactive Demo</h3>
            <div className="text-6xl font-bold text-primary mb-6" aria-live="polite" aria-atomic="true">
              {count}
            </div>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={(): void => setCount(count - 1)}
                variant="outline"
                aria-label="Decrease counter"
              >
                Decrease
              </Button>
              <Button
                onClick={(): void => setCount(0)}
                variant="secondary"
                aria-label="Reset counter to zero"
              >
                Reset
              </Button>
              <Button
                onClick={(): void => setCount(count + 1)}
                aria-label="Increase counter"
              >
                Increase
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-3xl font-bold text-center mb-12">
            Built with Excellence
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1: Beautiful UI */}
            <article className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Beautiful UI</h3>
              <p className="text-gray-600">
                Modern, responsive design with Tailwind CSS and shadcn/ui components.
              </p>
            </article>

            {/* Feature 2: Accessibility */}
            <article className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Accessibility className="w-6 h-6 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">WCAG 2.2 AA</h3>
              <p className="text-gray-600">
                Fully accessible with semantic HTML, keyboard navigation, and screen reader support.
              </p>
            </article>

            {/* Feature 3: Security */}
            <article className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure</h3>
              <p className="text-gray-600">
                Input validation, JWT auth, no secrets in code, security best practices.
              </p>
            </article>

            {/* Feature 4: AI-Friendly */}
            <article className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-pink-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Friendly</h3>
              <p className="text-gray-600">
                AGENTS.md framework for optimal AI coding agent collaboration.
              </p>
            </article>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mt-16" aria-labelledby="tech-stack-heading">
          <h2 id="tech-stack-heading" className="text-3xl font-bold text-center mb-8">
            Tech Stack
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Frontend</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ React 18 + TypeScript</li>
                  <li>✓ Vite for fast builds</li>
                  <li>✓ Tailwind CSS + shadcn/ui</li>
                  <li>✓ React Router</li>
                  <li>✓ Zod validation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Backend</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Fastify + TypeScript</li>
                  <li>✓ Prisma ORM</li>
                  <li>✓ PostgreSQL</li>
                  <li>✓ JWT authentication</li>
                  <li>✓ Security middleware</li>
                </ul>
              </div>
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
