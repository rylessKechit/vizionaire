import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'VIZIONAIRE - Digital Marketing Agency Dubai'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Background gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 70%, rgba(251, 191, 36, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(249, 115, 22, 0.15) 0%, transparent 50%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          {/* Logo text */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              background: 'linear-gradient(90deg, #fbbf24, #f97316, #ef4444)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 20,
              letterSpacing: '0.05em',
            }}
          >
            VIZIONAIRE
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 36,
              color: '#ffffff',
              fontWeight: 600,
              marginBottom: 30,
            }}
          >
            Digital Marketing Agency Dubai
          </div>

          {/* Services badges */}
          <div
            style={{
              display: 'flex',
              gap: 16,
              marginBottom: 40,
            }}
          >
            {['SEO', 'PPC', 'Social Media', 'Web Dev'].map((service) => (
              <div
                key={service}
                style={{
                  padding: '10px 24px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 30,
                  color: '#ffffff',
                  fontSize: 20,
                  fontWeight: 500,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                {service}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 30,
            }}
          >
            <div
              style={{
                padding: '16px 40px',
                background: 'linear-gradient(90deg, #fbbf24, #f97316)',
                borderRadius: 50,
                color: '#000000',
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              90-Day ROI Guarantee
            </div>

            <div
              style={{
                color: '#9ca3af',
                fontSize: 20,
              }}
            >
              vizionaire.ae
            </div>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: 'linear-gradient(90deg, #fbbf24, #f97316, #ef4444)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
