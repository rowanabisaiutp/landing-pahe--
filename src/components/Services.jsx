import { services } from '../data/services'

export default function Services() {
  return (
    <section className="section section-alt" id="servicios" data-reveal>
      <div className="section-header">
        <span className="section-tag">Servicios</span>
        <h2>Más que intermediación,<br />consultoría de selección</h2>
        <p>Acompaño el proceso completo — desde el perfilamiento hasta la incorporación del candidato.</p>
      </div>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.num} className="service-item">
            <span className="service-num">{s.num}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
