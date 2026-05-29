import Carousel from './Carousel'
import { cases } from '../data/cases'

export default function Cases() {
  return (
    <section className="section section-alt" id="casos" data-reveal>
      <div className="section-header">
        <span className="section-tag">Casos de Éxito</span>
        <h2>Posiciones cubiertas</h2>
        <p>Una muestra de búsquedas completadas con tiempos reales.</p>
      </div>
      <Carousel
        items={cases}
        className="cases-carousel"
        renderItem={(c) => (
          <div className="case-card">
            <div className="case-top">
              <span className="case-sector">{c.sector}</span>
              <span className="case-days">{c.days} días</span>
            </div>
            <h3 className="case-position">{c.position}</h3>
            <div className="case-meta">
              <span className="case-tag">{c.level}</span>
              <span className="case-tag">{c.company}</span>
            </div>
          </div>
        )}
      />
    </section>
  )
}
