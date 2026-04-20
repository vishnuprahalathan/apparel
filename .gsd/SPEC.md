# SPEC.md — Project Specification

> **Status**: `FINALIZED`
>
> ⚠️ Planning Lock: No code may be written until this spec is finalized.

## Vision

Build `voidstitch` into a production-ready digital storefront for premium textiles and fabrics with immersive product browsing, responsive mobile-first design, reliable cart/checkout flows, and a polished launch experience.

## Goals
1. **Stable storefront** — Deliver browsing, product detail, location pages, and checkout flows with reliable UX and reproducible builds.
2. **Performance & quality** — Ship a fast, accessible, and resilient Next.js app that scales across desktop, tablet, and mobile.
3. **Launch readiness** — Provide monitoring, deployment readiness, and clear production handoff documentation.

## Non-Goals (Out of Scope)
- Not building a full headless CMS or enterprise backend in this phase.
- Not supporting multi-vendor marketplace or advanced personalization.
- Not adding payment gateway integration beyond a mock or existing checkout path if backend is unavailable.

## Constraints
- Built on Next.js 16, React 19, Tailwind CSS / Tailwind v4 tooling.
- Current codebase is a browser-first storefront with client-side cart state managed in `src/store`.
- Timeline: Prepare production readiness incrementally with a focus on first stable release.
- Existing product data is static and sourced from `src/config/products.ts`.

## Success Criteria
- [ ] `npm run build` completes successfully without errors.
- [ ] Core user flows work: product browsing, add-to-cart, checkout, and success page.
- [ ] Key pages pass Lighthouse performance/accessibility budgets for mobile and desktop.
- [ ] Responsive layout works on small screens and large screens.
- [ ] Architecture, roadmap, and state docs are created and maintained in `.gsd/`.
- [ ] One task = one commit with evidence for completion.

## User Stories

### As a shopper
- I want to browse fabric collections and product details so I can choose the right material.
- I want to add products to a cart and complete checkout so I can place an order.
- I want the site to feel fast and polished on mobile and desktop.

### As a developer
- I want a clear production roadmap and architecture docs so I can deliver stable launch work.
- I want build and lint checks to catch issues before deployment.

## Technical Requirements

| Requirement | Priority | Notes |
|-------------|----------|-------|
| Build passes with `npm run build` | Must-have | Required for production deployment |
| Product browsing and route handling | Must-have | `src/app` routes for collections, product, location, about |
| Cart persistence across pages | Must-have | Use `src/store/useCart.ts` and local storage if available |
| Checkout success flow | Must-have | `src/app/checkout/success/page.tsx` |
| Responsive UI and accessibility | Must-have | Mobile-first design for all routes |
| Architecture documentation | Should-have | `.gsd/ARCHITECTURE.md`, `.gsd/ROADMAP.md`, `.gsd/STATE.md` |
| Deployment readiness notes | Should-have | Include target platform assumptions |

---

*Last updated: 2026-04-10*
