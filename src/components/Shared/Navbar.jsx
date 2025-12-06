import React from "react";
import { HiMenu } from "react-icons/hi";
import CustomNavLink from "../Common/CustomNavLink";
import { Link, NavLink, useNavigate } from "react-router";
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import Logo from "../Common/Logo";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = ({ theme, toggleTheme }) => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Error logging out");
    }
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/all-tickets", label: "All Tickets" },
  ];

  return (
    <div
      className={`bg-base-100 ${
        theme === "routelynk-light"
          ? "shadow-sm"
          : "shadow-[0_4px_16px_rgba(0,0,0,0.45)]"
      } border-b border-base-300 backdrop-blur-sm sticky top-0 z-50`}
    >
      <nav className="navbar container mx-auto px-4">
        {/* Left Side: Logo & Mobile Dropdown */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <HiMenu className="h-6 w-6" />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <CustomNavLink links={links} />

              <div className="divider my-2"></div>

              {/* Mobile Theme Toggle */}
              <li className="flex justify-center py-2">
                <button
                  onClick={toggleTheme}
                  className="btn btn-ghost text-primary text-xl"
                >
                  {theme === "routelynk-dark" ? <FaSun /> : <FaMoon />}
                </button>
              </li>

              {/* Mobile Auth Buttons (Only if NOT logged in) */}
              {!user && (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className="btn btn-sm btn-gradient mb-2"
                    >
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

          {/* Reusable Logo Component */}
          <Logo size="md" />
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <CustomNavLink links={links} />
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle text-primary text-xl"
          >
            {theme === "routelynk-dark" ? <FaSun /> : <FaMoon />}
          </button>

          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar border border-primary"
              >
                <div className="w-10 rounded-full">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName} />
                  ) : (
                    <FaUserCircle className="w-full h-full text-gray-400" />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-base-200"
              >
                <li className="menu-title px-4 py-2">
                  <span className="text-primary text-center font-bold">
                    {user.displayName}
                  </span>
                </li>
                <li>
                  <Link to="/dashboard/profile" className="justify-between">
                    Dashboard
                  </Link>
                </li>
                <div className="divider my-0"></div>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-gradient text-white font-semibold"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="hidden md:flex gap-2">
              <NavLink to="/login" className="btn btn-gradient font-semibold">
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn btn-gradient font-semibold"
              >
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
