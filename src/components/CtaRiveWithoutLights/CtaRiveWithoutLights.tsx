"use client";
import Rive from "@rive-app/react-canvas";
import "../../index.css"
const CtaRiveWithoutLights = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Rive
        src="https://cdn.prod.website-files.com/6724edce1aa90d0626ed13ed/67406d6c2e94b281e8cb9cfb_octagoshealth_lines_01.riv"
        stateMachines={["State Machine 1"]}
        artboard="lines_01"
        className="home-circel_rive"

      />
    </div>
  );
};

export default CtaRiveWithoutLights;
