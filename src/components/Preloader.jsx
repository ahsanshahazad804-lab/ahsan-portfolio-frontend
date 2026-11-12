
import { useEffect, useState } from 'react'
import AhsanLogo from './AhsanLogo'
import '../styles/Preloader.css'

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let pageLoaded = document.readyState === 'complete'
    let finishTimeout

    const startTime = Date.now()
    const minimumDuration = 1800

    const handleLoad = () => {
      pageLoaded = true
    }

    window.addEventListener('load', handleLoad)

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime

      if (pageLoaded && elapsed >= minimumDuration) {
        setProgress(100)
        clearInterval(interval)

        finishTimeout = setTimeout(() => {
          onComplete()
        }, 550)

        return
      }

      const nextProgress = Math.min(
        94,
        Math.floor((elapsed / minimumDuration) * 94)
      )

      setProgress(nextProgress)
    }, 30)

    return () => {
      clearInterval(interval)
      clearTimeout(finishTimeout)
      window.removeEventListener('load', handleLoad)
    }
  }, [onComplete])

  const circumference = 383.27
  const strokeOffset =
    circumference - (circumference * progress) / 100

  return (
    <div className="preloader">
      <div className="preloader-content">

        <div className="preloader-logo-wrapper">

          <svg
            className="preloader-progress-ring"
            viewBox="0 0 140 140"
          >
            <circle
              className="progress-ring-bg"
              cx="70"
              cy="70"
              r="61"
            />

            <circle
              className="progress-ring-fill"
              cx="70"
              cy="70"
              r="61"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: strokeOffset,
              }}
            />
          </svg>

          <div className="preloader-logo">
            <AhsanLogo showName={false} />
          </div>

        </div>

        <div className="preloader-percentage">
          <span>{progress}</span>
          <span className="percentage-symbol">%</span>
        </div>

        <p className="preloader-label">
          {progress === 100 ? 'WELCOME' : 'LOADING EXPERIENCE'}
        </p>

        <div className="preloader-bottom-line">
          <span />
        </div>

      </div>
    </div>
  )
}

export default Preloader