import React from 'react';
import Link from 'next/link';
import { Home, MessageCircle, Crown } from 'lucide-react';
import { WHATSAPP_LINK } from '@ramji/shared';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full bg-neutral-900/60 border border-rose-500/20 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
          <Crown size={32} />
        </div>
        <span className="text-xs font-mono font-bold tracking-widest text-rose-400 uppercase">
          VIP Lounge Notice • 404
        </span>
        <h1 className="text-3xl font-extrabold text-white mt-2 mb-3">
          Private Suite Unavailable
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
          The requested VIP room or table is currently private or expired. Connect directly with your personal VIP concierge on WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
          >
            <Home size={15} />
            <span>VIP Lounge Home</span>
          </Link>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase tracking-wider transition-all border border-neutral-700"
          >
            <MessageCircle size={15} />
            <span>VIP WhatsApp Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
}

