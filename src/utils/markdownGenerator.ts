/**
 * Markdown Generator for AGENTS.md Training Guide
 * Extracts all content from the webapp and converts to well-structured markdown
 */

// Debug logging
const DEBUG = true;

function debugLog(section: string, message: string, data?: unknown): void {
  if (DEBUG) {
    console.log(`[Markdown Gen] ${section}: ${message}`, data || '');
  }
}

/**
 * Generates comprehensive markdown content for the training guide
 * Includes all 13 sections with proper formatting
 */
export function generateMarkdown(): string {
  debugLog('Init', 'Starting markdown generation');

  let markdown = '';

  // Title and metadata
  markdown += '# AGENTS.md Framework Training Guide\n\n';
  markdown += `*Generated on ${new Date().toLocaleDateString()}*\n\n`;
  markdown += '---\n\n';

  debugLog('Header', 'Added title and metadata', { length: markdown.length });

  // Section 1: Foundational Concepts
  markdown += generateFoundationalSection();
  debugLog('Foundational', 'Added foundational concepts', { length: markdown.length });

  // Section 2: Advanced Concepts (if needed)
  markdown += generateAdvancedSection();
  debugLog('Advanced', 'Added advanced concepts', { length: markdown.length });

  // Section 3: What is AGENTS.md?
  markdown += generateOverviewSection();
  debugLog('Overview', 'Added overview section', { length: markdown.length });

  // Section 4: File Structure
  markdown += generateFileStructureSection();
  debugLog('Structure', 'Added file structure', { length: markdown.length });

  // Section 5: Tech Stack Decision Matrix
  markdown += generateTechStackSection();
  debugLog('TechStack', 'Added tech stack matrix', { length: markdown.length });

  // Section 6: AI Examples & Best Practices
  markdown += generateExamplesSection();
  debugLog('Examples', 'Added examples section', { length: markdown.length });

  // Section 7: AI Patterns
  markdown += generatePatternsSection();
  debugLog('Patterns', 'Added patterns section', { length: markdown.length });

  // Section 8: MCP Servers
  markdown += generateMCPSection();
  debugLog('MCP', 'Added MCP section', { length: markdown.length });

  // Section 9: AI Solutions & Integrations
  markdown += generateAISolutionsSection();
  debugLog('Solutions', 'Added AI solutions', { length: markdown.length });

  // Section 10: References & Resources
  markdown += generateReferencesSection();
  debugLog('References', 'Added references', { length: markdown.length });

  // Section 11: WCAG 2.2 Accessibility (if in content)
  markdown += generateAccessibilitySection();
  debugLog('Accessibility', 'Added accessibility standards', { length: markdown.length });

  // Section 12: Code Puppy
  markdown += generateCodePuppySection();
  debugLog('CodePuppy', 'Added Code Puppy section', { length: markdown.length });

  // Section 13: Project Documentation (My Files)
  markdown += generateMyAgentsSection();
  debugLog('MyAgents', 'Added project documentation', { length: markdown.length });

  debugLog('Complete', 'Markdown generation complete', {
    totalLength: markdown.length,
    estimatedPages: Math.ceil(markdown.length / 3000)
  });

  return markdown;
}

function generateFoundationalSection(): string {
  return `## 1. Foundational: Understanding LLMs & AI Agents

Start here to build a solid foundation in AI fundamentals. Learn about Large Language Models (LLMs) and AI Agents before diving into AGENTS.md workflows.

### The AI Landscape: LLMs, Clients, and Agents

The world of artificial intelligence is rapidly evolving, with **Large Language Models (LLMs)** at the core of many recent advancements. LLMs are a type of advanced AI system that can understand, process, and generate human-like text. They are built using deep learning techniques, specifically neural networks known as transformers, and are trained on vast amounts of text data from sources like books, articles, and websites.

### What are Large Language Models (LLMs)?

At their heart, LLMs are **statistical models** that learn to predict the next word in a sequence based on the words that came before it. This seemingly simple task allows them to develop a sophisticated understanding of grammar, context, and even some degree of reasoning.

#### Key Characteristics & Capabilities:

1. **Scale and Capacity**
   - LLMs are defined by their massive size, with billions or even trillions of parameters
   - This enables them to capture intricate patterns in language

2. **Training Data**
   - Trained on huge, diverse datasets to learn about various topics, writing styles, and contexts

3. **Versatile Capabilities**
   - Language translation and text summarization
   - Creative writing and code generation
   - Conversational agents and data analysis
   - Financial risk assessment

4. **Contextual Understanding**
   - Ability to understand and leverage context to produce coherent and relevant responses

> **Examples:** Well-known LLMs include the **GPT series** from OpenAI and **BERT** from Google. While the GPT series processes text in a unidirectional manner, BERT uses a bidirectional approach, analyzing context from both directions simultaneously.

### LLM Clients

An **LLM client** is simply an application or website that allows a user to interact with an LLM. These can be as straightforward as a web interface or a command-line tool, or they can be integrated into larger applications like IDEs (Integrated Development Environments) for coding assistance. They act as the user's gateway to the powerful capabilities of the underlying LLM.

### Universal Truths of Working with LLMs

Despite their impressive capabilities, LLMs are not a magic bullet. Working with them effectively requires an understanding of their inherent limitations and a set of practical best practices.

#### The Problem of Hallucinations

LLMs are trained to produce plausible-sounding text, but this doesn't guarantee accuracy. They can generate incorrect, nonsensical, or biased information, a phenomenon known as "hallucination." It's crucial to treat their output as a starting point, not as unassailable truth, and to verify critical information.

| Example | Hallucination Type | Why It Happens |
|---------|-------------------|----------------|
| Inventing non-existent API methods | Factual Inaccuracy | LLM combines patterns from similar APIs it has seen |
| Citing fake research papers | Fabricated Citations | LLM generates plausible-looking references based on patterns |
| Confidently stating wrong dates | Historical Errors | Training data may have conflicting information |
| Making up company policies | Contextual Fabrication | LLM fills gaps with plausible-sounding content |

#### Context is King

LLMs operate within a limited context window—the amount of text they can consider at once. For optimal results:

- **Provide clear, concise prompts** with relevant context
- **Break down complex tasks** into smaller, manageable steps
- **Use examples** to guide the model toward desired output
- **Iterate and refine** prompts based on results

#### Best Practices for Working with LLMs

1. **Start Simple, Then Iterate**
   - Begin with a straightforward prompt
   - Refine based on the initial response
   - Add specificity and examples as needed

2. **Verify Critical Information**
   - Always fact-check important details
   - Cross-reference with authoritative sources
   - Test generated code thoroughly

3. **Use Clear, Specific Language**
   - Avoid ambiguity in prompts
   - Specify format, tone, and requirements
   - Provide examples of desired output

4. **Understand Limitations**
   - LLMs don't have real-time information (unless connected to search)
   - They can't execute code or access external systems (unless integrated)
   - They may reflect biases from training data

### What are AI Agents?

An **AI agent** is a more autonomous application of LLM technology. Rather than simply responding to prompts, an AI agent can:

- **Plan and execute multi-step tasks**
- **Use tools and APIs** to interact with external systems
- **Retrieve information** from databases or search engines
- **Make decisions** based on goals and constraints
- **Learn from feedback** and improve over time

#### AI Agents vs. Simple LLM Clients

| Feature | LLM Client | AI Agent |
|---------|-----------|----------|
| **Interaction** | Single-turn Q&A | Multi-step task execution |
| **Autonomy** | Responds to prompts | Plans and executes independently |
| **Tool Use** | Limited or none | Can use APIs, databases, file systems |
| **Memory** | Context window only | Can maintain state across sessions |
| **Decision Making** | Generates text | Makes decisions and takes actions |

#### Examples of AI Agents

- **GitHub Copilot:** Code completion and generation agent
- **Cursor:** Full IDE integration with context awareness
- **Cline (formerly Claude Dev):** Autonomous coding agent
- **AutoGPT:** General-purpose autonomous agent
- **LangChain Agents:** Framework for building custom agents

### Key Takeaways

- **LLMs** are powerful but have limitations (hallucinations, context windows)
- **Context and clear prompts** are essential for good results
- **AI Agents** are autonomous applications that use LLMs to complete complex tasks
- **AGENTS.md** provides a standardized way for AI agents to understand your project

---

`;
}

