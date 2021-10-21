import React from "react";
import ReactDOM from "react-dom";
import "@styles/PortalHeader.scss";

const PortalHeaderMenu = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="portal-children">{children}</div>,
    document.getElementById("portalHeader")
  );
};

export { PortalHeaderMenu };