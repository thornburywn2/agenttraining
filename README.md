# AGENTS.md Framework Demo

A modern full-stack TypeScript application showcasing the **AGENTS.md** framework - a comprehensive system for AI agent collaboration with built-in enterprise development standards.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Fastify](https://img.shields.io/badge/Fastify-4-green.svg)](https://www.fastify.io/)
[![WCAG 2.2 AA](https://img.shields.io/badge/WCAG-2.2%20AA-green.svg)](https://www.w3.org/TR/WCAG22/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## ✨ Features

- 🎨 **Beautiful UI** - Modern, responsive design with Tailwind CSS
- ♿ **Accessible** - WCAG 2.2 Level AA compliant
- 🔒 **Secure** - Input validation, authentication, security best practices
- ⚡ **Fast** - Optimized build with Vite, fast API with Fastify
- 🧪 **Tested** - Comprehensive test coverage with Vitest
- 📚 **Well-Documented** - AGENTS.md for AI agents, README for humans
- 🤖 **AI-Friendly** - Structured for optimal AI coding agent collaboration

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL 15+
- Git

### Installation

```bash
# Clone the repository
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

# Start development server (frontend + backend)
npm run dev:all
```

The application will be available at:
- **Frontend:** http://localhost:5175
- **Backend:** http://localhost:5176

> **Note:** Ports 5175 and 5176 are registered in `/root/PORTS.md` to avoid conflicts with other projects.

---

## 📖 Documentation

- **[AGENTS.md](./AGENTS.md)** - AI agent instructions (code style, testing, security)
- **[PORT_MANAGEMENT.md](./PORT_MANAGEMENT.md)** - Port allocation and management
- **[TODO.md](./TODO.md)** - Project tasks and roadmap
- **[CHANGELOG.md](./CHANGELOG.md)** - Version history
- **[docs/API.md](./docs/API.md)** - API documentation
- **[docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)** - System architecture

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Beautiful, accessible components
- **Zod** - Schema validation
- **React Router** - Client-side routing

### Backend
- **Fastify** - Fast web framework
- **TypeScript** - Type safety
- **Prisma** - ORM and database toolkit
- **PostgreSQL** - Database
- **JWT** - Authentication
- **Zod** - Input validation

### Testing
- **Vitest** - Unit testing
- **React Testing Library** - Component testing
- **jest-axe** - Accessibility testing
- **Supertest** - API testing

### Development
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **eslint-plugin-jsx-a11y** - Accessibility linting
- **Husky** - Git hooks

---

## 📋 Available Scripts

### Development
- `npm run dev` - Start frontend dev server
- `npm run dev:backend` - Start backend dev server
- `npm run dev:all` - Start both frontend and backend

### Build
- `npm run build` - Build for production
- `npm run build:frontend` - Build frontend only
- `npm run build:backend` - Build backend only
- `npm run preview` - Preview production build

### Testing
- `npm test` - Run all tests
- `npm run test:coverage` - Run tests with coverage
- `npm run test:watch` - Run tests in watch mode
- `npm run test:ui` - Open Vitest UI

### Code Quality
- `npm run lint` - Lint code
- `npm run lint:fix` - Fix linting issues
- `npm run lint:a11y` - Check accessibility
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types

### Database
- `npm run db:migrate` - Run database migrations
- `npm run db:migrate:create` - Create new migration
- `npm run db:seed` - Seed database with demo data
- `npm run db:reset` - Reset database
- `npm run db:studio` - Open Prisma Studio

---

## 🎨 Design Principles

This project follows the **AGENTS.md** framework's core philosophy:

> **BEAUTY IS MANDATORY**
>
> Every application, every interface, every piece of content must be visually stunning and engaging. Ugly applications are unacceptable, regardless of functionality.

### Key Principles

1. ✨ **Visual Excellence** - Modern, polished UI that delights users
2. ♿ **Accessibility First** - WCAG 2.2 AA compliance is non-negotiable
3. 🔒 **Security by Default** - Input validation, no secrets in code
4. 📚 **Documentation** - Clear, comprehensive, up-to-date
5. 🧪 **Test Coverage** - 80%+ coverage requirement
6. 🤖 **AI-Friendly** - Standardized instructions for 20+ AI tools

> **Note:** These development standards were derived from CLAUDE.md methodology and are now built directly into the AGENTS.md framework.

---

## ♿ Accessibility

This project is **WCAG 2.2 Level AA compliant**:

- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Color contrast ratios (4.5:1 minimum)
- ✅ Focus indicators (2px thick, 3:1 contrast)
- ✅ Touch targets (minimum 24×24px)
- ✅ Form labels properly associated
- ✅ ARIA labels for icon buttons
- ✅ `prefers-reduced-motion` support

**Testing:**
```bash
# Lint for accessibility issues
npm run lint:a11y

# Run accessibility tests
npm test -- --grep="accessibility"
```

---

## 🔒 Security

Security best practices enforced:

- ✅ No secrets in code (environment variables only)
- ✅ Input validation with Zod schemas
- ✅ SQL injection prevention (Prisma ORM)
- ✅ XSS prevention (React escaping)
- ✅ CORS configuration
- ✅ Rate limiting on API endpoints
- ✅ JWT authentication with expiration
- ✅ Password hashing with bcrypt

```bash
# Run security audit
npm audit

# Fix vulnerabilities
npm audit fix
```

---

## 🤖 AI Agent Integration

This project uses the **AGENTS.md** framework for optimal AI coding agent collaboration:

- **AGENTS.md file** - Comprehensive AI agent instructions
- **Standardized commands** - Predictable build/test/deploy commands
- **Clear code style** - ESLint + Prettier + TypeScript strict mode
- **Automated testing** - Agents can run tests and attempt fixes
- **Security guidelines** - Clear rules for secret management

**Supported AI tools:** GitHub Copilot, Cursor, VS Code, Claude Code, Gemini CLI, and 15+ others.

---

## 📊 Project Structure

```
agents-md-demo/
├── AGENTS.md           # AI agent instructions
├── README.md           # This file (human documentation)
├── TODO.md             # Task tracking
├── CHANGELOG.md        # Version history
├── src/                # Frontend source
│   ├── components/     # React components
│   ├── services/       # API clients
│   ├── utils/          # Helper functions
│   └── types/          # TypeScript types
├── server/             # Backend source
│   ├── routes/         # API routes
│   ├── middleware/     # Middleware
│   └── models/         # Database models
├── tests/              # Test suites
├── prisma/             # Database schema & migrations
├── docs/               # Additional documentation
└── .lifecycle/         # Lifecycle framework
```

---

## 🧪 Testing

Comprehensive test coverage with multiple testing strategies:

- **Unit Tests** - Business logic, utilities, services
- **Component Tests** - React components with React Testing Library
- **Integration Tests** - API endpoints and database
- **Accessibility Tests** - jest-axe for WCAG compliance
- **E2E Tests** - Critical user workflows (optional)

**Requirements:**
- ✅ 80%+ code coverage
- ✅ Zero accessibility violations
- ✅ All tests must pass before merge

---

## 🚀 Deployment

### Build for Production

```bash
# Build both frontend and backend
npm run build

# Preview production build locally
npm run preview
```

### Environment Variables

Required environment variables (see `.env.example`):

```bash
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/agents_md_demo

# JWT
JWT_SECRET=your-secret-key-min-32-characters

# Server
PORT=3001
NODE_ENV=production

# Frontend
VITE_API_URL=http://localhost:3001
```

---

## 📈 Performance Targets

- ✅ First Contentful Paint (FCP): < 1.8s
- ✅ Largest Contentful Paint (LCP): < 2.5s
- ✅ Time to Interactive (TTI): < 3.9s
- ✅ Cumulative Layout Shift (CLS): < 0.1
- ✅ Bundle size: < 250KB gzipped
- ✅ Lighthouse score: ≥90 (all categories)

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. Read [AGENTS.md](./AGENTS.md) for code standards
2. Create a feature branch
3. Write tests for new features
4. Ensure accessibility compliance
5. Run all quality checks before committing
6. Submit a pull request

**Quality Gates:**
- ✅ All tests pass
- ✅ 80%+ code coverage
- ✅ Zero ESLint errors
- ✅ Zero accessibility violations
- ✅ TypeScript strict mode
- ✅ Lighthouse score ≥90

---

## 📚 Resources

- [AGENTS.md Framework](https://agents.md/) - Official AGENTS.md documentation
- [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/) - Accessibility standards
- [React Documentation](https://react.dev) - React library
- [Fastify Documentation](https://fastify.dev) - Fastify framework
- [Prisma Documentation](https://www.prisma.io/docs) - Prisma ORM
- [shadcn/ui](https://ui.shadcn.com/) - Component library

---

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details

---

## 🙏 Acknowledgments

- **AGENTS.md** - Comprehensive AI agent framework
- **shadcn/ui** - Beautiful accessible components
- **Open Source Community** - All the amazing tools and libraries
- **CLAUDE.md** - Source of development standards methodology

---

**Built with ❤️ following the AGENTS.md framework**

**Questions?** Check [AGENTS.md](./AGENTS.md) for detailed instructions or open an issue.
