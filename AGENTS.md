# AGENTS.md

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

```bash
# Clone repository
git clone https://github.com/your-username/your-project.git
cd your-project

# Install dependencies
npm install

# Set up environment variables
# Unix/Linux/macOS:
cp .env.example .env

# Windows (PowerShell):
Copy-Item .env.example .env

# Windows (CMD):
copy .env.example .env

# Edit .env with your configuration

# Set up database (if using Prisma)
npm run db:migrate
npm run db:seed

# Start development server
npm run dev:all
```

### Development

```bash
# Start frontend only (port 5175)
npm run dev

# Start backend only (port 5176)
npm run dev:backend

# Start both frontend and backend
npm run dev:all

# Open browser to http://localhost:5175
```

### Build

```bash
# Build for production
npm run build

# Build frontend only
npm run build:frontend

# Build backend only
npm run build:backend

# Preview production build
npm run preview
```

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# View coverage report
# Unix/Linux/macOS:
open coverage/index.html

# Windows:
start coverage/index.html
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Type check
npm run type-check
```

### Database

```bash
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
```

---

## 🎨 Code Style Guidelines

### TypeScript Standards

**✅ ALWAYS:**
- Use TypeScript strict mode (no `any` types without justification)
- Define interfaces for all data structures
- Use proper type annotations on function parameters and return values
- Prefer `interface` over `type` for object shapes
- Use `const` and `let` (never `var`)

**❌ NEVER:**
- Use `any` type without explicit comment explaining why
- Ignore TypeScript errors or use `@ts-ignore` without reason
- Mix JavaScript and TypeScript files in the same module

**Example (Good):**
```typescript
// ✅ Good: Clear types, proper interfaces
interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user'
}

async function getUser(id: string): Promise<User | null> {
  return await prisma.user.findUnique({ where: { id } })
}
```

**Example (Bad):**
```typescript
// ❌ Bad: Using any, unclear types
function getUser(id: any): any {
  return prisma.user.findUnique({ where: { id } })
}
```

### React/Frontend Patterns

**✅ ALWAYS:**
- Use functional components with hooks (no class components)
- Destructure props for clarity
- Use meaningful component and variable names
- Keep components small and focused (single responsibility)
- Use proper semantic HTML (`<button>`, `<nav>`, `<main>`, `<label>`)

**❌ NEVER:**
- Put business logic in components (use custom hooks or services)
- Use inline styles (use Tailwind classes or CSS modules)
- Forget to add `key` prop when rendering lists
- Use `<div>` for interactive elements (use `<button>`)

### Data Management: NO Mock Data in Code

**✅ ALWAYS:**
- Load data from database or API endpoints
- Use database seed files for test/demo data (`~/prisma/seed.ts`)
- Use environment variables for configuration (`~/.env`)
- Define data schemas with Zod for validation

**❌ NEVER:**
- Hardcode mock data arrays in source code
- Hardcode API URLs or database connections
- Commit secrets or credentials to Git

**Example (Correct):**
```typescript
// ✅ Good: Load from database
const users = await prisma.user.findMany()

// ✅ Good: Environment variables
const API_URL = process.env.VITE_API_URL || 'http://localhost:5176'

// ✅ Good: Zod validation
import { z } from 'zod'
const userSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
})
```

**Example (Incorrect):**
```typescript
// ❌ Bad: Mock data in code
const users = [
  { id: '1', email: 'test@example.com', name: 'Test User' },
  { id: '2', email: 'admin@example.com', name: 'Admin User' }
]

// ❌ Bad: Hardcoded URLs
const API_URL = 'http://localhost:3001'
```

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
- Commit `.env` files to Git (use `.env.example` instead)
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

```
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
```

### Debugging

**Frontend:**
- Use React DevTools browser extension
- Use `console.log()` for quick debugging (remove before commit)
- Use browser DevTools debugger with breakpoints
- Check Network tab for API call issues

**Backend:**
- Use `console.log()` for quick debugging (remove before commit)
- Use Node debugger: `node --inspect server/index.ts`
- Check server logs for errors
- Use Prisma Studio to inspect database

### Hot Reload

- **Frontend:** Vite provides instant hot module replacement (HMR)
- **Backend:** Use `tsx watch` or `nodemon` for auto-restart on changes

---

## 🧪 Testing Instructions

### Testing Requirements

**Minimum Standards:**
- 80%+ code coverage (lines, statements, branches, functions)
- All tests must pass before merging to main
- Zero critical bugs or regressions
- Performance benchmarks met

### Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test src/components/Button.test.tsx

# Run tests in watch mode
npm run test:watch

# Run with coverage report
npm run test:coverage

# Open coverage report in browser
# Unix/Linux/macOS:
open coverage/index.html

# Windows:
start coverage/index.html
```

