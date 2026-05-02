/**
 * Stripe integration for checkout and payment handling
 * Handles creating checkout sessions and processing webhooks
 */

import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import Stripe from "stripe";

// Initialize Stripe client
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : null;

export const stripeRouter = router({
  /**
   * Create a Stripe Checkout Session
   * Returns the checkout URL for redirecting the customer
   */
  createCheckoutSession: publicProcedure
    .input(
      z.object({
        priceInCents: z.number().positive("Price must be positive"),
        productName: z.string().min(1, "Product name is required"),
        quantity: z.number().int().positive().default(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (!stripe) {
        throw new Error("Stripe is not configured. Please add STRIPE_SECRET_KEY to your environment variables.");
      }

      try {
        // Create checkout session
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: [
            {
              price_data: {
                currency: "usd",
                product_data: {
                  name: input.productName,
                  description: "aobenz SINPIN Radiance Essence - Professional Skincare",
                },
                unit_amount: input.priceInCents,
              },
              quantity: input.quantity,
            },
          ],
          mode: "payment",
          success_url: `${ctx.req.headers.origin || "https://drchenmed-eapjqiid.manus.space"}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${ctx.req.headers.origin || "https://drchenmed-eapjqiid.manus.space"}`,
          customer_email: ctx.user?.email || undefined,
          metadata: {
            user_id: ctx.user?.id?.toString() || "guest",
            customer_name: ctx.user?.name || "Guest",
            customer_email: ctx.user?.email || "unknown",
          },
          allow_promotion_codes: true,
        });

        return {
          checkoutUrl: session.url,
          sessionId: session.id,
        };
      } catch (error) {
        console.error("[Stripe] Checkout session creation failed:", error);
        throw new Error("Failed to create checkout session. Please try again.");
      }
    }),

  /**
   * Retrieve checkout session details
   * Used to verify payment status on success page
   */
  getCheckoutSession: publicProcedure
    .input(z.object({ sessionId: z.string() }))
    .query(async ({ input }) => {
      if (!stripe) {
        throw new Error("Stripe is not configured");
      }

      try {
        const session = await stripe.checkout.sessions.retrieve(input.sessionId, {
          expand: ["payment_intent"],
        });

        return {
          id: session.id,
          paymentStatus: session.payment_status,
          status: session.status,
          customerEmail: session.customer_email,
          amountTotal: session.amount_total,
          currency: session.currency,
          metadata: session.metadata,
        };
      } catch (error) {
        console.error("[Stripe] Failed to retrieve session:", error);
        throw new Error("Failed to retrieve checkout session");
      }
    }),
});
