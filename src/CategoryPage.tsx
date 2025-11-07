import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { softwareCatalog, Software } from './data/softwareCatalog';

function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [software, setSoftware] = useState<Software[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSoftware();
  }, [category]);

  async function fetchSoftware() {
    try {
      // Check if data exists in localStorage
      const storedData = localStorage.getItem('vortexia-software-catalog');
      const allSoftware: Software[] = storedData ? JSON.parse(storedData) : softwareCatalog;

      // Filter by category
      const filteredData = allSoftware.filter(item => item.categoria === category);
      setSoftware(filteredData);
    } catch (error) {
      console.error('Error fetching software:', error);
      // Fallback to static data
      const filteredData = softwareCatalog.filter(item => item.categoria === category);
      setSoftware(filteredData);
    } finally {
      setLoading(false);
    }
  }

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

      <main>
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '16px',
            borderBottom: '2px solid black',
            paddingBottom: '8px'
          }}>
            {category}
          </h2>

          {loading ? (
            <p>Cargando...</p>
          ) : (
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {software.map((item) => (
                <li
                  key={item.id}
                  style={{
                    marginBottom: '12px',
                    lineHeight: '1.5'
                  }}
                >
                  <strong>{item.nombre}</strong>
                  {' - '}
                  {item.descripcion}
                  {' '}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'blue',
                      textDecoration: 'underline',
                      fontSize: '14px'
                    }}
                  >
                    [Abrir]
                  </a>
                </li>
              ))}
            </ul>
          )}

          {!loading && software.length === 0 && (
            <p>No se encontraron resultados.</p>
          )}
        </section>
      </main>

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

export default CategoryPage;