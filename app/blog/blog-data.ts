export interface BlogPost {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  readTime: string;
  publishedDate: string;
  isoDate?: string;
  author: string;
  heroImage: string;
  heroImageAlt?: string;
  heroImageCaption?: string;
  summary: string;
  tableOfContents: { id: string; label: string }[];
  faqs: { q: string; a: string }[];
  contentHtml: string;
}

export const RAMJI5_BLOG_POSTS: BlogPost[] = [
  {
    slug: 'blair-tickner-injury-india-vs-new-zealand-second-test',
    title: 'Blair Tickner Ruled Out of Second India Test: What New Zealand Must Fix Before Christchurch',
    shortTitle: 'Blair Tickner Ruled Out of 2nd India Test',
    metaTitle: 'Blair Tickner Ruled Out of Second India Test: What New Zealand Must Fix Before Christchurch',
    metaDescription: 'New Zealand pacer Blair Tickner will miss the Christchurch Test against India with a hamstring injury. Matt Fisher has been added to the squad.',
    category: 'Daily Sports News',
    readTime: '3 Min Read',
    publishedDate: '24 November 2026',
    isoDate: '2026-11-24T00:00:00+05:30',
    author: 'RAMJI247 Sports Editorial Desk',
    heroImage: '/images/blog/ramji247online-com-daily-sports-news-24-nov-2026.webp',
    heroImageAlt: 'New Zealand fast bowler walking from the cricket field during a match',
    heroImageCaption: 'New Zealand face a fast-bowling selection decision ahead of the Christchurch Test.',
    summary: 'New Zealand will be without fast bowler Blair Tickner for the second Test against India in Christchurch on 27 November after a right hamstring injury, with Matt Fisher added to the 14-player squad.',
    tableOfContents: [
      { id: 'fresh-injury-setback', label: 'A fresh injury setback for New Zealand' },
      { id: 'why-the-change-matters', label: 'Why the change matters' },
      { id: 'what-to-watch-christchurch', label: 'What to watch in Christchurch' },
      { id: 'quick-facts', label: 'Quick facts' },
      { id: 'the-takeaway', label: 'The takeaway' },
      { id: 'sources', label: 'Sources' }
    ],
    faqs: [],
    contentHtml: `
      <h2 id="fresh-injury-setback">A fresh injury setback for New Zealand</h2>
      <p>
        New Zealand will be without fast bowler Blair Tickner for the second Test against India after he suffered a right hamstring injury in training. The match is scheduled to begin in Christchurch on 27 November.
      </p>
      <p>
        Matt Fisher has been added to the 14-player squad as Tickner's replacement. The update gives the hosts another selection decision after the opening Test in Wellington ended in a draw.
      </p>

      <h2 id="why-the-change-matters">Why the change matters</h2>
      <p>
        Tickner's absence reduces New Zealand's pace options, while the team is already without all-rounder Mitchell Santner, who is recovering from a fractured right hand.
      </p>
      <p>
        Fisher arrives with recent experience against India: he took six wickets during the preceding ODI series. That form could help him enter the conversation for a place in the playing XI.
      </p>

      <h2 id="what-to-watch-christchurch">What to watch in Christchurch</h2>
      <p>
        New Zealand will want more consistency from their bowling attack after India made 720/9 declared in Wellington. The hosts, however, showed considerable resistance with the bat to secure the draw.
      </p>
      <p>
        The key question is whether Fisher gets an immediate opportunity or New Zealand stick with their existing pace combination. The final team will depend on conditions and the balance the selectors want.
      </p>

      <h2 id="quick-facts">Quick facts</h2>
      <ul>
        <li><strong>Second Test:</strong> 27 November to 1 December 2026, Christchurch.</li>
        <li><strong>Tickner:</strong> ruled out with a right hamstring injury.</li>
        <li><strong>Replacement:</strong> Matt Fisher, who took six wickets in the recent ODI series.</li>
        <li><strong>First Test:</strong> Wellington, drawn.</li>
      </ul>

      <h2 id="the-takeaway">The takeaway</h2>
      <p>
        New Zealand have not lost the series, but another injury has narrowed their options. Christchurch now becomes an important test of the depth and flexibility of their bowling group.
      </p>

      <h2 id="sources">Sources</h2>
      <ul>
        <li>ICC official squad update: <a href="https://www.icc-cricket.com/tournaments/world-test-championship/news/new-zealand-lose-fast-bowler-to-injury-for-second-india-test" target="_blank" rel="noopener noreferrer" class="text-rose-400 hover:underline">icc-cricket.com</a></li>
        <li>Reuters report: <a href="https://www.reuters.com/sports/cricket/new-zealand-lose-tickner-hamstring-injury-second-india-test-2026-11-24/" target="_blank" rel="noopener noreferrer" class="text-rose-400 hover:underline">reuters.com</a></li>
      </ul>

      <p class="text-xs text-neutral-400 italic mt-6 pt-4 border-t border-white/10">
        Editorial note: This article reflects the cited reporting and official information available on 24 November 2026.
      </p>
    `
  }
];