function generateAdvancedSection(): string {
  return `## 2. Advanced Concepts

### Understanding Tokens

**Tokens** are the fundamental units that LLMs use to process text. A token can be a word, part of a word, or even a punctuation mark.

- **GPT models:** ~4 characters per token on average
- **Context limits:** Measured in tokens (e.g., GPT-4 has 8K, 32K, or 128K token contexts)
- **Cost implications:** API pricing is typically per token

**Why it matters for AGENTS.md:**
- Keep documentation concise to fit within context windows
- Longer files may be truncated by AI agents
- Structure information for easy scanning

### Retrieval-Augmented Generation (RAG)

**RAG** combines LLMs with external knowledge bases:

1. **User Query** → System searches knowledge base
2. **Relevant Documents** → Retrieved and added to context
3. **LLM Generation** → Uses retrieved info to generate response

**Benefits:**
- Access to up-to-date information
- Reduces hallucinations with factual grounding
- Can work with proprietary or domain-specific knowledge

**AGENTS.md as RAG:**
When AI agents read your AGENTS.md file, they're essentially performing RAG—retrieving your project-specific knowledge to inform their responses.

### Security Considerations

When working with AI agents and LLMs:

1. **Never expose secrets** in prompts or training data
2. **Review generated code** for security vulnerabilities
3. **Use environment variables** for sensitive configuration
4. **Implement proper access controls** for AI agent capabilities
5. **Audit AI-generated changes** before deployment

**AGENTS.md Security Section:**
Include security guidelines in your AGENTS.md to ensure AI agents follow your security practices.

---

`;
}

function generateOverviewSection(): string {
  return `## 3. What is AGENTS.md?

**AGENTS.md** is an open standard that provides AI coding assistants with a standardized way to understand your project. It's a single Markdown file placed at the root of your repository that tells AI agents everything they need to know to work effectively on your codebase.

### The Problem AGENTS.md Solves

**Without AGENTS.md:**
- AI agents don't know your project structure
- AI agents don't know which commands to run
- AI agents don't know your code style preferences
- AI agents make incorrect assumptions about tech stack
- AI agents can't follow your security practices
- Developers waste time explaining the same things repeatedly

**With AGENTS.md:**
- ✅ AI agents know exactly how to build, test, and deploy
- ✅ AI agents follow your code style and security rules
- ✅ AI agents understand your project conventions
- ✅ Consistent AI behavior across GitHub Copilot, Cursor, Cline, etc.
- ✅ Onboarding new team members becomes faster

> **Key Insight:** AGENTS.md is like a README.md file, but specifically designed for AI agents. While README.md explains the project to humans, AGENTS.md provides structured instructions that AI tools can parse and follow consistently.

### How It Works

1. **Create AGENTS.md** at your project root
2. **Document your project** (structure, commands, conventions)
3. **AI agents read it automatically** when working on your code
4. **Consistent behavior** across all AI tools

### Core Principles

1. **Human-Readable First**
   - Written in clear Markdown
   - Easy for developers to read and maintain

2. **AI-Optimized Structure**
   - Predictable sections
   - Scannable format
   - Context-efficient

3. **Single Source of Truth**
   - One file for all AI agents
   - No duplication across tools

4. **Open Standard**
   - Not tied to any specific AI tool
   - Community-driven evolution

### Who Uses AGENTS.md?

- **Solo developers** - Document your own projects
- **Teams** - Ensure consistent AI assistance across the team
- **Open source projects** - Help contributors get started faster
- **Enterprises** - Standardize AI usage across organizations

---

`;
}

