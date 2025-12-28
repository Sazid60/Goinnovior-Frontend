import Image from "next/image";
import Marquee from "react-fast-marquee";

const marqueeImages = [
    "/assets/images/visa.png",
    "/assets/images/master.png",
    "/assets/images/nagad.png",
    "/assets/images/bkash.png",
    "/assets/images/rocket.png",
    "/assets/images/upay.png",
    "/assets/images/surecash.png",
    "/assets/images/taptap.png",
    "/assets/images/cellfin.png",
    "/assets/images/dutch.png",
    "/assets/images/city.png",
    "/assets/images/islamic.png",
    "/assets/images/brac.png",
    "/assets/images/ucb.png",
];

const MarqueeBar = () => (
    <div className="relative w-full container h-28 mx-auto flex items-center  ">
        <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none bg-linear-to-r from-white via-white/0 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none bg-linear-to-l from-white via-white/0 to-transparent" />
        <Marquee speed={40} gradient={false} className="w-full">
            {marqueeImages.map((src, idx) => (
                <div key={idx} className="flex items-center justify-center  mx-12">
                    <Image
                        src={src}
                        alt={`marquee-${idx}`}
                        width={100}
                        height={20}
                        className="object-contain"
                        style={{ height: '80px', width: '80px' }}
                    />
                </div>
            ))}
        </Marquee>
    </div>
);

export default MarqueeBar;