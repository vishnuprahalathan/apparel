import { PRODUCTS } from "@/config/products";
import { z } from "zod";

export const CartItemSchema = z.object({
  id: z.string(),
  quantity: z.number().int().positive(),
});

export const CheckoutSchema = z.array(CartItemSchema);

/**
 * Recalculates the total price on the server using trusted product data.
 * This prevents client-side price manipulation.
 */
export function calculateSecureTotal(items: z.infer<typeof CheckoutSchema>) {
  return items.reduce((total, item) => {
    const product = PRODUCTS.find((p) => p.id === item.id);
    if (!product) {
      throw new Error(`Invalid product ID: ${item.id}`);
    }
    return total + product.price * item.quantity;
  }, 0);
}

/**
 * Server Action equivalent or utility for initializing a secure payment session
 */
export async function initializeSecureTransaction(cartItems: unknown) {
  try {
    const validatedItems = CheckoutSchema.parse(cartItems);
    const secureTotal = calculateSecureTotal(validatedItems);
    
    // In a real app, you'd create a Stripe/Razorpay session here
    console.log(`[Security] Secure Transaction Initialized: ₹${secureTotal}`);
    
    return {
      success: true,
      total: secureTotal,
      transactionId: crypto.randomUUID(),
    };
  } catch (error) {
    console.error("[Security] Transaction Failed:", error);
    return {
      success: false,
      error: "Integrity check failed. Transaction aborted.",
    };
  }
}
