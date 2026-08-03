import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Process Optimization",
          "Digital Transformation",
          "Business Automation",
          "Organizational Change",
          "Data-Driven Decision Making",
          "Workflow Excellence",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;