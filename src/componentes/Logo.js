import React from "react";
import "../hojas-de-estilo/Logo.css";

function Logo({ freeCodeCampLogo }) {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        src={freeCodeCampLogo}
        className="freecodecamp-logo"
        alt="Logo de freeCodeCamp"
      />
    </div>
  );
}
export default Logo;
