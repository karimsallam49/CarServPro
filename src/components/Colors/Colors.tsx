import { useEffect, useState } from "react";
import { getColors } from "../../services/api";
import "./Colors.css";

const Colors = () => {
  const [colors, setColors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        setLoading(true);
        const response = await getColors();
        if ((response as any).success && (response as any).data) {
          setColors((response as any).data);
        }
      } catch (err) {
        setError("Failed to load colors");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchColors();
  }, []);

  if (loading) {
    return (
      <div className="colors-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  if (error || colors.length === 0) {
    return null; // Don't render anything if no colors from API or error
  }

  // Group colors by category
  const colorsByCategory = colors
    .filter((color) => color.status)
    .reduce((acc: any, color: any) => {
      if (!acc[color.category]) {
        acc[color.category] = [];
      }
      acc[color.category].push(color);
      return acc;
    }, {});

  return (
    <div className="colors-container">
      <h2 className="colors-title">Available Colors</h2>
      {Object.entries(colorsByCategory).map(([category, categoryColors]) => (
        <div key={category} className="color-category">
          <h3 className="category-title">{category}</h3>
          <div className="colors-grid">
            {(categoryColors as any[]).map((color: any) => (
              <div key={color.id} className="color-card">
                <div
                  className="color-preview"
                  style={{ backgroundColor: color.hex_code }}
                >
                  {color.logo_path && (
                    <img
                      src={color.logo_path}
                      alt={color.name}
                      className="color-logo"
                    />
                  )}
                </div>
                <div className="color-info">
                  <h4 className="color-name">{color.name}</h4>
                  <p className="color-hex">{color.hex_code}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Colors;
