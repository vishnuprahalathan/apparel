# PLAN.md — Validate Product Pages and Collection Flows

## Phase 2 Plan 2.1

### Goal
Verify that all storefront product browsing routes render correctly, navigation works, and product details are accurate across the site.

### Inputs
- `.gsd/SPEC.md`
- `.gsd/ARCHITECTURE.md`
- `src/app/collections/page.tsx`
- `src/app/product/[id]/page.tsx`
- `src/app/shop/page.tsx`
- `src/app/location/[city]/page.tsx`
- `src/config/products.ts`

### Tasks
<task type="auto">
  <name>Validate collection and shop page rendering</name>
  <files>src/app/collections/page.tsx, src/app/shop/page.tsx, src/config/products.ts</files>
  <action>Open the collection and shop routes in the browser or run a static page preview to confirm the list renders correctly and links navigate to product detail pages.</action>
  <verify>Use browser navigation or `npm run build` route validation.
</verify>
  <done>Collection and shop pages both render product lists and product links navigate to valid detail pages.</done>
</task>

<task type="auto">
  <name>Verify product detail rendering</name>
  <files>src/app/product/[id]/page.tsx, src/app/product/[id]/ProductClient.tsx</files>
  <action>Confirm individual product pages render the product image, description, price, and add-to-cart action without errors.</action>
  <verify>Navigate to at least one valid product detail URL in the running app and confirm page load.
</verify>
  <done>Product detail page renders cleanly and includes required product metadata and purchase CTA.</done>
</task>

<task type="auto">
  <name>Check location pages and SEO routes</name>
  <files>src/app/location/[city]/page.tsx, src/app/robots.ts, src/app/sitemap.ts</files>
  <action>Verify dynamic location pages generate correctly and the sitemap/robots routes return expected output.</action>
  <verify>Use browser preview or static route generation checks in the build output.
</verify>
  <done>Location page renders for at least one city and sitemap/robots pages are available.</done>
</task>

---

*Last updated: 2026-04-10*
