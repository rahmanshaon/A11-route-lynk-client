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
import Logo from "../Common/Logo";

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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 text-center lg:text-left">
          {/* Column 1: Logo + Description */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Logo size="lg" direction="col" />

            <p className="mt-4 text-sm md:text-base max-w-xs">
              Book bus, train, launch & flight tickets easily.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="font-bold mb-4">Quick Links</p>
            <ul className="space-y-2">
              <CustomNavLink links={quickLinks} variant="footer" />
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <p className="font-bold mb-4">Contact Info</p>
            <ul className="space-y-2">
              <li className="flex justify-center lg:justify-start items-center gap-2">
                <FaEnvelope className="text-primary" />
                support@routelynk.com
              </li>
              <li className="flex justify-center lg:justify-start items-center gap-2">
                <FaPhone className="text-primary" />
                +880 1000-000000
              </li>
              <li className="flex justify-center lg:justify-start items-center gap-2">
                <FaFacebook className="text-primary" />
                Facebook Page
              </li>
            </ul>
          </div>

          {/* Column 4: Payment Methods */}
          <div>
            <p className="font-bold mb-4">Payment Methods</p>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-base-100 shadow-sm">
                <FaCcStripe className="text-primary text-xl" /> Stripe
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-base-100 shadow-sm">
                <FaCcVisa className="text-primary text-xl" /> Visa
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-base-100 shadow-sm">
                <FaCcMastercard className="text-primary text-xl" /> Mastercard
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-base-300 pt-6 text-center">
          © {new Date().getFullYear()} RouteLynk. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
