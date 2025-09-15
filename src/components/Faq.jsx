export default function FAQ() {
    return <div className="px-4 py-16 md:px-16 xl:px-60 xl:py-30 space-y-12">
        <h1 className="text-4xl lg:text-5xl  text-center text-(--color-text-light) font-medium leading-10.5 2xl:leading-18 tracking-[-2px]">
            Got Questions
            <span className="text-(--color-primary)">?</span>  We’ve Got The Answers
        </h1>
        <div className="space-y-3 sm:space-y-6">
            {/* card 1 */}
            <div className="p-6 space-y-6 bg-(--color-card) rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="6" fill="#1FFFA5" />
                </svg>
                <h1 className="text-2xl">
                    How long does it take?
                </h1>
                <p className="text-(--color-text-secondary-light) text-sm sm:text-lg">
                    5 days from start to finish - design, development, and deployment included.
                </p>
            </div>
            {/* card 2 */}
            <div className="p-6 space-y-6 bg-(--color-card) rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="6" fill="#1FFFA5" />
                </svg>
                <h1 className="text-2xl">
                    Do you provide revisions?
                </h1>
                <p className="text-(--color-text-secondary-light) text-sm sm:text-lg">
                    Yes, unlimited revisions until you're 100% satisfied with the final result.
                </p>
            </div>
            {/* card 3 */}
            <div className="p-6 space-y-6 bg-(--color-card) rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="6" fill="#1FFFA5" />
                </svg>
                <h1 className="text-2xl">
                    What's the payment process?
                </h1>
                <p className="text-(--color-text-secondary-light) text-sm sm:text-lg">
                    50% upfront to get started, 50% after final delivery and your approval.
                </p>
            </div>
            {/* card 4 */}
            <div className="p-6 space-y-6 bg-(--color-card) rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="6" fill="#1FFFA5" />
                </svg>
                <h1 className="text-2xl">
                    Can you deploy on my hosting?
                </h1>
                <p className="text-(--color-text-secondary-light) text-sm sm:text-lg">
                    Absolutely! Deployment is included in every package, on your hosting or ours.
                </p>
            </div>
            {/* card 5 */}
            <div className="p-6 space-y-6 bg-(--color-card) rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="6" fill="#1FFFA5" />
                </svg>
                <h1 className="text-2xl">
                    Why are your prices so affordable compared to agencies?
                </h1>
                <p className="text-(--color-text-secondary-light) text-sm sm:text-lg">
                    We run lean without big overheads - you get the same agency-level quality at a fraction of the cost.
                </p>
            </div>
        </div>
    </div>
}