### Writing Tests

**Unit Tests:**
```typescript
// Example: Testing a utility function
import { describe, it, expect } from 'vitest'
import { formatDate } from './utils'

describe('formatDate', () => {
  it('formats date correctly', () => {
    const date = new Date('2025-01-15')
    expect(formatDate(date)).toBe('January 15, 2025')
  })

  it('handles invalid dates', () => {
    expect(formatDate(null)).toBe('Invalid date')
  })
})
```

**Component Tests:**
```typescript
// Example: Testing a React component
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders button text', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    fireEvent.click(screen.getByText('Click'))
    expect(handleClick).toHaveBeenCalledOnce()
  })
})
```

### Test Coverage Goals

- **Functions:** 80%+ covered
- **Statements:** 80%+ covered
- **Branches:** 80%+ covered
- **Lines:** 80%+ covered

---

## 📝 Pull Request Instructions

### Commit Message Convention

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
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

# Examples:
git commit -m "feat(auth): add JWT authentication"
git commit -m "fix(api): handle null user in getProfile"
git commit -m "docs: update setup instructions in README"
```

### Pull Request Checklist

Before creating a pull request, ensure:

- ✅ All tests pass (`npm test`)
- ✅ Code coverage is 80%+ (`npm run test:coverage`)
- ✅ No linting errors (`npm run lint`)
- ✅ No TypeScript errors (`npm run type-check`)
- ✅ Code is formatted (`npm run format`)
- ✅ Environment variables documented in `.env.example`
- ✅ Database migrations included (if schema changed)
- ✅ README updated (if setup process changed)
- ✅ CHANGELOG updated with changes

### Code Review Guidelines

**Reviewers should check:**
- Code follows style guidelines
- TypeScript types are correct
- No security vulnerabilities
- Tests are comprehensive
- Documentation is updated
- Performance is acceptable

### 🤖 AI Code Review Checklist

When an AI agent is reviewing code (e.g., during pull request review), use this comprehensive checklist tailored to this project's specific requirements:

#### **1. Code Style & Standards**
- [ ] Does the code adhere to all TypeScript standards in this document?
  - [ ] No `any` types without justification comments
  - [ ] All functions have proper type annotations (parameters + return types)
  - [ ] Interfaces used for object shapes (not `type` aliases)
  - [ ] `const` and `let` used (never `var`)
- [ ] Does the code follow React/Frontend patterns?
  - [ ] Functional components with hooks only (no class components)
  - [ ] Props are destructured for clarity
  - [ ] Semantic HTML used (`<button>`, `<nav>`, `<main>`, `<label>`)
  - [ ] No business logic in components (moved to hooks/services)
  - [ ] `key` prop added when rendering lists

#### **2. Security & Validation**
- [ ] Is all user input validated with Zod schemas?
  - [ ] API endpoints have Zod validation for request bodies
  - [ ] Form inputs are validated before submission
  - [ ] Validation errors are properly handled and displayed
- [ ] Are secrets managed correctly?
  - [ ] No hardcoded secrets, API keys, or passwords in code
  - [ ] Environment variables used for all configuration
  - [ ] `.env.example` updated if new variables added
- [ ] Is SQL injection prevented?
  - [ ] Prisma ORM used with parameterized queries
  - [ ] No string concatenation for database queries
- [ ] Is XSS prevented?
  - [ ] No use of `dangerouslySetInnerHTML` without DOMPurify
  - [ ] React's automatic escaping relied upon

#### **3. Data Management**
- [ ] Is mock data properly handled?
  - [ ] No hardcoded mock data arrays in source code
  - [ ] Test/demo data only in `~/prisma/seed.ts`
  - [ ] Data loaded from database or API endpoints
- [ ] Are database changes handled correctly?
  - [ ] Prisma schema updated (`~/prisma/schema.prisma`)
  - [ ] Migration created and applied
  - [ ] TypeScript types auto-generated by Prisma
  - [ ] Seed file updated if needed

#### **4. Testing Requirements**
- [ ] Are tests added for new logic?
  - [ ] Unit tests for utility functions
  - [ ] Component tests for React components
  - [ ] Integration tests for API endpoints
  - [ ] Tests pass: `npm test`
- [ ] Is test coverage maintained?
  - [ ] Coverage ≥ 80% for functions, statements, branches, lines
  - [ ] Run: `npm run test:coverage` to verify
- [ ] Are tests well-written?
  - [ ] Clear test descriptions
  - [ ] Edge cases covered
  - [ ] Assertions are specific and meaningful

#### **5. TypeScript Compliance**
- [ ] No TypeScript errors?
  - [ ] Run: `npm run type-check`
  - [ ] All errors resolved or properly commented
- [ ] Proper type safety?
  - [ ] Generic types used where appropriate
  - [ ] Type guards for `unknown` values
  - [ ] No unsafe type assertions without justification

#### **6. Documentation Updates**
- [ ] Is `CHANGELOG.md` updated?
  - [ ] Entry added for user-facing changes
  - [ ] Breaking changes clearly marked
  - [ ] Version number incremented if needed
- [ ] Is `README.md` updated?
  - [ ] Setup instructions current
  - [ ] Environment variables documented
  - [ ] New features described
- [ ] Are code comments adequate?
  - [ ] Complex logic explained
  - [ ] Non-obvious decisions justified
  - [ ] TODOs have owner and context

#### **7. Code Quality**
- [ ] No linting errors?
  - [ ] Run: `npm run lint`
  - [ ] Auto-fix attempted: `npm run lint:fix`
- [ ] Code is formatted?
  - [ ] Run: `npm run format`
  - [ ] Prettier formatting applied
- [ ] Code is maintainable?
  - [ ] Functions are small and focused (single responsibility)
  - [ ] Variable/function names are descriptive
  - [ ] Duplication is minimized (DRY principle)
  - [ ] Magic numbers are explained or constants

#### **8. Performance Considerations**
- [ ] No obvious performance issues?
  - [ ] No unnecessary re-renders in React
  - [ ] Database queries are efficient (no N+1 queries)
  - [ ] Images are optimized (WebP, lazy loading)
  - [ ] Bundle size is acceptable (< 250KB gzipped)
- [ ] Async operations handled correctly?
  - [ ] Promises properly awaited or chained
  - [ ] Error handling for async operations
  - [ ] Loading states shown to users

#### **9. Accessibility (if UI changes)**
- [ ] Semantic HTML used throughout?
- [ ] Form labels properly associated (`htmlFor` + `id`)?
- [ ] Icon-only buttons have `aria-label`?
- [ ] Color contrast meets 4.5:1 ratio?
- [ ] Keyboard navigation works (Tab, Enter, Escape)?
- [ ] Run accessibility checks: `npm run lint:a11y`

#### **10. API Changes (if applicable)**
- [ ] Is the API Reference section updated?
  - [ ] New endpoints added to table in AGENTS.md
  - [ ] Request/response examples provided
  - [ ] Authentication requirements documented
- [ ] Are error responses standardized?
  - [ ] Follow project error format
  - [ ] Appropriate HTTP status codes
  - [ ] Clear error messages

#### **11. Pull Request Quality**
- [ ] PR description is clear?
  - [ ] Problem/feature described
  - [ ] Solution approach explained
  - [ ] Testing performed documented
- [ ] Commit messages follow convention?
  - [ ] Format: `<type>(<scope>): <description>`
  - [ ] Types: feat, fix, docs, style, refactor, test, chore, perf
- [ ] PR size is reasonable?
  - [ ] Changes are focused on single feature/fix
  - [ ] Large refactors broken into smaller PRs

### AI Code Review Best Practices

**When providing feedback as an AI agent:**

1. **Be Specific:** Point to exact line numbers and files
   - ❌ Bad: "There are TypeScript errors"
   - ✅ Good: "Line 45 in `src/utils/formatDate.ts` has an `any` type without justification"

2. **Provide Context:** Explain WHY something is an issue
   - ❌ Bad: "Don't use `any` here"
   - ✅ Good: "Using `any` defeats TypeScript's type safety. Use `Date | null` to properly type this parameter"

3. **Suggest Solutions:** Offer concrete fix recommendations
   - ❌ Bad: "This needs validation"
   - ✅ Good: "Add Zod validation: `const schema = z.object({ email: z.string().email() })`"

4. **Prioritize Issues:** Label severity levels
   - 🔴 **Critical:** Security issues, data loss risks
   - 🟡 **Important:** Missing tests, type safety issues
   - 🟢 **Minor:** Code style, documentation improvements

5. **Check Before Commenting:** Run automated checks first
   ```bash
   npm run lint          # Check for linting errors
   npm run type-check    # Check for TypeScript errors
   npm test              # Check if tests pass
   npm run test:coverage # Check coverage percentage
   ```

6. **Acknowledge Good Practices:** Positive reinforcement helps
   - "✅ Excellent use of Zod validation for this endpoint"
   - "✅ Great test coverage on this component (95%)"

---

## 🔒 Security Considerations

### Critical Security Rules

**1. No Secrets in Code (MANDATORY)**

✅ **DO:**
```typescript
// Good: Use environment variables
const JWT_SECRET = process.env.JWT_SECRET
const DATABASE_URL = process.env.DATABASE_URL
```

❌ **DON'T:**
```typescript
// Bad: Hardcoded secrets
const JWT_SECRET = 'my-secret-key-12345'
const DATABASE_URL = 'postgresql://user:password@localhost/db'
```

**2. Input Validation (MANDATORY)**

✅ **DO:**
```typescript
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