function generateFileStructureSection(): string {
  return `## 4. File Structure

### Recommended AGENTS.md Structure

\`\`\`markdown
# Project Name

## Overview
Brief description of the project (1-2 sentences)

## Tech Stack
- Language: TypeScript
- Framework: React
- Backend: Node.js/Fastify
- Database: PostgreSQL with Prisma
- Testing: Vitest

## Project Structure
\`\`\`
project-root/
├── src/              # Frontend source
├── server/           # Backend API
├── prisma/           # Database schema
├── tests/            # Test files
└── docs/             # Documentation
\`\`\`

## Commands
- \\\`npm run dev\\\` - Start development server
- \\\`npm run build\\\` - Build for production
- \\\`npm test\\\` - Run tests
- \\\`npm run lint\\\` - Lint code

## Code Style
- Use TypeScript strict mode
- Follow ESLint configuration
- Use functional components (React)
- Prefer async/await over promises

## Security
- Never commit .env files
- Use environment variables for secrets
- Validate all user input
- Follow OWASP guidelines

## AI Assistant Guidelines
- Always run tests before committing
- Follow existing code patterns
- Update documentation when changing APIs
- Ask before making breaking changes
\`\`\`

### Optional Sections

Depending on your project, you might also include:

- **Database Schema** - Key tables and relationships
- **API Endpoints** - Available routes and their purposes
- **Environment Variables** - Required configuration
- **Deployment** - How to deploy the application
- **Troubleshooting** - Common issues and solutions

### File Placement

Place **AGENTS.md** at the root of your repository:

\`\`\`
my-project/
├── AGENTS.md          ← Here
├── README.md
├── package.json
├── src/
└── ...
\`\`\`

### Keeping It Updated

1. **Update with major changes** - New tech stack, architecture changes
2. **Review quarterly** - Ensure accuracy
3. **Link to detailed docs** - Don't duplicate everything
4. **Keep it concise** - AI agents have context limits

---

`;
}

function generateTechStackSection(): string {
  return `## 5. Tech Stack Decision Matrix

Choose the right stack for your project based on requirements, team expertise, and AI agent capabilities.

### Stack 1: Modern Full-Stack TypeScript

**Best for:** Startups, MVPs, small-to-medium teams

**Stack:**
- **Frontend:** React + TypeScript + Vite
- **Backend:** Node.js + Fastify
- **Database:** PostgreSQL + Prisma ORM
- **Testing:** Vitest + Testing Library
- **AI Tools:** GitHub Copilot, Cursor, Cline

**Pros:**
- ✅ Single language (TypeScript) across stack
- ✅ Fast development with Vite
- ✅ Type safety everywhere
- ✅ Excellent AI agent support
- ✅ Large ecosystem and community

**Cons:**
- ❌ Not ideal for CPU-intensive tasks
- ❌ Limited scalability compared to Go/Rust
- ❌ Requires Node.js expertise

**AGENTS.md Snippet:**
\`\`\`markdown
## Tech Stack
- Language: TypeScript (strict mode)
- Frontend: React 18 + Vite
- Backend: Fastify 4.x
- Database: PostgreSQL 15 + Prisma ORM
- Testing: Vitest + React Testing Library
\`\`\`

---

### Stack 2: Python + AI/ML Focus

**Best for:** Data science, ML projects, rapid prototyping

**Stack:**
- **Backend:** FastAPI + Python 3.11+
- **Frontend:** React + TypeScript (or Streamlit for internal tools)
- **Database:** PostgreSQL + SQLAlchemy
- **ML:** PyTorch / TensorFlow / scikit-learn
- **AI Tools:** GitHub Copilot, Cursor

**Pros:**
- ✅ Excellent for AI/ML workloads
- ✅ Rich ecosystem for data science
- ✅ Rapid development
- ✅ Great AI agent code generation
- ✅ Easy to prototype

**Cons:**
- ❌ Slower than compiled languages
- ❌ Type safety requires discipline (even with type hints)
- ❌ GIL limitations for concurrency

**AGENTS.md Snippet:**
\`\`\`markdown
## Tech Stack
- Language: Python 3.11+
- Framework: FastAPI
- ML Libraries: PyTorch, scikit-learn
- Database: PostgreSQL + SQLAlchemy
- Testing: pytest + pytest-cov
\`\`\`

---

### Stack 3: Go for High-Performance Backend

**Best for:** Microservices, high-throughput APIs, cloud-native apps

**Stack:**
- **Backend:** Go 1.21+ + Gin or Fiber
- **Frontend:** React + TypeScript
- **Database:** PostgreSQL + sqlc or GORM
- **Testing:** Go testing + testify
- **AI Tools:** GitHub Copilot (good Go support)

**Pros:**
- ✅ Excellent performance
- ✅ Built-in concurrency (goroutines)
- ✅ Small binary size
- ✅ Great for cloud/Kubernetes
- ✅ Strong standard library

**Cons:**
- ❌ Verbose error handling
- ❌ Fewer AI agents specialize in Go
- ❌ Smaller ecosystem than Node/Python

**AGENTS.md Snippet:**
\`\`\`markdown
## Tech Stack
- Language: Go 1.21+
- Framework: Gin Web Framework
- Database: PostgreSQL + sqlc
- Testing: Go testing + testify
- Error Handling: Always check errors, use pkg/errors
\`\`\`

---

### Stack 4: Rust for Maximum Performance & Safety

**Best for:** Systems programming, performance-critical apps, security-focused projects

**Stack:**
- **Backend:** Rust + Actix-web or Axum
- **Frontend:** React + TypeScript (or Yew for Rust WASM)
- **Database:** PostgreSQL + SQLx or Diesel
- **Testing:** Rust built-in testing + criterion for benchmarks

**Pros:**
- ✅ Memory safety without garbage collection
- ✅ Fearless concurrency
- ✅ Exceptional performance
- ✅ Strong type system
- ✅ Growing ecosystem

**Cons:**
- ❌ Steep learning curve
- ❌ Slower development speed
- ❌ Limited AI agent support (improving)
- ❌ Borrow checker can be frustrating

**AGENTS.md Snippet:**
\`\`\`markdown
## Tech Stack
- Language: Rust (edition 2021)
- Framework: Axum for async web
- Database: PostgreSQL + SQLx
- Testing: cargo test + criterion
- Code Style: Follow Rust conventions, use clippy
\`\`\`

---

### Stack 5: Next.js Full-Stack (React Ecosystem)

**Best for:** SEO-critical apps, content sites, full-stack React

**Stack:**
- **Framework:** Next.js 14+ (App Router)
- **Database:** PostgreSQL + Prisma or Supabase
- **Styling:** Tailwind CSS
- **Auth:** NextAuth.js or Clerk
- **Deployment:** Vercel

**Pros:**
- ✅ Excellent SEO with SSR/SSG
- ✅ Full-stack in one framework
- ✅ Great developer experience
- ✅ Excellent AI agent support
- ✅ Easy deployment with Vercel

**Cons:**
- ❌ Vendor lock-in risk (Vercel)
- ❌ Complex for simple apps
- ❌ Can be expensive at scale

**AGENTS.md Snippet:**
\`\`\`markdown
## Tech Stack
- Framework: Next.js 14 (App Router)
- Database: PostgreSQL + Prisma
- Styling: Tailwind CSS
- Auth: NextAuth.js
- Deployment: Vercel
\`\`\`

---

### Decision Matrix Summary

| Requirement | Recommended Stack |
|-------------|------------------|
| Full-stack TypeScript | Stack 1: React + Fastify |
| AI/ML workloads | Stack 2: Python + FastAPI |
| High performance API | Stack 3: Go + Gin |
| Systems programming | Stack 4: Rust + Axum |
| SEO + content sites | Stack 5: Next.js |
| Best AI agent support | Stack 1 or Stack 5 (TypeScript) |
| Fastest development | Stack 2 (Python) or Stack 5 (Next.js) |
| Maximum performance | Stack 4 (Rust) or Stack 3 (Go) |

---

`;
}

