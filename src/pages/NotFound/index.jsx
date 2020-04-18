import React, { memo } from "react";
import { pathList } from "routing/routes";
import { useLocation } from "react-router";
import Logo from "components/Logo";

function NotFound() {
  const { pathname } = useLocation();
  if (pathList.includes(pathname)) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        justifyContent: "center",
      }}
    >
      <h2>404</h2>
      <h1>Page Not Found</h1>
      <Logo />
    </div>
  );
}
export default memo(NotFound);
