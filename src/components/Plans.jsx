export default function Plans() {
    return <div className="px-4 py-16 md:px-16 2xl:p-30 space-y-9 md:space-y-12 bg-(--color-background-dark) ">
        <div className="space-y-2">
            <h1 className="text-4xl xl:text-5xl font-medium">
                Simple, Transparent Pricing —<span className="text-(--color-primary) "> Choose Your Plan</span>
            </h1>
            <p className="text-xs md:text-base text-(--color-text-secondary-light) ">
                No hidden fees, no surprises. Just premium landing pages at unbeatable prices.
            </p>

        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 auto-rows-fr  gap-12">
            {/* card 1 */}
            <div className="p-9 rounded-2xl bg-(--color-card) flex flex-col justify-between gap-9 items-start">
                <div className="w-full flex items-start justify-between">
                    <div className="w-full space-y-2">
                        <h1 className="text-2xl font-bold">
                            Basic
                        </h1>
                        <p className="text-sm">
                            Perfect for solopreneurs
                        </p>
                    </div>
                    <h1 className="text-2xl text-(--color-primary) font-bold">$200</h1>

                </div>
                <div className="h-0.25 bg-(--color-stroke) w-full "></div>
                <div className="space-y-3">
                    <p className="flex items-center gap-3.5 text-xs text-(--color-text-secondary-light) ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                            <circle cx="3" cy="3.66699" r="3" fill="#1FFFA5" />
                        </svg>
                        1 Landing Page (Design + Development)
                    </p>
                    <p className="flex items-center gap-3.5 text-xs text-(--color-text-secondary-light) ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                            <circle cx="3" cy="3.66699" r="3" fill="#1FFFA5" />
                        </svg>
                        Hosting Deployment
                    </p>
                    <p className="flex items-center gap-3.5 text-xs text-(--color-text-secondary-light) ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                            <circle cx="3" cy="3.66699" r="3" fill="#1FFFA5" />
                        </svg>
                       5-Day Delivery
                    </p>
                    <p className="flex items-center gap-3.5 text-xs text-(--color-text-secondary-light) ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                            <circle cx="3" cy="3.66699" r="3" fill="#1FFFA5" />
                        </svg>
                        Basic Support
                    </p>

                </div>
                <button className="w-full px-8 py-4  rounded-lg flex items-center justify-center gap-3
                        bg-foreground
                         ">
                    <p className="text-xs text-(--color-primary-light) leading-4.5 md:text-base">
                        Start my project
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M14.5306 8.53025L10.0306 13.0302C9.88973 13.1711 9.69863 13.2503 9.49938 13.2503C9.30012 13.2503 9.10902 13.1711 8.96813 13.0302C8.82723 12.8894 8.74807 12.6983 8.74807 12.499C8.74807 12.2997 8.82723 12.1086 8.96813 11.9677L12.1875 8.74962H3C2.80109 8.74962 2.61032 8.6706 2.46967 8.52995C2.32902 8.3893 2.25 8.19853 2.25 7.99962C2.25 7.80071 2.32902 7.60994 2.46967 7.46929C2.61032 7.32864 2.80109 7.24962 3 7.24962H12.1875L8.96937 4.02962C8.82848 3.88873 8.74932 3.69763 8.74932 3.49837C8.74932 3.29911 8.82848 3.10802 8.96937 2.96712C9.11027 2.82622 9.30137 2.74707 9.50062 2.74707C9.69988 2.74707 9.89098 2.82622 10.0319 2.96712L14.5319 7.46712C14.6018 7.53689 14.6573 7.61979 14.6951 7.71106C14.7329 7.80232 14.7523 7.90016 14.7522 7.99894C14.752 8.09773 14.7324 8.19552 14.6944 8.28669C14.6564 8.37787 14.6007 8.46064 14.5306 8.53025Z"
                            fill="#00E58A" />
                    </svg>
                </button>

            </div>
            {/* card 2 */}
            <div className="relative p-9 rounded-2xl bg-(--color-card) flex flex-col justify-between items-start border-2 border-(--color-primary) ">
                <div className="absolute text-xs text-(--color-primary)  -top-4 left-5
                border-2 border-(--color-primary) px-3 py-1.5 rounded-[999px] bg-background">Most popular</div>
                <div className="w-full flex items-start justify-between">
                    <div className="w-full space-y-2">
                        <h1 className="text-2xl font-bold">
                            Standard
                        </h1>
                        <p className="text-sm">
                            Best balance of value & features
                        </p>
                    </div>
                    <h1 className="text-2xl text-(--color-primary) font-bold">$300</h1>

                </div>
                <div className="h-0.25 bg-(--color-stroke) w-full "></div>
                <div className="space-y-3">
                    <p className="flex items-center gap-3.5 text-xs text-(--color-text-secondary-light) ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                            <circle cx="3" cy="3.66699" r="3" fill="#1FFFA5" />
                        </svg>
                        Everything in Basic
                    </p>
                    <p className="flex items-center gap-3.5 text-xs text-(--color-text-secondary-light) ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                            <circle cx="3" cy="3.66699" r="3" fill="#1FFFA5" />
                        </svg>
                        Extra Custom Section
                    </p>
                    <p className="flex items-center gap-3.5 text-xs text-(--color-text-secondary-light) ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                            <circle cx="3" cy="3.66699" r="3" fill="#1FFFA5" />
                        </svg>
                        Free Hosting Setup
                    </p>
                    <p className="flex items-center gap-3.5 text-xs text-(--color-text-secondary-light) ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                            <circle cx="3" cy="3.66699" r="3" fill="#1FFFA5" />
                        </svg>
                        Free Consultation Call
                    </p>
                    <p className="flex items-center gap-3.5 text-xs text-(--color-text-secondary-light) ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                            <circle cx="3" cy="3.66699" r="3" fill="#1FFFA5" />
                        </svg>
                        Priority Support
                    </p>
                </div>
                <button className="w-full px-8 py-4 bg-(--color-primary) rounded-lg flex items-center justify-center gap-3
                        inset-shadow-[0_7px_8px_0] inset-shadow-[#ffffff80] shadow-[0_9px_24px_0] shadow-[#1fffa540]

                         ">
                    <p className="text-xs text-(--color-primary-dark) leading-4.5 md:text-base">
                        Start my project</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M14.5306 8.53025L10.0306 13.0302C9.88973 13.1711 9.69863 13.2503 9.49938 13.2503C9.30012 13.2503 9.10902 13.1711 8.96813 13.0302C8.82723 12.8894 8.74807 12.6983 8.74807 12.499C8.74807 12.2997 8.82723 12.1086 8.96813 11.9677L12.1875 8.74962H3C2.80109 8.74962 2.61032 8.6706 2.46967 8.52995C2.32902 8.3893 2.25 8.19853 2.25 7.99962C2.25 7.80071 2.32902 7.60994 2.46967 7.46929C2.61032 7.32864 2.80109 7.24962 3 7.24962H12.1875L8.96937 4.02962C8.82848 3.88873 8.74932 3.69763 8.74932 3.49837C8.74932 3.29911 8.82848 3.10802 8.96937 2.96712C9.11027 2.82622 9.30137 2.74707 9.50062 2.74707C9.69988 2.74707 9.89098 2.82622 10.0319 2.96712L14.5319 7.46712C14.6018 7.53689 14.6573 7.61979 14.6951 7.71106C14.7329 7.80232 14.7523 7.90016 14.7522 7.99894C14.752 8.09773 14.7324 8.19552 14.6944 8.28669C14.6564 8.37787 14.6007 8.46064 14.5306 8.53025Z" fill="#002013" />
                    </svg>
                </button>
            </div>
            {/* card3 */}
            <div className="p-9 rounded-2xl bg-(--color-card) flex flex-col justify-between gap-9 items-start">
                <div className="w-full flex items-start justify-between">
                    <div className="w-full space-y-2">
                        <h1 className="text-2xl font-bold">
                            Premium
                        </h1>
                        <p className="text-sm">
                            For brands & agencies
                        </p>
                    </div>
                    <h1 className="text-2xl text-(--color-primary) font-bold">$500</h1>

                </div>
                <div className="h-0.25 bg-(--color-stroke) w-full "></div>
                <div className="space-y-3">
                    <p className="flex items-center gap-3.5 text-xs text-(--color-text-secondary-light) ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                            <circle cx="3" cy="3.66699" r="3" fill="#1FFFA5" />
                        </svg>
                        Everything in Standard
                    </p>
                    <p className="flex items-center gap-3.5 text-xs text-(--color-text-secondary-light) ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                            <circle cx="3" cy="3.66699" r="3" fill="#1FFFA5" />
                        </svg>
                        Advanced Animations
                    </p>
                    <p className="flex items-center gap-3.5 text-xs text-(--color-text-secondary-light) ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                            <circle cx="3" cy="3.66699" r="3" fill="#1FFFA5" />
                        </svg>
                        Priority Delivery (3 Days)
                    </p>
                    <p className="flex items-center gap-3.5 text-xs text-(--color-text-secondary-light) ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                            <circle cx="3" cy="3.66699" r="3" fill="#1FFFA5" />
                        </svg>
                        6 Months Free Support
                    </p>
                    <p className="flex items-center gap-3.5 text-xs text-(--color-text-secondary-light) ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                            <circle cx="3" cy="3.66699" r="3" fill="#1FFFA5" />
                        </svg>
                        Performance Optimization
                    </p>
                </div>
                <button className="w-full px-8 py-4  rounded-lg flex items-center justify-center gap-3
                        bg-foreground
                         ">
                    <p className="text-xs text-(--color-primary-light) leading-4.5 md:text-base">
                        Start my project
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M14.5306 8.53025L10.0306 13.0302C9.88973 13.1711 9.69863 13.2503 9.49938 13.2503C9.30012 13.2503 9.10902 13.1711 8.96813 13.0302C8.82723 12.8894 8.74807 12.6983 8.74807 12.499C8.74807 12.2997 8.82723 12.1086 8.96813 11.9677L12.1875 8.74962H3C2.80109 8.74962 2.61032 8.6706 2.46967 8.52995C2.32902 8.3893 2.25 8.19853 2.25 7.99962C2.25 7.80071 2.32902 7.60994 2.46967 7.46929C2.61032 7.32864 2.80109 7.24962 3 7.24962H12.1875L8.96937 4.02962C8.82848 3.88873 8.74932 3.69763 8.74932 3.49837C8.74932 3.29911 8.82848 3.10802 8.96937 2.96712C9.11027 2.82622 9.30137 2.74707 9.50062 2.74707C9.69988 2.74707 9.89098 2.82622 10.0319 2.96712L14.5319 7.46712C14.6018 7.53689 14.6573 7.61979 14.6951 7.71106C14.7329 7.80232 14.7523 7.90016 14.7522 7.99894C14.752 8.09773 14.7324 8.19552 14.6944 8.28669C14.6564 8.37787 14.6007 8.46064 14.5306 8.53025Z"
                            fill="#00E58A" />
                    </svg>
                </button>

            </div>
        </div>
        <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M30.8966 16.5061C30.8368 16.2386 30.7126 15.9897 30.535 15.781C30.3574 15.5722 30.1316 15.4099 29.8771 15.308L22.6799 12.4294L24.1691 2.49987C24.2238 2.14331 24.1628 1.77862 23.995 1.45928C23.8272 1.13995 23.5615 0.882779 23.2369 0.725496C22.9123 0.568213 22.5458 0.519096 22.1912 0.585348C21.8366 0.6516 21.5126 0.829736 21.2666 1.09362L5.51662 17.9686C5.3294 18.1691 5.19388 18.4122 5.1218 18.6769C5.04972 18.9416 5.04325 19.2198 5.10295 19.4876C5.16264 19.7553 5.28671 20.0045 5.4644 20.2134C5.64209 20.4224 5.86805 20.5849 6.12271 20.6869L13.3199 23.5655L11.8307 33.4993C11.776 33.8558 11.837 34.2205 12.0048 34.5398C12.1726 34.8592 12.4383 35.1163 12.7629 35.2736C13.0875 35.4309 13.454 35.48 13.8086 35.4138C14.1632 35.3475 14.4872 35.1694 14.7332 34.9055L30.4832 18.0305C30.6712 17.8294 30.8072 17.5854 30.8792 17.3197C30.9513 17.054 30.9573 16.7747 30.8966 16.5061ZM15.9749 28.6238L16.8566 22.7499C16.913 22.3739 16.8407 21.99 16.6516 21.6602C16.4625 21.3305 16.1675 21.0742 15.8146 20.933L9.66646 18.4735L20.0249 7.37534L19.1432 13.2492C19.0868 13.6252 19.1591 14.0092 19.3482 14.3389C19.5373 14.6687 19.8323 14.9249 20.1852 15.0661L26.3333 17.5257L15.9749 28.6238Z" fill="#1FFFA5" />
            </svg>
            <div className="space-y-2">
                <h1 className="text-2xl font-bold leading-6">Limited Availability</h1>
                <p className="text-sm  text-(--color-text-secondary-light) leading-4.5">
                    We only onboard 5 new clients per month. 2 spots left for this month — secure yours today.
                </p>
            </div>
        </div>

        <div className="p-6 space-y-6 md:p-12 space-x-12 rounded-2xl bg-(--color-card) ">
            <div className="w-full space-y-2 text-center">
                <h1 className="text-2xl max-sm:text-(--color-primary) md:text-4xl xl:text-5xl font-medium leading-6.5 max-sm:tracking-[-1px] md:tracking-[-2px] md:leading-10.5 xl:leading-18">
                    Special Offer For Early Clients
                </h1>
                <p className="text-sm md:text-base text-center">
                    Get 10% OFF + Free Hosting Setup when you book this week.
                </p>
            </div>
            <button className="mx-auto px-8 py-4 bg-(--color-primary) rounded-lg flex items-center justify-center gap-3
                        inset-shadow-[0_7px_8px_0] inset-shadow-[#ffffff80] shadow-[0_9px_24px_0] shadow-[#1fffa540]

                         ">
                <p className="text-xs text-(--color-primary-dark) leading-4.5 md:text-base">
                    Claim my 10% discount</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M14.5306 8.53025L10.0306 13.0302C9.88973 13.1711 9.69863 13.2503 9.49938 13.2503C9.30012 13.2503 9.10902 13.1711 8.96813 13.0302C8.82723 12.8894 8.74807 12.6983 8.74807 12.499C8.74807 12.2997 8.82723 12.1086 8.96813 11.9677L12.1875 8.74962H3C2.80109 8.74962 2.61032 8.6706 2.46967 8.52995C2.32902 8.3893 2.25 8.19853 2.25 7.99962C2.25 7.80071 2.32902 7.60994 2.46967 7.46929C2.61032 7.32864 2.80109 7.24962 3 7.24962H12.1875L8.96937 4.02962C8.82848 3.88873 8.74932 3.69763 8.74932 3.49837C8.74932 3.29911 8.82848 3.10802 8.96937 2.96712C9.11027 2.82622 9.30137 2.74707 9.50062 2.74707C9.69988 2.74707 9.89098 2.82622 10.0319 2.96712L14.5319 7.46712C14.6018 7.53689 14.6573 7.61979 14.6951 7.71106C14.7329 7.80232 14.7523 7.90016 14.7522 7.99894C14.752 8.09773 14.7324 8.19552 14.6944 8.28669C14.6564 8.37787 14.6007 8.46064 14.5306 8.53025Z" fill="#002013" />
                </svg>
            </button>

        </div>

    </div>
}