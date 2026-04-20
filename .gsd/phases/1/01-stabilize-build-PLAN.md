# PLAN.md — Stabilize Build and Lint

## Phase 1 Plan 1.1

### Goal
Ensure the current storefront codebase builds cleanly and fixes all lint-reported production quality issues.

### Inputs
- `.gsd/SPEC.md`
- `.gsd/ARCHITECTURE.md`
- `.gsd/ROADMAP.md`
- Source files in `src/`
- `package.json`

### Tasks
<task type="auto">
  <name>Run production build</name>
  <files>package.json, tsconfig.json, next.config.ts, src/**/*</files>
  <action>Run `npm run build` and fix any compile or page generation issues that prevent a production build.</action>
  <verify>npm run build</verify>
  <done>Build exits successfully with no compile errors.</done>
</task>

<task type="auto">
  <name>Resolve lint issues</name>
  <files>src/app/checkout/success/page.tsx, src/app/checkout/page.tsx, src/app/lookbook/page.tsx, src/app/movement/page.tsx, src/app/fabric-science/page.tsx, src/app/product/[id]/ProductClient.tsx, src/components/layout/CartDrawer.tsx, src/components/ui/AdUnit.tsx, src/components/ui/FabricTextureViewer.tsx, src/components/ui/StockStatus.tsx, src/components/ui/CustomCursor.tsx, src/components/ui/ThemeToggle.tsx, src/components/ui/ThreeDViewer.tsx</files>
  <action>Fix all ESLint-reported issues in the listed source files, removing unused imports, escaping entity characters, and avoiding impure render expressions.</action>
  <verify>npm run lint</verify>
  <done>ESLint completes with no errors or warnings.</done>
</task>

---

*Last updated: 2026-04-10*
