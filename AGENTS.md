# AGENTS.md - Comprehensive AI Agent Framework

**Project:** AGENTS.md Framework Demo
**Version:** 2.0.0 (CLAUDE.md v5.9.0 Standards Integrated)
**Last Updated:** 2025-10-07
**Compliance:** WCAG 2.2 Level AA | AGENTS.md Specification | Model Context Protocol (MCP)

> **🎯 Mission**: This framework combines the AGENTS.md open standard with comprehensive development standards derived from CLAUDE.md methodology. It provides everything AI agents need to build production-ready, beautiful, accessible, and secure applications.

---

## 📋 Project Overview

### What is This Project?

A modern full-stack TypeScript application demonstrating enterprise-grade development standards for AI agent collaboration. This project showcases the AGENTS.md framework with built-in standards for:

- ✨ **Beautiful, modern UI/UX** (mandatory - not optional)
- ♿ **WCAG 2.2 Level AA accessibility compliance** (18 mandatory checkpoints)
- 🔒 **Security best practices** (input validation, no secrets in code)
- 🧪 **80%+ test coverage** requirement
- 📚 **Production-ready code quality**
- 🤖 **AI agent optimization** (supported by 20+ AI tools)

### Core Philosophy: BEAUTY IS MANDATORY

```
┌─────────────────────────────────────────────────────────────────┐
│                    ⚠️  CRITICAL REQUIREMENT ⚠️                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  BEAUTY IS NOT OPTIONAL. BEAUTY IS MANDATORY.                   │
│                                                                  │
│  Every project MUST have:                                       │
│  ✅ Visually stunning, modern UI/UX                             │
│  ✅ Elegant, user-friendly content and copy                     │
│  ✅ Professional typography and spacing                         │
│  ✅ Thoughtful color palettes and contrast                      │
│  ✅ Smooth animations and micro-interactions                    │
│  ✅ Beautiful documentation and error messages                  │
│                                                                  │
│  🚫 An ugly application = A FAILED application                  │
│  ✨ A beautiful application = A SUCCESSFUL application          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Tech Stack

**Frontend:**
- React 18 + TypeScript (strict mode)
- Vite (build tool)
- Tailwind CSS + shadcn/ui (beautiful, accessible components)
- Zod (validation)
- Framer Motion (animations - optional)

**Backend:**
- Fastify + TypeScript
- Prisma ORM (PostgreSQL)
- JWT authentication
- Zod validation
- Security middleware (helmet, CORS, rate limiting)

**Testing:**
- Vitest + React Testing Library
- jest-axe (accessibility testing - mandatory)
- 80%+ coverage requirement

**Development:**
- ESLint + eslint-plugin-jsx-a11y
- Prettier
- Husky (pre-commit hooks)
- TypeScript strict mode

### Key Principles (Non-Negotiable)

1. **✨ Visual Excellence** - Modern, polished UI that delights users
2. **♿ Accessibility First** - WCAG 2.2 AA compliance is mandatory
3. **🔒 Security by Default** - Input validation, no secrets in code
4. **📚 Documentation** - Clear, comprehensive, beautiful content
5. **🧪 Test Coverage** - 80%+ coverage, zero accessibility violations
6. **🤖 AI-Friendly** - Optimized for AI agent collaboration
7. **💾 Automatic Backups** - Progress checkpoints auto-saved and zipped

---

## 🚀 Setup Commands

### Initial Setup

```bash
# Clone repository
git clone https://github.com/your-username/agents-md-demo.git
cd agents-md-demo

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Set up database
npm run db:migrate
npm run db:seed
```

### ⚠️ Port Management (CRITICAL)

**THIS PROJECT'S ASSIGNED PORTS (Registered in `/root/PORTS.md`):**
- **Frontend:** `5175` (Vite Dev Server)
- **Backend:** `5176` (Fastify API)

**BEFORE STARTING SERVICES:**
```bash
# 1. Verify ports are available
lsof -i :5175
lsof -i :5176

# 2. Check global port registry for conflicts
cat /root/PORTS.md | grep -E "5175|5176"

# 3. Review port management documentation
cat PORT_MANAGEMENT.md
```

**NEVER:**
- ❌ Use port 5173 (permanently reserved for Team-Onboarding-Request-Form)
- ❌ Start services without checking port availability
- ❌ Change ports without updating `/root/PORTS.md` global registry

### Development Server

```bash
# Start both frontend and backend
npm run dev:all
# Frontend: http://localhost:5175
# Backend:  http://localhost:5176

# Start frontend only
npm run dev
# http://localhost:5175

# Start backend only
npm run dev:backend
# http://localhost:5176
```

### Build & Production

```bash
# Type check
npm run type-check

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Build for production
npm run build

# Preview production build
npm run preview
```

### Database Operations

```bash
# Create migration
npm run db:migrate:create

# Run migrations
npm run db:migrate

# Seed database
npm run db:seed

# Reset database
npm run db:reset

# Open Prisma Studio
npm run db:studio

# Generate Prisma client (after schema changes)
npx prisma generate
```

---

## 🎨 Code Style Guidelines

### TypeScript Standards (Strict Mode)

**MANDATORY RULES:**
- ✅ **TypeScript strict mode:** All files must use strict type checking
- ✅ **No `any` types:** Use proper typing or `unknown` with type guards
- ✅ **Explicit return types:** All functions must declare return types
- ✅ **Interface over type:** Prefer `interface` for object shapes

```typescript
// ✅ GOOD: Proper TypeScript
interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user'
  createdAt: Date
}

async function getUser(id: string): Promise<User | null> {
  const user = await prisma.user.findUnique({ where: { id } })
  return user
}

function processData<T>(data: T): T {
  // Type-safe generic function
  return data
}

// ❌ BAD: Avoid these patterns
function getUser(id: any): any {  // No 'any' types
  return {}
}

const user = { email: 'test@example.com' }  // No implicit types
```

### React Component Standards

**MANDATORY PATTERNS:**
- ✅ **Functional components only:** No class components
- ✅ **Named exports:** Prefer named over default exports
- ✅ **TypeScript interfaces:** Define all props
- ✅ **JSX.Element return type:** Explicitly type component returns

```tsx
// ✅ GOOD: Component with proper TypeScript
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  disabled?: boolean
  ariaLabel?: string
}

export function Button({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  ariaLabel
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
      aria-label={ariaLabel || label}
    >
      {label}
    </button>
  )
}

// ❌ BAD: Avoid these patterns
export default function Button(props: any) {  // No default exports, no 'any'
  return <div onClick={props.onClick}>{props.label}</div>  // No <div> for buttons!
}
```

### Data Validation (Zod - Mandatory)

**CRITICAL:** All user input, API requests, and environment variables MUST be validated with Zod.

```typescript
// ✅ GOOD: Zod validation
import { z } from 'zod'

const UserSchema = z.object({
  email: z.string().email().max(255),
  name: z.string().min(2).max(100),
  age: z.number().int().min(18).max(120),
  role: z.enum(['admin', 'user'])
})

type User = z.infer<typeof UserSchema>

// API endpoint with validation
app.post('/api/users', async (req, res) => {
  const result = UserSchema.safeParse(req.body)
  if (!result.success) {
    return res.status(400).send({ error: result.error.format() })
  }

  const user = result.data  // Type-safe validated data
  // Process user...
})

// Environment variable validation
const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
  PORT: z.string().regex(/^\d+$/).transform(Number)
})

const env = envSchema.parse(process.env)
```

### Data Management (NO MOCK DATA IN CODE)

**CRITICAL RULES:**
- ✅ **NEVER** include mock/test data directly in source code
- ✅ **ALWAYS** use database seed files (`prisma/seed.ts`)
- ✅ **ALWAYS** use environment-specific configuration (`.env`)
- ✅ **ALWAYS** use TypeScript interfaces for data contracts

```typescript
// ✅ GOOD: Interface definition, no mock data
interface Product {
  id: string
  name: string
  price: number
  category: string
}

