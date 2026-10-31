import { Phone, Ticket, ShieldAlert } from 'lucide-react';

export default function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl flex items-center gap-2">
      
      {/* 1-Tap Emergency Call Button (Dominant Lifeline) */}
      <a
        href="tel:2525862468"
        className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-warmOrange-600 to-warmOrange-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg btn-emergency-glow"
      >
        <Phone className="w-4 h-4 animate-bounce" />
        <span className="truncate">CALL (252) 586-2468</span>
      </a>

      {/* Instant Quote / Voucher Trigger */}
      <a
        href="#calculator"
        className="py-3 px-3 rounded-xl bg-comfortNavy-900 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shrink-0"
      >
        <Ticket className="w-3.5 h-3.5 text-warmOrange-400" />
        <span>$50 OFF</span>
      </a>

    </div>
  );
}
