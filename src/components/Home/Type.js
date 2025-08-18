
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineering Student",
          "Passionate about Data & Analytics",
          "Aspiring Business Intelligence Engineer",
          "ETL & Data Pipeline Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
