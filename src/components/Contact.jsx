import { useState } from 'react'
import { SECTORS, LEVELS } from '../data/contact'

export default function Contact() {
  const [form, setForm] = useState({
    empresa: '',
    contacto: '',
    email: '',
    sector: '',
    nivel: '',
    descripcion: '',
  })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('network')
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="cta-section" id="contacto" data-reveal>
      <div className="contact-layout">
        <div className="contact-info">
          <span className="section-tag">Contacto</span>
          <h2>Cuéntame qué<br />perfil necesitas</h2>
          <p>
            Llena el formulario con el contexto del puesto y te contacto en menos de 24 horas
            para coordinar una llamada inicial.
          </p>
          <div className="contact-detail">
            <span className="contact-label">Correo directo</span>
            <span className="contact-value">aide.yunis@headhuntery.com</span>
          </div>
          <div className="contact-detail">
            <span className="contact-label">Teléfono / WhatsApp</span>
            <span className="contact-value">+52 332 163 1410</span>
          </div>
          <div className="contact-detail">
            <span className="contact-label">Respuesta garantizada en</span>
            <span className="contact-value">— 24 horas hábiles</span>
          </div>
          <div className="contact-detail">
            <span className="contact-label">Primera consulta</span>
            <span className="contact-value">— Sin costo</span>
          </div>
          <div className="contact-detail">
            <span className="contact-label">Modelo de pago</span>
            <span className="contact-value">— Fee por posición cubierta</span>
          </div>
        </div>

        <div className="contact-form-wrap">
          {sent ? (
            <div className="form-success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l3 3 5-5" />
              </svg>
              <h3>Mensaje recibido</h3>
              <p>Te contacto en menos de 24 horas hábiles para coordinar la llamada inicial.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Empresa</label>
                  <input type="text" name="empresa" placeholder="Nombre de tu empresa"
                    value={form.empresa} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Nombre de contacto</label>
                  <input type="text" name="contacto" placeholder="Tu nombre completo"
                    value={form.contacto} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>Correo electrónico</label>
                <input type="email" name="email" placeholder="correo@empresa.com"
                  value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Sector del perfil</label>
                  <select name="sector" value={form.sector} onChange={handleChange} required>
                    <option value="">Selecciona un sector</option>
                    {SECTORS.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Nivel del puesto</label>
                  <select name="nivel" value={form.nivel} onChange={handleChange} required>
                    <option value="">Selecciona el nivel</option>
                    {LEVELS.map((l) => <option key={l}>{l}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Descripción del perfil que buscas</label>
                <textarea name="descripcion" rows={4}
                  placeholder="Cuéntame brevemente el puesto, responsabilidades clave y cualquier requisito importante..."
                  value={form.descripcion} onChange={handleChange} required />
              </div>
              {error && (
                <p style={{ color: '#E88FA4', fontSize: '13px', margin: 0 }}>
                  Ocurrió un error al enviar. Intenta de nuevo o escríbeme directamente.
                </p>
              )}
              <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar solicitud'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
