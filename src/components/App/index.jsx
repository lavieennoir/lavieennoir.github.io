import React from "react";
import Logo from "../Logo";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1>Dmytro Khyzhniak</h1>
      <Logo />
    </div>
  );
}

export default App;
