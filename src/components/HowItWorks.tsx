import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const HowItWorks = () => {
    const steps = [
        {
            title: 'Connect Your Repositories',
            description: 'Link your GitHub, GitLab, or Bitbucket repositories to track changes across all your projects.',
            image: '/connect-repositery.svg',
        },
        {
            title: 'Configure Your Reports',
            description: 'Choose what to include in your reports and set up delivery schedules that work for your team.',
            image: '/configure-your-report.svg',
        },
        {
            title: 'Receive Automated Updates',
            description: 'Get daily reports delivered straight to your inbox, showing all important repository changes.',
            image: '/recive-autometed-report.svg',
        }
    ];

    return (
        <div id="how-it-works" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-base text-blue-500 font-semibold uppercase mb-2">How It Works</h2>
                    <p className="text-3xl font-bold text-gray-900">
                        Simple setup, powerful results
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Get started in minutes and let our automated system handle the rest, keeping your team informed of all repository changes.
                    </p>
                </div>

                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <div key={step.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Image section - conditionally change order based on index */}
                            <div className={index % 2 === 1 ? 'lg:order-last' : ''}>
                                <img
                                    className="rounded-lg shadow-lg w-full h-auto"
                                    src={step.image}
                                    alt={step.title}
                                />
                            </div>

                            {/* Text section */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {step.title}
                                </h3>
                                <p className="mt-4 text-lg text-gray-600">
                                    {step.description}
                                </p>
                                <div className="mt-6">
                                    <Link href="/signup" className="text-blue-500 font-medium hover:text-blue-600">
                                        Get started <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;