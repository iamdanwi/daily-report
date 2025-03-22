import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-1">
                        {/* <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">RepoReporter</h3> */}
                        <Link href="/">
                            <Image src="/logo.svg" alt="RepoReporter Logo" width={200} height={50} />
                        </Link>
                        <p className="mt-4 text-gray-500 text-sm">
                            Making development insights accessible and actionable since 2023.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</Link></li>
                            <li><Link href="/features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</Link></li>
                            <li><Link href="/pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">Resources</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link href="/blog" className="text-gray-600 hover:text-indigo-600 transition-colors">Blog</Link></li>
                            <li><Link href="/docs" className="text-gray-600 hover:text-indigo-600 transition-colors">Documentation</Link></li>
                            <li><Link href="/tutorials" className="text-gray-600 hover:text-indigo-600 transition-colors">Tutorials</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">Contact</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact Us</Link></li>
                            <li><Link href="/support" className="text-gray-600 hover:text-indigo-600 transition-colors">Support</Link></li>
                            <li>
                                <a href="mailto:info@reporeporter.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                    info@reporeporter.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Links */}
                <div className="mt-12 flex justify-center space-x-6">
                    <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                        <span className="sr-only">Twitter</span>
                        <FaTwitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                        <span className="sr-only">GitHub</span>
                        <FaGithub className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <FaLinkedin className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                        <span className="sr-only">Instagram</span>
                        <FaInstagram className="h-6 w-6" />
                    </a>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">&copy; 2025 RepoReporter, Inc. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-900">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-900">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;