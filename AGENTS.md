# AGENTS.md - AI Agent Instructions
**Project:** AGENTS.md Demo Project
**Framework:** AGENTS.md + CLAUDE.md Integration
**Version:** 1.0.0
**Last Updated:** 2025-10-07

---

## 📋 Project Overview

This is a full-stack TypeScript application demonstrating best practices for AI agent collaboration using the AGENTS.md framework while adhering to CLAUDE.md development standards.

**Tech Stack:**
- **Frontend:** React 18 + TypeScript + Vite + Tailwind CSS
- **Backend:** Fastify + TypeScript + Prisma
- **Database:** PostgreSQL
- **UI Components:** shadcn/ui
- **Validation:** Zod
- **Testing:** Vitest + React Testing Library

**Purpose:** Showcase how to structure a project that is both human-friendly and AI agent-optimized.

---

## 🚀 Quick Start Commands

### Development
```bash
# Install dependencies
npm install

# Start development (frontend + backend)
npm run dev:all

# Start frontend only
npm run dev

# Start backend only
npm run dev:backend

# Database setup
npm run db:migrate
npm run db:seed
```

### Build & Test
```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Type checking
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

### Database
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
```

---

## 🎨 Code Style Guidelines

### CRITICAL: Beauty is Mandatory

Every piece of code, every UI component, every user message must be **visually stunning and professionally polished**. Ugly code or ugly UI = failed implementation.

### TypeScript Standards
- ✅ **Strict mode enabled:** All TypeScript files must use strict type checking
- ✅ **No `any` types:** Use proper typing or `unknown` with type guards
- ✅ **Explicit return types:** Functions must declare return types
- ✅ **Interface over type:** Prefer `interface` for object shapes

```typescript
// ✅ GOOD
interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user'
}

async function getUser(id: string): Promise<User> {
  // implementation
}

// ❌ BAD
function getUser(id: any): any {
  // implementation
}
```

### React Component Standards
- ✅ **Functional components only:** No class components
- ✅ **Named exports:** Prefer named over default exports
- ✅ **Props interfaces:** Define props with TypeScript interfaces
- ✅ **Composition over inheritance:** Build from smaller components

```tsx
// ✅ GOOD
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

export function Button({ label, onClick, variant = 'primary', disabled = false }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
      aria-label={label}
    >
      {label}
    </button>
  )
}

// ❌ BAD
export default function Button(props: any) {
  return <div onClick={props.onClick}>{props.label}</div>
}
```

### Data Validation
- ✅ **Zod for all inputs:** Validate user input, API requests, env vars
- ✅ **No hardcoded data:** Use database seeds, not mock arrays in code
- ✅ **Environment-based config:** `.env` for all configuration

```typescript
// ✅ GOOD
import { z } from 'zod'

const UserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(100),
  age: z.number().min(18).max(120)
})

type User = z.infer<typeof UserSchema>

// ❌ BAD
const users = [
  { email: 'test@example.com', name: 'Test User' }
]
```

---

## ♿ Accessibility Requirements (WCAG 2.2 AA - MANDATORY)

**CRITICAL:** All code must be accessible. Accessibility violations = failed implementation.

### Mandatory Requirements
- ✅ **ESLint jsx-a11y:** Zero violations allowed
- ✅ **Semantic HTML:** Proper `<nav>`, `<main>`, `<button>`, `<label>`, heading hierarchy
- ✅ **Keyboard navigation:** All interactive elements accessible via Tab, Enter, Space
- ✅ **ARIA labels:** Icon-only buttons must have `aria-label`
- ✅ **Form labels:** All inputs have associated `<label>` with `htmlFor`/`id`
- ✅ **Color contrast:** Minimum 4.5:1 for text, 3:1 for large text
- ✅ **Focus indicators:** 2px thick with 3:1 contrast (WCAG 2.2)
- ✅ **Target size:** Minimum 24×24px (44×44px recommended mobile)
- ✅ **Motion respect:** Honor `prefers-reduced-motion`