function generateExamplesSection(): string {
  return `## 6. AI Examples & Best Practices

### Example 1: React Component Generation

**Prompt:**
\`\`\`
Create a reusable Button component in TypeScript with the following requirements:
- Accept variant prop (primary, secondary, outline)
- Support size prop (sm, md, lg)
- Use Tailwind CSS for styling
- Include proper TypeScript types
- Add accessibility attributes
\`\`\`

**AI-Generated Code:**
\`\`\`typescript
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'rounded font-medium transition-colors',
          {
            'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
            'bg-gray-600 text-white hover:bg-gray-700': variant === 'secondary',
            'border-2 border-gray-300 hover:bg-gray-100': variant === 'outline',
          },
          {
            'px-3 py-1 text-sm': size === 'sm',
            'px-4 py-2 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
\`\`\`

---

### Example 2: API Endpoint with Validation

**Prompt:**
\`\`\`
Create a Fastify POST endpoint for user registration with:
- Email and password validation using Zod
- Password hashing with bcrypt
- Return JWT token on success
- Proper error handling
\`\`\`

**AI-Generated Code:**
\`\`\`typescript
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
})

export async function registerRoutes(fastify: FastifyInstance) {
  fastify.post('/api/auth/register', async (request, reply) => {
    try {
      // Validate request body
      const { email, password } = registerSchema.parse(request.body)

      // Check if user exists
      const existingUser = await fastify.prisma.user.findUnique({
        where: { email },
      })

      if (existingUser) {
        return reply.status(400).send({ error: 'Email already registered' })
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10)

      // Create user
      const user = await fastify.prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      })

      // Generate JWT
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET!,
        { expiresIn: '7d' }
      )

      return reply.send({
        token,
        user: { id: user.id, email: user.email },
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return reply.status(400).send({ error: error.errors })
      }
      throw error
    }
  })
}
\`\`\`

---

### Example 3: Database Migration

**Prompt:**
\`\`\`
Create a Prisma schema for a blog with:
- Users table (id, email, name, created_at)
- Posts table (id, title, content, published, author_id, created_at)
- One-to-many relationship (User -> Posts)
\`\`\`

**AI-Generated Code:**
\`\`\`prisma
// schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now()) @map("created_at")

  @@map("users")
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String
  published Boolean  @default(false)
  authorId  String   @map("author_id")
  author    User     @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now()) @map("created_at")

  @@map("posts")
}
\`\`\`

---

### Best Practices for AI-Assisted Development

1. **Be Specific in Prompts**
   - ❌ "Create a button"
   - ✅ "Create a reusable TypeScript button component with variants and sizes"

2. **Provide Context**
   - Reference your AGENTS.md file
   - Mention existing patterns in the codebase
   - Specify dependencies and versions

3. **Review and Test**
   - Always review AI-generated code
   - Run tests and linters
   - Check for security issues

4. **Iterate and Refine**
   - Start with a basic implementation
   - Ask for improvements or modifications
   - Provide feedback on what worked and what didn't

5. **Use AI for Repetitive Tasks**
   - Generating boilerplate
   - Writing tests
   - Creating CRUD operations
   - Documentation

6. **Combine AI with Human Expertise**
   - AI generates, human reviews
   - AI suggests, human decides
   - AI accelerates, human guides

---

`;
}

