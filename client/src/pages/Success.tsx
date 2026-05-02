/**
 * Payment Success Page
 * Displays after successful Stripe checkout
 */

import { useLocation } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { trpc } from "@/lib/trpc";

export default function Success() {
  const [location, navigate] = useLocation();
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Extract session ID from URL
  const sessionId = new URLSearchParams(location.split("?")[1]).get("session_id");

  const getSession = trpc.stripe.getCheckoutSession.useQuery(
    { sessionId: sessionId || "" },
    { enabled: !!sessionId }
  );

  useEffect(() => {
    if (getSession.data) {
      setSessionData(getSession.data);
      setLoading(false);
    }
  }, [getSession.data]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f0ea] to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle size={48} className="text-green-600" />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl font-light text-center text-[#2a2420] mb-2">
          Payment Successful!
        </h1>

        {/* Subtitle */}
        <p className="font-body text-center text-[#2a2420]/60 mb-8">
          Thank you for your purchase. Your order has been confirmed.
        </p>

        {/* Order Details */}
        {sessionData && (
          <div className="bg-white rounded-2xl border border-[#e8d5cc] p-6 mb-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-[#2a2420]/60">Order ID</span>
                <span className="font-body text-sm font-semibold text-[#2a2420]">
                  {sessionData.id?.slice(0, 8)}...
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-[#2a2420]/60">Amount</span>
                <span className="font-display text-lg font-bold text-[#c0392b]">
                  ${(sessionData.amountTotal / 100).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-[#2a2420]/60">Email</span>
                <span className="font-body text-sm text-[#2a2420]">
                  {sessionData.customerEmail || "N/A"}
                </span>
              </div>
              <div className="border-t border-[#e8d5cc] pt-4 flex justify-between items-center">
                <span className="font-body text-sm text-[#2a2420]/60">Status</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                  ✓ Paid
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Next Steps */}
        <div className="bg-[#f5f0ea] rounded-2xl p-6 mb-8">
          <h3 className="font-body text-sm font-semibold text-[#2a2420] mb-3">What's Next?</h3>
          <ul className="space-y-2">
            <li className="flex gap-2 font-body text-sm text-[#2a2420]/80">
              <span className="text-[#c0392b] font-bold">✓</span>
              <span>Confirmation email sent to your inbox</span>
            </li>
            <li className="flex gap-2 font-body text-sm text-[#2a2420]/80">
              <span className="text-[#c0392b] font-bold">✓</span>
              <span>Your product will be shipped within 24 hours</span>
            </li>
            <li className="flex gap-2 font-body text-sm text-[#2a2420]/80">
              <span className="text-[#c0392b] font-bold">✓</span>
              <span>Track your order via WhatsApp</span>
            </li>
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/")}
            className="w-full px-6 py-3 rounded-xl font-body font-medium text-white transition-all duration-300 flex items-center justify-center gap-2"
            style={{ backgroundColor: "#c0392b" }}
          >
            Back to Home
            <ArrowRight size={16} />
          </button>
          <a
            href="https://wa.me/16267480352"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-6 py-3 rounded-xl font-body font-medium text-center transition-all duration-300 flex items-center justify-center gap-2"
            style={{
              backgroundColor: "#c0392b15",
              color: "#c0392b",
            }}
          >
            Chat on WhatsApp
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Support */}
        <p className="font-body text-xs text-center text-[#2a2420]/50 mt-6">
          Questions? Contact us via WhatsApp or email contact@drchenmed.com
        </p>
      </div>
    </div>
  );
}
