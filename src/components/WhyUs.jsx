import Carousel from './Carousel'
import { reasons } from '../data/reasons'

const BG = 'https://picsum.photos/seed/office-team/1400/700'

export default function WhyUs() {
  return (
    <section
      className="section section-bg"
      id="por-que"
      data-reveal
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="section-bg-overlay" />
      <div className="section-bg-content">
        <div className="section-header section-header-light">
          <span className="section-tag section-tag-light">¿Por qué Yunis Talent?</span>
          <h2>Talento pasivo que no<br />encontrarás en portales</h2>
          <p>Mi red tarda 10 años en construirse. Tu competencia no tiene acceso a ella.</p>
        </div>
        <Carousel
          items={reasons}
          className="reasons-carousel reasons-carousel-dark"
          renderItem={(r) => (
            <div className="reason-card reason-card-dark">
              <span className="reason-num">{r.num}</span>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
              <span className="reason-stat">{r.stat}</span>
            </div>
          )}
        />
      </div>
    </section>
  )
}
