import React, { memo } from "react";
import Logo from "components/Logo";
import Landing from "components/sections/Landing";

function Home() {
  return (
    <>
      <Landing />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Logo />
      </div>
      <div>
        <p>
          I am Full Stack JavaScript Developer with 3+ years of professional
          experience. I have developed a huge range of websites from scratch. My
          primary responsibilities are implementation of new features, bug
          fixing and code review. I also have extensive experience in
          methodologies that ensure the code quality, such as Agile Scrum
          methodology, CI/CD practices and Design Patterns. I can solve complex
          problems and achieve set goals. I have education in Software
          engineering and Upper-Intermediate English level.
        </p>
        <h5>Technical Skills</h5>
      </div>
    </>
  );
}
export default memo(Home);
