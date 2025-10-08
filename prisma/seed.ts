import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main(): Promise<void> {
  console.log('🌱 Seeding database...')

  // Get seed password from environment or use default for development
  const seedPassword = process.env.SEED_PASSWORD || 'DemoPassword2024!'
  const hashedPassword = await bcrypt.hash(seedPassword, 10)

  // Create demo users
  const user1 = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      name: 'Demo User',
      password: hashedPassword,
      role: 'USER',
    },
  })

  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  console.log('✅ Seed completed!')
  console.log('Created users:', { user1, admin })
  console.log('\n📝 Demo credentials:')
  console.log(`User: user@example.com / ${seedPassword}`)
  console.log(`Admin: admin@example.com / ${seedPassword}`)
  console.log('\n💡 Tip: Set SEED_PASSWORD environment variable to use a custom password')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
