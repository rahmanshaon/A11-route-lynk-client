import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-1 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
