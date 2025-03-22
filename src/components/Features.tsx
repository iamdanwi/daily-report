import { FaChartLine, FaFileAlt, FaGithub, FaUsers } from "react-icons/fa";

const Features = () => {
    const features = [
        {
            title: 'Repository Integration',
            description: 'Connect with GitHub, GitLab, and Bitbucket repositories to track all your code changes in one place.',
            icon: <FaGithub className="h-6 w-6 text-blue-500" />,
        },
        {
            title: 'Automated Reports',
            description: 'Schedule daily, weekly, or custom interval reports to be generated and delivered automatically.',
            icon: <FaFileAlt className="h-6 w-6 text-blue-500" />,
        },
        {
            title: 'Customizable Templates',
            description: 'Create report templates that focus on the information that matters most to your team.',
            icon: <FaChartLine className="h-6 w-6 text-blue-500" />,
        },
        {
            title: 'Team Collaboration',
            description: 'Work together with your team by sharing repositories, report templates, and delivery settings.',
            icon: <FaUsers className="h-6 w-6 text-blue-500" />,
        },
    ];

    return (
        <div id="features" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-base text-blue-500 font-semibold uppercase mb-2">Features</h2>
                    <p className="text-3xl font-bold text-gray-900">
                        Everything you need for repository reporting
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Track changes, generate reports, and keep your team informed with our comprehensive repository reporting tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature) => (
                        <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="flex-shrink-0">{feature.icon}</div>
                                <h3 className="ml-3 text-lg font-medium text-gray-900">{feature.title}</h3>
                            </div>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;