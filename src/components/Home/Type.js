import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Digital Transformation",
          "Business Process Optimization",
          "Business Analysis",
          "Data & Decision Intelligence",
          "Process Automation",
          "AI for Business",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;