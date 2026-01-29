import { Routes, Route, Link } from 'react-router-dom';
import EnterpriseStrategy from './pages/EnterpriseStrategy';
import ModelsPage from './pages/ModelsPage';
import VisualizationsPage from './pages/VisualizationsPage';
import './App.css';

function App() {
  const asOfDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const pdfFiles = [
    {
      name: 'AI Developments Report - January 2026',
      file: 'AI+Developments+Report_+January+2026.pdf',
      path: '/research-012326/AI+Developments+Report_+January+2026.pdf'
    },
    {
      name: 'January 2026 Report',
      file: 'January-2026-Report.pdf',
      path: '/research-012326/January-2026-Report.pdf'
    },
    {
      name: 'Top AI Agents, Models and Emerging Technologies in 2026',
      file: 'Top-AI-Agents-Models-and-Emerging-Technologies-in-2026-An-Enterprise-Architects-Guide.pdf',
      path: '/research-012326/Top-AI-Agents-Models-and-Emerging-Technologies-in-2026-An-Enterprise-Architects-Guide.pdf'
    },
    {
      name: 'Enterprise AI Strategy 2026',
      file: 'Enterprise_AI_Strategy_2026.pdf',
      path: '/enterprise-strategy',
      isRoute: true
    }
  ];

  return (
    <Routes>
      <Route path="/enterprise-strategy" element={<EnterpriseStrategy />} />
      <Route path="/models" element={<ModelsPage />} />
      <Route path="/visualizations" element={<VisualizationsPage />} />
      <Route path="/" element={
        <div className="container">
          <header>
            <h1>AI Agents & Models</h1>
            <p className="subtitle">Current State - January 2026</p>
            <p className="text-muted"><em>As of {asOfDate}</em></p>
          </header>
          <main>
            {/* Main Cards Grid */}
            <div className="main-cards-grid">
              {/* Latest Research Card */}
              <Link to="/visualizations" className="main-card">
                <div className="main-card-content">
                  <div className="main-card-icon">📊</div>
                  <h3 className="main-card-title">Latest Research</h3>
                  <p className="main-card-description">
                    Explore the latest research findings and insights in AI development
                  </p>
                  <span className="main-card-arrow">Learn more →</span>
                </div>
              </Link>

              {/* Latest Agents Development Card */}
              <Link to="/models" className="main-card">
                <div className="main-card-content">
                  <div className="main-card-icon">🤖</div>
                  <h3 className="main-card-title">Latest Agents Development</h3>
                  <p className="main-card-description">
                    Discover the newest AI agents and their capabilities across different tiers
                  </p>
                  <span className="main-card-arrow">Learn more →</span>
                </div>
              </Link>

              {/* Models Card */}
              <Link to="/models" className="main-card">
                <div className="main-card-content">
                  <div className="main-card-icon">⚙️</div>
                  <h3 className="main-card-title">Latest Models</h3>
                  <p className="main-card-description">
                    Browse AI models organized by tier: Enterprise, Mid-Tier, and Small
                  </p>
                  <span className="main-card-arrow">View Models →</span>
                </div>
              </Link>

              {/* Documents & Research Card */}
              <div className="main-card documents-card">
                <div className="main-card-content">
                  <div className="main-card-icon">📄</div>
                  <h3 className="main-card-title">Documents & Research</h3>
                  <div className="documents-list">
                    {pdfFiles.map((pdf, index) => (
                      pdf.isRoute ? (
                        <Link key={index} to={pdf.path} className="document-link">
                          {pdf.name}
                        </Link>
                      ) : (
                        <a key={index} href={pdf.path} download className="document-link">
                          {pdf.name}
                        </a>
                      )
                    ))}
                  </div>
                </div>
              </div>

              {/* Visualizations Card */}
              <Link to="/visualizations" className="main-card">
                <div className="main-card-content">
                  <div className="main-card-icon">📈</div>
                  <h3 className="main-card-title">Visualizations</h3>
                  <p className="main-card-description">
                    View interactive charts and visualizations of AI model performance
                  </p>
                  <span className="main-card-arrow">View Visualizations →</span>
                </div>
              </Link>
            </div>
          </main>
          <footer>
            <p>&copy; {new Date().getFullYear()} AI Research. All rights reserved.</p>
          </footer>
        </div>
      } />
    </Routes>
  );
}

export default App;
