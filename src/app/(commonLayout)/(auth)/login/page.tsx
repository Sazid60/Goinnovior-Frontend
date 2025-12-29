"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "../../../../../public/assets/icon/Logo";
import Link from "next/link";
import LoginForm from "@/components/login-form";

const LoginPage = () => {
    const router = useRouter();
    const googleAuthUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/google`;
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);

    const handleGoogleLogin = () => {
        setIsGoogleLoading(true);
        router.push(googleAuthUrl);
    };

    return (
        <div className="w-full flex items-center justify-center p-4 md:p-8">
            <div className="w-full container mx-auto relative bg-white rounded-[30px] md:rounded-[40px] overflow-hidden flex items-center justify-center mb-10 shadow-xl">
                <div className="w-[96%] my-[2%] bg-linear-to-b from-[#14b8a6] to-white/10 rounded-[25px] md:rounded-[30px] relative overflow-hidden flex flex-col items-center pt-24 md:pt-32 pb-8 px-4">
                    <div className="w-full px-6 md:px-10 flex justify-between items-center absolute top-6 md:top-8">
                        <div className="w-20 md:w-24 h-10 md:h-12 flex items-center justify-center">
                            <Logo />
                        </div>
                        <div className="flex gap-2 md:gap-4 items-center">
                            <button className="text-white text-xs md:text-sm font-medium hover:opacity-80 transition-opacity">
                                Login
                            </button>
                            <Link
                                href="/register"
                                className="px-4 md:px-8 py-1.5 md:py-2 bg-white/10 border border-white/40 rounded-full text-white text-[10px] md:text-sm font-medium backdrop-blur-md hover:bg-white/20 transition-all text-center"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>

                    <div className="text-center mt-4 md:mt-0 mb-8">
                        <h1 className="text-white text-2xl md:text-[40px] font-bold leading-tight">Welcome Back!</h1>
                        <p className="text-white/70 text-xs md:text-sm mt-2">We missed you, Please provide your credential</p>
                    </div>

                    <div className="w-full max-w-[320px] md:max-w-[420px] space-y-4">
                        <LoginForm />

                        <div className="flex items-center gap-4 py-2">
                            <div className="flex-1 h-px bg-neutral-300"></div>
                            <span className="text-[12px] text-neutral-400 font-medium">or</span>
                            <div className="flex-1 h-px bg-neutral-300"></div>
                        </div>

                        <div className="flex justify-center gap-4 mb-6 md:mb-10">
                            <SocialButton onClick={handleGoogleLogin} disabled={isGoogleLoading}>
                                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                <span className="ml-2 text-sm font-medium text-neutral-600">
                                    {isGoogleLoading ? "Logging in..." : "Continue with Google"}
                                </span>
                            </SocialButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface SocialButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

const SocialButton = ({ children, onClick, disabled }: SocialButtonProps) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full h-[45px] md:h-[50px] bg-white rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center hover:bg-neutral-50 transition-all active:scale-95 border border-neutral-100 ${disabled ? "opacity-70 cursor-not-allowed" : ""}`}
    >
        {children}
    </button>
);

export default LoginPage;