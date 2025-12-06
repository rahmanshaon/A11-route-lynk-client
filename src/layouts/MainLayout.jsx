import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const MainLayout = () => {
  // Initialize theme from localStorage or default to light
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "routelynk-light"
  );

  // Apply theme to HTML element whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle Function
  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "routelynk-light" ? "routelynk-dark" : "routelynk-light"
    );
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
