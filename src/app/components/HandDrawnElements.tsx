// Hand-drawn SVG decorative elements for organic, human touch

export function HandDrawnUnderline({ color = "#C97D60", className = "" }: { color?: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M2 12C25 8 45 15 70 11C95 7 120 14 145 10C165 7 180 13 198 9"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        style={{
          filter: 'url(#roughen)',
        }}
      />
      <defs>
        <filter id="roughen">
          <feTurbulence type="fractalNoise" baseFrequency="0.15" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
        </filter>
      </defs>
    </svg>
  );
}

export function HandDrawnCircle({ color = "#E8B852", className = "" }: { color?: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 10C85 10 105 30 105 55C105 80 85 100 60 100C35 100 15 80 15 55C15 30 35 10 60 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
        style={{
          filter: 'url(#roughen2)',
        }}
      />
      <defs>
        <filter id="roughen2">
          <feTurbulence type="fractalNoise" baseFrequency="0.2" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
      </defs>
    </svg>
  );
}

export function HandDrawnArrow({ color = "#C97D60", className = "" }: { color?: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 50C25 48 35 52 45 50C55 48 65 52 75 50"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M70 42L78 50L70 58"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}

export function BrushStroke({ color = "#E8B852", className = "" }: { color?: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M5 40C50 25 100 55 150 35C200 15 250 45 295 30"
        stroke={color}
        strokeWidth="40"
        strokeLinecap="round"
        fill="none"
        opacity="0.15"
        style={{
          filter: 'url(#watercolor)',
        }}
      />
      <defs>
        <filter id="watercolor">
          <feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
    </svg>
  );
}

export function WatercolorBlob({ color = "#C97D60", className = "" }: { color?: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 20C135 25 165 45 175 80C185 115 170 145 140 165C110 185 70 180 45 155C20 130 15 90 30 60C45 30 65 15 100 20Z"
        fill={color}
        opacity="0.2"
        style={{
          filter: 'url(#watercolorBlob)',
        }}
      />
      <defs>
        <filter id="watercolorBlob">
          <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="5" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" />
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
    </svg>
  );
}

export function HandDrawnStar({ color = "#E8B852", className = "" }: { color?: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 5L35 22L52 22L38 32L43 49L30 39L17 49L22 32L8 22L25 22L30 5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.5"
        style={{
          filter: 'url(#roughStar)',
        }}
      />
      <defs>
        <filter id="roughStar">
          <feTurbulence type="fractalNoise" baseFrequency="0.25" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" />
        </filter>
      </defs>
    </svg>
  );
}

export function WatercolorTexture({ color = "#C97D60", className = "" }: { color?: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Multiple overlapping organic shapes for watercolor effect */}
      <ellipse cx="150" cy="120" rx="180" ry="140" fill={color} opacity="0.08" style={{ filter: 'url(#watercolorTexture1)' }} />
      <ellipse cx="250" cy="160" rx="160" ry="130" fill={color} opacity="0.06" style={{ filter: 'url(#watercolorTexture2)' }} />
      <ellipse cx="200" cy="140" rx="200" ry="150" fill={color} opacity="0.05" style={{ filter: 'url(#watercolorTexture3)' }} />
      
      <defs>
        <filter id="watercolorTexture1">
          <feTurbulence type="fractalNoise" baseFrequency="0.35" numOctaves="6" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <filter id="watercolorTexture2">
          <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="5" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" />
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <filter id="watercolorTexture3">
          <feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" />
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>
    </svg>
  );
}

export function HandDrawnDivider({ color = "#C97D60", className = "" }: { color?: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M2 4C50 6 100 2 150 5C200 8 250 3 298 4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
        style={{
          filter: 'url(#roughenDivider)',
        }}
      />
      <defs>
        <filter id="roughenDivider">
          <feTurbulence type="fractalNoise" baseFrequency="0.18" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
        </filter>
      </defs>
    </svg>
  );
}
