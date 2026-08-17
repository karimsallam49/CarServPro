"use client";
import { useState, useEffect } from "react";
import PackageCard from "../PackageCard/PackageCard";
import RequestedModelWithPackage from "../RequestedModelWithPackage/RequestedModelWithPackage";
import { getPackages, getFeatures } from "../../services/api";

const PricingSection = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [packages, setPackages] = useState<any[]>([]);
  const [allFeatures, setAllFeatures] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [packagesResponse, featuresResponse] = await Promise.all([
          getPackages(),
          getFeatures(),
        ]);
        
        if (packagesResponse.success && packagesResponse.data) {
          setPackages(packagesResponse.data);
        }
        
        if (featuresResponse.success && featuresResponse.data) {
          const featureNames = featuresResponse.data
            .filter((feature: any) => feature.status)
            .map((feature: any) => feature.name);
          setAllFeatures(featureNames);
        }
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <section
        id="pricing"
        className="d-flex justify-content-center align-items-center min-vh-100 gap-4 flex-wrap p-2"
      >
        <div className="text-center">Loading packages...</div>
      </section>
    );
  }

  if (packages.length === 0) {
    return (
      <section
        id="pricing"
        className="d-flex justify-content-center align-items-center min-vh-100 gap-4 flex-wrap p-2"
      >
        <div className="text-center">No packages available</div>
      </section>
    );
  }

  return (
    <section
      id="pricing"
      className="d-flex justify-content-center align-items-center min-vh-100 gap-4 flex-wrap p-2"
    >
      {packages
        .filter((pkg) => pkg.status)
        .map((pkg) => (
          <PackageCard
            key={pkg.id}
            title={pkg.title}
            price={pkg.price}
            currency={pkg.currency || "EGP"}
            note={pkg.note}
            allFeatures={allFeatures}
            included={pkg.features || []}
            recommended={pkg.recommended}
            buttonLabel={pkg.button_label || "Get Started"}
            onButtonClick={() => setSelectedPackage(pkg.title)}
          />
        ))}

      {selectedPackage && (
        <RequestedModelWithPackage
          show={!!selectedPackage}
          onHide={() => setSelectedPackage(null)}
          fixedPackage={selectedPackage}
        />
      )}
    </section>
  );
};

export default PricingSection;
