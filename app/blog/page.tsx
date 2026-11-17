import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { RAMJI5_BLOG_POSTS } from './blog-data';

export const metadata: Metadata = {
  title: 'Casino Mathematics, Odds & Table Strategy | RAMJI247 Online Blog',
  description: 'Explore expert mathematical analysis of roulette odds, blackjack basic strategy, house edge equations, and gaming probabilities on RAMJI247.',
  alternates: {
    canonical: 'https://ramji247online.com/blog',
  },
  openGraph: {
    title: 'Casino Mathematics, Odds & Table Strategy | RAMJI247 Online Blog',
    description: 'Explore expert mathematical analysis of roulette odds, blackjack basic strategy, house edge equations, and gaming probabilities on RAMJI247.',
    url: 'https://ramji247online.com/blog',
    siteName: 'RAMJI247 Online',
    type: 'website',
  },
};

export default function BlogHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'RAMJI247 Casino Mathematics & Gaming Strategy Blog',
    description: 'Authoritative mathematical guides to table game odds, house edges, and basic strategies.',
    url: 'https://ramji247online.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'RAMJI247',
      url: 'https://ramji247online.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ramji247online.com/images/logo.png',
      },
    },
    blogPost: RAMJI5_BLOG_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.summary,
      url: `https://ramji247online.com/blog/${post.slug}`,
      datePublished: '2026-11-18',
      author: {
        '@type': 'Organization',
        name: post.author,
      },
      image: `https://ramji247online.com${post.heroImage}`,
    })),
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-950/80 border border-rose-800 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Mathematics & Probability Desk
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            RAMJI247 <span className="text-rose-400">Casino Odds & Strategy</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Analytical guides, probability theorems, rule breakdowns, and mathematical insights into classic table games and live streaming mechanics.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {RAMJI5_BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col bg-slate-900/60 rounded-2xl border border-slate-800/80 hover:border-rose-500/50 transition-all duration-300 overflow-hidden group shadow-xl"
            >
              <div className="relative w-full aspect-[16/9] bg-slate-950 border-b border-slate-800/80 p-4">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs mb-3">
                  <span className="px-2.5 py-1 rounded bg-rose-950 text-rose-400 font-semibold border border-rose-800/50">
                    {post.category}
                  </span>
                  <span className="text-slate-400">{post.readTime}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">{post.publishedDate}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-rose-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {post.summary}
                </p>
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    By {post.author}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-400 hover:text-rose-300 group-hover:translate-x-1 transition-all"
                  >
                    Read Breakdown &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Responsible Gaming Notice */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 text-center text-xs text-slate-400 max-w-4xl mx-auto">
          <p className="font-semibold text-slate-300 mb-1">RAMJI247 Responsible Gaming & Probability Information</p>
          <p>
            All table game probabilities, formulas, and strategies are provided strictly for educational and mathematical information. No system can guarantee profits. 18+ only.
          </p>
        </div>
      </div>
    </div>
  );
}
