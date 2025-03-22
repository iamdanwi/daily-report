import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Changed to flex row with items-center to align vertically */}
                <div className="flex flex-col lg:flex-row items-center py-16 lg:gap-12">
                    {/* Left text column - removed the flex-col-reverse that was causing issues */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-4xl font-bold text-gray-900">
                            <span className="block">Automated Repository</span>
                            <span className="block text-blue-500">Daily Reports</span>
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Monitor changes in your code repositories and send automatic daily reports to your team.
                            Never miss an important update or change in your codebase.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link href="/signup" className="px-6 py-3 text-white bg-blue-500 rounded-lg font-medium hover:bg-blue-600 transition duration-200 text-center">
                                Get started
                            </Link>
                            <Link href="#how-it-works" className="px-6 py-3 text-blue-500 bg-gray-50 rounded-lg font-medium hover:bg-gray-100 transition duration-200 text-center">
                                Learn more
                            </Link>
                        </div>
                    </div>

                    {/* Right image column */}
                    <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                        <Image
                            className="rounded-lg w-full h-auto object-cover "
                            src="/hero.svg"
                            height={600}
                            width={800}
                            alt="Repository dashboard preview"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;