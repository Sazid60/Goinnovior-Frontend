"use client";



import {
  Menu,
  ShoppingCart,
  User,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

import { useState } from "react";
import Logo from "../../../public/assets/icon/Logo";



const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "/about" },
  {
    label: "Our Services",
    href: "#",
    dropdown: true,
    items: [
      { label: "Service 1", href: "/services/1" },
      { label: "Service 2", href: "/services/2" },
    ],
  },
  {
    label: "Our Products",
    href: "#",
    dropdown: true,
    items: [
      { label: "Product 1", href: "/products/1" },
      { label: "Product 2", href: "/products/2" },
    ],
  },
  { label: "Blogs", href: "/blogs" },
];



const addressInfo = [
  {
    icon: MapPin,
    text: "Kashimpur, Gazipur Sadar / Gazipur",
    textMobile: "Kashimpur, Gazipur",
    size: 16,
    sizeMobile: 14,
  },
  {
    icon: Phone,
    text: "+880 01713-027875",
    textMobile: "+880 01713-027875",
    size: 16,
    sizeMobile: 14,
  },
];

const socialIcons = [
  { icon: Facebook },
  { icon: Twitter },
  { icon: Instagram },
  { icon: Youtube },
];

const PublicNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <header className="w-full">

      <div className="bg-[#19bfc3]">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-between h-11">
            <div className="flex items-center gap-6 text-sm font-medium text-white">
              {addressInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <span className="flex items-center gap-1" key={idx}>
                    <Icon size={item.size} />
                    {item.text}
                  </span>
                );
              })}
            </div>
            <div className="flex items-center gap-4 bg-white px-6 h-full">
              {socialIcons.map(({ icon: Icon }, idx) => (
                <Icon key={idx} size={20} className="text-[#ee4b21]" />
              ))}
            </div>
          </div>

          <div className="md:hidden py-3 space-y-3">
            <div className="flex flex-col items-center gap-1 text-sm text-white">
              {addressInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <span className="flex items-center gap-1" key={idx}>
                    <Icon size={item.sizeMobile} />
                    {item.textMobile}
                  </span>
                );
              })}
            </div>
            <div className="flex justify-center gap-5 bg-white py-2 rounded">
              {socialIcons.map(({ icon: Icon }, idx) => (
                <Icon key={idx} size={18} className="text-[#ee4b21]" />
              ))}
            </div>
          </div>
        </div>
      </div>


      <nav className="w-full  shadow-[0px_2px_10px_rgba(0,0,0,0.10)] border-b border-black/20 relative z-20">
        <div className="container mx-auto flex items-center justify-between px-4 h-20 lg:h-20">

          <div className="flex justify-center items center gap-6">
            <div className="flex items-center gap-3">
              <Logo />
            </div>


            <ul className="hidden lg:flex items-center gap-6 flex-1 justify-center">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <li
                    key={link.label}
                    className="relative group flex items-center gap-1 px-3 py-2.5 cursor-pointer"
                  >
                    <span
                      className="text-sm font-normal text-black group-hover:text-orange-600 transition-colors flex items-center gap-1"
                    >
                      {link.label}
                      <ChevronDown size={16} />
                    </span>

                  </li>
                ) : (
                  <li key={link.label} className="px-3 py-2.5">
                    <Link
                      href={link.href}
                      className={`text-sm transition-colors${link.active
                        ? "font-semibold text-orange-600"
                        : "font-normal text-black hover:text-orange-600"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>

          </div>


          <div className="flex items-center gap-3 lg:gap-4">

            <div className="flex items-center gap-1.5">
              <div className="relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-yellow-400 rounded-full text-[10px] flex items-center justify-center">
                  0
                </span>
              </div>
              <div>
                <h1 className="hidden sm:inline text-sm">Cart</h1>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-1.5">
              <User size={16} />
              <span className="text-sm">Your Account</span>
            </div>

            <button className="hidden md:flex px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white text-sm">
              Contact Us
            </button>

            <button
              className="lg:hidden p-2"
              aria-label="Open menu"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300
      ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
    `}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <Logo />
            <button onClick={() => setSidebarOpen(false)} className="text-2xl">
              ×
            </button>
          </div>

          <ul className="flex flex-col gap-2 p-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label} className="flex flex-col gap-2">
                  <span className="flex items-center justify-between font-medium">
                    {link.label}
                    <ChevronDown size={16} />
                  </span>
                  <ul className="pl-4 flex flex-col gap-1 text-sm text-gray-700">
                    {link.items?.map((item) => (
                      <li key={item.label}>{item.label}</li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li
                  key={link.label}
                  className={`text-base ${link.active
                    ? "font-semibold text-orange-600"
                    : "text-black"
                    }`}
                >
                  {link.label}
                </li>
              )
            )}
          </ul>
        </div>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default PublicNavbar;