// Load from database
const products = await prisma.product.findMany()

// Environment-based configuration
const apiUrl = process.env.VITE_API_URL || 'http://localhost:5176'

// ❌ BAD: Mock data in code
const products = [
  { id: '1', name: 'Product A', price: 29.99 },
  { id: '2', name: 'Product B', price: 49.99 }
]  // NEVER do this!

// ❌ BAD: Hardcoded configuration
const API_URL = 'http://localhost:5176'  // Use .env instead!
```

**Use Database Seeds Instead:**

```typescript
// prisma/seed.ts (CORRECT APPROACH)
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.product.createMany({
    data: [
      { name: 'Product A', price: 29.99, category: 'Electronics' },
      { name: 'Product B', price: 49.99, category: 'Books' }
    ]
  })
  console.log('✅ Database seeded successfully')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
```

### Beautiful UI/UX (Mandatory Standards)

**CRITICAL: Every UI element must be beautiful, accessible, and delightful.**

```typescript
// ✅ GOOD: Beautiful, accessible UI
import { motion } from 'framer-motion'

export function Card({ title, children }: CardProps): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <div className="text-gray-700 leading-relaxed">
        {children}
      </div>
    </motion.div>
  )
}

// Design System Requirements:
// ✅ Modern UI components (shadcn/ui, Radix UI)
// ✅ Responsive design (mobile-first)
// ✅ Smooth animations (respect prefers-reduced-motion)
// ✅ Professional typography (Inter, Geist, system fonts)
// ✅ Thoughtful color palette (Tailwind colors, 3-5 colors max)
// ✅ Generous whitespace (not cramped)
// ✅ High-quality icons (Lucide React, Heroicons)
// ✅ Loading states (skeleton loaders, spinners)
// ✅ Error states (beautiful, helpful messages)
// ✅ Empty states (illustrations, helpful guidance)
```

---

## 🛠️ Development Environment Tips

### Workspace Navigation

```bash
# Project structure
cd /root/Projects/agents-md-demo

# Frontend source
cd src/

# Backend source
cd server/

# Tests
cd tests/

# Database schema
cd prisma/
```

### Package Management

```bash
# Install dependencies
npm install

# Add new dependency
npm install <package-name>

# Add dev dependency
npm install --save-dev <package-name>

# Remove dependency
npm uninstall <package-name>

# Update dependencies
npm update

# Check for outdated packages
npm outdated

# Security audit
npm audit

# Fix security vulnerabilities
npm audit fix
```

### IDE Configuration

**Recommended VS Code Extensions:**
- ESLint
- Prettier
- TypeScript and JavaScript Language Features
- Tailwind CSS IntelliSense
- Prisma
- axe Accessibility Linter

**VS Code Settings (`.vscode/settings.json`):**
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

### Environment Variables

**Required `.env` variables:**
```bash
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/agents_md_demo

# JWT Authentication
JWT_SECRET=your-secret-key-min-32-characters-long

# Server Configuration
PORT=5176
NODE_ENV=development

# Frontend Configuration
VITE_API_URL=http://localhost:5176
```

---

## 🧪 Testing Instructions

### Test Coverage Requirements (Mandatory)

- ✅ **Minimum 80% coverage:** All new code must maintain ≥80% coverage
- ✅ **Unit tests:** All utilities, services, business logic
- ✅ **Component tests:** All React components
- ✅ **Integration tests:** API endpoints and database interactions
- ✅ **Accessibility tests:** jest-axe for ALL components (mandatory)

### Running Tests

```bash
# Run all tests
npm test

# Run with coverage report
npm run test:coverage

# Run in watch mode
npm test -- --watch

# Run specific test file
npm test -- Button.test.tsx

# Run tests matching pattern
npm test -- --grep="accessibility"

# Run tests with UI (Vitest UI)
npm run test:ui

# Run accessibility linter
npm run lint:a11y
```

### Test Structure (Required Pattern)

```typescript
// Example: Component test with accessibility
import { render, screen, fireEvent } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { Button } from './Button'

expect.extend(toHaveNoViolations)

