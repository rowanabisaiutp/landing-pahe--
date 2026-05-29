# Aide Yunis — Sitio Web Corporativo

Sitio web de marketing y portafolio para **Yunis Talent**, consultora de reclutamiento y adquisición de talento. Construido como una Single Page Application (SPA) con React y Vite, sin dependencias externas más allá del ecosistema de React.

---

## Stack Tecnológico

| Categoría | Tecnología |
|---|---|
| UI | React 19 |
| Build | Vite 8 + plugin-react (Oxc compiler) |
| Estilos | CSS puro con variables custom |
| Linting | ESLint 10 (flat config) |
| Módulos | ES Modules nativos |

---

## Estructura del Proyecto

```
aideYunis/
├── index.html              # Entry point HTML
├── vite.config.js          # Configuración de Vite
├── eslint.config.js        # ESLint v9 flat config
├── package.json
│
└── src/
    ├── main.jsx            # Montaje de la app en el DOM
    ├── App.jsx             # Componente raíz — orquesta todas las secciones
    ├── App.css             # Sistema de diseño completo (variables, clases, animaciones)
    ├── index.css           # Reset y estilos globales
    │
    ├── components/         # Componentes de UI
    │   ├── Splash.jsx      # Pantalla de carga animada
    │   ├── Navbar.jsx      # Navegación sticky con menú mobile
    │   ├── Hero.jsx        # Sección principal con CTA
    │   ├── Stats.jsx       # Barra de métricas clave
    │   ├── Specialties.jsx # Tarjetas de áreas de especialidad
    │   ├── Services.jsx    # Grid de servicios ofrecidos
    │   ├── WhyUs.jsx       # Carrusel de propuestas de valor
    │   ├── LogoTicker.jsx  # Ticker animado de logos de clientes
    │   ├── Testimonials.jsx# Carrusel de testimonios
    │   ├── Cases.jsx       # Carrusel de casos de éxito
    │   ├── Contact.jsx     # Formulario de contacto con validación
    │   ├── Footer.jsx      # Pie de página
    │   ├── Carousel.jsx    # Componente genérico reutilizable de carrusel
    │   └── WhatsAppButton.jsx # Botón flotante de WhatsApp
    │
    ├── data/               # Contenido estático desacoplado de los componentes
    │   ├── cases.js        # 6 casos de éxito (sector, cargo, nivel, días)
    │   ├── testimonials.js # 5 testimonios de clientes
    │   ├── services.js     # 4 servicios (headhunting, selección, assessment, employer branding)
    │   ├── reasons.js      # 4 propuestas de valor con estadísticas
    │   ├── specialties.jsx # 4 áreas de expertise con íconos SVG
    │   ├── stats.js        # 4 métricas para la barra de estadísticas
    │   ├── logos.js        # Nombres de logos de clientes
    │   └── contact.js      # Opciones del formulario (sectores, niveles)
    │
    ├── hooks/
    │   └── useReveal.js    # Hook de scroll reveal con IntersectionObserver
    │
    └── assets/
        └── hero.png        # Imagen principal del hero
```

---

## Arquitectura

### Flujo de datos

El sitio es completamente estático: los componentes consumen datos desde archivos en `src/data/`, sin llamadas a APIs ni estado global. Esto hace que actualizar contenido (testimonios, casos, servicios) sea tan simple como editar los archivos de datos.

```
src/data/*.js  →  src/components/*.jsx  →  src/App.jsx  →  index.html
```

### Orden de secciones (`App.jsx`)

```
Splash → Navbar → Hero → Stats → Specialties → Services →
WhyUs → LogoTicker → Testimonials → Cases → Contact → Footer
└── WhatsAppButton (flotante, siempre visible)
```

### Patrones clave

- **Data-driven components**: Todo el contenido vive en `src/data/`, los componentes solo renderizan.
- **Carrusel genérico**: `Carousel.jsx` es reutilizado por `WhyUs`, `Testimonials` y `Cases` con configuración por props.
- **Scroll reveal**: El hook `useReveal` usa `IntersectionObserver` para animar elementos con `data-reveal` al entrar en viewport.
- **Sin routing**: Navegación por anchor links (`#especialidades`, `#servicios`, etc.).

### Sistema de diseño (CSS)

Variables globales definidas en `App.css`:

```css
--black: #0a0a0a
--off-white: #f5f4f0
--white: #ffffff
--gray-dark / --gray-mid / --gray-light
--border-dark / --border-light
```

Clases utilitarias: `.btn`, `.btn-primary`, `.btn-ghost`, `.card`, `.card-dark`, `.section`, `.section-alt`, `.carousel`.

---

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo con HMR
npm run dev

# Build de producción (output en dist/)
npm run build

# Preview del build de producción
npm run preview

# Linting
npm run lint
```

---

## Dependencias

**Producción** (2):
- `react` ^19.2.6
- `react-dom` ^19.2.6

**Desarrollo** (9):
- `vite` + `@vitejs/plugin-react` — build y dev server
- `eslint` + plugins — linting de hooks y fast refresh
- `@types/react` + `@types/react-dom` — tipos para el editor

---

## Decisiones de diseño

- **Sin librería de UI** — todos los componentes construidos desde cero.
- **Sin TypeScript** — JavaScript puro con JSX.
- **Sin librería de estilos** — CSS custom con variables y Grid/Flexbox.
- **Sin gestión de estado** — estado local por componente, no se necesita más.
- **Sin backend** — el formulario de contacto muestra confirmación en el cliente; la integración con un servicio de envío queda pendiente.
