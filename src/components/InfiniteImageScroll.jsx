"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";


const images = [
    "/image 1.png",
    "/image 2.png",
    "/image 4.png",
    "/image 10.png",
    "/image 18.png",
];

export default function InfiniteImageScroll() {

    return (
        <div className="relative w-full h-full ">
            <div className=" z-10 absolute inset-0 gradient h-60 sm:h-117.5  pointer-events-none">

            </div>
            <Swiper
                loop={true}
                grabCursor={true}
                spaceBetween={8}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 8 },
                    744: { slidesPerView: 1.1, spaceBetween: 16 },
                    1024: { slidesPerView: 1.3, spaceBetween: 16 },
                    1280: { slidesPerView: 2, spaceBetween: 16 },
                }}
                className="h-60 sm:h-117.5 "
            >
                {images.map((src, i) => (
                    <SwiperSlide key={i}>
                        <div className="rounded-lg overflow-hidden">
                            <Image
                                src={src}
                                alt={`Image ${i}`}
                                fill
                                className=" rounded-lg  "
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}
