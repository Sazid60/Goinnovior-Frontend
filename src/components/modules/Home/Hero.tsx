"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { MoveRight, MapPin, Mail, Play, Pause } from "lucide-react";

const fakeBannerData = {
    id: "1",
    video: "/assets/video/hero-video.mp4",
    title: "High-Quality Garments.\nEthically Made.",
    description: "At Zaheen Knitwear Ltd., we pride ourselves on being your reliable partner for apparel production. Our commitment to ethical manufacturing ensures that every garment is crafted with care and integrity.",
    email: "compliance@danysknitwear.com",
    phone: "Kashimpur, Gazipur Sadar / Gazipur",
};

export const HeroSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const handleToggle = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <section className="relative w-full flex flex-col bg-white overflow-x-hidden">
            <div className="relative w-full h-[75vh] min-h-[600px] xl:h-[90vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        src={fakeBannerData.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 xl:px-[120px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
                        <div className="col-span-1 lg:col-span-8 flex flex-col gap-4 md:gap-6">
                            <p className="text-white/80 text-base md:text-lg font-normal  uppercase tracking-wider">
                                Elevate Your Brand With
                            </p>
                            <h1 className="text-white text-3xl md:text-5xl xl:text-6xl font-bold leading-tight md:leading-[1.1] xl:leading-[67.20px] whitespace-pre-line">
                                {fakeBannerData.title}
                            </h1>
                            <p className="max-w-[600px] text-white/60 text-sm md:text-base xl:text-lg font-normal leading-relaxed md:leading-7">
                                {fakeBannerData.description}
                            </p>

                            <div className="flex flex-wrap gap-4 mt-2">
                                <Button className="h-12 md:h-14 px-6 md:px-8 bg-orange-600 hover:bg-orange-700 rounded-none text-white text-sm font-medium uppercase">
                                    Contact Us
                                </Button>
                                <Button
                                    variant="outline"
                                    className="h-12 md:h-14 px-6 md:px-8 border-white bg-transparent text-white hover:bg-white/10 rounded-none text-sm font-medium  uppercase"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>

                        <div className="col-span-1 lg:col-span-4 flex justify-start lg:justify-end">
                            <button
                                onClick={handleToggle}
                                className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32  rounded-full border border-white/20 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                            >
                                <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20  bg-white rounded-full flex items-center justify-center shadow-xl">
                                    {isPlaying ? (
                                        <Pause className="text-red-600 fill-red-600 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                                    ) : (
                                        <Play className="text-red-600 fill-red-600 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 ml-1" />
                                    )}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-30 w-full bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-4 xl:px-[120px]">
                    <div className="flex flex-col lg:flex-row items-stretch">

                        <div className="grow flex flex-col md:flex-row items-center gap-2 md:gap-12 lg:gap-2 xl:gap-12 py-8 lg:py-0 border-b lg:border-none">
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <MapPin className="text-teal-500 w-6 h-6 md:w-7 md:h-7" />
                                <div className="flex flex-col">
                                    <span className="text-teal-500 text-sm md:text-base font-semibold ">Location</span>
                                    <span className="text-black/40 text-xs md:text-sm font-normal truncate max-w-[200px] sm:max-w-none">
                                        {fakeBannerData.phone}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <Mail className="text-teal-500 w-6 h-6 md:w-7 md:h-7" />
                                <div className="flex flex-col">
                                    <span className="text-teal-500 text-sm md:text-base font-semibold ">Email</span>
                                    <span className="text-black/40 text-xs md:text-sm font-normal">
                                        {fakeBannerData.email}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row w-full lg:w-auto lg:-mt-24 xl:-mt-32">
                            <div className="w-full sm:w-1/2 lg:w-56 xl:w-64 h-auto min-h-[200px] lg:h-56 xl:h-64 bg-orange-600 p-6 xl:p-8 flex flex-col justify-between shadow-xl">
                                <div>
                                    <h3 className="text-white text-lg xl:text-xl font-semibold mb-2">Quality Product</h3>
                                    <p className="text-white/90 text-xs xl:text-sm font-normal leading-relaxed">
                                        Lorem ipsum dolor sitatu amet consec teturarisa adipiscing elit samed.
                                    </p>
                                </div>
                                <button className="flex items-center gap-2 text-white text-sm xl:text-lg group">
                                    Read More <MoveRight className="w-4 h-4 xl:w-5 xl:h-5 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>

                            <div className="w-full sm:w-1/2 lg:w-56 xl:w-64 h-auto min-h-[200px] lg:h-56 xl:h-64 bg-teal-500 p-6 xl:p-8 flex flex-col justify-between shadow-xl">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-white text-lg xl:text-xl font-semibold">Project Overview</h3>
                                    <p className="text-white text-2xl xl:text-3xl font-bold tracking-wide">35 Millions</p>
                                </div>
                                <button className="flex items-center gap-2 text-white text-sm xl:text-lg group">
                                    Read More <MoveRight className="w-4 h-4 xl:w-5 xl:h-5 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};