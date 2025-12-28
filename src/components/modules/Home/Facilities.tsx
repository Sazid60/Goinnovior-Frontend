import Image from "next/image";

const serviceSteps = [
    {
        number: "1",
        title: "Dyeing",
        description: "Adding color to biodegradable materials",
        icon: "/assets/images/facilities/1.png",
    },
    {
        number: "2",
        title: "Cutting",
        description: "Eco-friendly clothing items for all shapes and sizes",
        icon: "/assets/images/facilities/2.png",
    },
    {
        number: "3",
        title: "Sewing",
        description:
            "Vouching for the ultimate sturdiness and durability of the fabric",
        icon: "/assets/images/facilities/3.png",
    },
    {
        number: "4",
        title: "Snipping of thread",
        description: "A neat edge, a soft and smooth finish",
        icon: "/assets/images/facilities/4.png",
    },
    {
        number: "5",
        title: "Ironing",
        description: "Ironing it before shipping",
        icon: "/assets/images/facilities/5.png",
    },
    {
        number: "6",
        title: "Checking",
        description:
            "Going through each clothing piece to ensure supreme quality standards are met",
        icon: "/assets/images/facilities/6.png",
    },
    {
        number: "7",
        title: "Package",
        description: "Folding and packing with the utmost care",
        icon: "/assets/images/facilities/7.png",
    },
];

const FacilitiesSection = () => (
    <section>
        <div className="bg-[#e8f5f5] pb-28 relative">
            <div className="container mx-auto py-12 flex flex-col lg:flex-row justify-around items-center gap-8">
                <div className="w-full lg:w-2/4 xl:w-1/2">
                    <div
                        className="bg-no-repeat bg-center bg-cover py-10 px-16 sm:px-16 md:px-20 lg:px-16 xl:px-[120px]"
                        style={{ backgroundImage: "url(/assets/images/left.png)" }}
                    >
                        <div className="flex flex-col justify-start h-auto pb-8">
                            <div className="px-6 py-2.5 mb-6 rounded-3xl outline -outline-offset-1 outline-teal-500 inline-flex items-center gap-2.5 w-fit">
                                <span className="text-teal-500 text-xs font-semibold">
                                    Process
                                </span>
                            </div>

                            <h2 className="max-w-[605px] text-[#1A2B3C] text-2xl sm:text-3xl font-medium capitalize leading-10 mb-4">
                                Do You Want Custom Project With{" "}
                                <br className="hidden md:block" />
                                Textilery? Contact Us Now
                            </h2>

                            <p className="max-w-[580px] text-[#6B7A90] text-sm sm:text-base mb-6">
                                At Zaheen Knitwear Ltd., we pride ourselves on being your reliable
                                partner for apparel production. Our commitment to ethical
                                manufacturing ensures that every garment is crafted with care
                                and integrity.
                            </p>

                            <button className="px-5 py-3.5 outline-1 -outline-offset-1 outline-teal-500 flex items-center gap-2.5 rounded transition hover:bg-teal-50 w-fit">
                                <span className="text-teal-500 text-sm font-medium">
                                    Learn More
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[26%] xl:w-[30%] flex items-center justify-center mb-8 lg:mb-0">
                    <div className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[476px]">
                        <Image
                            height={473}
                            width={476}
                            className="object-contain w-full h-auto"
                            alt="Custom clothing"
                            src="/assets/images/hero.png"
                        />
                    </div>
                </div>
            </div>
        </div>


        <div className="w-full bg-white pb-10">
            <div className="container mx-auto px-4 md:px-10 lg:px-[120px]">

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6 justify-between -mt-10 lg:-mt-20 mb-6">
                    {serviceSteps.slice(0, 4).map((step) => (
                        <div
                            key={step.number}
                            className="group relative w-full bg-white shadow-[0px_0px_13.73px_#6868682b] px-6 py-8 flex flex-col items-start "
                        >

                            <div className="absolute inset-0 bg-[#07B4B0] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-9 h-9 bg-white rounded-full shadow-md text-base font-bold text-[#4d4d4d] transition-colors duration-300 group-hover:bg-[#EE4B21] group-hover:text-white">
                                {step.number}
                            </div>

                            <div className="relative z-10">
                                <Image
                                    height={48}
                                    width={48}
                                    src={step.icon}
                                    alt={step.title}
                                    className="w-12 h-12 mb-4 "
                                />
                                <h3 className="font-semibold text-[#4d4d4d] text-lg mb-2 transition-colors duration-300 group-hover:text-white">
                                    {step.title}
                                </h3>
                                <p className="text-[#6B7A90] text-sm leading-5 transition-colors duration-300 group-hover:text-white">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-8 lg:gap-6 w-full max-w-[900px]">
                        {serviceSteps.slice(4, 7).map((step) => (
                            <div
                                key={step.number}
                                className="group relative w-full bg-white shadow-[0px_0px_13.73px_#6868682b] px-6 py-8 flex flex-col items-start "
                            >
                                <div className="absolute inset-0 bg-[#07B4B0] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-9 h-9 bg-white rounded-full shadow-md text-base font-bold text-[#4d4d4d] transition-colors duration-300 group-hover:bg-[#EE4B21] group-hover:text-white">
                                    {step.number}
                                </div>

                                <div className="relative z-10">
                                    <Image
                                        height={48}
                                        width={48}
                                        src={step.icon}
                                        alt={step.title}
                                        className="w-12 h-12 mb-4"
                                    />
                                    <h3 className="font-semibold text-[#4d4d4d] text-lg mb-2 transition-colors duration-300 group-hover:text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#6B7A90] text-sm leading-5 transition-colors duration-300 group-hover:text-white">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default FacilitiesSection;
