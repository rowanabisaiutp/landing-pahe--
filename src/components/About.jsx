export default function About() {
  return (
    <section className="section about-section" id="quien-soy" data-reveal>
      <div className="about-layout">
        <div className="about-left">
          <span className="section-tag">Quién soy</span>
          <h2>
            Aide Yunis
            <span className="about-title-sub">IT Headhunter</span>
          </h2>
          <p className="about-bio">
            Soy especialista en búsqueda y selección de perfiles de alto impacto en
            Tecnologías de la Información. Con 10 años de trayectoria construí una red
            de talento pasivo que ningún portal puede replicar — y la pongo al servicio
            de las empresas que necesitan el perfil correcto, en el menor tiempo posible.
          </p>
          <p className="about-bio">
            No soy un reclutador genérico. Entiendo el código y entiendo el negocio.
          </p>
        </div>

        <div className="about-right">
          <div className="about-card" data-reveal>
            <span className="about-card-tag">Objetivo</span>
            <p>
              Conectar a las empresas con el talento especializado en TI que no encontrarás
              en portales — perfiles pasivos, de alta demanda y difícil acceso — con
              resultados en 14 días o menos.
            </p>
          </div>
          <div className="about-card" data-reveal>
            <span className="about-card-tag">Misión</span>
            <p>
              Hacer de cada proceso de selección una experiencia premium: transparente,
              ágil y con resultados medibles. Sin relleno de shortlists. Sin candidatos
              genéricos. Solo el talento que tu empresa realmente necesita.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