function generatePatternsSection(): string {
  return `## 7. AI Patterns

### Chain-of-Thought (CoT) Prompting

**Chain-of-Thought** prompting encourages the AI to show its reasoning step-by-step, leading to more accurate and transparent results.

**Example:**
\`\`\`
Instead of: "Fix this bug"

Use: "Analyze this code step by step:
1. Identify the root cause of the error
2. Explain why it's happening
3. Propose a fix
4. Explain how the fix addresses the root cause"
\`\`\`

**Benefits:**
- More accurate solutions
- Better understanding of AI reasoning
- Easier to spot errors in AI logic

**When to Use:**
- Complex debugging
- Architecture decisions
- Security analysis

---

### Tree-of-Thought (ToT) Prompting

**Tree-of-Thought** extends CoT by exploring multiple reasoning paths simultaneously, then selecting the best approach.

**Example:**
\`\`\`
"I need to implement user authentication. Explore three different approaches:

Approach 1: JWT with localStorage
- Pros:
- Cons:
- Implementation complexity:

Approach 2: Session-based with httpOnly cookies
- Pros:
- Cons:
- Implementation complexity:

Approach 3: OAuth 2.0 with third-party provider
- Pros:
- Cons:
- Implementation complexity:

Then recommend the best approach for a small startup MVP."
\`\`\`

**Benefits:**
- Explores multiple solutions
- Weighs trade-offs explicitly
- Better decision-making

**When to Use:**
- Choosing between alternatives
- Architecture planning
- Evaluating trade-offs

---

### Few-Shot Learning

Provide examples to guide the AI's output format and style.

**Example:**
\`\`\`
Create API documentation following these examples:

Example 1:
POST /api/users
Request: { "email": "user@example.com", "name": "John" }
Response: { "id": "123", "email": "user@example.com", "name": "John" }
Status: 201 Created

Example 2:
GET /api/users/:id
Response: { "id": "123", "email": "user@example.com", "name": "John" }
Status: 200 OK

Now document: PUT /api/users/:id
\`\`\`

---

### Iterative Refinement

Start broad, then narrow down with follow-up prompts.

**Pattern:**
1. **Initial Prompt:** "Create a user profile component"
2. **Refinement 1:** "Add form validation with Zod"
3. **Refinement 2:** "Add loading and error states"
4. **Refinement 3:** "Add accessibility labels"

---

### Role-Based Prompting

Assign a specific role or expertise to the AI.

**Example:**
\`\`\`
"Act as a senior security engineer reviewing this authentication code.
Identify potential vulnerabilities and suggest improvements."
\`\`\`

**Roles to Try:**
- Senior developer
- Security expert
- Code reviewer
- Technical writer
- Performance optimization specialist

---

### Constraint-Based Prompting

Provide explicit constraints and requirements.

**Example:**
\`\`\`
"Create a data fetching hook with these constraints:
- Must use TypeScript
- Must handle loading, error, and success states
- Must support generic types
- Must be cancellable
- Must cache results
- Maximum 50 lines of code"
\`\`\`

---

`;
}

function generateMCPSection(): string {
  return `## 8. MCP Servers (Model Context Protocol)

### What is MCP?

**Model Context Protocol (MCP)** is an open standard developed by Anthropic that enables AI assistants to securely access external data sources and tools. Think of MCP servers as plugins that extend AI capabilities.

### Why MCP Matters

Without MCP:
- AI agents are isolated from your systems
- No access to databases, APIs, or file systems
- Limited to knowledge from training data

With MCP:
- ✅ AI can query your database
- ✅ AI can read/write files
- ✅ AI can call APIs
- ✅ AI can access documentation
- ✅ Secure, controlled access

### Common MCP Servers

1. **File System MCP**
   - Read/write project files
   - Navigate directory structure
   - Search code

2. **Database MCP**
   - Query databases (PostgreSQL, MySQL)
   - Inspect schema
   - Run migrations

3. **API MCP**
   - Call REST/GraphQL APIs
   - Authenticate with services
   - Fetch external data

4. **Git MCP**
   - Read commit history
   - Analyze changes
   - Generate changelogs

### Setting Up MCP in Claude Desktop

1. **Install Claude Desktop** (if not already installed)

2. **Configure MCP Server** in \`claude_desktop_config.json\`:
\`\`\`json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/project"]
    }
  }
}
\`\`\`

3. **Restart Claude Desktop**

4. **Verify Connection:** Claude will show available MCP servers in the UI

### Creating a Custom MCP Server

\`\`\`typescript
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server(
  {
    name: 'my-custom-mcp',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Define a tool
server.setRequestHandler('tools/list', async () => {
  return {
    tools: [
      {
        name: 'get_user_data',
        description: 'Fetch user data from database',
        inputSchema: {
          type: 'object',
          properties: {
            userId: { type: 'string' },
          },
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler('tools/call', async (request) => {
  if (request.params.name === 'get_user_data') {
    const userId = request.params.arguments.userId;
    // Fetch from database...
    return { result: { userId, name: 'John Doe' } };
  }
});

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);
\`\`\`

### Security Best Practices

1. **Validate all inputs** from AI requests
2. **Restrict file system access** to project directories only
3. **Use read-only database connections** when possible
4. **Implement rate limiting**
5. **Log all MCP operations** for auditing

### AGENTS.md Integration

Include MCP information in your AGENTS.md:

\`\`\`markdown
## MCP Servers

This project uses the following MCP servers:

- **Filesystem MCP:** Access to /src and /tests directories (read/write)
- **Database MCP:** Read-only access to development database
- **API MCP:** Access to internal APIs (requires auth token)

AI Assistants: Use MCP to access project files and database schema.
\`\`\`

---

`;
}

function generateAISolutionsSection(): string {
  return `## 9. AI Solutions & Integrations

### Popular AI Coding Assistants

#### GitHub Copilot
- **Type:** Code completion and chat
- **Integration:** VS Code, JetBrains, Neovim
- **Strengths:** Excellent code completion, large user base
- **Best for:** Day-to-day coding, autocomplete
- **AGENTS.md Support:** Reads from workspace context

#### Cursor
- **Type:** AI-first IDE (fork of VS Code)
- **Integration:** Standalone application
- **Strengths:** Deep codebase understanding, chat interface
- **Best for:** Full-stack development, refactoring
- **AGENTS.md Support:** Native support, reads automatically

#### Cline (formerly Claude Dev)
- **Type:** Autonomous coding agent
- **Integration:** VS Code extension
- **Strengths:** Can execute commands, edit multiple files
- **Best for:** Complex multi-file changes, automation
- **AGENTS.md Support:** Reads and follows guidelines

#### Tabnine
- **Type:** Code completion
- **Integration:** Multiple IDEs
- **Strengths:** Privacy-focused, can run locally
- **Best for:** Teams with strict data policies

#### Windsurf (Codeium)
- **Type:** AI pair programmer
- **Integration:** VS Code, JetBrains
- **Strengths:** Agentic flows, multi-file editing
- **Best for:** Complex refactoring

---

### Comparison Matrix

| Feature | Copilot | Cursor | Cline | Tabnine |
|---------|---------|--------|-------|---------|
| **Code Completion** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Chat Interface** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **File Editing** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| **Command Execution** | ❌ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ❌ |
| **Codebase Context** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Privacy** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **AGENTS.md Support** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

---

### Integration Strategies

#### Strategy 1: Copilot for Daily Coding
- Use Copilot for autocomplete and simple tasks
- Switch to Cursor/Cline for complex refactoring
- Maintain AGENTS.md for consistency

#### Strategy 2: All-in on Cursor
- Use Cursor as primary IDE
- Leverage built-in AGENTS.md support
- Use Composer mode for multi-file changes

#### Strategy 3: Hybrid Approach
- VS Code + Copilot for general coding
- Cline for autonomous tasks
- Claude Code (CLI) for documentation and analysis

---

### Best Practices for Team Adoption

1. **Start Small**
   - Begin with code completion
   - Gradually introduce chat and autonomous features
   - Measure productivity gains

2. **Create Guidelines**
   - Document acceptable use cases
   - Define review processes
   - Set security boundaries

3. **Train Your Team**
   - Teach effective prompting
   - Share successful patterns
   - Review AI-generated code together

4. **Maintain AGENTS.md**
   - Keep it updated with project changes
   - Include team conventions
   - Version control it like code

5. **Monitor and Iterate**
   - Track which tools work best
   - Gather team feedback
   - Adjust processes as needed

---

`;
}

