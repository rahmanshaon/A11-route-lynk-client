import React from "react";
import {
  FaCcMastercard,
  FaCcStripe,
  FaCcVisa,
  FaEnvelope,
  FaFacebook,
  FaPhone,
} from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import CustomNavLink from "../Common/CustomNavLink";

const Footer = () => {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/all-tickets", label: "All Tickets" },
    { path: "/contact", label: "Contact Us" },
    { path: "/about", label: "About" },
  ];

  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300 mt-10">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Column 1: Logo + Short Description */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xl font-bold"
            >
              <img src={logo} alt="RouteLynk Logo" className="w-12" />
              <span className="text-gradient text-2xl font-black">
                RouteLynk
              </span>
            </Link>
            <p className="mt-4 text-sm md:text-base max-w-xs">
              Book bus, train, launch & flight tickets easily.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <p className="font-bold mb-4 text-sm md:text-base">Quick Links</p>
            <ul className="space-y-2 text-sm md:text-base">
              <CustomNavLink links={quickLinks} variant="footer" />
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <p className="font-bold mb-4 text-sm md:text-base">Contact Info</p>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <FaEnvelope className="text-primary" />
                <a
                  href="mailto:support@routelynk.com"
                  className="hover:underline"
                >
                  support@routelynk.com
                </a>
              </li>

              <li className="flex items-center justify-center lg:justify-start gap-2">
                <FaPhone className="text-primary" />
                <a href="tel:+8801000000000" className="hover:underline">
                  +880 1000-000000
                </a>
              </li>

              <li className="flex items-center justify-center lg:justify-start gap-2">
                <FaFacebook className="text-primary" />
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Payment Methods */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <p className="font-bold mb-4 text-sm md:text-base">
              Payment Methods
            </p>
            <p className="text-sm md:text-base mb-3">
              Secure payments powered by Stripe.
            </p>

            {/* Payment badges */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-base-100 shadow-sm">
                <FaCcStripe className="text-primary text-xl" />
                <span className="text-xs md:text-sm">Stripe</span>
              </span>

              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-base-100 shadow-sm">
                <FaCcVisa className="text-primary text-xl" />
                <span className="text-xs md:text-sm">Visa</span>
              </span>

              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-base-100 shadow-sm">
                <FaCcMastercard className="text-primary text-xl" />
                <span className="text-xs md:text-sm">Mastercard</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-base-300 pt-6 text-center text-xs md:text-sm">
          <p>© {new Date().getFullYear()} RouteLynk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
