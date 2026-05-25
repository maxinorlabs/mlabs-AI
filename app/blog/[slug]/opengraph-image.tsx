import { ImageResponse } from 'next/og';
import { getPost } from '@/lib/blog';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let title = 'Maxinor Blog';
  let author = 'Maxinor';
  let category = 'Insights';

  try {
    const post = getPost(slug);
    title = post.title;
    author = post.author ?? 'Maxinor';
    category = post.category ?? 'Insights';
  } catch {
    // fallback to defaults
  }

  const truncated = title.length > 80 ? title.slice(0, 78) + '...' : title;

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B1F3B',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* Orange top bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: '#F36F21' }} />

        {/* Ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'rgba(243, 111, 33, 0.06)',
            filter: 'blur(80px)',
          }}
        />

        {/* Top: logo + blog label */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: '#F36F21',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#0B1F3B' }} />
            </div>
            <span style={{ fontSize: '26px', fontWeight: 700, color: '#F7F7F5', letterSpacing: '0.15em', fontFamily: 'sans-serif' }}>
              MAXINOR
            </span>
          </div>
          <div
            style={{
              background: 'rgba(243,111,33,0.15)',
              border: '1px solid rgba(243,111,33,0.3)',
              borderRadius: '100px',
              padding: '8px 20px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#F36F21',
              fontFamily: 'sans-serif',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Blog
          </div>
        </div>

        {/* Middle: category + title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1, justifyContent: 'center' }}>
          <span
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#F36F21',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontFamily: 'sans-serif',
            }}
          >
            {category}
          </span>
          <span
            style={{
              fontSize: truncated.length > 60 ? '44px' : '52px',
              fontWeight: 700,
              color: '#F7F7F5',
              lineHeight: 1.15,
              fontFamily: 'sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            {truncated}
          </span>
        </div>

        {/* Bottom: author + domain */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '4px', height: '32px', background: '#F36F21', borderRadius: '4px' }} />
            <span style={{ fontSize: '18px', color: 'rgba(247,247,245,0.65)', fontFamily: 'sans-serif', fontWeight: 400 }}>
              By {author}
            </span>
          </div>
          <span style={{ fontSize: '16px', color: 'rgba(247,247,245,0.35)', fontFamily: 'sans-serif' }}>
            mlabs.co.in
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
