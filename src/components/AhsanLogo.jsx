function AhsanLogo({ showName = true }) {
  return (
    <a href="#home" className="brand-logo" aria-label="Ahsan Home">

      <svg
        className="brand-icon"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ahsanGradient" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#FF2638" />
            <stop offset="100%" stopColor="#E50914" />
          </linearGradient>
        </defs>

        {/* Outer A shape */}
        <path
          d="M12 83 L50 12 L88 83"
          stroke="url(#ahsanGradient)"
          strokeWidth="11"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />

        {/* Inner geometric detail */}
        <path
          d="M32 83 L50 49 L68 83"
          stroke="url(#ahsanGradient)"
          strokeWidth="8"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />

        {/* Crossbar */}
        <path
          d="M39 68 H61"
          stroke="#FF2638"
          strokeWidth="7"
        />
      </svg>

      {showName && <span className="brand-name">AHSAN</span>}

    </a>
  )
}

export default AhsanLogo