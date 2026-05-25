import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
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
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: '#F36F21' }} />
        <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(243, 111, 33, 0.07)', filter: 'blur(80px)' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#F36F21', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#0B1F3B' }} />
          </div>
          <span style={{ fontSize: '26px', fontWeight: 700, color: '#F7F7F5', letterSpacing: '0.15em', fontFamily: 'sans-serif' }}>MAXINOR</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#F36F21', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>Venture Scale</span>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
            <div style={{ width: '5px', height: '72px', background: '#F36F21', borderRadius: '4px', flexShrink: 0, marginTop: '6px' }} />
            <span style={{ fontSize: '60px', fontWeight: 700, color: '#F7F7F5', lineHeight: 1.1, fontFamily: 'sans-serif', letterSpacing: '-0.02em' }}>
              {'Operator Platform\nfor Venture Scale'}
            </span>
          </div>
          <p style={{ fontSize: '22px', color: 'rgba(247,247,245,0.5)', fontFamily: 'sans-serif', fontWeight: 400, margin: 0, paddingLeft: '25px' }}>
            We embed. We execute. We scale.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            {['Revenue', 'Operations', 'Product', 'AI & Data'].map((tag) => (
              <div key={tag} style={{ background: 'rgba(243,111,33,0.15)', border: '1px solid rgba(243,111,33,0.3)', borderRadius: '100px', padding: '8px 20px', fontSize: '15px', color: '#F36F21', fontFamily: 'sans-serif', fontWeight: 600 }}>
                {tag}
              </div>
            ))}
          </div>
          <span style={{ fontSize: '16px', color: 'rgba(247,247,245,0.35)', fontFamily: 'sans-serif' }}>mlabs.co.in</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
