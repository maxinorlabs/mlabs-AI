import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = "Maxinor — India's Operator-Led Venture Studio";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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
        {/* Orange top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: '#F36F21',
          }}
        />

        {/* Orange left glow */}
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            right: '-60px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(243, 111, 33, 0.08)',
            filter: 'blur(60px)',
          }}
        />

        {/* Top: Logo + wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Logo circle */}
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: '#F36F21',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: '#0B1F3B',
              }}
            />
          </div>
          <span
            style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#F7F7F5',
              letterSpacing: '0.15em',
              fontFamily: 'sans-serif',
            }}
          >
            MAXINOR
          </span>
        </div>

        {/* Middle: Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div
              style={{
                width: '5px',
                height: '68px',
                background: '#F36F21',
                borderRadius: '4px',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: '62px',
                fontWeight: 700,
                color: '#F7F7F5',
                lineHeight: 1.1,
                fontFamily: 'sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              India's First
              {'\n'}Operator-Led
              {'\n'}Venture Studio
            </span>
          </div>
          <p
            style={{
              fontSize: '26px',
              color: 'rgba(247,247,245,0.55)',
              fontFamily: 'sans-serif',
              fontWeight: 400,
              margin: 0,
              paddingLeft: '19px',
            }}
          >
            Operators backing Entrepreneurs
          </p>
        </div>

        {/* Bottom: Tags + domain */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div style={{ display: 'flex', gap: '12px' }}>
            {['Venture Build', 'Venture Scale', 'Venture Investment'].map((tag) => (
              <div
                key={tag}
                style={{
                  background: 'rgba(243,111,33,0.15)',
                  border: '1px solid rgba(243,111,33,0.3)',
                  borderRadius: '100px',
                  padding: '8px 20px',
                  fontSize: '16px',
                  color: '#F36F21',
                  fontFamily: 'sans-serif',
                  fontWeight: 600,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <span
            style={{
              fontSize: '18px',
              color: 'rgba(247,247,245,0.35)',
              fontFamily: 'sans-serif',
            }}
          >
            mlabs.co.in
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
