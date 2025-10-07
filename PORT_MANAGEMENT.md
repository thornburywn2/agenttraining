# PORT MANAGEMENT
**Project:** agents-md-demo
**Last Updated:** 2025-10-07

---

## 📌 Assigned Ports

This project has been registered in the global port allocation registry at `/root/PORTS.md`.

| Service | Port | URL | Notes |
|---------|------|-----|-------|
| **Frontend** | **5175** | http://localhost:5175 | Vite Dev Server |
| **Backend** | **5176** | http://localhost:5176 | Fastify API Server |

---

## 🎯 Port Assignment Policy (CLAUDE.md Standard)

**CRITICAL:** All projects MUST check and update `/root/PORTS.md` before starting services to avoid port conflicts.

### Core Principles

1. ✅ **Single Source of Truth**: `/root/PORTS.md` is the definitive port registry
2. ✅ **Reserve Before Use**: Always check and update before starting services
3. ✅ **Document Changes**: Update `/root/PORTS.md` immediately when assignments change
4. ✅ **Avoid Conflicts**: Never start a service without verifying port availability

### Port Range Strategy (System-Wide)

- **3000-3099**: Node.js Development Servers
- **4000-4099**: Testing & QA Services
- **5000-5099**: Python/Flask Applications (and special projects like this one)
- **5173**: **PERMANENT RESERVATION** - Team-Onboarding-Request-Form
- **5432-5433**: PostgreSQL Databases
- **6379**: Redis Cache
- **8000-8099**: Web Services & APIs
- **9000-9999**: Application Services & Microservices

---

## 🚀 Starting Services

### Start Both Services (Recommended)
```bash
npm run dev:all
```
- Frontend: http://localhost:5175
- Backend: http://localhost:5176

### Start Services Individually
```bash
# Frontend only
npm run dev

# Backend only
npm run dev:backend
```

---

## 🔍 Port Verification

### Check if Ports are Available
```bash
# Check port 5175 (frontend)
lsof -i :5175

# Check port 5176 (backend)
lsof -i :5176

# Check all listening ports
lsof -i -P -n | grep LISTEN

# Use system port monitor
/root/port_monitor.sh
```

### Kill Process on Port (if needed)
```bash
# Kill process on port 5175
kill $(lsof -t -i:5175)

# Kill process on port 5176
kill $(lsof -t -i:5176)
```

---

## 📝 Configuration Files

Port configuration is defined in multiple files. If you need to change ports:

### 1. Update Environment Variables
**File:** `.env` (copy from `.env.example`)
```bash
PORT=5176                        # Backend port
VITE_API_URL="http://localhost:5176"
```

### 2. Update Vite Configuration
**File:** `vite.config.ts`
```typescript
server: {
  port: 5175,
  strictPort: true, // Enforce port 5175
  proxy: {
    '/api': {
      target: 'http://localhost:5176',
      changeOrigin: true,
    },
  },
},
```

### 3. Update Backend Server
**File:** `server/index.ts`
```typescript
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5176
```

### 4. Update Global Registry
**File:** `/root/PORTS.md`
- Update all three sections:
  1. Python/Flask Ports table
  2. Web Projects table
  3. Quick Reference table

---

## ⚠️ IMPORTANT: Changing Ports

If you need to change ports for this project:

1. **Check availability** in `/root/PORTS.md`
2. **Reserve new ports** in `/root/PORTS.md`
3. **Update project files** (see Configuration Files above)
4. **Update this file** (PORT_MANAGEMENT.md)
5. **Commit changes** to Git
6. **Notify team** (if applicable)

### ❌ Never Do This
- Start services without checking `/root/PORTS.md`
- Use port 5173 (permanently reserved for Team-Onboarding-Request-Form)
- Change ports without updating `/root/PORTS.md`
- Use conflicting ports across projects

---

## 🔗 References

- **Global Port Registry:** `/root/PORTS.md`
- **CLAUDE.md Standards:** `/root/CLAUDE.md` (Section: Port Management)
- **AGENTS.md Instructions:** `./AGENTS.md` (includes port management commands)
- **Environment Config:** `./.env.example`

---

## 📊 Port Conflict Resolution

If you encounter a port conflict:

1. **Check what's using the port:**
   ```bash
   lsof -i :5175
   lsof -i :5176
   ```

2. **Identify the process:**
   - Check PID (Process ID)
   - Verify it's not a critical system service

3. **Resolution options:**
   - **Option A**: Stop the conflicting service (if safe)
   - **Option B**: Choose different ports and update `/root/PORTS.md`
   - **Option C**: Contact project owner (if team environment)

4. **Update registry:**
   - Always update `/root/PORTS.md` after resolution

---

## 🤖 AI Agent Instructions

When working with this project via AI agents:

- ✅ **Always check** `/root/PORTS.md` before starting services
- ✅ **Use standard commands** from AGENTS.md (npm run dev:all)
- ✅ **Report conflicts** if ports 5175 or 5176 are unavailable
- ✅ **Update documentation** if ports change
- ❌ **Never hardcode** ports in source code (use environment variables)

---

**Compliance:** CLAUDE.md v5.9.0 Port Management Standards
**Registry:** /root/PORTS.md (Updated: 2025-10-07)
**Status:** ✅ Registered and Reserved
