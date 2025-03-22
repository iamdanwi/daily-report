import Link from "next/link";

const CTA = () => {
    return (
        <div className="bg-blue-500">
            <div className="max-w-5xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6">
                <h2 className="text-3xl font-bold text-white">
                    <span className="block">Start monitoring your repositories today.</span>
                    <span className="block">Sign up for a free account.</span>
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                    Get automated daily reports on your repository changes and keep your team informed.
                </p>
                <Link href="/signup" className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-blue-50 transition duration-200">
                    Sign up for free
                </Link>
            </div>
        </div>
    );
};

export default CTA;