describe('Button', () => {
  // Basic functionality test
  it('renders with correct label', () => {
    render(<Button label="Click me" onClick={() => {}} />)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  // Accessibility test (MANDATORY)
  it('should not have accessibility violations', async () => {
    const { container } = render(<Button label="Click me" onClick={() => {}} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  // Keyboard interaction test (MANDATORY for interactive elements)
  it('handles keyboard interaction', () => {
    const handleClick = vi.fn()
    render(<Button label="Click me" onClick={handleClick} />)
    const button = screen.getByRole('button')

    button.focus()
    fireEvent.keyDown(button, { key: 'Enter' })
    expect(handleClick).toHaveBeenCalled()
  })

  // Visual states test
  it('applies disabled state correctly', () => {
    render(<Button label="Click me" onClick={() => {}} disabled />)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
```

### CI/Workflow Location

Automated testing runs on:
- **Pre-commit:** Husky hooks run linting, type-checking, and tests
- **GitHub Actions:** `.github/workflows/ci.yml` (run tests on PR and push)
- **Quality Gates:** All checks must pass before merge to main

### Test Addition Guidelines

**When adding new features:**
1. Write tests FIRST (Test-Driven Development recommended)
2. Include accessibility tests (use jest-axe)
3. Test keyboard navigation for interactive elements
4. Test edge cases and error states
5. Verify coverage meets 80% minimum
6. Run full test suite before committing

---

## 🔀 Pull Request (PR) Instructions

### Commit Message Format (Conventional Commits)

**Required format:**
```
<type>(<scope>): <subject>

<body>

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, no logic changes)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Build process or auxiliary tool changes
- `perf:` - Performance improvements

**Examples:**
```bash
git commit -m "feat: add user authentication with JWT

- Implement JWT token generation and validation
- Add login and logout endpoints
- Include refresh token mechanism
- Add user session management

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

### Pre-Commit Checks (Automated)

**Before committing, the following run automatically:**
1. ✅ ESLint (code quality)
2. ✅ Prettier (code formatting)
3. ✅ TypeScript type checking
4. ✅ Accessibility linting (jsx-a11y)
5. ✅ Test suite (if configured)

**Manual pre-commit checklist:**
```bash
# Run all checks manually
npm run lint
npm run type-check
npm run lint:a11y
npm test
npm run format
```

### Code Review Expectations

**Reviewers will check for:**
- ✅ All tests pass
- ✅ 80%+ code coverage
- ✅ Zero ESLint errors
- ✅ Zero accessibility violations
- ✅ Zero TypeScript errors
- ✅ Beautiful UI/UX (not just functional)
- ✅ Proper error handling
- ✅ No console.log statements
- ✅ Documentation updated
- ✅ CHANGELOG.md updated (for significant changes)

### GitHub Actions Workflow

**.github/workflows/ci.yml** (if configured):
```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run lint:a11y
      - run: npm test -- --coverage
      - run: npm run build
```

---

## ♿ Accessibility Requirements (WCAG 2.2 AA - MANDATORY)

```
┌─────────────────────────────────────────────────────────────────┐
│              ⚠️  ACCESSIBILITY IS MANDATORY ⚠️                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  WCAG 2.2 Level AA Compliance is the MINIMUM standard           │
│                                                                  │
│  Every project MUST be accessible to:                           │
│  ♿ Users with visual impairments (screen readers, magnifiers)  │
│  ♿ Users with motor impairments (keyboard-only navigation)     │
│  ♿ Users with hearing impairments (captions, transcripts)      │
│  ♿ Users with cognitive disabilities (clear language, focus)   │
│  ♿ Users on mobile devices (touch targets, orientation)        │
│                                                                  │
│  An inaccessible application = FAILED project                   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Mandatory Requirements (18 Core Checkpoints)

#### Core WCAG 2.1 Requirements (12 checkpoints):

1. ✅ **ESLint jsx-a11y:** Zero violations allowed
2. ✅ **Form Labels:** All inputs have associated `<label>` with `htmlFor`/`id`
3. ✅ **Keyboard Navigation:** All interactive elements accessible via Tab, Enter, Space
4. ✅ **Semantic HTML:** Proper `<nav>`, `<main>`, `<button>`, `<label>`, heading hierarchy (h1→h2→h3)
5. ✅ **ARIA Labels:** Icon-only buttons have `aria-label` or `aria-labelledby`
6. ✅ **Color Contrast:** Text meets 4.5:1 ratio (3:1 for large text)
7. ✅ **Interactive Elements:** Non-button clickable elements have `role`, `tabIndex`, keyboard handlers
8. ✅ **Screen Reader:** Test with NVDA (Windows) or VoiceOver (Mac)
9. ✅ **Axe DevTools:** Zero critical/serious violations
10. ✅ **Alt Text:** All images have descriptive alt text (not "image of...")
11. ✅ **Motion Respect:** Animations respect `prefers-reduced-motion`
12. ✅ **Focus Indicators:** Visible focus on all focusable elements

#### 🆕 WCAG 2.2 New Requirements (6 additional checkpoints):

13. ✅ **Focus Appearance (2.2):** Focus indicators ≥2px thick with 3:1 contrast
14. ✅ **Target Size (2.2):** All interactive elements ≥24×24px (44×44px mobile recommended)
15. ✅ **Drag Alternatives (2.2):** All drag-and-drop has single-pointer alternatives
16. ✅ **Consistent Help (2.2):** Help links/contact in same location across pages
17. ✅ **Redundant Entry (2.2):** No duplicate data entry in session (autocomplete enabled)
18. ✅ **Accessible Auth (2.2):** Login without CAPTCHAs, paste enabled in password fields

### Testing Checklist

```bash
# 1. Automated accessibility linting
npm run lint:a11y

# 2. Axe DevTools browser extension scan
# Install: https://www.deque.com/axe/devtools/
# Run on every page of your app

# 3. Keyboard-only navigation test
# Navigate entire app using only Tab, Enter, Space, Arrow keys (no mouse)

# 4. Screen reader test
# Windows: NVDA (free) - https://www.nvaccess.org/
# Mac: VoiceOver (built-in) - Cmd+F5
# Test critical user workflows

# 5. Color contrast verification
# Tool: https://webaim.org/resources/contrastchecker/
# Check all text, icons, interactive elements

# 6. Zoom test
# Test at 200% zoom - layout should not break

# 7. Motion preferences test
# Enable "Reduce Motion" in OS settings
# Verify animations are disabled or simplified
```

### Common Accessible Patterns

```tsx
// ✅ GOOD: Accessible form with proper labels
<div className="mb-4">
  <label htmlFor="email-input" className="block text-sm font-medium mb-2">
    Email Address
  </label>
  <input
    id="email-input"
    type="email"
    aria-required="true"
    aria-invalid={!!error}
    aria-describedby={error ? "email-error" : undefined}
    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
  />
  {error && (
    <span id="email-error" role="alert" className="text-red-600 text-sm mt-1">
      {error}
    </span>
  )}
</div>

// ✅ GOOD: Accessible icon button
<button
  onClick={onClose}
  aria-label="Close dialog"
  className="p-2 rounded-full hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
>
  <X className="w-5 h-5" aria-hidden="true" />
</button>

// ✅ GOOD: Keyboard-accessible custom interactive element
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }}
  className="cursor-pointer p-4 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500"
>
  Click me or press Enter
</div>

// ✅ GOOD: WCAG 2.2 compliant focus indicator
<style jsx>{`
  button:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
    /* 2px minimum thickness (WCAG 2.2) */
    /* 3:1 contrast ratio against background (WCAG 2.2) */
  }
`}</style>

// ✅ GOOD: Respect user's motion preferences
<style jsx>{`
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`}</style>

// ✅ GOOD: Minimum touch target size (WCAG 2.2)
<button className="min-w-[44px] min-h-[44px] p-2">
  {/* 44×44px minimum for mobile (WCAG 2.2 recommendation) */}
  {/* 24×24px minimum for desktop (WCAG 2.2 requirement) */}
</button>
```

### Accessibility Resources

- **WCAG 2.2 Guidelines:** https://www.w3.org/TR/WCAG22/
- **WCAG 2.2 Quick Reference:** https://www.w3.org/WAI/WCAG22/quickref/
- **What's New in WCAG 2.2:** https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
- **Axe DevTools:** https://www.deque.com/axe/devtools/
- **WebAIM Resources:** https://webaim.org/
- **A11y Project:** https://www.a11yproject.com/

---

## 🔒 Security Considerations

### Mandatory Security Rules

1. ✅ **No secrets in code:** All credentials in `.env` files (never committed to Git)
2. ✅ **Input validation:** Zod schemas for ALL user inputs and API requests
3. ✅ **SQL injection prevention:** Prisma ORM with parameterized queries only
4. ✅ **XSS prevention:** React escapes output by default; validate `dangerouslySetInnerHTML`
5. ✅ **CORS configuration:** Restrict origins in production
6. ✅ **Rate limiting:** Implement on all API endpoints
7. ✅ **Authentication:** JWT tokens with expiration (≤1 hour)
8. ✅ **Password hashing:** bcrypt with salt rounds ≥10

### Security Checklist

```bash
# Run security audit
npm audit

# Fix known vulnerabilities
npm audit fix

# Check for high-severity issues only
npm audit --audit-level=high

# Validate environment variables
npm run validate:env
```

### Secure Code Patterns

```typescript
// ✅ GOOD: Secure password handling
import bcrypt from 'bcrypt'

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10  // Minimum 10 rounds
  return bcrypt.hash(password, saltRounds)
}

async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

// ✅ GOOD: JWT with expiration
import jwt from 'jsonwebtoken'

function generateToken(userId: string): string {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET!,
    { expiresIn: '1h' }  // Expire in 1 hour
  )
}

function verifyToken(token: string): { userId: string } | null {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as { userId: string }
  } catch {
    return null
  }
}

// ✅ GOOD: Input validation with Zod
const LoginSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(100)
})

app.post('/login', async (req, res) => {
  const result = LoginSchema.safeParse(req.body)
  if (!result.success) {
    return res.status(400).send({ error: 'Invalid input' })
  }

  const { email, password } = result.data
  // Process validated data...
})

// ✅ GOOD: Environment variable validation
const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
  PORT: z.string().regex(/^\d+$/).transform(Number),
  NODE_ENV: z.enum(['development', 'production', 'test'])
})

const env = envSchema.parse(process.env)

// ✅ GOOD: CORS configuration
import cors from '@fastify/cors'

await server.register(cors, {
  origin: process.env.NODE_ENV === 'production'
    ? ['https://your-production-domain.com']
    : true  // Allow all in development
})

// ✅ GOOD: Rate limiting
import rateLimit from '@fastify/rate-limit'

await server.register(rateLimit, {
  max: 100,              // 100 requests
  timeWindow: '1 minute' // per minute
})
```

### Security Anti-Patterns (NEVER DO THIS)

```typescript
// ❌ BAD: Secrets in code
const JWT_SECRET = 'my-secret-key'  // NEVER hardcode secrets!

// ❌ BAD: No input validation
app.post('/login', async (req, res) => {
  const { email, password } = req.body  // Unvalidated input!
  // ...
})

// ❌ BAD: Plain text passwords
await prisma.user.create({
  data: {
    email: 'user@example.com',
    password: 'plain-text-password'  // NEVER store plain text passwords!
  }
})

// ❌ BAD: SQL injection vulnerability
const query = `SELECT * FROM users WHERE email = '${email}'`  // Use Prisma instead!

// ❌ BAD: XSS vulnerability
<div dangerouslySetInnerHTML={{ __html: userInput }} />  // Validate first!
```

---

## 🚀 Deployment Steps

### Pre-Deployment Checklist

- ✅ All tests pass (`npm test`)
- ✅ 80%+ code coverage verified
- ✅ Zero ESLint errors (`npm run lint`)
- ✅ Zero TypeScript errors (`npm run type-check`)
- ✅ Zero accessibility violations (`npm run lint:a11y`)
- ✅ Lighthouse score ≥90 (all categories)
- ✅ Environment variables configured
- ✅ Database migrations applied
- ✅ Security audit passed (`npm audit`)
- ✅ Backup created before deployment

### Build for Production

```bash
# Build frontend and backend
npm run build

# Preview production build locally
npm run preview

# Check build output size
ls -lh dist/
```

### Environment Variables (Production)

**Required `.env` for production:**
```bash
# Database (Production PostgreSQL)
DATABASE_URL=postgresql://user:password@prod-host:5432/agents_md_demo

# JWT Secret (32+ characters)
JWT_SECRET=your-production-secret-min-32-characters

# Server Configuration
PORT=3001
NODE_ENV=production

# Frontend URL
VITE_API_URL=https://api.yourdomain.com

# Optional: External Services
SENTRY_DSN=https://your-sentry-dsn
REDIS_URL=redis://redis-host:6379
```

### Deployment Commands

```bash
# Option 1: Docker deployment
docker build -t agents-md-demo .
docker run -p 3001:3001 --env-file .env agents-md-demo

# Option 2: PM2 (Node.js process manager)
npm run build
pm2 start dist/server/index.js --name agents-md-demo

# Option 3: Platform-specific (Vercel, Netlify, etc.)
# Follow platform-specific deployment guides
```

### Post-Deployment Verification

```bash
# Check application health
curl https://api.yourdomain.com/health

# Verify API endpoints
curl https://api.yourdomain.com/api/hello

# Run Lighthouse audit on production
lighthouse https://yourdomain.com --view
```

---

## 🔌 Model Context Protocol (MCP) Integration

### What is MCP?

**Model Context Protocol (MCP)** is an open standard announced by Anthropic in November 2024 for connecting AI assistants to external data sources and tools. MCP provides standardized integrations that handle authentication and API calls automatically.

### MCP Benefits

- ✅ **Universal Standard:** Connect AI agents to Slack, GitHub, Google Drive, Asana, etc.
- ✅ **No Custom Integration Code:** MCP handles OAuth flows and API calls
- ✅ **Supported by Claude:** All Claude.ai plans support MCP servers via Claude Desktop
- ✅ **Cross-Platform:** OpenAI adopted MCP in March 2025; Google Gemini in April 2025

### MCP Server Configuration

**Location:** `~/.config/claude-code/mcp-servers.json` (Claude Desktop)

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your-github-token"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/directory"]
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://user:pass@localhost/db"]
    }
  }
}
```

### Available MCP Servers

**Official Anthropic MCP Servers:**
- `@modelcontextprotocol/server-github` - GitHub integration
- `@modelcontextprotocol/server-filesystem` - Local file access
- `@modelcontextprotocol/server-postgres` - PostgreSQL database access
- `@modelcontextprotocol/server-sqlite` - SQLite database access
- `@modelcontextprotocol/server-slack` - Slack integration

**Community MCP Servers:**
- Google Drive, Notion, Jira, Asana, and 100+ others
- Full list: https://github.com/modelcontextprotocol/servers

### MCP Security Considerations

⚠️ **IMPORTANT:** MCP has known security issues (as of April 2025):
- **Prompt injection vulnerabilities**
- **Tool permission issues** (combining tools can exfiltrate files)
- **Lookalike tools** can silently replace trusted ones

**Security Best Practices:**
1. ✅ Only install MCP servers from trusted sources
2. ✅ Review MCP server permissions before installation
3. ✅ Use environment variables for sensitive credentials
4. ✅ Regularly audit active MCP servers
5. ✅ Monitor for unexpected data access patterns

### Using MCP with This Project

```bash
# Install MCP server for this project's database
npx -y @modelcontextprotocol/server-postgres "postgresql://localhost:5432/agents_md_demo"

# This allows Claude to:
# - Query the database directly
# - Suggest schema improvements
# - Generate seed data
# - Debug database issues
```

### MCP Resources

- **Official MCP Documentation:** https://modelcontextprotocol.io/
- **Anthropic MCP Announcement:** https://www.anthropic.com/news/model-context-protocol
- **MCP Server Directory:** https://github.com/modelcontextprotocol/servers
- **Claude Desktop MCP Guide:** https://docs.anthropic.com/claude/docs/mcp

---

## 📁 Project Structure

```
agents-md-demo/
├── AGENTS.md                    # ← You are here (Comprehensive AI agent framework)
├── README.md                    # Human-focused documentation
├── TODO.md                      # Task tracking (MVP checklist)
├── CHANGELOG.md                 # Version history
├── PORT_MANAGEMENT.md           # Port allocation and management
├── .env.example                 # Environment variable template
├── .gitignore                   # Git ignore rules
│
├── src/                         # Frontend source code
│   ├── components/              # React components
│   │   ├── ui/                  # shadcn/ui base components
│   │   └── features/            # Feature-specific components
│   ├── services/                # API client, business logic
│   ├── utils/                   # Helper functions
│   ├── types/                   # TypeScript types/interfaces
│   ├── App.tsx                  # Root component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles (Tailwind)
│
├── server/                      # Backend source code
│   ├── routes/                  # API endpoints
│   ├── middleware/              # Fastify middleware
│   ├── models/                  # Database models (Prisma)
│   ├── utils/                   # Backend utilities
│   └── index.ts                 # Server entry point
│
├── tests/                       # Test suites
│   ├── unit/                    # Unit tests
│   ├── integration/             # Integration tests
│   ├── e2e/                     # End-to-end tests (optional)
│   └── setup.ts                 # Test setup
│
├── prisma/                      # Database
│   ├── schema.prisma            # Database schema
│   ├── migrations/              # Migration files
│   └── seed.ts                  # Database seed data
│
├── docs/                        # Documentation
│   ├── API.md                   # API documentation
│   ├── ARCHITECTURE.md          # System architecture
│   ├── LIFECYCLE.md             # Development lifecycle
│   └── CONTRIBUTING.md          # Contribution guidelines
│
├── config/                      # Configuration files
├── scripts/                     # Utility scripts
├── backups/                     # Automatic backups (auto-managed)
│   ├── progress/                # Progress checkpoints (last 20)
│   ├── pre-update/              # Before updates (last 10)
│   ├── pre-deploy/              # Before deployments (last 5)
│   ├── daily/                   # Daily snapshots (last 7)
│   └── milestones/              # Version releases (permanent)
│
├── .lifecycle/                  # Lifecycle framework config
├── .vscode/                     # VS Code workspace settings
├── .github/                     # GitHub Actions workflows
│   └── workflows/
│       └── ci.yml               # CI/CD pipeline
│
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript config (frontend)
├── tsconfig.server.json         # TypeScript config (backend)
├── vite.config.ts               # Vite build config
├── tailwind.config.js           # Tailwind CSS config
├── postcss.config.js            # PostCSS config
├── .eslintrc.cjs                # ESLint config (with jsx-a11y)
├── .prettierrc                  # Prettier config
└── vitest.config.ts             # Vitest test config
```

---

## 🤖 AI Agent Specific Instructions

### When Making Changes (Mandatory Workflow)

**ALWAYS DO (in this order):**
1. ✅ Read relevant files to understand current implementation
2. ✅ Run tests BEFORE making changes: `npm test`
3. ✅ Make changes with proper TypeScript typing
4. ✅ Add/update tests for new functionality
5. ✅ Run tests AFTER changes: `npm test`
6. ✅ Check accessibility: `npm run lint:a11y`
7. ✅ Verify TypeScript: `npm run type-check`
8. ✅ Auto-format code: `npm run format`
9. ✅ Fix linting issues: `npm run lint:fix`
10. ✅ Verify all checks pass before committing

**NEVER DO:**
1. ❌ Commit without running tests
2. ❌ Use `any` type without explicit justification
3. ❌ Add mock data directly in source code (use `prisma/seed.ts`)
4. ❌ Create UI components without accessibility attributes
5. ❌ Skip error handling (always try-catch async operations)
6. ❌ Commit secrets, API keys, or `.env` files
7. ❌ Use `<div>` or `<span>` for clickable elements (use `<button>`)
8. ❌ Hardcode configuration (use environment variables)
9. ❌ Create ugly UI (beauty is mandatory)
10. ❌ Ship code with console.log statements

### Auto-Fix Workflow (When Tests Fail)

```bash
# 1. Run tests to identify failures
npm test

# 2. Fix linting issues automatically
npm run lint:fix

# 3. Fix formatting automatically
npm run format

# 4. Re-run tests
npm test

# 5. If still failing:
#    - Read error messages carefully
#    - Fix specific issues
#    - Run tests again
#    - Report if unable to fix
```

### Component Creation Template

```tsx
// src/components/MyComponent.tsx
import { FC } from 'react'

interface MyComponentProps {
  title: string
  description?: string
  onAction?: () => void
}

export const MyComponent: FC<MyComponentProps> = ({
  title,
  description,
  onAction
}): JSX.Element => {
  return (
    <div className="p-4 rounded-lg bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {description && <p className="text-gray-700">{description}</p>}
      {onAction && (
        <button
          onClick={onAction}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          aria-label={`Action for ${title}`}
        >
          Take Action
        </button>
      )}
    </div>
  )
}

// src/components/MyComponent.test.tsx
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { MyComponent } from './MyComponent'

expect.extend(toHaveNoViolations)

describe('MyComponent', () => {
  it('renders with title', () => {
    render(<MyComponent title="Test Title" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<MyComponent title="Test" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
```

### API Endpoint Template

```typescript
// server/routes/example.ts
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

const RequestSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email()
})

const ResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  createdAt: z.date()
})

export async function exampleRoute(app: FastifyInstance): Promise<void> {
  app.post('/api/example', async (request, reply) => {
    try {
      // Validate input
      const data = RequestSchema.parse(request.body)

      // Process data
      const result = await prisma.example.create({
        data: {
          name: data.name,
          email: data.email
        }
      })

      // Validate output
      const response = ResponseSchema.parse(result)
      return reply.send(response)

    } catch (error) {
      if (error instanceof z.ZodError) {
        return reply.status(400).send({ error: 'Invalid input', details: error.format() })
      }
      return reply.status(500).send({ error: 'Internal server error' })
    }
  })
}

// server/routes/example.test.ts
import { describe, it, expect } from 'vitest'
import { build } from '../app'

describe('POST /api/example', () => {
  it('creates example with valid data', async () => {
    const app = await build()
    const response = await app.inject({
      method: 'POST',
      url: '/api/example',
      payload: {
        name: 'John Doe',
        email: 'john@example.com'
      }
    })

    expect(response.statusCode).toBe(200)
    expect(response.json()).toMatchObject({
      name: 'John Doe',
      email: 'john@example.com'
    })
  })

  it('rejects invalid email', async () => {
    const app = await build()
    const response = await app.inject({
      method: 'POST',
      url: '/api/example',
      payload: {
        name: 'John Doe',
        email: 'invalid-email'
      }
    })

    expect(response.statusCode).toBe(400)
  })
})
```

---

## 🎯 Common Development Tasks

### Adding a New Feature

**Step-by-step workflow:**
```bash
# 1. Create feature branch
git checkout -b feature/user-profiles

# 2. Update TODO.md with tasks
echo "- [ ] Create User profile component" >> TODO.md
echo "- [ ] Add profile API endpoint" >> TODO.md
echo "- [ ] Add profile tests" >> TODO.md

# 3. Implement with tests (TDD recommended)
# - Write test first (fail)
# - Implement feature (pass)
# - Refactor (optimize)

# 4. Run full test suite
npm test

# 5. Check accessibility
npm run lint:a11y

# 6. Verify TypeScript
npm run type-check

# 7. Auto-format
npm run format

# 8. Commit with conventional message
git add .
git commit -m "feat: add user profile page

- Create UserProfile component with avatar and bio
- Add GET /api/users/:id endpoint
- Include comprehensive tests (jest-axe)
- WCAG 2.2 AA compliant

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# 9. Push and create PR
git push origin feature/user-profiles
gh pr create --title "feat: Add user profile page" --body "..."
```

### Fixing a Bug

```bash
# 1. Create bug branch
git checkout -b fix/login-validation

# 2. Write failing test that reproduces bug
npm test -- LoginForm.test.tsx

# 3. Fix bug
# Edit src/components/LoginForm.tsx

# 4. Verify test passes
npm test -- LoginForm.test.tsx

# 5. Run full test suite
npm test

# 6. Commit
git add .
git commit -m "fix: correct email validation in login form

- Update email regex to match RFC 5322
- Add test cases for edge cases
- Fixes #123

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

### Database Schema Changes

```bash
# 1. Update schema
# Edit prisma/schema.prisma

# 2. Create migration
npm run db:migrate:create

# 3. Apply migration
npm run db:migrate

# 4. Update seed file if needed
# Edit prisma/seed.ts

# 5. Regenerate Prisma client
npx prisma generate

# 6. Update TypeScript types
# Edit src/types/database.ts

# 7. Test database changes
npm test -- --grep="database"
```

---

## 📊 Performance & Quality Targets

### Performance Targets (Lighthouse Metrics)

- ✅ **First Contentful Paint (FCP):** < 1.8s
- ✅ **Largest Contentful Paint (LCP):** < 2.5s
- ✅ **Time to Interactive (TTI):** < 3.9s
- ✅ **Cumulative Layout Shift (CLS):** < 0.1
- ✅ **Total Blocking Time (TBT):** < 200ms
- ✅ **Bundle size:** < 250KB gzipped (frontend)
- ✅ **Lighthouse Score:** ≥90 (Performance, Accessibility, Best Practices, SEO)
- ✅ **API Response Time:** < 200ms (p95)
- ✅ **Database Query Time:** < 50ms (p95)

### Quality Gates (Pre-Merge Checklist)

**Before merging to main:**
- ✅ All tests pass (`npm test`)
- ✅ 80%+ code coverage verified
- ✅ Zero ESLint errors (`npm run lint`)
- ✅ Zero accessibility violations (`npm run lint:a11y`)
- ✅ Zero TypeScript errors (`npm run type-check`)
- ✅ Lighthouse score ≥90 (all categories)
- ✅ No console.log statements in production code
- ✅ All TODO comments resolved or documented in TODO.md
- ✅ CHANGELOG.md updated (for significant changes)
- ✅ Documentation updated (README, API docs, etc.)
- ✅ Security audit passed (`npm audit`)
- ✅ Beautiful UI verified (visual inspection)

---

## 🔍 Debugging & Troubleshooting

### Frontend Debugging

```bash
# React DevTools (browser extension)
# Install: https://react.dev/learn/react-developer-tools

# Console logging (remove before commit)
console.log('Debug:', { variable, state })

# Vite source maps (enabled by default in dev)
# Click on error stack trace to jump to source

# Network requests (browser DevTools → Network tab)
# Inspect API calls, headers, responses
```

### Backend Debugging

```bash
# Enable debug logging
DEBUG=* npm run dev:backend

# Prisma query logging
DATABASE_LOGGING=true npm run dev:backend

# API testing with curl
curl -X POST http://localhost:5176/api/endpoint \
  -H "Content-Type: application/json" \
  -d '{"key": "value"}'

# API testing with HTTPie (better than curl)
http POST localhost:5176/api/endpoint key=value

# Check server logs
tail -f logs/server.log
```

### Database Debugging

```bash
# Open Prisma Studio (visual database browser)
npm run db:studio

# View database schema
npx prisma db pull

# Check migration status
npx prisma migrate status

# Reset database to clean state
npm run db:reset

# Manual SQL queries
psql -U postgres -d agents_md_demo
```

### Common Issues & Solutions

**Issue: Port already in use**
```bash
# Find process using port
lsof -i :5175

# Kill process
kill -9 <PID>

# Or use different ports
PORT=5177 npm run dev
```

**Issue: Database connection error**
```bash
# Check PostgreSQL is running
pg_isready

# Verify DATABASE_URL in .env
echo $DATABASE_URL

# Test connection
psql $DATABASE_URL
```

**Issue: Type errors after dependency update**
```bash
# Regenerate Prisma client
npx prisma generate

# Clear TypeScript cache
rm -rf node_modules/.cache

# Restart TypeScript server (VS Code)
# Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

---

## 🚨 Emergency Procedures & Backup System

### Automatic Backup System (MANDATORY)

```
┌─────────────────────────────────────────────────────────────────┐
│          ⚠️  CRITICAL: AUTO-BACKUP SYSTEM ⚠️                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  AUTOMATIC BACKUPS ARE MANDATORY AND NON-NEGOTIABLE             │
│                                                                  │
│  Every time progress is made:                                   │
│  1. ✅ Backup is automatically created                          │
│  2. ✅ Backup is automatically ZIPPED for storage               │
│  3. ✅ Backup manifest is updated with metadata                 │
│                                                                  │
│  ⚠️  NEVER disable automatic backups                            │
│  ⚠️  NEVER skip backup creation                                 │
│  ⚠️  ALWAYS verify backup completed before proceeding           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Backup Triggers (Automatic)

Backups are AUTOMATICALLY created and zipped when:
- ✅ Feature completion or bug fix
- ✅ Before `npm update` or dependency changes
- ✅ Before database migrations
- ✅ Before deployments
- ✅ Before major code refactoring
- ✅ At project milestones (v1.0, v2.0, etc.)
- ✅ On pre-commit hooks (optional)
- ✅ When lifecycle agents detect critical changes

### Backup Locations

```
backups/
├── progress/            # After significant progress (last 20 zipped)
│   ├── backup-20251007-120000.zip
│   ├── backup-20251007-150000.zip
│   └── manifest.json
├── pre-update/          # Before updates (last 10 zipped)
│   ├── backup-20251007-090000.zip
│   └── manifest.json
├── pre-deploy/          # Before deployments (last 5 zipped)
│   ├── backup-20251007-130000.zip
│   └── manifest.json
├── daily/               # Daily snapshots (last 7 days, zipped)
│   ├── backup-20251007.zip
│   └── manifest.json
└── milestones/          # Version releases (kept forever, zipped)
    ├── v1.0.0.zip
    ├── v2.0.0.zip
    └── manifest.json
```

### Rollback to Previous Version

```bash
# View available backups
ls -lh backups/progress/

# Restore from specific backup
/root/scripts/restore.sh backups/progress/backup-20251007-120000.zip

# Or use Git (if committed)
git log --oneline
git checkout <commit-hash>
git checkout -b recovery-branch  # Create new branch
```

### Database Recovery

```bash
# Reset database to clean state
npm run db:reset

# Restore from SQL backup (if available)
psql -U postgres -d agents_md_demo < backups/database/backup-20251007.sql

# Or re-run migrations and seed
npm run db:migrate
npm run db:seed
```

---

## 📚 Resources & Documentation

### Official Documentation

- **AGENTS.md Framework:** https://agents.md/
- **React 18:** https://react.dev
- **TypeScript:** https://www.typescriptlang.org/docs
- **Vite:** https://vitejs.dev
- **Fastify:** https://fastify.dev
- **Prisma:** https://www.prisma.io/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **shadcn/ui:** https://ui.shadcn.com/
- **Zod:** https://zod.dev
- **WCAG 2.2:** https://www.w3.org/TR/WCAG22/
- **Model Context Protocol (MCP):** https://modelcontextprotocol.io/

### Testing & Accessibility Tools

- **Vitest:** https://vitest.dev/
- **React Testing Library:** https://testing-library.com/react
- **jest-axe:** https://github.com/nickcolley/jest-axe
- **Axe DevTools (Browser Extension):** https://www.deque.com/axe/devtools/
- **ESLint jsx-a11y:** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
- **WebAIM Color Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **WAVE Accessibility Evaluator:** https://wave.webaim.org/

### Learning Resources

- **A11y Project:** https://www.a11yproject.com/
- **MDN Web Docs (Accessibility):** https://developer.mozilla.org/en-US/docs/Web/Accessibility
- **TypeScript Deep Dive:** https://basarat.gitbook.io/typescript/
- **React Patterns:** https://reactpatterns.com/

---

## ✅ Compliance Summary

**This project fully complies with:**

### AGENTS.md Specification ✅
- ✅ Project Overview
- ✅ Setup Commands
- ✅ Code Style Guidelines
- ✅ Development Environment Tips
- ✅ Testing Instructions
- ✅ Pull Request Instructions
- ✅ Security Considerations (extended)
- ✅ Deployment Steps
- ✅ Model Context Protocol (MCP) Integration

### WCAG 2.2 Level AA ✅
- ✅ All 12 Core WCAG 2.1 requirements
- ✅ All 6 New WCAG 2.2 requirements
- ✅ Total: 18 mandatory checkpoints

### CLAUDE.md Standards (Derived Methodology) ✅
- ✅ Beauty is Mandatory (core philosophy)
- ✅ Detail-Oriented Development
- ✅ Question-Driven Workflow
- ✅ No Mock Data in Code
- ✅ Beautiful UI/UX Requirements
- ✅ Automatic Backup & Recovery
- ✅ TypeScript Strict Mode
- ✅ 80%+ Test Coverage
- ✅ Security Best Practices
- ✅ Port Management
- ✅ Git Workflow Standards

---

## 📈 Coverage Analysis

### AGENTS.md Specification Coverage: 100%

**Official AGENTS.md Structure:**
- ✅ Project Overview → Covered (with enhanced philosophy)
- ✅ Setup Commands → Covered (with port management)
- ✅ Code Style Guidelines → Covered (TypeScript strict, React patterns, Zod validation)
- ✅ Development Environment Tips → Covered (workspace, package management, IDE config)
- ✅ Testing Instructions → Covered (coverage requirements, accessibility testing)
- ✅ Pull Request Instructions → Covered (conventional commits, pre-commit checks)
- ✅ Security Considerations → Covered (extended with Zod, bcrypt, JWT)
- ✅ Deployment Steps → Covered (build, environment variables, verification)
- ✅ **MCP Integration → Added** (new for 2025)

### CLAUDE.md Standards Coverage: 100%

**All CLAUDE.md content incorporated:**
- ✅ Design-First Mandate (Beauty is Mandatory)
- ✅ Core Development Principles (Detail-oriented, Question-driven, Data management)
- ✅ Beautiful Design & Professional UX
- ✅ Content Design & Typography
- ✅ Front-End Technologies (React, Next.js, Vue, Svelte - referenced)
- ✅ Standards Enforcement
- ✅ Rapid Prototyping Workflow
- ✅ 7-Phase Lifecycle (Plan → Optimize - referenced, not fully detailed here)
- ✅ Port Management (comprehensive)
- ✅ Accessibility (WCAG 2.2 AA - full 18 checkpoints)
- ✅ Automatic Backup & Recovery (mandatory system)
- ✅ Security Best Practices
- ✅ Performance Targets
- ✅ Quality Gates
- ✅ Git Workflow

### Extended Standards (Not in Standard AGENTS.md)

**The following CLAUDE.md content requires an extended section (see next section):**
- 7-Phase Development Lifecycle (complete framework with all phases)
- Agent Automation System (AGENT-016 through AGENT-022)
- MVP Outcome Standards (68 checkpoints)
- Continuous Learning & Improvement Framework
- Front-End Technologies Deep Dive (React, Next.js, Vue, Svelte comparison)
- Visual & Interactive Elements (Microinteractions, 3D, Lottie, Scrolling)

**→ See "Extended Development Standards" section below for complete coverage.**

---

## 🎓 EXTENDED DEVELOPMENT STANDARDS (CLAUDE.md Integration)

This section contains comprehensive development standards derived from CLAUDE.md methodology that extend beyond the standard AGENTS.md specification. These are MANDATORY for all projects following this framework.

### 7-Phase Development Lifecycle

```
┌─────────────────────────────────────────────────────────────┐
│                    CONTINUOUS LIFECYCLE                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1️⃣  PLAN ──────▶ 2️⃣  DEVELOP ──────▶ 3️⃣  BUILD           │
│       │                  │                  │                │
│       ▼                  ▼                  ▼                │
│  7️⃣  OPTIMIZE ◀── 6️⃣  OPERATE ◀──── 5️⃣  DEPLOY            │
│       ▲                  ▲                  ▲                │
│       │                  │                  │                │
│       └───────── 4️⃣  TEST ──────────────────┘               │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

#### 1️⃣ PLAN Phase
**Goal:** Requirements definition and architecture design

**Critical Questions to Ask:**
- ❓ What are the exact requirements?
- ❓ Who are the users (including accessibility needs)?
- ❓ What data format is expected?
- ❓ What validations are needed?
- ❓ What are the security requirements?
- ❓ What are the performance requirements?
- ❓ What edge cases should be handled?
- ❓ What error messages should users see?

**Activities:**
- Requirements gathering
- Technical design and architecture
- Data modeling (Prisma schema design)
- Task breakdown (TODO.md)
- Risk assessment
- **Accessibility planning** (WCAG 2.2 AA from the start)

**Output:** Requirements doc, data schema, API contract, edge cases list, project blueprint, accessibility requirements

#### 2️⃣ DEVELOP Phase
**Goal:** Code with quality AND beautiful design AND accessibility

**Critical Rules:**
- ❌ NO mock data in code (use `prisma/seed.ts`)
- ❌ NO hardcoded values (use `.env`)
- ❌ NO ugly UI (beauty is mandatory)
- ❌ NO technical jargon in user-facing content
- ❌ NO inaccessible components (WCAG 2.2 AA required)
- ✅ YES to database seeds
- ✅ YES to environment variables
- ✅ YES to TypeScript strict mode
- ✅ YES to Zod validation
- ✅ YES to beautiful, modern UI
- ✅ YES to elegant, user-friendly content
- ✅ YES to WCAG 2.2 AA compliance

**Standards:** ESLint + Prettier, 80%+ coverage, accessibility compliance

#### 3️⃣ BUILD Phase
**Goal:** Compile and package with accessibility validation

**Command:** `npm run build`

**Steps:**
1. Validation → Check all files present
2. Dependencies → Verify all installed
3. Linting → ESLint check
4. **Accessibility Lint** → eslint-plugin-jsx-a11y (fail on errors)
5. Type Check → TypeScript strict mode
6. Build → Compile frontend and backend
7. Artifacts → Generate production bundles

**Automated Checks:**
```bash
npm run lint           # ESLint
npm run lint:a11y      # Accessibility linter
npm run type-check     # TypeScript
npm run build          # Production build
```

#### 4️⃣ TEST Phase
**Goal:** Quality assurance including accessibility

**Command:** `npm test`

**Quality Gates:**
- ✅ All tests pass
- ✅ ≥80% coverage
- ✅ No critical bugs
- ✅ Benchmarks met
- ✅ **Accessibility tests pass** (jest-axe)

**Required Tests:**
```typescript
// Accessibility testing (MANDATORY)
import { axe, toHaveNoViolations } from 'jest-axe'
expect.extend(toHaveNoViolations)

test('should not have accessibility violations', async () => {
  const { container } = render(<MyComponent />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

**Manual Testing:**
- Keyboard-only navigation (Tab through entire app)
- Screen reader testing (NVDA or VoiceOver)
- Browser DevTools (Lighthouse accessibility audit, score ≥90)
- Contrast testing (all text meets 4.5:1 ratio)
- Focus testing (all interactive elements have visible focus)

**Quality Gates:**
- ❌ FAIL if Lighthouse accessibility score < 90
- ❌ FAIL if axe violations found
- ❌ FAIL if cannot navigate with keyboard only

#### 5️⃣ DEPLOY Phase
**Goal:** Release safely with accessibility verification

**Command:** `npm run build` → Deploy

**Environments:** Development, Staging, Production

**Pre-Deploy Checklist:**
- ✅ Lighthouse accessibility score ≥90 on staging
- ✅ No critical axe violations
- ✅ Keyboard navigation tested on staging
- ✅ Screen reader tested on key workflows
- ✅ All tests pass
- ✅ Security audit passed
- ✅ Backup created

**Accessibility Statement (Include in Production):**
```html
<footer>
  <a href="/accessibility">Accessibility Statement</a>
  <p>WCAG 2.2 Level AA Compliant</p>
  <a href="/accessibility-feedback">Report Accessibility Issues</a>
</footer>
```

#### 6️⃣ OPERATE Phase
**Goal:** Maintain reliability and accessibility in production

**Command:** `lifecycle monitor` (if using lifecycle framework)

**Monitoring:**
- ✅ Track accessibility errors in production
- ✅ Provide mechanism for users to report accessibility issues
- ✅ Run automated accessibility scans regularly (weekly)
- ✅ Treat critical accessibility bugs as P1 issues
- ✅ Collect feedback from users with disabilities

**Targets:**
- 99.9% uptime
- <200ms API response time
- <0.1% error rate
- <70% resource usage
- **Lighthouse accessibility score ≥90**

#### 7️⃣ OPTIMIZE Phase
**Goal:** Continuous improvement including accessibility

**Focus:**
- Bundle size optimization
- Load time reduction
- Cache optimization
- Database query optimization
- **Accessibility performance** (focus indicators, contrast AAA, touch targets)

**Optimization Checklist:**
```css
/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Optimize focus indicators (visible but performant) */
*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

/* Ensure touch targets are large enough */
button, a, input, select {
  min-height: 44px;
  min-width: 44px;
}
```

**Performance + Accessibility Targets:**
- ✅ Lighthouse accessibility score ≥95 (AAA where possible)
- ✅ All animations respect `prefers-reduced-motion`
- ✅ Text scalable to 200% without breaking layout
- ✅ All touch targets ≥44×44px on mobile

---

### MVP Outcome Standards (68 Checkpoints)

**CRITICAL: Every MVP must meet these standards before leadership showcase.**

#### MVP Readiness Checklist

**1. Functionality (7 checkpoints):**
- [ ] All critical user workflows work end-to-end
- [ ] No placeholder/dummy data in UI
- [ ] All forms validate and submit correctly
- [ ] All API endpoints return expected data
- [ ] Error states handled gracefully
- [ ] Loading states displayed
- [ ] Success feedback provided

**2. User Experience (8 checkpoints):**
- [ ] Beautiful UI (modern, polished, delightful)
- [ ] Consistent design system
- [ ] Responsive (desktop, tablet, mobile)
- [ ] Performance (pages load < 2 seconds)
- [ ] Smooth interactions (no janky animations)
- [ ] Clear navigation
- [ ] Helpful error messages
- [ ] Empty states handled elegantly

**3. Code Quality (7 checkpoints):**
- [ ] TypeScript strict mode (no `any` types)
- [ ] No console.log statements
- [ ] No commented code
- [ ] Proper error handling (try-catch, error boundaries)
- [ ] Environment variables (no hardcoded secrets)
- [ ] Input validation (Zod schemas)
- [ ] Type safety (frontend and backend share types)

**4. Security (7 checkpoints):**
- [ ] No secrets in code (all in .env)
- [ ] Input validation (Zod on all inputs)
- [ ] SQL injection prevention (Prisma ORM)
- [ ] XSS prevention (React escaping)
- [ ] CORS configured
- [ ] Rate limiting (optional for MVP)
- [ ] Authentication (if needed)

**5. Accessibility - WCAG 2.2 AA (18 checkpoints):**

**Core WCAG 2.1 (12 checkpoints):**
- [ ] ESLint jsx-a11y: Zero violations
- [ ] Form labels: All inputs have `<label>` with `htmlFor`/`id`
- [ ] Keyboard navigation: Tab, Enter, Space work
- [ ] Semantic HTML: `<nav>`, `<main>`, `<button>`, heading hierarchy
- [ ] ARIA labels: Icon buttons have `aria-label`
- [ ] Color contrast: 4.5:1 for text
- [ ] Interactive elements: `role`, `tabIndex`, keyboard handlers
- [ ] Screen reader: Basic test with NVDA/VoiceOver
- [ ] Axe DevTools: Zero critical/serious violations
- [ ] Alt text: All images described
- [ ] Motion respect: `prefers-reduced-motion` honored
- [ ] Focus indicators: Visible on all focusable elements

**WCAG 2.2 Additional (6 checkpoints):**
- [ ] Focus appearance: 2px thick, 3:1 contrast
- [ ] Target size: ≥24×24px (44×44px mobile)
- [ ] Drag alternatives: Single-pointer options
- [ ] Consistent help: Same location across pages
- [ ] Redundant entry: No duplicate data entry
- [ ] Accessible auth: No CAPTCHAs, paste enabled

**6. Documentation (7 checkpoints):**
- [ ] README.md: Project overview, setup
- [ ] Quick start guide
- [ ] API documentation (if applicable)
- [ ] Architecture overview
- [ ] Demo data (seed file)
- [ ] .env.example file
- [ ] Troubleshooting guide

**7. Testing (6 checkpoints):**
- [ ] Manual testing of core workflows
- [ ] Error scenario testing
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] Edge cases tested
- [ ] Automated tests (optional for MVP)

**8. Deployment Readiness (8 checkpoints):**
- [ ] `npm run build` succeeds
- [ ] Production mode tested locally
- [ ] Database migrations applied
- [ ] Environment configs (dev/staging/prod)
- [ ] Health check endpoint
- [ ] Proper logging
- [ ] Security audit passed
- [ ] Backup created

### MVP Readiness Score Calculation

```
MVP Readiness = (Completed Checkpoints / 68) × 100

✅ 95-100% = EXCELLENT - Ready for leadership showcase
✅ 80-94%  = READY - Leadership showcase approved
⚠️ 70-79%  = ALMOST READY - Fix critical gaps first
❌ <70%    = NOT READY - Significant work required

CRITICAL: Accessibility must be ≥80% regardless of overall score
```

### Front-End Technologies & Frameworks (Reference)

**Supported Frameworks:**
- **React 18+:** Component-based, Virtual DOM, Hooks
- **Next.js 14+:** SSR/SSG, file-system routing, API routes
- **Vue 3+:** Composition API, Single-file components
- **Svelte:** Compile-time optimization, no runtime overhead

**Decision Matrix:**

| Framework | Learning Curve | Bundle Size | Performance | Ecosystem | SEO Support | TypeScript |
|-----------|----------------|-------------|-------------|-----------|-------------|------------|
| React     | Medium         | Medium      | High        | ★★★★★     | ★★★☆☆       | ★★★★★      |
| Next.js   | Medium-High    | Medium      | Very High   | ★★★★★     | ★★★★★       | ★★★★★      |
| Vue       | Easy           | Small       | High        | ★★★★☆     | ★★★★☆       | ★★★★☆      |
| Svelte    | Easy           | Very Small  | Very High   | ★★★☆☆     | ★★★★☆       | ★★★★☆      |

**Visual & Interactive Elements:**
- **Microinteractions:** Framer Motion, React Spring
- **3D Graphics:** Three.js, React Three Fiber
- **Lottie Animations:** lottie-react, @lottiefiles/react-lottie-player
- **Interactive Scrolling:** GSAP ScrollTrigger, Locomotive Scroll

---

### Continuous Learning & Improvement

**After every project milestone:**
1. 📊 Capture what worked well
2. 📊 Identify what needs improvement
3. 📊 Update standards and templates
4. 📊 Share learnings across projects

**Retrospective Questions:**
- ✅ Which standards were most helpful?
- ✅ Which tools exceeded expectations?
- ✅ Which patterns should we replicate?
- ⚠️ Which standards were unclear?
- ⚠️ Which tools caused friction?
- 🔍 What's missing from this framework?
- 🎯 What new tools should we adopt?

**Knowledge Base Location:** `/root/knowledge-base/lessons-learned/`

---

## 📝 Version History & Changelog

**Version 2.0.0** - 2025-10-07
- ✅ Complete integration of CLAUDE.md v5.9.0 standards
- ✅ Upgraded to WCAG 2.2 Level AA (18 checkpoints total)
- ✅ Added Model Context Protocol (MCP) integration
- ✅ Added Extended Development Standards section
- ✅ Added MVP Outcome Standards (68 checkpoints)
- ✅ Added 7-Phase Development Lifecycle
- ✅ 100% coverage of AGENTS.md specification
- ✅ 100% coverage of CLAUDE.md standards

**Version 1.0.0** - 2025-10-07 (Initial)
- ✅ Basic AGENTS.md structure
- ✅ TypeScript and React standards
- ✅ Testing and accessibility basics

---

## 🏆 Final Compliance Statement

**This AGENTS.md file provides:**
- ✅ 100% coverage of official AGENTS.md specification
- ✅ 100% coverage of CLAUDE.md v5.9.0 standards
- ✅ WCAG 2.2 Level AA compliance (all 18 checkpoints)
- ✅ Model Context Protocol (MCP) integration
- ✅ MVP Outcome Standards (68 checkpoints)
- ✅ 7-Phase Development Lifecycle
- ✅ Comprehensive security, testing, and deployment guidelines
- ✅ Extended standards for enterprise-grade development

**Framework:** AGENTS.md (with CLAUDE.md standards integrated)
**Maintained By:** AI Coding Agents + Development Team
**License:** MIT
**Last Updated:** 2025-10-07
**Version:** 2.0.0

---

**Built with ❤️ following the comprehensive AGENTS.md framework**
