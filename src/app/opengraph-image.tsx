import { ImageResponse } from 'next/og';

export const alt = 'Digital Futurity, from MVP to production-grade';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background:
            'radial-gradient(1200px 600px at 20% 0%, #0d1b2a 0%, #050508 55%)',
          padding: 80,
          color: '#f8fafc',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em' }}>
          DIGITAL FUTURITY
          <div style={{ width: 12, height: 12, borderRadius: 999, background: '#00d4ff' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 82, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            You&apos;ve built something.
          </div>
          <div style={{ fontSize: 82, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#00d4ff' }}>
            We make it real.
          </div>
        </div>

        <div style={{ fontSize: 30, color: '#94a3b8' }}>
          From fragile MVP to production-grade. Senior engineering, startup speed.
        </div>
      </div>
    ),
    { ...size },
  );
}
