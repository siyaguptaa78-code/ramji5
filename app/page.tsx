'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Trophy, MessageCircle, ShieldCheck, Zap, ArrowRight, 
  Flame, CheckCircle, Sparkles, Crown, Star, Play
} from 'lucide-react';
import { 
  SITE_CONFIGS, 
  MOCK_MATCHES, 
  MOCK_CASINO_GAMES, 
  GENERAL_FAQS, 
  MatchCard, 
  CasinoCard, 
  QuickBetSlipModal, 
  WhatsAppCtaModal, 
  FaqAccordion, 
  ProvidersBar, 
  PaymentMethodsBar,
  WHATSAPP_LINK, 
  Match 
} from '@ramji/shared';

const config = SITE_CONFIGS.ramji5;

export default function HomePage() {
  const [selectedSport, setSelectedSport] = useState<string>('all');
  const [betSlipOpen, setBetSlipOpen] = useState(false);
  const [ctaModalOpen, setCtaModalOpen] = useState(false);
  const [activeSelection, setActiveSelection] = useState<{
    match: Match;
    team: string;
    odds: number;
    type: 'back' | 'lay';
  } | null>(null);

  const handleSelectOdds = (match: Match, team: string, odds: number, type: 'back' | 'lay') => {
    setActiveSelection({ match, team, odds, type });
    setBetSlipOpen(true);
  };

  const filteredMatches = selectedSport === 'all' 
    ? MOCK_MATCHES 
    : MOCK_MATCHES.filter(m => m.sport === selectedSport);

  return (
    <div className="w-full">
      {/* 1. VIP HIGH-ROLLER HERO */}
      <section className="relative overflow-hidden py-12 sm:py-20 border-b border-rose-500/20 bg-gradient-to-b from-[#240813] via-[#15040a] to-[#0f0307]">
        <div className="absolute top-0 left-1/4 w-[650px] h-[350px] bg-rose-600/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-5 right-10 w-[350px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold tracking-wider uppercase">
                <Crown size={14} className="text-amber-400" />
                <span>The Sovereign VIP Club • High-Stakes Private Tables</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                RAMJI247 Online Casino, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300">
                  Live Dealer & Sports Exchange
                </span>
              </h1>

              <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Welcome to <strong className="text-rose-400 font-semibold">RAMJI247</strong>. Explore live dealer tables, Indian card classics including Teen Patti and Andar Bahar, and real-time sports exchange markets with 24/7 WhatsApp concierge assistance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => setCtaModalOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-700 hover:to-red-800 text-white font-extrabold text-sm tracking-wide shadow-[0_0_30px_rgba(225,29,72,0.4)] transition-all hover:scale-[1.02]"
                >
                  <Crown size={18} className="fill-amber-300 text-amber-300" />
                  <span>Request VIP Concierge ID</span>
                </button>

                <button
                  onClick={() => setCtaModalOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-rose-500/40 text-rose-300 font-bold text-sm transition-all"
                >
                  <Play size={16} className="fill-current" />
                  <span>Explore VIP Demo</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <Crown size={16} className="text-amber-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">No Upper Limit</div>
                    <div className="text-[11px] text-neutral-400">High Stakes Tables</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-rose-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Priority Queue</div>
                    <div className="text-[11px] text-neutral-400">Under 10s Service</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Instant IMPS</div>
                    <div className="text-[11px] text-neutral-400">High Volume Wire</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-sky-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Private & Discreet</div>
                    <div className="text-[11px] text-neutral-400">Direct WhatsApp</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High Stakes Live Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-neutral-900/90 border border-rose-500/30 p-5 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-rose-500/20 text-xs">
                  <span className="font-bold text-rose-400 flex items-center gap-1.5">
                    <Crown size={14} className="text-amber-400" />
                    EXCLUSIVE VIP HIGH-STAKES TABLE
                  </span>
                  <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold text-[10px]">VIP EXCLUSIVE</span>
                </div>

                <div className="bg-black/50 rounded-xl p-4 border border-white/5 space-y-2 mb-4">
                  <div className="flex justify-between items-center text-sm font-bold text-white">
                    <span>Live Teen Patti 20-20 Private Table</span>
                    <span className="text-amber-400 font-mono text-xs">Table # VIP-7</span>
                  </div>
                  <div className="text-xs text-neutral-400">
                    Host: Elena (Evolution Gaming VIP Studio)
                  </div>
                  <div className="text-[11px] text-emerald-400 pt-1 font-mono">
                    Table Limits: ₹500 - ₹5,00,000 per hand
                  </div>
                </div>

                <button
                  onClick={() => setCtaModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle size={15} />
                  <span>Reserve Table via WhatsApp Concierge</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MATCHES LIST */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">Premier Markets</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">High-Liquidity Fixtures</h2>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {['all', 'cricket', 'football', 'tennis', 'kabaddi'].map((sport) => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                  selectedSport === sport
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {sport}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMatches.map((match) => (
            <MatchCard
              key={match.id}
              match={match}
              onSelectOdds={handleSelectOdds}
              brandPrimary="text-rose-400"
            />
          ))}
        </div>
      </section>

      {/* 3. CASINO SECTION */}
      <section className="py-12 sm:py-16 bg-neutral-950/80 border-y border-rose-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">Private Studios</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">VIP Dealer Suites & High-Limit Slots</h2>
            </div>
            <Link href="/casino" className="text-xs font-bold text-rose-400 hover:underline flex items-center gap-1">
              <span>View VIP Suites</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {MOCK_CASINO_GAMES.map((game) => (
              <CasinoCard
                key={game.id}
                game={game}
                onPlayDemo={() => setCtaModalOpen(true)}
                brandPrimary="text-rose-400"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. PAYMENT & PROVIDERS */}
      <PaymentMethodsBar />
      <ProvidersBar />

      {/* 5. PLATFORM OVERVIEW & RESPONSIBLE GAMING GUIDE */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">Platform Guide</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            RAMJI247 Online Casino &amp; Sports Exchange Overview
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
            RAMJI247 provides structured market information across Indian card games, live studio tables, and in-play sports fixtures. Review our core platform categories and player protection standards below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-2.5">
            <h3 className="text-base font-bold text-white">Live Dealer &amp; Indian Card Classics</h3>
            <p className="text-neutral-400">
              Our <Link href="/casino" className="text-rose-400 hover:underline">Live Casino directory</Link> covers traditional Indian card formats such as Teen Patti 20-20 and Andar Bahar alongside European Roulette, Lightning Baccarat, and crash multiplier titles from recognized studios including Evolution, Ezugi, and Spribe.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-2.5">
            <h3 className="text-base font-bold text-white">In-Play Sports Exchange Markets</h3>
            <p className="text-neutral-400">
              Track real-time back and lay odds across international T20 leagues, Test cricket, football, and grand slam tennis in the <Link href="/sports" className="text-rose-400 hover:underline">Sports Exchange hub</Link>. Interactive odds cards let you preview market depth and potential returns before connecting with our team.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-2.5">
            <h3 className="text-base font-bold text-white">Verified Support &amp; 18+ Safe Play</h3>
            <p className="text-neutral-400">
              RAMJI247 operates strictly for adults aged 18 and above. Our <Link href="/contact" className="text-rose-400 hover:underline">24/7 WhatsApp support desk</Link> assists with account inquiries and verification, while our <Link href="/responsible-gaming" className="text-rose-400 hover:underline">Responsible Gaming policy</Link> outlines session limits and self-exclusion options.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQS */}
      <FaqAccordion 
        faqs={GENERAL_FAQS}
        title="RAMJI247 Frequently Asked Questions"
        subtitle="Answers on online casino tables, sports exchange markets, and 24/7 WhatsApp concierge support."
        brandPrimary="text-rose-400"
      />

      <QuickBetSlipModal
        isOpen={betSlipOpen}
        onClose={() => setBetSlipOpen(false)}
        selection={activeSelection}
        siteName={config.name}
      />

      <WhatsAppCtaModal
        isOpen={ctaModalOpen}
        onClose={() => setCtaModalOpen(false)}
        siteName={config.name}
      />
    </div>
  );
}

