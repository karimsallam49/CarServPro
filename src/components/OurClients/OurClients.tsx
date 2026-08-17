import { useEffect, useState } from "react";
import { getOurClients } from "../../services/api";
import "./OurClients.css";

const OurClients = () => {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        const response = await getOurClients();
        if (response.success && response.data) {
          setClients(response.data);
        }
      } catch (err) {
        setError("Failed to load clients");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return (
      <div className="clients-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="clients-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  if (clients.length === 0) {
    return (
      <div className="clients-container">
        <div className="no-data">No clients available</div>
      </div>
    );
  }

  return (
    <div className="clients-container">
      <h2 className="clients-title">Our Clients</h2>
      <div className="clients-grid">
        {clients
          .filter((client) => client.is_active)
          .sort((a, b) => a.order - b.order)
          .map((client) => (
            <div key={client.id} className="client-card">
              <div className="client-logo">
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="logo-image" />
                ) : (
                  <div className="logo-placeholder">{client.name.charAt(0)}</div>
                )}
              </div>
              <h3 className="client-name">{client.name}</h3>
              {client.description && <p className="client-description">{client.description}</p>}
              {client.website && (
                <a
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="client-website"
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default OurClients;