### Testing Checklist
```bash
# Run accessibility linter
npm run lint:a11y

# Manual testing
# 1. Navigate entire app with keyboard only (no mouse)
# 2. Run Axe DevTools browser extension
# 3. Test with screen reader (NVDA/VoiceOver)
# 4. Check color contrast with WebAIM tool
# 5. Verify at 200% zoom
```

### Common Patterns

```tsx
// ✅ GOOD: Accessible form
<label htmlFor="email-input" className="block mb-2">
  Email Address
</label>
<input
  id="email-input"
  type="email"
  aria-required="true"
  aria-describedby="email-error"
/>
{error && <span id="email-error" role="alert">{error}</span>}

// ✅ GOOD: Accessible icon button
<button onClick={onClose} aria-label="Close dialog">
  <X className="w-4 h-4" />
</button>

// ✅ GOOD: Keyboard-accessible interactive element
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
>
  Click me
</div>

// ❌ BAD: Inaccessible patterns
<div onClick={handleClick}>Click me</div> // No keyboard support
<button><X /></button> // No aria-label
<label>Email</label><input type="email" /> // No association
```

---

## 🧪 Testing Instructions

### Test Coverage Requirements
- ✅ **Minimum 80% coverage:** All new code must maintain ≥80% coverage
- ✅ **Unit tests:** All utilities, services, business logic
- ✅ **Component tests:** All React components
- ✅ **Integration tests:** API endpoints and database interactions
- ✅ **Accessibility tests:** jest-axe for all components

### Running Tests
```bash
# Run all tests
npm test

# Run with coverage report
npm run test:coverage

# Run specific test file
npm test -- Button.test.tsx

# Run in watch mode
npm test -- --watch

# Run accessibility tests only
npm test -- --grep="accessibility"
```

### Test Structure
```typescript
// Component test example
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { Button } from './Button'

expect.extend(toHaveNoViolations)

describe('Button', () => {
  it('renders with correct label', () => {
    render(<Button label="Click me" onClick={() => {}} />)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Button label="Click me" onClick={() => {}} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('handles keyboard interaction', () => {
    const handleClick = vi.fn()
    render(<Button label="Click me" onClick={handleClick} />)
    const button = screen.getByRole('button')

    button.focus()
    fireEvent.keyDown(button, { key: 'Enter' })
    expect(handleClick).toHaveBeenCalled()
  })
})
```

---

## 🔒 Security Considerations

### Mandatory Security Rules
- ✅ **No secrets in code:** All credentials in `.env` files (never committed)
- ✅ **Input validation:** Zod schemas for all user inputs
- ✅ **SQL injection prevention:** Prisma ORM with parameterized queries
- ✅ **XSS prevention:** React escapes output by default, validate dangerous props
- ✅ **CORS configuration:** Restrict origins in production
- ✅ **Rate limiting:** Implement on API endpoints
- ✅ **Authentication:** JWT tokens with expiration
- ✅ **Password hashing:** bcrypt with salt rounds ≥10

### Security Checklist
```bash
# Run security audit
npm audit

# Fix vulnerabilities
npm audit fix

# Check for secrets in code
npm run security:scan

# Validate environment variables
npm run validate:env
```

### Secure Patterns
```typescript
// ✅ GOOD: Secure password handling
import bcrypt from 'bcrypt'

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10
  return bcrypt.hash(password, saltRounds)
}

async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

// ✅ GOOD: Input validation
import { z } from 'zod'

const LoginSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(100)
})

// API endpoint
app.post('/login', async (req, res) => {
  const result = LoginSchema.safeParse(req.body)
  if (!result.success) {
    return res.status(400).send({ error: result.error })
  }
  // Process validated data
})

// ✅ GOOD: Environment variables with validation
const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
  PORT: z.string().regex(/^\d+$/).transform(Number)
})

const env = envSchema.parse(process.env)
```

