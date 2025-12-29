"use client";

import { useEffect } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { setCookie } from "@/services/auth/tokenHandlers";

const CallbackPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const accessToken = searchParams.get("accessToken");
        const refreshToken = searchParams.get("refreshToken");



        if (accessToken && refreshToken) {
            setCookie("accessToken", accessToken, {
                httpOnly: true,
                secure: true,
                sameSite: "lax",
            });
            setCookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "lax",
            });
            redirect("/");
        } else {
            router.replace("/login?error=Missing tokens");
        }
    }, [searchParams, router]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">Logging you in with Google...</div>
        </div>
    );
};

export default CallbackPage;