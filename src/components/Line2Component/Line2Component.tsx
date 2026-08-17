"use client";
import RiveComponent from "@rive-app/react-canvas";
import "./lineStyle.css"
const Lines02 = () => {
  return (
  <div className="lines-01 line-contain d-flex align-items-end " style={{ height:"70%",overflow:"hidden" }}>
          <RiveComponent
            src="https://cdn.prod.website-files.com/6724edce1aa90d0626ed13ed/6750c828db37ac793461f944_octagoshealth_lines_02.riv"
            stateMachines="State Machine 1"
            artboard="lines_02"
            className=""
            automaticallyHandleEvents={false}
            style={{ width: "100%", height: "37%",marginTop:"auto" }}
          />
        </div>
  );
};

export default Lines02;
