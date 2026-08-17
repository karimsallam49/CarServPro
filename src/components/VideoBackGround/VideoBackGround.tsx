"use client";
import "./Videostyle.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CtaRiveWithoutLights from "../CtaRiveWithoutLights/CtaRiveWithoutLights";
import CtaRive from "../CtaRive/CtaRive";
import type { Props } from "../../DTO/AppDTO";
import openaiLogo from "../../assets/Images/openai-logo.svg";
import antothropic from "../../assets/Images/anthropic-logo.svg";
import GeminiAi from "../../assets/Images/google-gemini-logo.svg";
import grockAiLogo from "../../assets/Images/grok-icon.svg";
import HeroVideo from "../../assets/Videos/orb-chrome.webm"
const VideoBackGround = ({ targetRef }: Props) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: targetRef,
  });

  // الأماكن النهائية
  const AiIntegrationData = [
    { title: "Powered by OpenAI", image: openaiLogo, final: { top: "10%", left: "50%" } },   // شمال فوق
    { title: "Powered by Anthropic", image: antothropic, final: { top: "10%", right: "50%" } }, // يمين فوق
    { title: "Powered by Google Gemini", image: GeminiAi, final: { bottom: "10%", left: "50%" } }, // شمال تحت
    { title: "Powered by Grok AI", image: grockAiLogo, final: { bottom: "10%", right: "50%" } }, // يمين تحت
  ];

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.3, 0.8, 1]);
  const withoutLightsOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const withLightsOpacity = useTransform(scrollYProgress, [0.2, 0.5, 1], [0, 1, 0]);

  return (
    <div ref={containerRef} className="video-page-container">
      <motion.div
        className="video-container"
        style={{ width: "100%", height: "100%", scale, overflow: "visible" }}
      >
        {/* Rive Animations */}
        <motion.div
          className="orb-circle"
          style={{ width: "100%", height: "100%", opacity: withLightsOpacity }}
        >
          <CtaRive />
        </motion.div>
        <motion.div
          className="orb-circle"
          style={{ width: "100%", height: "100%", opacity: withoutLightsOpacity }}
        >
          <CtaRiveWithoutLights />
        </motion.div>

        
{AiIntegrationData.map((el, index) => {
 const start = 0.2 + index * 0.08;   
  const end = start + .1;   

const opacity = useTransform(
  scrollYProgress,
  [start, start + 0.1, end],
  [0, 1, 1]
);
 
  const x = useTransform(
    scrollYProgress,
    [start, end],
    ["-35%", el.final.left ? "-1%" : "-80%"] 
  );

  const y = useTransform(
    scrollYProgress,
    [start, end],
    ["50%", el.final.top ? "1%" : "80%"]
  );

  return (
    <motion.div
      key={index}
      className="position-absolute  h-100 w-100 text-center"
      style={{
        top: "10%",
        left: "40%",
        opacity,
        translateX: x,
        translateY: y,
        zIndex: 10,
      }}
    >
      <h4 style={{ fontSize: "2rem", marginBottom: "5px" }}>{el.title}</h4>
      <img src={el.image} alt={el.title} style={{ width: "60px", height: "auto" }} />
    </motion.div>
  );
})}

        {/* Video */}
        <video
          src={HeroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>
    </div>
  );
};

export default VideoBackGround;
