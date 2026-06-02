export default function Splash({ done }) {
  return (
    <div className={`splash ${done ? 'splash-out' : ''}`}>
      <div className="splash-inner">
        <span className="splash-name">
          YUNIS <span className="splash-name-sub">Talent</span>
        </span>
        <div className="splash-bar">
          <div className="splash-bar-fill" />
        </div>
        <span className="splash-sub">IT Headhunter · Consultora de Talento</span>
      </div>
    </div>
  )
}
