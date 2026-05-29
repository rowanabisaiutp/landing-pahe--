export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(https://plus.unsplash.com/premium_photo-1661328090120-a6ef40841abe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
    >
      <div className="hero-content">
        <span className="badge">Headhunter · Consultora de Talento</span>
        <h1>
          Siempre encontramos al<br />
          <span className="highlight">mejor talento</span><br />
          para tu empresa
        </h1>
        <p className="hero-sub">
          10 años construyendo una red de talento pasivo en IT, Marketing,
          Administración y Alta Dirección. Shortlist en 14 días. Fee por posición cubierta.
        </p>
        <div className="hero-actions">
          <a href="#contacto" className="btn btn-primary">Solicitar búsqueda</a>
          <a href="#servicios" className="btn btn-ghost">Ver servicios</a>
        </div>
      </div>
    </section>
  )
}
  