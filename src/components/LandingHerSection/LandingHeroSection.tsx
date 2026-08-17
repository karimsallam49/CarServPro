import { motion } from "framer-motion"
import { Badge, Card, Container } from "react-bootstrap"
import {
  FaTools,
  FaCar,
  FaCogs,
  FaUsers,
  FaFileInvoiceDollar,
  FaOilCan,
  FaWrench,
  FaTachometerAlt,
  FaBatteryFull,
  FaGasPump,
  FaShieldAlt,
  FaChartLine,
  FaUserCog,
  FaLaptopCode,
  FaCloud,
  FaHeadset,
} from "react-icons/fa";
import type { CardConfig } from "../../DTO/AppDTO";
import RequestModal from "../ReguestModel/ReguestModel";

const LandingHeroSection = () => {
const cards: CardConfig[] = [
  {
    id: 1,
    pos: { top: "14%", left: "12%" },
    icon: <FaCar className="me-2 text-danger fs-5" />,
    badge: { text: "BOOKING", variant: "danger" },
    content: "Quick Service Appointment",
    type: "simple",
    delay: 0.2,
  },
  {
    id: 7,
    pos: { top: "14%", left: "6%" },
    icon: <FaOilCan className="me-2 text-muted fs-6" />,
    badge: { text: "OIL", variant: "light" },
    content: "Oil Change",
    type: "simple",
    blur: true,
    delay: 0.4,
  },
  {
    id: 11,
    pos: { top: "26%", left: "15%" },
    icon: <FaBatteryFull className="me-2 text-success fs-6" />,
    badge: { text: "BATTERY", variant: "light" },
    content: "Battery Health",
    type: "simple",
    blur: true,
    delay: 0.6,
  },

  {
    id: 15,
    pos: { bottom: "28%", left: "8%" },
    icon: <FaCogs className="me-2 text-success fs-5" />,
    badge: { text: "PARTS", variant: "success" },
    content: "Inventory & Spare Parts",
    type: "image",
    img: "https://img.freepik.com/free-photo/car-engine-close-up.jpg?w=600",
    delay: 0.8,
  },
  {
    id: 20,
    pos: { bottom: "12%", left: "14%" },
    icon: <FaTools className="me-2 text-primary fs-5" />,
    badge: { text: "TOOLS", variant: "primary" },
    content: "Workshop Tools",
    type: "simple",
    delay: 1,
  },

  {
    id: 4,
    pos: { top: "16%", right: "20%" },
    icon: <FaUsers className="me-2 text-info fs-5" />,
    badge: { text: "CUSTOMERS", variant: "info" },
    content: "Customer Management CRM",
    type: "image",
    img: "https://img.freepik.com/free-photo/man-car-mechanic-using-computer-diagnose-vehicle.jpg?w=600",
    delay: 1.2,
  },
  {
    id: 8,
    pos: { top: "20%", right: "6%" },
    icon: <FaTachometerAlt className="me-2 text-muted fs-6" />,
    badge: { text: "SPEED", variant: "light" },
    content: "Performance",
    type: "simple",
    blur: true,
    delay: 1.4,
  },
  {
    id: 12,
    pos: { top: "32%", right: "16%" },
    icon: <FaGasPump className="me-2 text-muted fs-6" />,
    badge: { text: "FUEL", variant: "light" },
    content: "Fuel Efficiency",
    type: "simple",
    blur: true,
    delay: 1.6,
  },

  {
    id: 5,
    pos: { bottom: "30%", right: "12%" },
    icon: <FaFileInvoiceDollar className="me-2 text-warning fs-5" />,
    badge: { text: "PAYMENTS", variant: "warning", textColor: "dark" },
    content: "Invoices & Online Payments",
    type: "simple",
    delay: 1.8,
  },
  {
    id: 9,
    pos: { bottom: "16%", right: "18%" },
    icon: <FaWrench className="me-2 text-muted fs-6" />,
    badge: { text: "SERVICE", variant: "light" },
    content: "General Service",
    type: "image",
    img: "https://img.freepik.com/free-photo/tools-arrangement-workshop_23-2148996101.jpg?w=600",
    blur: true,
    delay: 2,
  },
  {
    id: 6,
    pos: { bottom: "8%", right: "7%" },
    icon: <FaWrench className="me-2 text-danger fs-5" />,
    badge: { text: "WORKSHOP", variant: "danger" },
    content: "Workshop Task Management",
    type: "image",
    img: "https://img.freepik.com/free-photo/mechanic-repairing-car-engine.jpg?w=600",
    delay: 2.2,
  },

  {
    id: 21,
    pos: { top: "38%", left: "4%" },
    icon: <FaShieldAlt className="me-2 text-primary fs-5" />,
    badge: { text: "SECURITY", variant: "primary" },
    content: "Secure Data & Backup",
    type: "simple",
    delay: 2.4,
  },
  {
    id: 22,
    pos: { top: "44%", right: "22%" },
    icon: <FaChartLine className="me-2 text-success fs-5" />,
    badge: { text: "REPORTS", variant: "success" },
    content: "Analytics & Reports",
    type: "image",
    img: "https://img.freepik.com/free-photo/business-report-with-charts.jpg?w=600",
    delay: 2.6,
  },
  {
    id: 23,
    pos: { top: "50%", left: "18%" },
    icon: <FaUserCog className="me-2 text-warning fs-5" />,
    badge: { text: "SETTINGS", variant: "warning" },
    content: "User Permissions",
    type: "simple",
    blur: true,
    delay: 2.8,
  },
  {
    id: 24,
    pos: { bottom: "66%", right: "5%" },
    icon: <FaLaptopCode className="me-2 text-info fs-5" />,
    badge: { text: "TECH", variant: "info" },
    content: "System Integrations",
    type: "simple",
    delay: 3,
  },
  {
    id: 25,
    pos: { bottom: "34%", left: "22%" },
    icon: <FaCloud className="me-2 text-secondary fs-5" />,
    badge: { text: "CLOUD", variant: "secondary" },
    content: "Cloud Hosting",
    type: "image",
    img: "https://img.freepik.com/free-photo/cloud-technology-digital-background.jpg?w=600",
    delay: 3.2,
  },
  {
    id: 26,
    pos: { bottom: "40%", right: "10%" },
    icon: <FaHeadset className="me-2 text-danger fs-5" />,
    badge: { text: "SUPPORT", variant: "danger" },
    content: "24/7 Support",
    type: "simple",
    blur: true,
    delay: 3.4,
  },
];
  // const blackHole = { x: "50%", y: "90%" };


  return (
    <>
     <Container
  fluid
  className="text-center d-none d-lg-flex flex-column align-items-center justify-content-center position-relative w-100"
  style={{ zIndex: 10, height: "95vh" }}
>
  {/* هذا يظهر فقط على الشاشات الكبيرة lg وأكبر */}
  <h1 className="fw-bold text-dark display-5 lh-base">
    The Future of Car Service Management <br />
    Powered by <span className="text-primary">AI</span>
  </h1>

  <RequestModal
    buttonLabel="Book a Demo"
    buttonClassName="px-5 py-3 mt-4 rounded-pill fw-semibold"
    buttonStyle={{ backgroundColor: "#0d6efd", border: "none" }}
  />

  {cards.map((card) => (
    <motion.div
      key={card.id}
      className="position-absolute"
      style={{
        ...card.pos,
        width: card.blur ? "160px" : "230px",
        filter: card.blur ? "blur(6px) opacity(0.7)" : "none",
        zIndex: card.blur ? 1 : 5,
      }}
      initial={{ opacity: 0, y: card.blur ? 0 : -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: card.delay }}
    >
      <Card className={card.blur ? "rounded-4 border-0 bg-light" : "shadow rounded-4"}>
        <Card.Body className="p-3">
          <div className="mb-2 d-flex align-items-center">
            {card.icon}
            <Badge bg={card.badge.variant} pill text={card.badge.textColor || undefined}>
              {card.badge.text}
            </Badge>
          </div>
          <div className="fw-semibold fs-6 text-dark">{card.content}</div>
        </Card.Body>
      </Card>
    </motion.div>
  ))}
</Container>

<Container
  fluid
  className="text-center d-flex d-lg-none flex-column align-items-center justify-content-center position-relative w-100"
  style={{ zIndex: 10, height: "120vh",padding:"1rem 0" }}
>
  <div style={{ minHeight:"20%",padding:".5rem"}}>

  <h3 className="fw-bold text-dark  mb-4">
    The Future of Car Service Management <br />
    Powered by <span className="text-primary">AI</span>
  </h3>

  <RequestModal
    buttonLabel="Book a Demo"
    buttonClassName="px-5 py-3 mb-4 rounded-pill fw-semibold"
    buttonStyle={{ backgroundColor: "#0d6efd", border: "none" }}
    />
    </div>

  <div className="h-100 w-100 position-relative">
    {cards
      .filter((card) => !card.blur) 
       .slice(0, 8)
      .map((card, index) => {
        const isLeft = index % 2 === 0; 
        const width = 180;
        const top = `${1 + index * 12}%`; 
        const left = isLeft ? "5%" : undefined;
        const right = !isLeft ? "5%" : undefined;
        return (
          <motion.div
            key={card.id}
            className="position-absolute"
            style={{
              top,
              left,
              right,
              width: `${width}px`,
              filter: card.blur ? "blur(2px) opacity(0.8)" : "none",
              zIndex: card.blur ? 1 : 5,
            }}
            initial={{ opacity: 0, y: card.blur ? 0 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: card.delay }}
          >
            <Card className={card.blur ? "rounded-4 border-0 bg-light" : "shadow rounded-4"}>
              <Card.Body className="p-2 d-flex flex-column align-items-center text-center">
                <div className="mb-1">{card.icon}</div>
                <Badge
                  bg={card.badge.variant}
                  pill
                  text={card.badge.textColor || undefined}
                  className="mb-1"
                >
                  {card.badge.text}
                </Badge>
                <div className="fw-semibold fs-7">{card.content}</div>
              </Card.Body>
            </Card>
          </motion.div>
        );
      })}
  </div>
</Container>

                </>
  )
}

export default LandingHeroSection
