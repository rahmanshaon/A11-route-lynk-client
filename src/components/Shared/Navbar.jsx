import React from "react";
import { HiMenu } from "react-icons/hi";
import CustomNavLink from "../Common/CustomNavLink";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const user = null;

  const links = [
    { path: "/", label: "Home" },
    { path: "/all-tickets", label: "All Tickets" },
  ];

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <nav className="navbar container mx-auto px-4">
        {/* Left Side: Logo & Mobile Dropdown */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <HiMenu className="h-6 w-6" />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* Mobile Menu Links */}
              <CustomNavLink links={links} />

              <div className="divider my-2"></div>

              {/* Mobile Auth Buttons */}
              {!user && (
                <>
                  <li>
                    <NavLink to="/login" className="btn btn-sm btn-gradient mb-2">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/register" className="btn btn-sm btn-gradient">
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <img src={logo} alt="RouteLynk Logo" className="w-10 md:w-12" />
            <span className="text-gradient text-2xl md:text-3xl font-black">
              RouteLynk
            </span>
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <CustomNavLink links={links} />
          </ul>
        </div>

        {/* Right Side: Auth Buttons (Desktop Only) */}
        <div className="navbar-end">
          {!user && (
            <div className="hidden md:flex gap-2">
              <NavLink to="/login" className="btn btn-gradient font-semibold">
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-gradient font-semibold">
                Register
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