---

## 📁 Project Structure

```
agents-md-demo/
├── AGENTS.md                    # ← You are here (AI agent instructions)
├── README.md                    # Human-focused documentation
├── TODO.md                      # Task tracking
├── CHANGELOG.md                 # Version history
├── .claude.md                   # Claude-specific instructions (optional)
│
├── src/                         # Frontend source code
│   ├── components/              # React components
│   ├── services/                # API client, business logic
│   ├── utils/                   # Helper functions
│   ├── types/                   # TypeScript types/interfaces
│   ├── App.tsx                  # Root component
│   └── main.tsx                 # Entry point
│
├── server/                      # Backend source code
│   ├── routes/                  # API endpoints
│   ├── middleware/              # Express/Fastify middleware
│   ├── models/                  # Database models (Prisma)
│   └── index.ts                 # Server entry point
│
├── tests/                       # Test suites
│   ├── unit/                    # Unit tests
│   ├── integration/             # Integration tests
│   └── e2e/                     # End-to-end tests
│
├── prisma/                      # Database
│   ├── schema.prisma            # Database schema
│   ├── migrations/              # Migration files
│   └── seed.ts                  # Database seed data
│
├── docs/                        # Documentation
│   ├── API.md                   # API documentation
│   ├── ARCHITECTURE.md          # System architecture
│   └── LIFECYCLE.md             # Lifecycle documentation
│
├── config/                      # Configuration files
├── scripts/                     # Utility scripts
├── backups/                     # Automatic backups (auto-managed)
└── .lifecycle/                  # Lifecycle framework config
```

---

## 🤖 AI Agent Specific Instructions

### When Making Changes

**ALWAYS:**
1. ✅ Run tests before committing: `npm test`
2. ✅ Check accessibility: `npm run lint:a11y`
3. ✅ Verify TypeScript: `npm run type-check`
4. ✅ Auto-format code: `npm run format`
5. ✅ Create backup before major changes (automatic via lifecycle hooks)

**NEVER:**
1. ❌ Commit without running tests
2. ❌ Use `any` type without justification
3. ❌ Add mock data directly in source code (use database seeds)
4. ❌ Create UI components without accessibility attributes
5. ❌ Skip error handling (always try-catch async operations)
6. ❌ Commit secrets or API keys
7. ❌ Use `<div>` or `<span>` for clickable elements (use `<button>`)

### Auto-Fix Workflow

If tests fail, attempt to fix automatically:
```bash
# 1. Run tests to identify failures
npm test

# 2. Fix linting issues
npm run lint:fix

# 3. Fix formatting
npm run format

# 4. Re-run tests
npm test

# 5. If still failing, report specific errors
```

### Component Creation Template

When creating a new component:
```tsx
import { FC } from 'react'

interface ComponentNameProps {
  // Define props with TypeScript
}

export const ComponentName: FC<ComponentNameProps> = (props) => {
  return (
    <div>
      {/* Implementation */}
    </div>
  )
}

// Create test file: ComponentName.test.tsx
// Create Storybook story (optional): ComponentName.stories.tsx
```

### API Endpoint Template

When creating a new API endpoint:
```typescript
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

const RequestSchema = z.object({
  // Define request schema
})

const ResponseSchema = z.object({
  // Define response schema
})

export async function exampleRoute(app: FastifyInstance) {
  app.post('/api/example', async (request, reply) => {
    try {
      const data = RequestSchema.parse(request.body)
      // Implementation
      const result = ResponseSchema.parse(responseData)
      return reply.send(result)
    } catch (error) {
      return reply.status(400).send({ error: 'Validation failed' })
    }
  })
}

// Create test file: exampleRoute.test.ts
```

---

## 🎯 Common Tasks

