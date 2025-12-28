"use client";

import React from "react";
import { Mail, Lock, User, Phone, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "../../../../../public/assets/icon/Logo";
import Link from "next/link"; // Import Link

const RegisterPage = () => {
    return (
        <div className="w-full flex items-center justify-center p-4 md:p-8">
            <div className="w-full container mx-auto relative bg-white rounded-[30px] md:rounded-[40px] overflow-hidden flex items-center justify-center mb-10 shadow-xl">
                <div className="w-[96%] my-[2%] bg-linear-to-b from-[#14b8a6] to-white/10 rounded-[25px] md:rounded-[30px] relative overflow-hidden flex flex-col items-center pt-24 md:pt-32 pb-8 px-4">
                    
                    <div className="w-full px-6 md:px-10 flex justify-between items-center absolute top-6 md:top-8">
                        <div className="w-20 md:w-24 h-10 md:h-12 flex items-center justify-center">
                            <Logo />
                        </div>
                        <div className="flex gap-4 md:gap-6 items-center">
                            {/* Changed button to Link */}
                            <Link href="/login" className="text-white text-xs md:text-sm font-medium hover:opacity-80 transition-opacity">
                                Login
                            </Link>
                            <button className="px-4 md:px-8 py-1.5 md:py-2 bg-white/10 border border-white/40 rounded-full text-white text-[10px] md:text-sm font-medium backdrop-blur-md hover:bg-white/20 transition-all">
                                Sign Up
                            </button>
                        </div>
                    </div>

                    <div className="text-center mt-4 md:mt-0 mb-8">
                        <h1 className="text-white text-2xl md:text-[40px] font-bold leading-tight">Create Account</h1>
                        <p className="text-white/70 text-xs md:text-sm mt-2">Join us today! Please provide your details</p>
                    </div>

                    <div className="w-full max-w-[320px] md:max-w-[420px] space-y-4">
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                            <Input name="client.name" type="text" placeholder="Full Name" className="w-full h-11 md:h-12 pl-12 bg-white border-none rounded-xl text-neutral-800 placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-teal-400" />
                        </div>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                            <Input name="client.email" type="email" placeholder="Email" className="w-full h-11 md:h-12 pl-12 bg-white border-none rounded-xl text-neutral-800 placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-teal-400" />
                        </div>
                        <div className="relative group">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                            <Input name="client.contactNumber" type="text" placeholder="Contact Number" className="w-full h-11 md:h-12 pl-12 bg-white border-none rounded-xl text-neutral-800 placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-teal-400" />
                        </div>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                            <Input name="password" type="password" placeholder="Password" className="w-full h-11 md:h-12 pl-12 pr-12 bg-white border-none rounded-xl text-neutral-800 placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-teal-400" />
                        </div>
                        <div className="relative group">
                            <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                            <Input name="profilePhoto" type="file" className="w-full h-11 md:h-12 pl-12 pt-2 md:pt-2.5 bg-white border-none rounded-xl text-neutral-400 text-xs md:text-sm file:hidden cursor-pointer" />
                        </div>

                        <Button className="w-full h-11 md:h-12 bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold text-sm md:text-base rounded-xl transition-all shadow-lg shadow-teal-500/20 active:scale-95">
                            Sign Up
                        </Button>

                        <div className="flex items-center gap-4 py-2">
                            <div className="flex-1 h-px bg-neutral-300"></div>
                            <span className="text-[12px] text-neutral-400 font-medium">or</span>
                            <div className="flex-1 h-px bg-neutral-300"></div>
                        </div>

                        <div className="flex justify-center gap-4 mb-6 md:mb-10">
                            <SocialButton>
                                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                            </SocialButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SocialButton = ({ children }: { children: React.ReactNode }) => (
    <button className="w-full md:flex-1 h-[45px] md:h-[50px] bg-white rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center hover:bg-neutral-50 transition-all active:scale-95 border border-neutral-100">
        {children}
    </button>
);

export default RegisterPage;