function generateReferencesSection(): string {
  return `## 10. References & Resources

### Official Documentation

- **AGENTS.md Standard:** [https://agentsmd.org](https://agentsmd.org)
- **Claude Documentation:** [https://docs.anthropic.com](https://docs.anthropic.com)
- **Model Context Protocol (MCP):** [https://modelcontextprotocol.io](https://modelcontextprotocol.io)
- **OpenAI Documentation:** [https://platform.openai.com/docs](https://platform.openai.com/docs)

### AI Coding Tools

- **GitHub Copilot:** [https://github.com/features/copilot](https://github.com/features/copilot)
- **Cursor:** [https://cursor.sh](https://cursor.sh)
- **Cline (VS Code Extension):** [https://github.com/cline/cline](https://github.com/cline/cline)
- **Tabnine:** [https://www.tabnine.com](https://www.tabnine.com)
- **Windsurf/Codeium:** [https://codeium.com](https://codeium.com)

### Learning Resources

#### LLM Fundamentals
- **3Blue1Brown - Neural Networks:** Visual introduction to deep learning
- **Andrej Karpathy - LLM Course:** Deep dive into how LLMs work
- **Fast.ai:** Practical deep learning for coders

#### Prompt Engineering
- **OpenAI Prompt Engineering Guide:** Best practices and patterns
- **Anthropic Prompt Library:** Example prompts for various tasks
- **LangChain Documentation:** Advanced prompting techniques

#### AI Agent Development
- **LangChain:** Framework for building AI agents
- **AutoGPT:** Open-source autonomous agent
- **BabyAGI:** Simplified AI agent framework

### Community & Forums

- **AGENTS.md Discord:** Community discussion and support
- **Reddit r/MachineLearning:** Latest AI research and news
- **Hacker News:** Tech discussions including AI
- **AI Stack Exchange:** Q&A for AI/ML topics

### Recommended Reading

#### Books
1. **"The Alignment Problem" by Brian Christian** - AI safety and ethics
2. **"Life 3.0" by Max Tegmark** - Future of AI
3. **"Human Compatible" by Stuart Russell** - AI alignment

#### Papers
1. **"Attention Is All You Need"** - The transformer architecture (foundation of LLMs)
2. **"BERT: Pre-training of Deep Bidirectional Transformers"** - Bidirectional LLMs
3. **"Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"** - CoT pattern

### Tools & Utilities

- **Prisma:** Modern database ORM
- **Zod:** TypeScript schema validation
- **Vitest:** Fast unit testing
- **Tailwind CSS:** Utility-first CSS framework
- **Fastify:** High-performance Node.js framework

### Keeping Up-to-Date

- **AI Newsletter:** [https://www.therundown.ai](https://www.therundown.ai)
- **Import AI:** Weekly AI newsletter by Jack Clark
- **TLDR AI:** Daily AI news
- **Anthropic Blog:** Updates on Claude and AI safety

---

`;
}

function generateAccessibilitySection(): string {
  return `## 11. WCAG 2.2 Accessibility Standards

### Overview

**WCAG (Web Content Accessibility Guidelines) 2.2** is the latest standard for making web content accessible to people with disabilities.

### Four Principles (POUR)

1. **Perceivable** - Information must be presentable to users in ways they can perceive
2. **Operable** - User interface components must be operable
3. **Understandable** - Information and UI must be understandable
4. **Robust** - Content must be robust enough to work with assistive technologies

### Key Requirements

#### Level A (Minimum)

- **Text Alternatives:** Provide alt text for images
- **Keyboard Accessible:** All functionality available via keyboard
- **No Keyboard Traps:** Users can navigate away using keyboard only
- **Timing Adjustable:** Users can extend time limits

#### Level AA (Standard)

- **Contrast Ratio:** 4.5:1 for normal text, 3:1 for large text
- **Resize Text:** Text can be resized up to 200% without loss of functionality
- **Focus Visible:** Keyboard focus indicator is visible
- **Labels or Instructions:** Form inputs have labels

#### Level AAA (Enhanced)

- **Enhanced Contrast:** 7:1 for normal text, 4.5:1 for large text
- **No Timing:** No time limits on interactions
- **Sign Language:** Provide sign language interpretation

### Common Accessibility Issues in AI-Generated Code

1. **Missing ARIA Labels**
   - AI often forgets \`aria-label\` on icon-only buttons
   - **Fix:** Add descriptive labels

2. **Poor Contrast**
   - AI may use colors that don't meet WCAG standards
   - **Fix:** Use contrast checker tools

3. **Keyboard Navigation**
   - AI-generated modals may trap keyboard focus
   - **Fix:** Implement focus management

4. **Form Validation**
   - Error messages may not be announced to screen readers
   - **Fix:** Use \`aria-live\` regions

### Implementing Accessibility in AGENTS.md

\`\`\`markdown
## Accessibility Requirements

All components must meet WCAG 2.2 Level AA:

- Provide alt text for all images
- Ensure 4.5:1 contrast ratio
- Support keyboard navigation
- Include ARIA labels for icons
- Test with screen readers (NVDA, JAWS)

AI Assistants: When generating UI components, always include:
- aria-label for icon-only buttons
- role attributes for custom components
- keyboard event handlers
- focus management for modals
\`\`\`

### Testing Tools

- **axe DevTools:** Browser extension for accessibility testing
- **WAVE:** Web accessibility evaluation tool
- **Lighthouse:** Built into Chrome DevTools
- **NVDA/JAWS:** Screen readers for testing

### Checklist for AI-Generated Code

- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation works
- [ ] Focus indicators are visible
- [ ] Form labels are properly associated
- [ ] ARIA labels on icon buttons
- [ ] Heading hierarchy is logical (h1, h2, h3...)
- [ ] Skip links for navigation

---

`;
}

