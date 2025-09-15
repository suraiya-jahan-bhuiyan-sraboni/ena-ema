"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "SaaS Founder",
        image: "/Ellipse 3.png",
        review:
            "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    },
    {
        name: "Mike Chen",
        role: "Fitness Coach",
        image: "/Ellipse 6.png",
        review:
            "Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before.",
    },
    {
        name: "Amanda Rodriguez",
        role: "E-Commerce Owner",
        image: "/Ellipse 7.png",
        review:
            "Best investment for my business. The ROI was immediate and substantial. Will definitely order again.",
    },
    {
        name: "David Lee",
        role: "SaaS Founder",
        image: "/Ellipse 8.png",
        review:
            "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    },
    {
        name: "Sarah Johnson",
        role: "SaaS Founder",
        image: "/Ellipse 3.png",
        review:
            "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    },
    {
        name: "Mike Chen",
        role: "Fitness Coach",
        image: "/Ellipse 6.png",
        review:
            "Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before.",
    },
    {
        name: "Amanda Rodriguez",
        role: "E-Commerce Owner",
        image: "/Ellipse 7.png",
        review:
            "Best investment for my business. The ROI was immediate and substantial. Will definitely order again.",
    },
    {
        name: "David Lee",
        role: "SaaS Founder",
        image: "/Ellipse 8.png",
        review:
            "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    },
];


export default function Reviews() {
    return <div className="px-4 py-16 md:px-16 xl:p-30 space-y-9 md:space-y-12">
        <div className="w-full space-y-2">
            <h1 className="w-full text-4xl lg:text-5xl tracking-[-2px] leading-10.5 md:leading-18 font-medium mx-auto">
                What Our Clients Are Saying

                <span className="text-(--color-primary) ">
                    About Us
                </span>
            </h1>
            <p className="text-sm md:text-base text-(--color-text-secondary-light) ">
                Real feedback from real businesses who've seen real results.
            </p>
        </div>
        <div className="">
            <Swiper
                loop={true}
                spaceBetween={24}
                grabCursor={true}
                breakpoints={{
                    320: { slidesPerView: 1.4 },
                    744: { slidesPerView: 2 },
                    1024: { slidesPerView: 3.5 },
                    1280: { slidesPerView: 4.2 },
                }}
            >
                {testimonials.map((t, i) => (
                    <SwiperSlide key={i}>
                        <div className="bg-[#192420] rounded-xl p-6 shadow-lg h-[280px] flex flex-col justify-between">
                            {/* Stars */}
                            <div className="flex text-green-400 mb-4 space-x-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M14.6431 7.17741L11.8306 9.60429L12.6875 13.2337C12.7347 13.4307 12.7226 13.6373 12.6525 13.8274C12.5824 14.0175 12.4575 14.1826 12.2937 14.3018C12.1298 14.4209 11.9343 14.4889 11.7319 14.497C11.5294 14.5051 11.3291 14.4531 11.1562 14.3474L7.99996 12.4049L4.84184 14.3474C4.66898 14.4525 4.4689 14.504 4.2668 14.4956C4.06469 14.4872 3.8696 14.4191 3.70609 14.3001C3.54257 14.181 3.41795 14.0162 3.3479 13.8264C3.27786 13.6367 3.26553 13.4304 3.31246 13.2337L4.17246 9.60429L1.35996 7.17741C1.20702 7.04523 1.09641 6.87092 1.04195 6.67626C0.987486 6.48159 0.99158 6.27519 1.05372 6.08283C1.11586 5.89048 1.23329 5.72069 1.39135 5.59468C1.54941 5.46867 1.7411 5.39201 1.94246 5.37429L5.62996 5.07679L7.05246 1.63429C7.12946 1.44667 7.2605 1.28619 7.42894 1.17325C7.59738 1.06031 7.7956 1 7.9984 1C8.2012 1 8.39942 1.06031 8.56785 1.17325C8.73629 1.28619 8.86734 1.44667 8.94434 1.63429L10.3662 5.07679L14.0537 5.37429C14.2555 5.39135 14.4477 5.46758 14.6064 5.59342C14.765 5.71926 14.883 5.88911 14.9455 6.0817C15.008 6.27429 15.0123 6.48105 14.9579 6.67607C14.9034 6.87109 14.7926 7.04571 14.6393 7.17804L14.6431 7.17741Z" fill="#1FFFA5" />
                                    </svg>
                                ))}
                            </div>

                            {/* Review */}
                            <p className="text-gray-200 text-xs md:text-base leading-6 mb-6">
                                “{t.review}”
                            </p>

                            {/* User Info */}
                            <div className="flex items-center gap-3 mt-auto">
                                <Image
                                    src={t.image}
                                    alt={t.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-base font-medium">{t.name}</p>
                                    <p className="text-xs">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    </div>
}