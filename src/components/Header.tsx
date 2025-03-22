"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Header Component
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu when clicking outside or pressing escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        const handleClickOutside = (e) => {
            if (isMenuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.addEventListener('mousedown', handleClickOutside);

        // Prevent scrolling when menu is open
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <Image height={200} width={200} src="/logo.svg" alt="" />

                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:ml-6 md:flex md:space-x-8">
                        <Link href="#features" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                            Features
                        </Link>
                        <Link href="#how-it-works" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                            How It Works
                        </Link>
                        <Link href="#pricing" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                            Pricing
                        </Link>
                    </nav>

                    <div className="hidden md:ml-6 md:flex md:items-center">
                        <Link href="/signin" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                            Sign in
                        </Link>
                        <Link href="/signup" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            Sign up
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            className="menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay */}
            <div
                className={`fixed inset-0 bg-gray-600 bg-opacity-75 z-20 transition-opacity duration-300 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile menu, slide in from right */}
            <div
                className={`mobile-menu fixed top-0 right-0 bottom-0 w-64 bg-white shadow-xl z-30 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
                    <span className="text-lg font-semibold text-gray-900">Menu</span>
                    <button
                        className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="sr-only">Close menu</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="pt-2 pb-3 space-y-1">
                    <Link
                        href="#features"
                        className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Features
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        How It Works
                    </Link>
                    <Link
                        href="#pricing"
                        className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Pricing
                    </Link>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200 px-4">
                    <div className="flex flex-col space-y-3">
                        <Link
                            href="/signin"
                            className="block text-center py-2 text-base font-medium text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign in
                        </Link>
                        <Link
                            href="/signup"
                            className="block text-center py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;