function generateCodePuppySection(): string {
  return `## 12. Code Puppy

### What is Code Puppy?

**Code Puppy** is a friendly, enthusiastic AI coding assistant persona designed to help developers learn and build with encouragement and excitement.

### Characteristics

- **Enthusiastic:** Celebrates your successes with emojis and positive reinforcement
- **Helpful:** Breaks down complex concepts into digestible pieces
- **Patient:** Never judges, always ready to explain again
- **Playful:** Uses puppy-themed language and metaphors

### Example Interactions

**User:** "I'm stuck on this React hook error"

**Code Puppy:** "🐕 Woof! Let me sniff out that bug for you! It looks like you're trying to use a hook outside a component - React hooks need to be inside the component function, like a puppy needs to stay in the yard! Let me show you how to fix it! 🦴"

**User:** "This works now, thanks!"

**Code Puppy:** "🎉 Yayyy! Good job! Your code is looking pawsitively perfect! 🐾 Want to fetch some more features? 🎾"

### When to Use Code Puppy

- **Learning new concepts:** Makes complex topics less intimidating
- **Debugging frustrations:** Adds levity to stressful situations
- **Teaching beginners:** Friendly tone encourages questions
- **Team morale:** Brings fun to code reviews

### When NOT to Use Code Puppy

- **Production incidents:** Serious situations require direct communication
- **Executive presentations:** Maintain professionalism
- **Security disclosures:** Clear, precise language is critical

### Implementing Code Puppy in Your Project

Add a section to your AGENTS.md:

\`\`\`markdown
## Code Puppy Mode

When requested, AI assistants can adopt "Code Puppy" persona:

- Use friendly, encouraging language
- Add puppy emojis (🐕 🐾 🦴)
- Celebrate successes enthusiastically
- Use playful metaphors
- Stay helpful and technically accurate

Example:
User: "/codepuppy help me with this bug"
AI: "🐕 Woof! Let me sniff out that bug for you!"
\`\`\`

### Code Puppy Best Practices

1. **Stay Technically Accurate**
   - Fun persona doesn't mean wrong answers
   - Verify facts before adding flair

2. **Read the Room**
   - If user seems frustrated, dial back the enthusiasm
   - Match the user's energy level

3. **Don't Overdo It**
   - A few emojis go a long way
   - Prioritize clarity over cuteness

4. **Be Inclusive**
   - Not everyone likes this style
   - Make it opt-in, not default

---

`;
}

