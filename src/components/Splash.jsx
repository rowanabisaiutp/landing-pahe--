export default function Splash({ done }) {
  return (
    <div className={`splash ${done ? 'splash-out' : ''}`}>
      <div className="splash-inner">
        <span className="splash-name">Yunis Talent</span>
        <div className="splash-bar">
          <div className="splash-bar-fill" />
        </div>
        <span className="splash-sub">Headhunter · Consultora de Talento</span>
      </div>
    </div>
  )
}
