import { useState, useEffect } from 'react'

const links = [
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Servicios',      href: '#servicios'      },
  { label: 'Por qué yo',    href: '#por-que'         },
  { label: 'Testimonios',   href: '#testimonios'     },
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
      <span className="nav-logo">Yunis Talent</span>

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
