import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { getOurClients } from "../../services/api";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://your-domain.com";

const LogoSlider = () => {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        const response = await getOurClients();
        if (response.success && response.data) {
          setClients(response.data);
        }
      } catch (err) {
        console.error("Failed to load clients:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return (
      <div className="container py-5">
        <h5 className="text-center mb-4">Our Clients</h5>
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  const activeClients = clients.filter((client) => client.is_active).sort((a, b) => a.order - b.order);

  return (
    <div className="container py-5">
      <h5 className="text-center mb-4">Our Clients</h5>
      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        {activeClients.map((client) => (
          <div key={client.id} className="mx-5">
            {client.logo ? (
              <img
                src={`${API_BASE_URL}${client.logo}`}
                alt={client.name}
                style={{ height: "120px", opacity: 0.8 }}
              />
            ) : (
              <div
                style={{
                  height: "120px",
                  opacity: 0.8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#666",
                }}
              >
                {client.name}
              </div>
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoSlider;
