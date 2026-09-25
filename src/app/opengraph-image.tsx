import { SEO_JOB_TITLE, SEO_NAME } from '@/utils/constants';
import { ImageResponse } from 'next/og';

export const alt = `${SEO_NAME} — ${SEO_JOB_TITLE}`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '96px',
        background: '#111111',
        color: '#FAFAFA',
      }}
    >
      <div
        style={{
          fontSize: 88,
          fontWeight: 600,
          letterSpacing: '-0.03em',
        }}
      >
        {SEO_NAME}
      </div>
      <div
        style={{
          marginTop: 24,
          fontSize: 44,
          color: '#A1A1AA',
        }}
      >
        {SEO_JOB_TITLE}
      </div>
      <div
        style={{
          marginTop: 64,
          width: 120,
          height: 8,
          background: '#FAFAFA',
        }}
      />
    </div>,
    size
  );
}