// Validate before using
const result = loginSchema.safeParse(req.body)
if (!result.success) {
  return res.status(400).send({ error: result.error })
}
```

❌ **DON'T:**
```typescript
// Bad: No validation
const { email, password } = req.body
// Use directly without validation
```

**3. SQL Injection Prevention**

✅ **DO:**
```typescript
// Good: Use Prisma ORM with parameterized queries
const user = await prisma.user.findUnique({
  where: { email: userEmail }
})
```

❌ **DON'T:**
```typescript
// Bad: String concatenation (SQL injection risk!)
const query = `SELECT * FROM users WHERE email = '${userEmail}'`
```

**4. XSS Prevention**

- React automatically escapes output (prevents XSS by default)
- NEVER use `dangerouslySetInnerHTML` without sanitization
- Use DOMPurify library if you must render HTML

**5. Authentication & Authorization**

```typescript
// JWT authentication example
import jwt from 'jsonwebtoken'

// Generate token
const token = jwt.sign(
  { userId: user.id, role: user.role },
  process.env.JWT_SECRET!,
  { expiresIn: '7d' }
)

// Verify token middleware
async function authenticateJWT(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).send({ error: 'Unauthorized' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!)
    req.user = decoded
    next()
  } catch {
    res.status(403).send({ error: 'Invalid token' })
  }
}
```

**6. CORS & Security Headers**

```typescript
// Fastify example
import helmet from '@fastify/helmet'
import cors from '@fastify/cors'