function generateMyAgentsSection(): string {
  return `## 13. Project Documentation (My Files)

### AGENTS.md for This Project

This training application serves as a complete example of AGENTS.md in action. Below is the actual AGENTS.md file for this project:

\`\`\`markdown
# agents-md-demo

## Overview
A modern full-stack TypeScript training application demonstrating the AGENTS.md standard
and AI agent integration patterns.

## Tech Stack
- **Frontend:** React 18 + TypeScript + Vite
- **Backend:** Node.js + Fastify
- **Database:** PostgreSQL with Prisma ORM
- **Styling:** Tailwind CSS
- **Testing:** Vitest + Testing Library
- **Package Manager:** npm

## Project Structure
\`\`\`
agents-md-demo/
├── src/                  # Frontend React application
│   ├── components/       # React components
│   │   └── ui/          # Reusable UI components
│   ├── utils/           # Utility functions
│   └── App.tsx          # Main application component
├── server/              # Backend Fastify server
│   ├── routes/          # API routes
│   └── index.ts         # Server entry point
├── prisma/              # Database schema and migrations
│   ├── schema.prisma    # Prisma schema
│   └── migrations/      # Database migrations
├── tests/               # Test files
└── AGENTS.md           # This file
\`\`\`

## Commands
- \\\`npm install\\\` - Install dependencies
- \\\`npm run dev\\\` - Start frontend dev server (port 5175)
- \\\`npm run dev:backend\\\` - Start backend dev server (port 5176)
- \\\`npm run dev:all\\\` - Start both frontend and backend
- \\\`npm run build\\\` - Build for production
- \\\`npm test\\\` - Run tests
- \\\`npm run lint\\\` - Lint code
- \\\`npm run format\\\` - Format code with Prettier
- \\\`npm run db:migrate\\\` - Run database migrations
- \\\`npm run db:studio\\\` - Open Prisma Studio

## Code Style
- **TypeScript:** Strict mode enabled
- **React:** Functional components with hooks
- **Formatting:** Prettier (2 spaces, single quotes)
- **Linting:** ESLint with TypeScript rules
- **Accessibility:** WCAG 2.2 Level AA compliance required

## Naming Conventions
- **Components:** PascalCase (e.g., \\\`Button.tsx\\\`)
- **Files:** camelCase for utils, PascalCase for components
- **CSS:** Tailwind utility classes preferred
- **Variables:** camelCase
- **Constants:** UPPER_SNAKE_CASE
- **Types/Interfaces:** PascalCase

## Database
- **ORM:** Prisma
- **Migrations:** Always create migration before changing schema
- **Commands:**
  - \\\`npm run db:migrate\\\` - Create and apply migration
  - \\\`npm run db:studio\\\` - Visual database browser

## API Conventions
- **Base URL:** \\\`http://localhost:5176/api\\\`
- **Auth:** JWT tokens in Authorization header
- **Validation:** Use Zod for request validation
- **Errors:** Return consistent error format:
  \\\`\\\`\\\`json
  {
    "error": "Error message",
    "details": { ... }
  }
  \\\`\\\`\\\`

## Security
- **Environment Variables:** Use \\\`.env\\\` file (never commit)
- **Secrets:** Store in environment variables
- **Authentication:** JWT with httpOnly cookies
- **Validation:** Validate all user inputs with Zod
- **SQL Injection:** Prevented by Prisma ORM
- **XSS:** React escapes by default, be careful with dangerouslySetInnerHTML

## Testing
- **Framework:** Vitest
- **Component Tests:** React Testing Library
- **Coverage:** Aim for >80% coverage
- **Run Tests:** \\\`npm test\\\`
- **Watch Mode:** \\\`npm test -- --watch\\\`

## Accessibility (WCAG 2.2 Level AA)
- All interactive elements must be keyboard accessible
- Color contrast ratio must be at least 4.5:1
- Images must have alt text
- Forms must have labels
- ARIA attributes for complex components
- Test with screen readers (NVDA, JAWS)

## AI Assistant Guidelines

### When Generating Code
1. **Follow TypeScript strict mode** - No implicit any
2. **Use functional components** - Prefer hooks over classes
3. **Include proper types** - Export interfaces/types
4. **Add ARIA labels** - Especially for icon-only buttons
5. **Write tests** - Include basic test coverage
6. **Handle errors** - Always include error handling

### Before Committing
1. **Run linter:** \\\`npm run lint\\\`
2. **Run tests:** \\\`npm test\\\`
3. **Format code:** \\\`npm run format\\\`
4. **Check types:** \\\`npm run type-check\\\`

### Common Patterns

#### Creating a New Component
\\\`\\\`\\\`typescript
// src/components/Example.tsx
import { FC } from 'react'

interface ExampleProps {
  title: string
  onAction?: () => void
}

export const Example: FC<ExampleProps> = ({ title, onAction }) => {
  return (
    <div className="p-4">
      <h2>{title}</h2>
      <button onClick={onAction} aria-label="Perform action">
        Click me
      </button>
    </div>
  )
}
\\\`\\\`\\\`

#### Creating an API Endpoint
\\\`\\\`\\\`typescript
// server/routes/example.ts
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

const exampleSchema = z.object({
  name: z.string(),
})

export async function exampleRoutes(fastify: FastifyInstance) {
  fastify.post('/api/example', async (request, reply) => {
    const data = exampleSchema.parse(request.body)
    // Handle request...
    return reply.send({ success: true })
  })
}
\\\`\\\`\\\`

## Deployment
- **Frontend:** Build with \\\`npm run build:frontend\\\`, deploy \\\`dist/\\\` folder
- **Backend:** Build with \\\`npm run build:backend\\\`, run \\\`node dist/server/index.js\\\`
- **Database:** Run migrations on production database
- **Environment:** Set all required env vars in production

## Troubleshooting

### Port Already in Use
\\\`\\\`\\\`bash
# Kill process on port 5175 or 5176
lsof -ti:5175 | xargs kill -9
\\\`\\\`\\\`

### Database Connection Issues
- Check \\\`DATABASE_URL\\\` in \\\`.env\\\`
- Ensure PostgreSQL is running
- Run \\\`npm run db:migrate\\\`

### Type Errors After Package Update
\\\`\\\`\\\`bash
rm -rf node_modules package-lock.json
npm install
npm run type-check
\\\`\\\`\\\`
\`\`\`

---

### README.md for This Project

While AGENTS.md is for AI agents, README.md is for human developers. Here's an example:

\`\`\`markdown
# AGENTS.md Training Application

A comprehensive training guide and demo application for the AGENTS.md standard.

## Quick Start

1. Install dependencies:
   \\\`\\\`\\\`bash
   npm install
   \\\`\\\`\\\`

2. Start development servers:
   \\\`\\\`\\\`bash
   npm run dev:all
   \\\`\\\`\\\`

3. Open [http://localhost:5175](http://localhost:5175)

## What You'll Learn

- Understanding LLMs and AI Agents
- AGENTS.md standard and best practices
- AI-assisted development patterns
- Model Context Protocol (MCP)
- Accessibility in AI-generated code

## Features

- 📚 Comprehensive AI training content
- 🎨 Beautiful, accessible UI
- 🤖 PDF generation for offline learning
- 🌙 Dark mode support
- ♿ WCAG 2.2 Level AA compliant

## Tech Stack

See [AGENTS.md](./AGENTS.md) for complete technical details.

## Contributing

Contributions welcome! Please read our contributing guidelines and code of conduct.

## License

MIT License - see LICENSE file for details
\`\`\`

---

### Summary

This project demonstrates:
1. **Proper AGENTS.md structure** with all required sections
2. **README.md for humans** with quick start and features
3. **Separation of concerns** between AI and human documentation
4. **Practical examples** of commands, patterns, and conventions

---

# Conclusion

You've completed the AGENTS.md Framework Training! You now understand:

- ✅ LLM fundamentals and AI agents
- ✅ The AGENTS.md standard and its benefits
- ✅ How to structure your AGENTS.md file
- ✅ Best practices for AI-assisted development
- ✅ Advanced patterns (CoT, ToT, RAG)
- ✅ MCP servers and tool integration
- ✅ Popular AI coding assistants
- ✅ Accessibility requirements
- ✅ Real-world project documentation

## Next Steps

1. **Create your AGENTS.md** - Start with your current project
2. **Try AI tools** - Experiment with Copilot, Cursor, or Cline
3. **Join the community** - Share your experiences
4. **Keep learning** - AI is evolving rapidly

**Happy coding with AI! 🚀**

---

*This training guide was generated on ${new Date().toLocaleDateString()} from the agents-md-demo training application.*
`;
}

export default generateMarkdown;
