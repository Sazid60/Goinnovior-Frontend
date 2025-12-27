
"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/icon/Logo";
import { Mail, MapPin, Copy, Check, Facebook, Twitter, Instagram } from "lucide-react";

import { useState } from "react";


const visa = "/assets/images/visa.png";
const master = "/assets/images/master.png";
const nagad = "/assets/images/nagad.png";
const bkash = "/assets/images/bkash.png";
const rocket = "/assets/images/rocket.png";
const upay = "/assets/images/upay.png";
const surecash = "/assets/images/surecash.png";
const taptap = "/assets/images/taptap.png";
const cellfin = "/assets/images/cellfin.png";
const dutch = "/assets/images/dutch.png";
const city = "/assets/images/city.png";
const islamic = "/assets/images/islamic.png";
const brac = "/assets/images/brac.png";
const ucb = "/assets/images/ucb.png";

const paymentChannels = [
  { src: visa, alt: "VISA" },
  { src: master, alt: "MasterCard" },
  { src: nagad, alt: "Nagad" },
  { src: bkash, alt: "bKash" },
  { src: rocket, alt: "Rocket" },
  { src: upay, alt: "Upay" },
  { src: surecash, alt: "SureCash" },
  { src: taptap, alt: "taptap" },
  { src: cellfin, alt: "Cell Fin" },
  { src: dutch, alt: "Dutch Bangla" },
  { src: city, alt: "City Bank" },
  { src: islamic, alt: "Islami Bank" },
  { src: brac, alt: "BRAC Bank" },
  { src: ucb, alt: "UCB" },
];

const PublicFooter = () => {

  const [copied, setCopied] = useState(false);
  const email = "info@zaheen.com";

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <footer className="w-full bg-neutral-100 pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="flex-1 min-w-[250px]">
            <div className="flex items-center gap-4 mb-10">
              <Logo />
            </div>
            <div className="flex flex-col gap-2 text-sm text-black/70 font-light font-['Roboto']">
              <div className="flex items-center gap-2">
                <span className="inline-block w-4 h-4">
                  <MapPin size={16} />
                </span>
                29 SE 2nd Ave, Miami Florida 33131, United States
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-4 h-4">
                  <Mail size={16} />
                </span>

                <span>{email}</span>

                <button
                  onClick={handleCopyEmail}
                  className="p-1 rounded hover:bg-black/10 transition"
                  aria-label="Copy email"
                  title="Copy email"
                >
                  {copied ? (
                    <Check size={14} className="text-green-600" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>

              <div className="text-black text-lg font-bold font-['Roboto'] tracking-wide mt-2">
                (+92) 3942 7879
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row gap-12 justify-between min-w-[250px]">
            <div>
              <div className="text-black text-base font-semibold font-['Roboto'] uppercase mb-3">
                Pages
              </div>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/about"
                    className="text-black text-sm font-light font-['Roboto'] hover:text-orange-600 transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-black text-sm font-light font-['Roboto'] hover:text-orange-600 transition"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-black text-sm font-light font-['Roboto'] hover:text-orange-600 transition"
                  >
                    Our Products
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-black text-base font-semibold font-['Roboto'] uppercase mb-3">
                Information
              </div>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/account"
                    className="text-black text-sm font-light font-['Roboto'] hover:text-orange-600 transition"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    href="/corporate"
                    className="text-black text-sm font-light font-['Roboto'] hover:text-orange-600 transition"
                  >
                    Corporate Enquiries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="text-black text-sm font-light font-['Roboto'] hover:text-orange-600 transition"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-black text-base font-bold font-['Roboto'] uppercase mb-3">
            Payment Channels
          </div>
          <div className="grid grid-cols-7 lg:grid-cols-14 gap-3">
            {paymentChannels.map((item, idx) => (
              <div key={idx} className="flex items-center justify-center ">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={80}
                  height={40}
                  className="rounded bg-white object-contain h-12 w-24"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-black/20 pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-neutral-700 text-base font-semibold font-['Roboto']">
            Copyright ©{" "}
            <span className="text-amber-400">360D Soul Limited</span> 2025. All
            rights reserved.
          </div>
          <div className="flex justify-center items-center gap-4">
            <Facebook size={16} />
            <Twitter size={16} />
            <Instagram size={16}  />
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-neutral-700 text-base font-medium font-['Roboto'] hover:text-orange-600 transition"
            >
              Teams & Condition
            </Link>
            <Link
              href="#"
              className="text-neutral-700 text-base font-medium font-['Roboto'] hover:text-orange-600 transition"
            >
              Privacy & Policy
            </Link>
            <Link
              href="#"
              className="text-neutral-700 text-base font-medium font-['Roboto'] hover:text-orange-600 transition"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;