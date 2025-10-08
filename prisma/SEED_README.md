# Database Seeding Guide

## Security Notice

⚠️ **IMPORTANT:** This seed file requires a password to be set via environment variable. There is **no default password** for security reasons.

## Quick Start

### 1. Set the Seed Password

```bash
# Option 1: Export environment variable (session-based)
export SEED_PASSWORD="YourSecurePassword123!"
npm run seed

# Option 2: Inline with command (one-time)
SEED_PASSWORD="YourSecurePassword123!" npm run seed

# Option 3: Add to .env file (persistent)
echo 'SEED_PASSWORD="YourSecurePassword123!"' >> .env
npm run seed
```

### 2. Verify Seed

After seeding, the console will display:
```
✅ Seed completed!
Created users: { user1: {...}, admin: {...} }

📝 Demo credentials:
User: user@example.com / YourSecurePassword123!
Admin: admin@example.com / YourSecurePassword123!

💡 Tip: Set SEED_PASSWORD environment variable to use a custom password
```

## What Gets Seeded

The seed creates 2 demo users:

### User Account
- **Email:** user@example.com
- **Name:** Demo User
- **Role:** USER
- **Password:** Set via `SEED_PASSWORD` env var

### Admin Account
- **Email:** admin@example.com
- **Name:** Admin User
- **Role:** ADMIN
- **Password:** Set via `SEED_PASSWORD` env var

## Environment-Specific Passwords

### Development
```bash
SEED_PASSWORD="Dev2024!LocalOnly" npm run seed
```

### Testing
```bash
SEED_PASSWORD="Test2024!AutomatedCI" npm run seed
```

### Staging
```bash
SEED_PASSWORD="Stage2024!PreProd" npm run seed
```

### Production
```bash
# Use strong, unique password from secrets management
SEED_PASSWORD="$(openssl rand -base64 32)" npm run seed
# Or use environment-specific secret from vault
```

## Security Best Practices

### ✅ Do's
- ✅ Always set `SEED_PASSWORD` via environment variable
- ✅ Use different passwords per environment
- ✅ Use strong passwords (12+ characters, mixed case, numbers, symbols)
- ✅ Store production passwords in secrets manager (AWS Secrets Manager, Azure Key Vault, etc.)
- ✅ Rotate seed passwords regularly in production

### ❌ Don'ts
- ❌ Never hardcode passwords in seed file
- ❌ Never commit `.env` file with passwords
- ❌ Never use weak passwords like "password123"
- ❌ Never reuse passwords across environments
- ❌ Never share seed passwords via chat/email

## Troubleshooting

### Error: SEED_PASSWORD environment variable is required

**Problem:** Seed password not set

**Solution:**
```bash
SEED_PASSWORD="YourPassword123!" npm run seed
```

### Error: Password too short

**Problem:** Password doesn't meet security requirements

**Solution:** Use at least 12 characters with mixed case, numbers, and symbols:
```bash
SEED_PASSWORD="MySecure2024!Password" npm run seed
```

## CI/CD Integration

### GitHub Actions
```yaml
- name: Seed database
  run: npm run seed
  env:
    SEED_PASSWORD: ${{ secrets.SEED_PASSWORD }}
```

### Docker
```dockerfile
ARG SEED_PASSWORD
RUN SEED_PASSWORD=${SEED_PASSWORD} npm run seed
```

### Kubernetes
```yaml
env:
  - name: SEED_PASSWORD
    valueFrom:
      secretKeyRef:
        name: db-secrets
        key: seed-password
```

## Additional Commands

```bash
# Reset database and reseed
npm run db:reset

# View seeded data in Prisma Studio
npm run db:studio

# Generate Prisma Client after schema changes
npm run db:generate
```

## Related Documentation

- [Prisma Seeding Guide](https://www.prisma.io/docs/guides/database/seed-database)
- [Environment Variables Best Practices](https://12factor.net/config)
- [Password Security Guidelines](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
