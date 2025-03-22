import Link from "next/link";

const Pricing = () => {
    const plans = [
        {
            name: 'Free',
            price: '$0',
            description: 'Perfect for individual developers or small projects.',
            features: [
                'Up to 3 repositories',
                'Daily reports only',
                'Basic email delivery',
                'Single user account',
                '7-day report history'
            ],
            ctaText: 'Start for free',
            ctaColor: 'text-blue-500 bg-gray-50 hover:bg-gray-100',
            popular: false
        },
        {
            name: 'Professional',
            price: '$10',
            description: 'Ideal for development teams and growing projects.',
            features: [
                'Up to 10 repositories',
                'Custom report scheduling',
                'Advanced report templates',
                'Up to 5 team members',
                '30-day report history',
                'Priority email delivery'
            ],
            ctaText: 'Start free trial',
            ctaColor: 'text-white bg-blue-500 hover:bg-blue-600',
            popular: true
        },
        {
            name: 'Enterprise',
            price: '$50',
            description: 'For organizations with advanced reporting needs.',
            features: [
                'Unlimited repositories',
                'Advanced report customization',
                'Unlimited team members',
                'Priority support',
                'Custom integrations',
                '1-year report history',
                'Dedicated account manager'
            ],
            ctaText: 'Contact sales',
            ctaColor: 'text-blue-500 bg-gray-50 hover:bg-gray-100',
            popular: false
        }
    ];

    return (
        <div id="pricing" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-base text-blue-500 font-semibold uppercase mb-2">Pricing</h2>
                    <p className="text-3xl font-bold text-gray-900">
                        Plans for teams of all sizes
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Choose the perfect plan for your needs. All plans include our core features.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`bg-white rounded-lg shadow-sm ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-900">{plan.name}</h2>
                                <p className="mt-4">
                                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-600">/mo</span>
                                </p>
                                <p className="mt-2 text-gray-600">{plan.description}</p>
                                <Link href="/signup" className={`mt-6 block w-full py-3 px-6 rounded-lg text-center font-medium transition duration-200 ${plan.ctaColor}`}>
                                    {plan.ctaText}
                                </Link>
                            </div>
                            <div className="p-6 border-t border-gray-100">
                                <h3 className="text-sm font-medium text-gray-900 mb-4">What&apos;s included</h3>
                                <ul className="space-y-3">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="ml-2 text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;