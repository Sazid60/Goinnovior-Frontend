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
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { useState } from "react";
import Logo from "../../../public/assets/icon/Logo";
import { UserInfo } from "@/types/user.interface";
import UserDropdown from "./UserDropdown";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#" },
  {
    label: "Our Services",
    href: "#",
    dropdown: true,
    items: [
      { label: "Service 1", href: "#" },
      { label: "Service 2", href: "#" },
    ],
  },
  {
    label: "Our Products",
    href: "#",
    dropdown: true,
    items: [
      { label: "Product 1", href: "#" },
    ],
  },
  { label: "Blogs", href: "/blogs" },
];

const addressInfo = [
  { icon: MapPin, text: "Kashimpur, Gazipur Sadar / Gazipur", textMobile: "Kashimpur, Gazipur", size: 16, sizeMobile: 14 },
  { icon: Phone, text: "+880 01713-027875", textMobile: "+880 01713-027875", size: 16, sizeMobile: 14 },
];

const socialIcons = [{ icon: Facebook }, { icon: Twitter }, { icon: Instagram }, { icon: Youtube }];

interface NavbarProps {
  accessToken: string | null;
  role: string | null;
  user: UserInfo | null;
}

const PublicNavbar = ({ accessToken, role, user }: NavbarProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(role)
  const pathname = usePathname();

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
                <Icon key={idx} size={20} className="text-[#ee4b21] hover:scale-110 transition-transform cursor-pointer" />
              ))}
            </div>
          </div>
        </div>
      </div>


      <nav className="w-full shadow-[0px_2px_10px_rgba(0,0,0,0.10)] border-b border-black/20 relative z-20 bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 h-20">
          <div className="flex items-center gap-8">
            <Logo />
            <ul className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                
                return (
                  <li key={link.label} className="relative group">
                    <Link
                      href={link.href}
                      className={`text-sm flex items-center gap-1 transition-colors duration-200 ${
                        isActive 
                          ? "font-bold text-orange-600" 
                          : "font-normal text-black hover:text-orange-600"
                      }`}
                    >
                      {link.label}
                      {link.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center gap-3 lg:gap-6">

            <Link href="/cart" className="flex items-center gap-1.5 cursor-pointer group">
              <div className="relative">
                <ShoppingCart size={20} className="group-hover:text-orange-600 transition-colors" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-yellow-400 rounded-full text-[10px] font-bold flex items-center justify-center">0</span>
              </div>
              <h1 className="hidden sm:inline text-sm font-medium group-hover:text-orange-600 transition-colors">Cart</h1>
            </Link>

            <div className="flex items-center border-l pl-4 border-gray-200 min-h-10">
              {accessToken && user ? (
                <UserDropdown user={user} />
              ) : (
                <Link href="/login" className="flex items-center gap-1.5 hover:text-orange-600 transition-colors">
                  <User size={18} />
                  <span className="text-sm font-medium">Your Profile</span>
                </Link>
              )}
            </div>

            <button className="hidden md:flex px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold rounded transition-colors shadow-sm">
              Contact Us
            </button>
            <button className="lg:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors" onClick={() => setSidebarOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>


        <div className={`fixed top-0 right-0 h-full w-80 bg-white z-100 shadow-2xl transform transition-transform duration-500 ease-in-out ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between items-center p-5 border-b">
            <Logo />
            <button onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>
          <ul className="flex flex-col gap-1 p-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    onClick={() => setSidebarOpen(false)}
                    className={`block py-3 px-4 rounded-lg text-base transition-all ${
                      isActive 
                        ? "font-bold text-orange-600 bg-orange-50" 
                        : "text-black hover:bg-neutral-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-90 transition-opacity duration-300"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default PublicNavbar;