
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineering Student",
          "Aspiring Web & Mobile Developer",
          "Tech Enthusiast with a Focus on Data and AI",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
