# PLAN.md — Improve Add-to-Cart and Cart Persistence

## Phase 2 Plan 2.2

### Goal
Ensure cart interactions are reliable, cart state persists across page navigation, and the checkout entry flow is stable.

### Inputs
- `src/store/useCart.ts`
- `src/components/layout/CartDrawer.tsx`
- `src/app/checkout/page.tsx`
- `src/app/checkout/success/page.tsx`
- `src/app/product/[id]/ProductClient.tsx`

### Tasks
<task type="auto">
  <name>Validate add-to-cart behavior</name>
  <files>src/app/product/[id]/ProductClient.tsx, src/components/layout/CartDrawer.tsx, src/store/useCart.ts</files>
  <action>Test adding items from product pages into the cart and confirm the cart drawer updates accurately with quantity and subtotal values.</action>
  <verify>Use the running app to add and remove products; compare cart totals and item counts.</verify>
  <done>Cart drawer updates correctly and reflects current cart contents after add/remove actions.</done>
</task>

<task type="auto">
  <name>Confirm cart persistence across navigation</name>
  <files>src/store/useCart.ts, src/components/layout/CartDrawer.tsx</files>
  <action>Verify that cart state remains intact when moving between collection, product, and checkout pages.
If persistence is intended, ensure a localStorage-backed fallback is present.
</action>
  <verify>Reload or navigate between pages and confirm the cart retains added items.
</verify>
  <done>Cart contents persist across page navigation or reloads according to the current store design.</done>
</task>

<task type="auto">
  <name>Validate checkout entry and success transition</name>
  <files>src/app/checkout/page.tsx, src/app/checkout/success/page.tsx</files>
  <action>Ensure checkout page can be reached from the cart and that the success page displays after checkout completion.
</action>
  <verify>Navigate through checkout from the cart and confirm the success page loads as expected.
</verify>
  <done>Checkout flow is reachable and returns a success page with order confirmation messaging.</done>
</task>

---

*Last updated: 2026-04-10*
