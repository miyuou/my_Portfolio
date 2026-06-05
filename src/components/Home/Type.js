
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
   <Typewriter
  options={{
    strings: [
      "SI & Digital Transformation",
      "Functional & Data Analyst",
      "Process Automation Engineer",
      "BI & Reporting Specialist",
      "Data & Business Analyst",
    ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
export default Type;
