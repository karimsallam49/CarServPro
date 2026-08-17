import { useEffect, useState } from "react";
import { getPackages } from "../../services/api";
import "./Packages.css";

const Packages = () => {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const response = await getPackages();
        if (response.success && response.data) {
          setPackages(response.data);
        }
      } catch (err) {
        setError("Failed to load packages");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return (
      <div className="packages-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="packages-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  if (packages.length === 0) {
    return (
      <div className="packages-container">
        <div className="no-data">No packages available</div>
      </div>
    );
  }

  return (
    <div className="packages-container">
      <h2 className="packages-title">Our Packages</h2>
      <div className="packages-grid">
        {packages
          .filter((pkg) => pkg.status)
          .map((pkg) => (
            <div
              key={pkg.id}
              className={`package-card ${pkg.recommended ? "recommended" : ""}`}
            >
              {pkg.recommended && <div className="recommended-badge">Recommended</div>}
              <h3 className="package-title">{pkg.title}</h3>
              <p className="package-description">{pkg.description}</p>
              <div className="package-price">
                {pkg.currency} {pkg.price}
              </div>
              {pkg.note && <p className="package-note">{pkg.note}</p>}
              {pkg.features && pkg.features.length > 0 && (
                <ul className="package-features">
                  {pkg.features.map((feature: any, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}
              <button className="package-button">{pkg.button_label || "Get Started"}</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Packages;
