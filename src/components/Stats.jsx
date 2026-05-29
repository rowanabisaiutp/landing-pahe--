import { stats } from '../data/stats'

export default function Stats() {
  return (
    <section className="stats-bar" data-reveal>
      {stats.map((s) => (
        <div key={s.label} className="stat">
          <span className="stat-value">{s.value}</span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </section>
  )
}