await server.register(helmet)
await server.register(cors, {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:5175'
})
```

---

## 🚀 Deployment Steps

### Environment Configuration

Create environment-specific `.env` files:

**Development (`.env.development`):**
```bash
NODE_ENV=development
PORT=5176
DATABASE_URL=postgresql://user:pass@localhost:5432/myapp_dev
JWT_SECRET=dev-secret-change-in-production
VITE_API_URL=http://localhost:5176
```

**Production (`.env.production`):**
```bash
NODE_ENV=production
PORT=8080
DATABASE_URL=postgresql://user:pass@prod-host:5432/myapp_prod
JWT_SECRET=STRONG-RANDOM-SECRET-HERE
VITE_API_URL=https://api.yourapp.com
```

### Deployment Process

**1. Pre-deployment Checks:**
```bash
# Run all tests
npm test

# Check code quality
npm run lint
npm run type-check

# Build for production
npm run build

# Verify build works
npm run preview
```

**2. Database Migration:**
```bash
# Run migrations on production database
npm run db:migrate
```

**3. Deploy to Production:**
```bash
# Build application
npm run build

# Start production server
npm start

# Or use PM2 for process management
pm2 start npm --name "your-app" -- start
pm2 save
```

**4. Verify Deployment:**
- Check application health endpoint: `GET /api/health`
- Verify all critical workflows
- Check logs for errors
- Monitor performance metrics

### Rollback Procedure

```bash
# Stop current version
pm2 stop your-app

