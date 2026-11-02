import { HomePage } from '@/components/home/HomePage';
import type { Insight } from '@/components/home/OperatorInsights';
import { authorProfiles } from '@/lib/authors';
import { formatDate, getAllPosts, getPost } from '@/lib/blog';
import { PARTNER_FACES } from '@/lib/partners';

// The Home page itself is interactive (client-side); this server wrapper hands it the latest articles, so the
// blog's full text never ships to the browser.
export default function Page() {
  const insights: Insight[] = getAllPosts()
    .slice(0, 4)
    .map((post) => {
      const words = getPost(post.slug).content.split(/\s+/).filter(Boolean).length;
      const face = PARTNER_FACES.find((f) => f.name === post.author);
      return {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        category: post.category,
        date: formatDate(post.date),
        minutes: Math.max(1, Math.round(words / 220)),
        author: post.author,
        authorRole: face?.role ?? authorProfiles[post.author]?.role,
        authorImage: face?.image,
      };
    });

  return <HomePage insights={insights} />;
}
