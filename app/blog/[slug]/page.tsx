import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Breadcrumb, JsonLd } from '@ramji/shared';
import { RAMJI5_BLOG_POSTS } from '../blog-data';
import { Clock, Calendar, UserCheck, ArrowLeft, ArrowRight, HelpCircle } from 'lucide-react';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return RAMJI5_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = RAMJI5_BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  const postUrl = `https://ramji247online.com/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: `${post.metaTitle} | RAMJI247`,
      description: post.metaDescription,
      url: postUrl,
      siteName: 'RAMJI247 Online',
      type: 'article',
      publishedTime: post.isoDate || '2026-11-24T00:00:00+05:30',
      authors: [post.author],
      images: [
        {
          url: `https://ramji247online.com${post.heroImage}`,
          width: 1200,
          height: 630,
          alt: post.heroImageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.metaTitle} | RAMJI247`,
      description: post.metaDescription,
      images: [`https://ramji247online.com${post.heroImage}`],
    },
  };
}

export default function ArticlePage({ params }: PageProps) {
  const post = RAMJI5_BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const otherPosts = RAMJI5_BLOG_POSTS.filter((p) => p.slug !== post.slug);
  const postUrl = `https://ramji247online.com/blog/${post.slug}`;
  const publishedIso = post.isoDate || '2026-11-24T00:00:00+05:30';

  const graphNodes: Record<string, unknown>[] = [
    {
      '@type': 'BlogPosting',
      '@id': `${postUrl}#article`,
      headline: post.title,
      description: post.metaDescription,
      image: `https://ramji247online.com${post.heroImage}`,
      datePublished: publishedIso,
      dateModified: publishedIso,
      author: {
        '@type': 'Organization',
        name: post.author,
        url: 'https://ramji247online.com',
      },
      publisher: {
        '@type': 'Organization',
        name: 'RAMJI247',
        url: 'https://ramji247online.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://ramji247online.com/images/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': postUrl,
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${postUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ramji247online.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://ramji247online.com/blog',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.shortTitle,
          item: postUrl,
        },
      ],
    },
  ];

  if (post.faqs.length > 0) {
    graphNodes.push({
      '@type': 'FAQPage',
      '@id': `${postUrl}#faq`,
      mainEntity: post.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    });
  }

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': graphNodes,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <JsonLd data={jsonLdData} />
      <Breadcrumb
        items={[
          { label: 'Blog', href: '/blog' },
          { label: post.shortTitle },
        ]}
      />

      {/* Article Header */}
      <header className="my-6">
        <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
          <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 font-bold uppercase tracking-wider text-[11px] border border-rose-500/20">
            {post.category}
          </span>
          <span className="text-neutral-400 flex items-center gap-1">
            <Clock size={12} /> {post.readTime}
          </span>
          <span className="text-neutral-400 flex items-center gap-1">
            <Calendar size={12} /> {post.publishedDate}
          </span>
          <span className="text-neutral-400 flex items-center gap-1">
            <UserCheck size={12} /> {post.author}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        {/* Hero Graphic */}
        <figure className="rounded-2xl overflow-hidden border border-white/10 mb-8 bg-neutral-900 shadow-2xl">
          <img
            src={post.heroImage}
            alt={post.heroImageAlt || post.title}
            className="w-full h-auto object-cover"
          />
          {post.heroImageCaption && (
            <figcaption className="px-4 py-3 text-xs text-neutral-400 border-t border-white/10 bg-neutral-950/60">
              {post.heroImageCaption}
            </figcaption>
          )}
        </figure>

        {/* Summary Callout */}
        <div className="rounded-xl bg-gradient-to-r from-rose-500/10 to-transparent border-l-4 border-rose-500 p-5 mb-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
            Overview
          </h2>
          <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed m-0">
            {post.summary}
          </p>
        </div>

        {/* Table of Contents */}
        <div className="rounded-xl bg-neutral-900/50 border border-white/10 p-5 mb-10">
          <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
            Table of Contents
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {post.tableOfContents.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-neutral-400 hover:text-rose-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-rose-500/50">›</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Main HTML Body */}
      <article
        className="prose prose-invert max-w-none text-neutral-300 text-sm sm:text-base leading-relaxed space-y-6"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {/* FAQ Section */}
      {post.faqs.length > 0 && (
        <section className="mt-14 pt-10 border-t border-white/10" id="faqs">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle size={22} className="text-rose-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {post.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-neutral-900/50 border border-white/10 p-5"
              >
                <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed m-0">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Author & Editorial Attribution */}
      <div className="mt-12 rounded-xl bg-neutral-900/60 border border-white/10 p-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 font-black flex items-center justify-center text-lg flex-shrink-0 border border-rose-500/30">
          R
        </div>
        <div className="text-xs text-neutral-400 leading-relaxed">
          <span className="font-bold text-white block mb-0.5">
            {post.author}
          </span>
          Published on {post.publishedDate} under RAMJI247 editorial guidelines. Informational cricket reporting verified against official squad announcements.
        </div>
      </div>

      {/* Navigation to Other Articles */}
      <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>All Blog Articles</span>
        </Link>
        {otherPosts[0] && (
          <Link
            href={`/blog/${otherPosts[0].slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-rose-400 hover:text-white transition-colors"
          >
            <span>Next: {otherPosts[0].shortTitle}</span>
            <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </div>
  );
}