# Revert to previous version (from Git)
git checkout previous-version-tag

# Rebuild
npm run build

# Restart
pm2 restart your-app
```

---

## 🤖 AI Agent Specific Instructions

### What to ALWAYS Do

1. **Read AGENTS.md first** - Always read this file before making changes
2. **Validate inputs** - Use Zod schemas for all user inputs
3. **Use environment variables** - Never hardcode secrets or configuration
4. **Write tests** - Add tests for new features and bug fixes
5. **Follow TypeScript strict mode** - No `any` types without justification
6. **Use semantic HTML** - Proper `<button>`, `<nav>`, `<main>`, `<label>` elements
7. **Add error handling** - Try-catch blocks, error boundaries, clear error messages
8. **Update documentation** - Keep README, CHANGELOG, and comments up to date

### What to NEVER Do

1. **Never commit secrets** - No API keys, passwords, or tokens in code
2. **Never use mock data in code** - Use database seed files instead
3. **Never skip validation** - Always validate user inputs
4. **Never ignore TypeScript errors** - Fix them or add proper comments
5. **Never use `any` type casually** - Use proper types or `unknown` with type guards
6. **Never skip tests** - Maintain 80%+ coverage requirement
7. **Never deploy without testing** - Run full test suite before deployment

### Auto-Fix Workflows

When you encounter issues, try these auto-fix commands:

```bash
# Fix linting issues automatically
npm run lint:fix

# Format all code
npm run format

# Fix dependency issues
# Unix/Linux/macOS:
rm -rf node_modules package-lock.json

# Windows (PowerShell):
Remove-Item -Recurse -Force node_modules, package-lock.json

# Windows (CMD):
rmdir /s /q node_modules
del package-lock.json

npm install

# Reset database (development only!)
npm run db:reset
npm run db:seed

# Clear build cache
# Unix/Linux/macOS:
rm -rf dist .vite node_modules/.vite

# Windows (PowerShell):
Remove-Item -Recurse -Force dist, .vite, node_modules\.vite

# Windows (CMD):
rmdir /s /q dist .vite node_modules\.vite

npm run build
```

---

## 🎯 Common Development Tasks

### Adding a New API Endpoint

1. Create route handler in `~/server/routes/`
2. Add Zod validation schema
3. Add TypeScript types
4. Write tests for endpoint
5. Update API documentation

**Example:**
```typescript
// ~/server/routes/users.ts
import { z } from 'zod'

const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  password: z.string().min(8),
})

server.post('/api/users', async (req, res) => {
  const result = createUserSchema.safeParse(req.body)
  if (!result.success) {
    return res.status(400).send({ error: result.error })
  }

  const user = await prisma.user.create({
    data: result.data
  })

  res.send({ user })
})
```

### Adding a New React Component

1. Create component file in `~/src/components/`
2. Add TypeScript props interface
3. Use proper semantic HTML
4. Add tests
5. Export from index file

**Example:**
```typescript
// ~/src/components/UserCard.tsx
interface UserCardProps {
  name: string
  email: string
  role: 'admin' | 'user'
}

export function UserCard({ name, email, role }: UserCardProps): JSX.Element {
  return (
    <div className="rounded-lg border p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{email}</p>
      <span className="text-xs text-blue-600">{role}</span>
    </div>
  )
}
```

### Database Schema Changes

1. Update `~/prisma/schema.prisma`
2. Create migration: `npm run db:migrate:create`
3. Review generated migration SQL
4. Apply migration: `npm run db:migrate`
5. Update TypeScript types (Prisma auto-generates)
6. Update seed file if needed

---

## 📝 API Reference

### Overview

This section provides a concise reference for all API endpoints in the project. For AI agents, this allows quick access to endpoint information without parsing separate documentation files.

**Base URL:** `http://localhost:5176` (development) | `https://api.yourapp.com` (production)

