import { z } from "zod";

/**
 * Basic rate limiter interface
 */
export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

// In-memory store for development (Replace with Redis for production)
const rateLimitStore = new Map<string, { count: number; reset: number }>();

/**
 * simple sliding window rate limiter
 */
export function rateLimit(identifier: string, limit: number, durationMs: number): RateLimitResult {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);

  if (!record || now > record.reset) {
    const newRecord = { count: 1, reset: now + durationMs };
    rateLimitStore.set(identifier, newRecord);
    return { success: true, limit, remaining: limit - 1, reset: newRecord.reset };
  }

  record.count++;
  const remaining = Math.max(0, limit - record.count);
  
  return {
    success: record.count <= limit,
    limit,
    remaining,
    reset: record.reset,
  };
}

/**
 * Validates data against a schema and throws a standardized security error if invalid
 */
export function validateInput<T>(schema: z.Schema<T>, data: unknown): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    // Log minimal info to avoid leaking schema details in production
    console.error("Security: Input validation failed");
    throw new Error("Invalid request data");
  }
  return result.data;
}

/**
 * Standard security headers for API responses
 */
export function getSecurityHeaders() {
  return {
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': 'no-store, max-age=0',
  };
}

/**
 * verifies a webhook signature (e.g., from Stripe or Razorpay)
 */
export async function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string,
  algorithm: 'sha256' = 'sha256'
): Promise<boolean> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: algorithm.toUpperCase() },
    false,
    ['verify']
  );

  // This is a simplified example; specific providers may have different header formats
  const isVerified = await crypto.subtle.verify(
    'HMAC',
    key,
    Buffer.from(signature, 'hex'),
    encoder.encode(payload)
  );

  return isVerified;
}
