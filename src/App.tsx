import { Routes, Route, Link } from 'react-router-dom';
import { categories } from './data/softwareCatalog';
import CategoryPage from './CategoryPage';

function HomePage() {
  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'white',
      color: 'black'
    }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          margin: '0 0 10px 0',
          lineHeight: '1.2'
        }}>
          VORTEXIA
        </h1>
        <p style={{
          fontSize: '18px',
          margin: '0 0 20px 0',
          color: '#333'
        }}>
          Software simple para tu negocio
        </p>
      </header>

      <nav style={{
        marginBottom: '40px',
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
        padding: '20px 0'
      }}>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                to={`/category/${encodeURIComponent(cat)}`}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'blue',
                  textDecoration: 'underline',
                  fontSize: '14px',
                  cursor: 'pointer',
                  padding: 0,
                  textDecorationColor: 'blue'
                }}
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <footer style={{
        marginTop: '60px',
        paddingTop: '20px',
        borderTop: '1px solid black',
        textAlign: 'center',
        fontSize: '14px',
        color: '#666'
      }}>
        © 2025 Vortexia
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:category" element={<CategoryPage />} />
    </Routes>
  );
}

export default App;