**Authentication:** Most endpoints require JWT authentication via `Authorization: Bearer <token>` header.

### Endpoints Table

| Endpoint | Method | Auth Required | Description | Request Body | Response Body |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/health` | `GET` | No | Health check endpoint | `(none)` | `{ status, timestamp, uptime }` |
| `/api/hello` | `GET` | No | Hello world test endpoint | `(none)` | `{ message, framework, compliance }` |
| `/api/greet/:name` | `GET` | No | Personalized greeting | `(none)` | `{ greeting, timestamp }` |

### Detailed Endpoint Specifications

#### GET /health

Health check endpoint for monitoring and load balancers.

**Request:**
```http
GET /health
```

**Response (200 OK):**
```json
{
  "status": "ok",
  "timestamp": "2025-10-09T00:00:00.000Z",
  "uptime": 123.456
}
```

**Use Case:** Service health monitoring, load balancer checks, uptime verification.

---

#### GET /api/hello

Test endpoint to verify API is running and responding correctly.

**Request:**
```http
GET /api/hello
```

**Response (200 OK):**
```json
{
  "message": "Hello from AGENTS.md Demo API!",
  "framework": "Fastify + TypeScript",
  "compliance": ["AGENTS.md", "CLAUDE.md", "WCAG 2.2 AA"]
}
```

**Use Case:** API connectivity testing, framework verification.

---

#### GET /api/greet/:name

Returns a personalized greeting for the provided name.

**Request:**
```http
GET /api/greet/Alice
```

**Path Parameters:**
- `name` (string, required): Name to greet

**Response (200 OK):**
```json
{
  "greeting": "Hello, Alice!",
  "timestamp": "2025-10-09T00:00:00.000Z"
}
```

**Use Case:** Example of path parameter handling, timestamp generation.

---

### Adding New Endpoints

When adding new API endpoints, follow these steps and update this section:

1. **Define Route Handler:**
```typescript
// ~/server/routes/users.ts
import { z } from 'zod'

const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  password: z.string().min(8),
})

server.post('/api/users', async (req, res) => {
  // Validate request body
  const result = createUserSchema.safeParse(req.body)
  if (!result.success) {
    return res.status(400).send({ error: result.error })
  }

  // Create user
  const user = await prisma.user.create({
    data: result.data
  })

  res.send({ user })
})
```

2. **Update API Reference Table Above:** Add a new row with endpoint details

3. **Add Detailed Specification:** Include request/response examples like the ones above

4. **Write Tests:** Create integration tests for the new endpoint

5. **Update Frontend:** Add corresponding API client methods in `~/src/services/`

### Error Responses

All API endpoints follow a standardized error response format:

**Validation Error (400 Bad Request):**
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request body",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  }
}
```

**Authentication Error (401 Unauthorized):**
```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Authentication required"
  }
}
```

**Forbidden Error (403 Forbidden):**
```json
{
  "error": {
    "code": "FORBIDDEN",
    "message": "Insufficient permissions"
  }
}
```

**Not Found Error (404 Not Found):**
```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Resource not found"
  }
}
```

**Internal Server Error (500):**
```json
{
  "error": {
    "code": "INTERNAL_ERROR",
    "message": "An unexpected error occurred"
  }
}
```

### Rate Limiting

**Default Limits:**
- 100 requests per minute per IP address
- Returns `429 Too Many Requests` when exceeded

**Headers:**
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1638360000
```

### Authentication Flow

**1. Login/Register:**
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user_123",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "user"
  }
}
```

**2. Use Token for Protected Endpoints:**
```http
GET /api/users/me
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### CORS Configuration

**Allowed Origins (Development):**
- `http://localhost:5175` (frontend dev server)
- All origins via `*` in development mode

**Allowed Origins (Production):**
- Specific domains only (configured via environment variable)

