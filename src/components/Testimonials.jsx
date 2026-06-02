import Carousel from './Carousel'
import { testimonials } from '../data/testimonials'

const AVATAR_COLORS = ['#7E5BAE', '#A884C0', '#6a4b94', '#C9A0D4', '#7A6FB0']

function InitialsAvatar({ name, index }) {
  const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('')
  const bg = AVATAR_COLORS[index % AVATAR_COLORS.length]
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" className="testimonial-avatar" style={{ borderRadius: '50%', flexShrink: 0 }}>
      <circle cx="24" cy="24" r="24" fill={bg} />
      <text x="24" y="29" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="700" fontFamily="Montserrat,Arial,sans-serif">
        {initials}
      </text>
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="section" id="testimonios" data-reveal>
      <div className="section-header">
        <span className="section-tag">Testimonios</span>
        <h2>Lo que dicen nuestros clientes</h2>
        <p>Empresas que encontraron al candidato ideal con Yunis Talent.</p>
      </div>
      <Carousel
        items={testimonials}
        className="testimonials-carousel"
        renderItem={(t, i) => (
          <div className="testimonial-card">
            <svg className="quote-icon" viewBox="0 0 32 24" fill="currentColor">
              <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 6 7.2 10H14V24H0zm18 0V14.4C18 6.4 22.8 1.6 32.4 0L34 2.4C28.4 3.6 25.6 6 25.2 10H32V24H18z" />
            </svg>
            <p className="testimonial-quote">{t.quote}</p>
            <div className="testimonial-author">
              <InitialsAvatar name={t.name} index={i} />
              <div>
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role} · {t.company}</span>
              </div>
            </div>
          </div>
        )}
      />
    </section>
  )
}
