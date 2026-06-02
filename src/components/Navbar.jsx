import { useState, useEffect } from 'react'

const links = [
  { label: 'Quién soy',     href: '#quien-soy'       },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Servicios',      href: '#servicios'      },
  { label: 'Por qué yo',    href: '#por-que'         },
  { label: 'Casos de éxito',href: '#casos'           },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleLink() { setOpen(false) }

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <span className="nav-logo">
        <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={{ flexShrink: 0 }}>
          <circle cx="32" cy="14" r="4" fill="#E8B4C8"/>
          <circle cx="14" cy="50" r="4" fill="#7E5BAE"/>
          <circle cx="50" cy="50" r="4" fill="#7E5BAE"/>
          <line x1="32" y1="14" x2="14" y2="50" stroke="#7E5BAE" strokeWidth="2" strokeLinecap="round"/>
          <line x1="32" y1="14" x2="50" y2="50" stroke="#7E5BAE" strokeWidth="2" strokeLinecap="round"/>
          <line x1="14" y1="50" x2="50" y2="50" stroke="#7E5BAE" strokeWidth="2" strokeLinecap="round"/>
          <text x="32" y="38" fontFamily="Montserrat,Arial,sans-serif" fontSize="13" fontWeight="800" fill="#fff" textAnchor="middle" letterSpacing="1">AY</text>
        </svg>
        YUNIS <span className="nav-logo-sub">Talent</span>
      </span>

      <nav className={`nav-menu ${open ? 'nav-menu-open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className="nav-link" onClick={handleLink}>
            {l.label}
          </a>
        ))}
      </nav>

      <div className="nav-right">
        <a href="#contacto" className="btn btn-sm" onClick={handleLink}>Solicitar búsqueda</a>
        <button
          className="nav-burger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menú"
        >
          <span className={`burger-line ${open ? 'burger-open' : ''}`} />
          <span className={`burger-line ${open ? 'burger-open' : ''}`} />
          <span className={`burger-line ${open ? 'burger-open' : ''}`} />
        </button>
      </div>
    </header>
  )
}
