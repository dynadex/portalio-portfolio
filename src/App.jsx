// src/App.jsx
import './App.css'
export default function App() {
  const projects = [
    {
      id: 'news-map',
      title: 'Nyheter på karta',
      description:
        'Visualiserar svenska nyheter på en karta baserat på geokodade koordinater.',
      tech: ['React', 'Leaflet', 'Batch/Cache'],
      url: 'https://DIN-REPL-URL-FÖR-NYHETER-PA-KARTA',
      status: 'live',
    },
    {
      id: 'budget-tool',
      title: 'Budgetverktyg (kommer)',
      description:
        'Enkel budgetkalkylator som sparar lokalt i webbläsaren.',
      tech: ['React', 'LocalStorage'],
      url: null,
      status: 'coming',
    },
    {
      id: 'cv-tool',
      title: 'AI-baserad CV-skiss (kommer)',
      description:
        'Formulär som genererar CV-förslag utifrån input.',
      tech: ['React', 'API-integration'],
      url: null,
      status: 'coming',
    },
  ]

  return (
    <div className="portal-root">
      <header className="portal-header">
        <h1>Mina webbapplikationer</h1>
        <p>Demo-projekt som körs direkt i webbläsaren.</p>
      </header>

      <main className="portal-grid">
        {projects.map((project) => (
          <section
            key={project.id}
            className={
              `portal-card ${project.status === 'live' ? 'portal-card--live' : 'portal-card--coming'}`
            }
          >
            <h2>{project.title}</h2>
            <p className="portal-card__description">{project.description}</p>

            <div className="portal-card__tags">
              {project.tech.map((tag) => (
                <span key={tag} className="portal-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="portal-card__actions">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer" className="portal-button">
                  Öppna applikationen
                </a>
              ) : (
                <span className="portal-coming-label">Under utveckling</span>
              )}
            </div>
          </section>
        ))}
      </main>

      <footer className="portal-footer">
        © {new Date().getFullYear()} – Byggd med React + Vite
      </footer>
    </div>
  )
}