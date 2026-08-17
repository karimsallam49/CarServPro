import { useEffect, useState, useRef } from "react";
import HomePage from "../../Pages/HomePage";
import NavBare from "../Navbare/NavBare";
import FooterComponent from "../footer/FooterComponent";
import "./LayoutStyle.css";

const SECTIONS = ["features", "benefits", "screenshots", "pricing", "contact"];

const Layout = () => {
  const [activeSection, setActiveSection] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);

            
            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      {
        root: container,
        threshold: 0.1,  
      }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [scrollRef.current]);

  return (
    <div ref={scrollRef} className="w-100 layoutcontainer" >
      <NavBare activeSection={activeSection} />
      <HomePage />
      <FooterComponent />
    </div>
  );
};

export default Layout;