### Adding a New Feature
1. Create feature branch: `git checkout -b feature/feature-name`
2. Update TODO.md with tasks
3. Implement with tests (TDD recommended)
4. Run full test suite: `npm test`
5. Check accessibility: `npm run lint:a11y`
6. Run type check: `npm run type-check`
7. Create backup: Automatic via lifecycle hooks
8. Commit with conventional commit message: `feat: add feature description`
9. Push and create PR

### Fixing a Bug
1. Create bug branch: `git checkout -b fix/bug-name`
2. Write failing test that reproduces bug
3. Fix bug
4. Verify test passes
5. Run full test suite: `npm test`
6. Commit: `fix: bug description`

### Database Changes
1. Update `prisma/schema.prisma`
2. Create migration: `npm run db:migrate:create`
3. Apply migration: `npm run db:migrate`
4. Update seed file if needed: `prisma/seed.ts`
5. Regenerate Prisma client: `npx prisma generate`
6. Update TypeScript types if needed

---

## 📊 Performance Targets

- ✅ **First Contentful Paint (FCP):** < 1.8s
- ✅ **Largest Contentful Paint (LCP):** < 2.5s
- ✅ **Time to Interactive (TTI):** < 3.9s
- ✅ **Cumulative Layout Shift (CLS):** < 0.1
- ✅ **Bundle size:** < 250KB gzipped (frontend)
- ✅ **Lighthouse Score:** ≥90 (all categories)
- ✅ **API Response Time:** < 200ms (p95)

---

## 🔍 Debugging

### Frontend Debugging
```bash
# React DevTools (browser extension)
# Inspect component hierarchy, props, state

# Console logging (remove before commit)
console.log('Debug:', variable)

# Vite source maps enabled by default in dev mode
```

### Backend Debugging
```bash
# Enable debug logging
DEBUG=* npm run dev:backend

# Inspect database queries (Prisma)
DATABASE_LOGGING=true npm run dev:backend

# API testing
curl -X POST http://localhost:3001/api/endpoint \
  -H "Content-Type: application/json" \
  -d '{"key": "value"}'
```

---

## 🚨 Emergency Procedures

### Rollback to Previous Version
```bash
# View available backups
ls -la backups/progress/

# Restore from backup
/root/scripts/restore.sh backups/progress/backup-YYYYMMDD-HHMMSS.zip

# Or use Git
git log --oneline
git checkout <commit-hash>
```

### Database Recovery
```bash
# Reset database to clean state
npm run db:reset

# Restore from backup (if available)
psql -U postgres -d agents_md_demo < backups/database/backup.sql
```

---

## 📚 Resources

**Official Documentation:**
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs
- Vite: https://vitejs.dev
- Fastify: https://fastify.dev
- Prisma: https://www.prisma.io/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Zod: https://zod.dev
- WCAG 2.2: https://www.w3.org/TR/WCAG22/

**Tools:**
- Axe DevTools: https://www.deque.com/axe/devtools/
- ESLint jsx-a11y: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
- Color Contrast Checker: https://webaim.org/resources/contrastchecker/

---

## ✅ Quality Gates

Before merging to main:
- ✅ All tests pass (`npm test`)
- ✅ 80%+ code coverage
- ✅ Zero ESLint errors (`npm run lint`)
- ✅ Zero accessibility violations (`npm run lint:a11y`)
- ✅ Zero TypeScript errors (`npm run type-check`)
- ✅ Lighthouse score ≥90 (all categories)
- ✅ No console.log statements in code
- ✅ All TODO comments resolved or documented
- ✅ CHANGELOG.md updated
- ✅ Documentation updated (if needed)

---

**Framework Compliance:**
- ✅ AGENTS.md: Standard AI agent instructions format
- ✅ CLAUDE.md: Beauty, accessibility, security, quality standards
- ✅ Living Document: Update this file as project evolves

**Version:** 1.0.0
**Last Updated:** 2025-10-07
**Maintained By:** AI Coding Agents + Development Team
