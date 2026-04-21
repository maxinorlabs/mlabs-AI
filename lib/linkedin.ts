export interface LinkedInPost {
  id: string
  url: string
  text: string
  image?: string
  date: string
}

export interface LinkedInProfile {
  name: string
  handle: string
  role: string
  linkedinUrl: string
  avatar: string
  rssUrl: string | null
  posts: LinkedInPost[]
}

interface RSSItem {
  id: string
  url: string
  content_text: string
  image?: string
  date_published: string
}

interface RSSFeed {
  items?: RSSItem[]
}

export async function fetchProfilePosts(rssUrl: string): Promise<LinkedInPost[]> {
  try {
    const res = await fetch(rssUrl, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    const data: RSSFeed = await res.json()
    return (data.items ?? []).slice(0, 10).map((item) => ({
      id: item.id,
      url: item.url,
      text: item.content_text ?? '',
      image: item.image,
      date: item.date_published,
    }))
  } catch {
    return []
  }
}
