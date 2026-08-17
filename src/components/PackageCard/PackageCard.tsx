"use client";

import { BsCheck2, BsX } from "react-icons/bs";

type PackageCardProps = {
  title: string;
  price: string | number;
  currency?: string;
  note?: string;
  allFeatures: string[];
  included: string[];
  recommended?: boolean; // ← خاصية recommended
  installmentNote?: string;
  buttonLabel: string;
  onButtonClick?: () => void;
};

const PackageCard = ({
  title,
  price,
  currency = "EGP",
  note,
  allFeatures,
  included,
  recommended = false,
  installmentNote,
  buttonLabel,
  onButtonClick,
}: PackageCardProps) => {
  return (
    <div
      className="card text-center shadow-lg position-relative"
      style={{
        width: "350px",
        borderRadius: "16px",
        overflow: "hidden",
        border: recommended ? "3px solid #F39C12" : "1px solid #e5e7eb",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: recommended ? "0 15px 50px rgba(243, 156, 18, 0.3)" : "0 8px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Recommended Badge */}
      {recommended && (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#F39C12",
            color: "#fff",
            padding: "8px 16px",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
            fontWeight: "700",
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            zIndex: 10,
          }}
        >
          Recommended
        </div>
      )}

      {/* Header */}
      <div
        style={{
          color: "black",
          padding: "35px 20px 25px 20px",
          position: "relative",
        }}
      >
        <h4 className="fw-bold mb-2 text-dark" style={{ fontSize: "1.3rem" }}>
          {title}
        </h4>
        <div className="d-flex align-items-baseline justify-content-center mb-2">
          <h1 className="fw-bold mb-0" style={{ fontSize: "2.8rem" }}>
            {price}
          </h1>
          <span style={{ fontSize: "1.1rem", marginLeft: "4px", opacity: 0.9 }}>{currency}</span>
        </div>
        {note && (
          <p className="mb-0" style={{ fontSize: "13px", opacity: 0.9 }}>
            {note}
          </p>
        )}
      </div>

      {/* Body */}
      <div className="card-body text-start p-4" style={{ backgroundColor: "#ffffff" }}>
        <h6 className="fw-bold mb-4" style={{ fontSize: "0.95rem", color: "#1a1a1a", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          What's Included:
        </h6>
        <ul className="list-unstyled mb-0">
          {allFeatures
            .map((item, index) => {
              // Check if feature is included (case-insensitive and trim)
              const isIncluded = included.some((includedFeature: string) => 
                includedFeature.toLowerCase().trim() === item.toLowerCase().trim()
              );
              return { item, isIncluded, originalIndex: index };
            })
            .sort((a, b) => {
              // Sort: included features first, then excluded features
              if (a.isIncluded && !b.isIncluded) return -1;
              if (!a.isIncluded && b.isIncluded) return 1;
              return a.originalIndex - b.originalIndex;
            })
            .map(({ item, isIncluded, originalIndex }) => (
              <li 
                key={originalIndex} 
                className="d-flex align-items-start mb-3"
                style={{ fontSize: "0.85rem" }}
              >
                {isIncluded ? (
                  <BsCheck2
                    style={{
                      color: "#10b981",
                      fontSize: "1.2rem",
                      marginRight: "10px",
                      flexShrink: 0,
                      marginTop: "-2px",
                    }}
                  />
                ) : (
                  <BsX
                    style={{
                      color: "#d1d5db",
                      fontSize: "1.2rem",
                      marginRight: "10px",
                      flexShrink: 0,
                      marginTop: "-2px",
                    }}
                  />
                )}
                <span style={{ color: isIncluded ? "#374151" : "#9ca3af", lineHeight: "1.6", fontWeight: isIncluded ? "500" : "400" }}>
                  {item}
                </span>
              </li>
            ))}
        </ul>
      </div>

      {/* Footer */}
      <div
        className="py-4 px-4"
        style={{
          backgroundColor: "#f9fafb",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        {installmentNote && (
          <p className="mb-3 fw-semibold" style={{ fontSize: "12px", color: "#6b7280" }}>
            {installmentNote}
          </p>
        )}
        <button
          className="btn text-white fw-semibold w-100 py-3"
          style={{
            backgroundColor: recommended ? "#F39C12" : "#667eea",
            borderRadius: "10px",
            fontSize: "0.95rem",
            transition: "all 0.3s ease",
            boxShadow: recommended ? "0 4px 15px rgba(243, 156, 18, 0.3)" : "0 4px 15px rgba(102, 126, 234, 0.3)",
            letterSpacing: "0.5px",
          }}
          onClick={onButtonClick}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = recommended 
              ? "0 6px 20px rgba(243, 156, 18, 0.4)" 
              : "0 6px 20px rgba(102, 126, 234, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = recommended 
              ? "0 4px 15px rgba(243, 156, 18, 0.3)" 
              : "0 4px 15px rgba(102, 126, 234, 0.3)";
          }}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
