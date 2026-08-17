import {
  BiTimeFive,          // clock
  BiBuilding,          // building
  BiCheckCircle,       // check circle
  BiHappyBeaming,      // smile         // person gear
  BiCoinStack,         // coin
} from "react-icons/bi";

const BenefitsSection = () => {
 const benefits = [
    {
      icon: <BiTimeFive size={22} />,
      title: "30% Reduction in Admin Time",
      description: "Automate repetitive tasks and streamline workflows",
    },
    {
      icon: <BiBuilding size={22} />,
      title: "Multi-Branch Management",
      description: "Centralized control with location-specific insights",
    },
    {
      icon: <BiCheckCircle size={22} />,
      title: "Error-Free Parts Ordering",
      description: "AI ensures compatibility and optimal inventory levels",
    },
    {
      icon: <BiHappyBeaming size={22} />,
      title: "Enhanced Customer Experience",
      description:
        "Faster service, accurate estimates, and digital communications",
    },
    {
      icon: <BiHappyBeaming size={22} />,
      title: "Better Technician Productivity",
      description:
        "Clear job assignments and digital access to vehicle information",
    },
    {
      icon: <BiCoinStack size={22} />,
      title: "ROI in 6–12 Months",
      description:
        "Quick return on investment through efficiency gains",
    },
  ];

  return (
    <section
    id="benefits"
      className="py-5 text-center"
      style={{
        backgroundColor: "",
      }}
    >
      <div className="container">
        {/* Title */}
        <h2 className="fw-bold mb-2">Benefits</h2>
        <p className="text-muted mb-5">
          Tangible results for your automotive business
        </p>

        {/* Cards */}
        <div className="row g-4 justify-content-center">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-5"
              style={{ maxWidth: "450px" }}
            >
              <div
                className="card border-0 shadow-sm h-100 text-start"
                style={{
                  borderRadius: "12px",
                  padding: "20px 25px",
                }}
              >
                <div className="d-flex align-items-start">
                  <div
                    className="d-flex justify-content-center align-items-center rounded-circle me-3"
                    style={{
                      backgroundColor: "#8E44AD",
                      color: "white",
                      width: "40px",
                      height: "40px",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">{item.title}</h6>
                    <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
