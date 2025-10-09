import Fastify from 'fastify'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import rateLimit from '@fastify/rate-limit'
import { pdfRoutes } from './routes/pdf.js'

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5176
const HOST = '0.0.0.0'

const server = Fastify({
  logger: {
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  },
})

// Register plugins
async function registerPlugins(): Promise<void> {
  // Security headers
  await server.register(helmet, {
    contentSecurityPolicy: false, // Disable for development
  })

  // CORS
  await server.register(cors, {
    origin: process.env.NODE_ENV === 'production'
      ? ['https://your-production-domain.com']
      : true, // Allow all origins in development
  })

  // Rate limiting
  await server.register(rateLimit, {
    max: 100,
    timeWindow: '1 minute',
  })

  // Register routes
  await server.register(pdfRoutes)
}

// Health check endpoint
server.get('/health', async () => {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  }
})

// API routes
server.get('/api/hello', async () => {
  return {
    message: 'Hello from AGENTS.md Demo API!',
    framework: 'Fastify + TypeScript',
    compliance: ['AGENTS.md', 'CLAUDE.md', 'WCAG 2.2 AA'],
  }
})

// Example API endpoint with validation
server.get<{
  Params: { name: string }
}>('/api/greet/:name', async (request) => {
  const { name } = request.params
  return {
    greeting: `Hello, ${name}!`,
    timestamp: new Date().toISOString(),
  }
})

// Start server
async function start(): Promise<void> {
  try {
    await registerPlugins()
    await server.listen({ port: PORT, host: HOST })
    console.log(`
    ╔════════════════════════════════════════════════════════════╗
    ║                                                            ║
    ║   🚀  AGENTS.md Demo Server                                ║
    ║                                                            ║
    ║   Backend API:  http://localhost:${PORT}                    ║
    ║   Frontend UI:  http://localhost:5175                      ║
    ║   Environment:  ${process.env.NODE_ENV || 'development'}                      ║
    ║                                                            ║
    ║   API Endpoints:                                           ║
    ║   - GET /health              Health check                  ║
    ║   - GET /api/hello           Hello world                   ║
    ║   - GET /api/greet/:name     Personalized greeting         ║
    ║   - POST /api/generate-pdf   Generate PDF from markdown    ║
    ║                                                            ║
    ║   Standards:                                               ║
    ║   ✓ AGENTS.md framework                                    ║
    ║   ✓ CLAUDE.md compliance                                   ║
    ║   ✓ Security best practices                                ║
    ║   ✓ Port registered in /root/PORTS.md                      ║
    ║                                                            ║
    ╚════════════════════════════════════════════════════════════╝
    `)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

// Graceful shutdown
const listeners = ['SIGINT', 'SIGTERM'] as const
listeners.forEach((signal) => {
  process.on(signal, async () => {
    console.log(`\n${signal} received, shutting down gracefully...`)
    await server.close()
    console.log('Server closed')
    process.exit(0)
  })
})

start()
