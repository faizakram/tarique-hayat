import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const size = {
  width: 180,
  height: 180,
}
 
export const contentType = 'image/png'
 
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
          borderRadius: '32px',
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Letter T */}
          <path
            d="M 25 25 L 75 25 L 75 35 L 55 35 L 55 75 L 45 75 L 45 35 L 25 35 Z"
            fill="white"
          />
          
          {/* Letter H */}
          <path
            d="M 30 45 L 38 45 L 38 75 L 30 75 Z M 62 45 L 70 45 L 70 75 L 62 75 Z M 30 57 L 70 57 L 70 63 L 30 63 Z"
            fill="white"
            opacity="0.95"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
