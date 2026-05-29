import { specialties } from '../data/specialties'

export default function Specialties() {
  return (
    <section className="section" id="especialidades" data-reveal>
      <div className="section-header">
        <span className="section-tag">Especialidades</span>
        <h2>Perfiles en los que me especializo</h2>
        <p>No hago reclutamiento masivo ni operativo. Me enfoco en los sectores donde el talento marca la diferencia.</p>
      </div>
      <div className="cards-grid">
        {specialties.map((s) => (
          <div key={s.title} className="card">
            <div className="card-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
