# GitHub Workflows Documentation

This directory contains automated CI/CD workflows for code quality, security, accessibility, and performance monitoring.

## 📋 Workflows Overview

### 1. **Lighthouse CI** (`lighthouse-ci.yml`)
**Triggers:** Push to `main`, Pull Requests
**Purpose:** Performance, accessibility, SEO, and best practices auditing

**What it does:**
- Runs Lighthouse on the built application (3 runs for accuracy)
- Checks performance, accessibility, SEO, and best practices scores
- Uploads detailed reports as artifacts
- Fails if accessibility score < 90% (error level)
- Warns if performance/SEO/best-practices < 90%

**Configuration:** `.lighthouserc.json`

**Thresholds:**
- ✅ Accessibility: 90%+ (required)
- ⚠️ Performance: 90%+ (warning)
- ⚠️ Best Practices: 90%+ (warning)
- ⚠️ SEO: 90%+ (warning)

---

### 2. **Code Quality** (`code-quality.yml`)
**Triggers:** Push to `main`, Pull Requests
**Purpose:** Enforce code quality standards

**Jobs:**
- **ESLint Check:** Lints all JavaScript/TypeScript files
- **TypeScript Check:** Runs `tsc --noEmit` to verify type safety
- **Build Check:** Ensures project builds successfully

**What it catches:**
- Code style violations (ESLint rules)
- TypeScript type errors
- Build failures
- Unused imports and variables

---

### 3. **Security Scan** (`security.yml`)
**Triggers:** Push to `main`, Pull Requests, Weekly schedule (Mondays 9 AM UTC)
**Purpose:** Identify security vulnerabilities

**Jobs:**
- **npm Audit:** Checks for vulnerable dependencies (moderate+ severity)
- **CodeQL Analysis:** Deep semantic code analysis for security issues
- **Dependency Review:** Reviews new dependencies in PRs
- **Secret Scanning:** Filesystem scan for accidentally committed secrets (API keys, tokens)

**What it catches:**
- Vulnerable npm packages (CVEs)
- SQL injection, XSS, code injection patterns
- Hardcoded secrets or credentials
- Unsafe dependencies

**Security levels:**
- Critical: Immediate action required
- High: Fix before merge
- Moderate: Review and plan fix
- Low: Monitor

---

### 4. **Accessibility Testing** (`accessibility.yml`)
**Triggers:** Push to `main`, Pull Requests
**Purpose:** WCAG 2.2 AA compliance validation

**Jobs:**
- **Axe Scan:** Automated accessibility testing with @axe-core
- **Pa11y:** WCAG 2.2 AA standard compliance check

**What it catches:**
- Missing alt text on images
- Insufficient color contrast (< 4.5:1)
- Missing form labels
- Keyboard navigation issues
- ARIA attribute errors
- Heading hierarchy problems

**Standards:** WCAG 2.2 Level AA

---

### 5. **Bundle Size Analysis** (`bundle-analysis.yml`)
**Triggers:** Pull Requests
**Purpose:** Monitor bundle size and prevent bloat

**Jobs:**
- **Bundle Size Check:** Tracks compressed size changes in PRs
- **Performance Budget:** Enforces 5MB maximum bundle size

**What it does:**
- Comments on PRs with bundle size diff
- Highlights files that increased significantly (>100 bytes)
- Fails if total bundle exceeds 5MB
- Tracks JS, CSS, and HTML file sizes

**Budget:** 5MB total (configurable)

---

## 🚀 How to Use

### Local Testing

Run workflows locally before pushing:

```bash
# Lighthouse (requires preview server)
npm run build
npm run preview
# In another terminal:
npx @lhci/cli@0.12.x autorun

# ESLint
npm run lint

# TypeScript check
npx tsc --noEmit

# npm audit
npm audit --audit-level=moderate

# Build
npm run build

# Accessibility (requires serve)
npm install -g @axe-core/cli pa11y
npm run build
npx serve -s dist -l 8080 &
npx axe http://localhost:8080
pa11y --standard WCAG2AA http://localhost:8080
```

### Viewing Results

**GitHub Actions UI:**
1. Go to repository → Actions tab
2. Click on workflow run
3. View logs, download artifacts

**Pull Request Checks:**
- Status checks appear at bottom of PR
- Bundle size analysis comments on PR
- Security/accessibility warnings annotated in code

**Artifacts:**
- Lighthouse reports (HTML/JSON)
- Build outputs (dist/)
- Test coverage reports

---

## 🛠️ Configuration Files

### `.lighthouserc.json`
Lighthouse CI configuration:
- Performance thresholds
- Accessibility requirements (90%+ enforced)
- Upload settings for reports

### `package.json` scripts
Required scripts:
- `lint` - ESLint check
- `build` - Production build
- `preview` - Preview built site

---

## 📊 Workflow Status Badges

Add to README.md:

```markdown
![Code Quality](https://github.com/thornburywn2/agenttraining/actions/workflows/code-quality.yml/badge.svg)
![Security](https://github.com/thornburywn2/agenttraining/actions/workflows/security.yml/badge.svg)
![Lighthouse CI](https://github.com/thornburywn2/agenttraining/actions/workflows/lighthouse-ci.yml/badge.svg)
![Accessibility](https://github.com/thornburywn2/agenttraining/actions/workflows/accessibility.yml/badge.svg)
```

---

## 🔧 Customization

### Adjust Lighthouse thresholds
Edit `.lighthouserc.json`:
```json
{
  "ci": {
    "assert": {
      "assertions": {
        "categories:performance": ["warn", {"minScore": 0.95}],
        "categories:accessibility": ["error", {"minScore": 0.95}]
      }
    }
  }
}
```

### Change bundle size budget
Edit `bundle-analysis.yml`:
```yaml
BUDGET=3145728  # 3MB in bytes
```

### Add more security checks
Edit `security.yml` to include:
- SAST tools (Semgrep, Snyk)
- Container scanning (Trivy)
- License compliance (FOSSA)

### Skip workflow on specific commits
```bash
git commit -m "docs: update README [skip ci]"
```

---

## 📈 Best Practices

1. **Always review workflow results** before merging PRs
2. **Fix accessibility errors immediately** - they block merges
3. **Monitor bundle size trends** - prevent gradual bloat
4. **Update dependencies regularly** - use Dependabot
5. **Run workflows locally** before pushing to catch issues early
6. **Don't skip CI checks** - they exist for a reason

---

## 🚨 Troubleshooting

### Lighthouse CI fails to start server
**Solution:** Ensure `npm run preview` works locally, check port 4173 availability

### CodeQL out of memory
**Solution:** Add to workflow:
```yaml
- name: Initialize CodeQL
  uses: github/codeql-action/init@v3
  with:
    ram: 16384
```

### npm audit shows vulnerabilities
**Solution:**
```bash
npm audit fix
# If breaking changes:
npm audit fix --force
# Review and test thoroughly
```

### Bundle size check fails
**Solution:** Analyze bundle with:
```bash
npm run build
npx vite-bundle-visualizer
# Identify large dependencies, consider alternatives or lazy loading
```

---

## 📚 Resources

- [Lighthouse CI Documentation](https://github.com/GoogleChrome/lighthouse-ci)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [CodeQL Documentation](https://codeql.github.com/docs/)
- [Axe Accessibility](https://www.deque.com/axe/)
- [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)
- [npm Audit](https://docs.npmjs.com/cli/v8/commands/npm-audit)

---

**Last Updated:** 2025-10-08
**Maintained by:** AI & AGENTS.md Training Portal Team