**Allowed Methods:**
- GET, POST, PUT, PATCH, DELETE, OPTIONS

**Allowed Headers:**
- Content-Type, Authorization, X-Requested-With

---

## 🎨 Optional Enhancements

### Accessibility Improvements (Recommended)

While basic accessibility is built-in (semantic HTML, keyboard navigation), consider these enhancements:

**Install Accessibility Tools:**
```bash
npm install --save-dev eslint-plugin-jsx-a11y jest-axe
```

**ESLint Configuration (`.eslintrc.cjs`):**
```javascript
module.exports = {
  extends: ['plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],
  rules: {
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/alt-text': 'warn',
  }
}
```

**Accessibility Checklist:**
- ✅ Form labels properly associated (`htmlFor` + `id`)
- ✅ Icon-only buttons have `aria-label`
- ✅ Color contrast meets 4.5:1 ratio for text
- ✅ Keyboard navigation works (Tab, Enter, Escape)
- ✅ Skip links for main content
- ✅ `prefers-reduced-motion` support for animations

**Testing Accessibility:**
```typescript
import { axe, toHaveNoViolations } from 'jest-axe'
expect.extend(toHaveNoViolations)

it('should not have accessibility violations', async () => {
  const { container } = render(<MyComponent />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

### Performance Optimizations

- Code splitting with React.lazy()
- Image optimization (WebP, lazy loading)
- Caching strategies (Redis, HTTP caching)
- Database indexing
- Bundle size monitoring

### Advanced Features

- Real-time updates (WebSockets, Server-Sent Events)
- File upload handling (Multer, cloud storage)
- Email notifications (Nodemailer, SendGrid)
- Background jobs (Bull, Redis)
- Logging & monitoring (Winston, Datadog)

---

## 📊 Performance & Quality Targets

### Performance Metrics

- **First Contentful Paint (FCP):** < 1.8s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.9s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Bundle Size:** < 250KB gzipped

### Quality Metrics

- **Test Coverage:** ≥ 80%
- **TypeScript Strict:** Enabled
- **Linting Errors:** 0
- **Build Time:** < 30s
- **API Response Time:** < 200ms (p95)

---

## 🐛 Debugging & Troubleshooting

### Common Issues

**Port Already in Use:**
```bash
# Find process using port 5175
# Unix/Linux/macOS:
lsof -i :5175

# Windows (PowerShell):
Get-NetTCPConnection -LocalPort 5175

# Windows (CMD):
netstat -ano | findstr :5175

# Kill process
# Unix/Linux/macOS:
kill -9 <PID>

# Windows (PowerShell):
Stop-Process -Id <PID> -Force

# Windows (CMD):
taskkill /PID <PID> /F

# Or use different port (all platforms):
# Unix/Linux/macOS:
PORT=5180 npm run dev

# Windows (PowerShell):
$env:PORT=5180; npm run dev

# Windows (CMD):
set PORT=5180 && npm run dev
```

**Database Connection Error:**
```bash
# Check database is running
docker ps

# Verify DATABASE_URL in .env
echo $DATABASE_URL

# Reset database (development only!)
npm run db:reset
```

**Module Not Found:**
```bash
# Reinstall dependencies
# Unix/Linux/macOS:
rm -rf node_modules package-lock.json

# Windows (PowerShell):
Remove-Item -Recurse -Force node_modules, package-lock.json

# Windows (CMD):
rmdir /s /q node_modules
del package-lock.json

npm install

# Clear cache (all platforms):
npm cache clean --force
```

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
- **~/docs/API.md** - API endpoints documentation
- **~/docs/ARCHITECTURE.md** - System architecture

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
✅ **Deployment Steps** - Environment config, deployment process, rollback
✅ **AI Agent Instructions** - What to always/never do, auto-fix workflows

**Supported AI Tools:** GitHub Copilot, Cursor, Cline, Windsurf, Zed, Continue, Sourcegraph Cody, Code Puppy, Azure AI Code Assist, Google Gemini Code Assist, and 10+ more.

---

**Last Updated:** 2025-10-07
**Version:** 1.0.0
**Maintained By:** Development Team + AI Agents
**Framework:** AGENTS.md Open Standard
