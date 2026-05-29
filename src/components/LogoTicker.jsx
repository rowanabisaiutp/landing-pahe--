import { logos } from '../data/logos'

export default function LogoTicker() {
  const doubled = [...logos, ...logos]

  return (
    <section className="ticker-section" data-reveal>
      <span className="ticker-label">Empresas que han confiado en Yunis Talent</span>
      <div className="ticker-wrap">
        <div className="ticker-track">
          {doubled.map((name, i) => (
            <span key={i} className="ticker-item">{name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
