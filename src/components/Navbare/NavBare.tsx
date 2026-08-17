import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import RequestModal from "../ReguestModel/ReguestModel";
import { getColors } from "../../services/api";
import carservprologo from "../../assets/Images/new-logo.svg";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://your-domain.com";

const SECTIONS = [
  { id: "features", label: "features" },
  { id: "tutorial", label: "Tutorial" },
  { id: "pricing", label: "Pricing" },
  { id: "benefits", label: "Benefits" },
  { id: "contact", label: "Contact" },
];

const NavBare = ({ activeSection }: any) => {
  const [logoUrl, setLogoUrl] = useState<string>(carservprologo);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await getColors();
        if ((response as any).success && (response as any).data && (response as any).data.length > 0) {
          // Find the main color/logo or use the first one
          const mainColor = (response as any).data.find((c: any) => c.category === "main") || (response as any).data[0];
          if (mainColor && mainColor.logo_path) {
            setLogoUrl(`${API_BASE_URL}/${mainColor.logo_path}`);
          }
        }
      } catch (err) {
        console.error("Failed to load logo, using fallback");
      }
    };

    fetchLogo();
  }, []);

  return (
    <>
      {/* Navbar for large screens (fixed, centered, width 60%) */}
      <div
        className="d-none d-lg-block position-fixed start-50 translate-middle-x"
        style={{ top: "5%", width: "70%", zIndex: 1050 }}
      >
        <Navbar expand="lg" className="bg-white shadow-sm rounded-5 px-4 py-2">
          <Container fluid className="d-flex justify-content-between align-items-center">
            <Navbar.Brand href="#">
              <img
                src={logoUrl}
                alt="logo"
                style={{ height: "80px", objectFit: "contain" }}
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="align-items-center gap-3">
                {SECTIONS.map((s) => (
                  <Nav.Link
                    key={s.id}
                    href={`#${s.id}`}
                    className={activeSection === s.id ? "active-link" : ""}
                  >
                    {s.label}
                  </Nav.Link>
                ))}
                <RequestModal />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Navbar for medium and small screens (normal flow, full width) */}
      <div className="d-lg-none w-100">
        <Navbar expand="lg" className="bg-white shadow-sm px-3 py-2">
          <Container fluid className="d-flex justify-content-between align-items-center">
            <Navbar.Brand href="#">
              <img
                src={logoUrl}
                alt="logo"
                style={{ height: "60px", objectFit: "contain" }}
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="align-items-center gap-2">
                {SECTIONS.map((s) => (
                  <Nav.Link
                    key={s.id}
                    href={`#${s.id}`}
                    className={activeSection === s.id ? "active-link p-3" : ""}
                  >
                    {s.label}
                  </Nav.Link>
                ))}
                <RequestModal />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBare;
