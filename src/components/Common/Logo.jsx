import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";

const Logo = ({ size = "md", direction = "row" }) => {
  // Size map based only on image + main text scaling
  const sizeMap = {
    sm: { img: 28, text: "text-xl", sub: "text-[10px]" },
    md: { img: 40, text: "text-2xl", sub: "text-xs" },
    lg: { img: 56, text: "text-3xl", sub: "text-sm" },
  };

  // Fallback to md if size is invalid
  const selected = sizeMap[size] || sizeMap["md"];

  const { img, text } = selected;

  return (
    <Link
      to="/"
      className={`flex ${
        direction === "col" ? "flex-col text-center" : "flex-row"
      } items-center gap-2 select-none`}
    >
      {/* Logo Image */}
      <img
        src={logo}
        alt="RouteLynk Logo"
        style={{ width: img, height: "auto" }}
      />

      {/* Logo Text */}
      <h1 className={`text-gradient font-extrabold ${text}`}>RouteLynk</h1>
    </Link>
  );
};

export default Logo;
