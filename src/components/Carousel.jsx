import { useState, useEffect } from 'react'

function chunkArray(arr, size) {
  const result = []
  for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size))
  return result
}

export default function Carousel({ items, renderItem, className = '', perSlide = 2, interval = 6000 }) {
  const slides = chunkArray(items, perSlide)
  const total = slides.length
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  const prev = () => setIdx((i) => (i - 1 + total) % total)
  const next = () => setIdx((i) => (i + 1) % total)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIdx((i) => (i + 1) % total), interval)
    return () => clearInterval(t)
  }, [paused, total, interval])

  return (
    <div
      className={`carousel ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-viewport">
        <div className="carousel-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
          {slides.map((slide, si) => (
            <div key={si} className="carousel-slide">
              <div className="carousel-pair">
                {slide.map((item, ii) => renderItem(item, si * perSlide + ii))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <button className="carousel-btn" onClick={prev} aria-label="Anterior">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="carousel-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === idx ? 'dot-active' : ''}`}
              onClick={() => setIdx(i)}
              aria-label={`Ir a ${i + 1}`}
            />
          ))}
        </div>
        <button className="carousel-btn" onClick={next} aria-label="Siguiente">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
