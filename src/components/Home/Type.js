
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data & Business Analyst",
          "BI & Reporting Specialist",
          "Business Process Analyst",
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
