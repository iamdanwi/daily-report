"use client"
import React, { useState } from 'react';
import { FaGoogle, FaApple, FaFacebook, FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log({ email, password });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
            <div className="w-full max-w-md">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                    <p className="text-gray-600">Sign in to continue</p>
                </div>

                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 pr-10 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-end mb-6">
                        <a href="#" className="text-blue-500 hover:text-blue-600 text-sm">
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Sign In
                    </button>
                </form>

                <div className="my-6 flex items-center">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <span className="px-4 text-gray-500 text-sm">Or continue with</span>
                    <div className="flex-1 border-t border-gray-300"></div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                    <button className="flex justify-center items-center py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200">
                        <FaGoogle className="text-gray-700" />
                    </button>
                    <button className="flex justify-center items-center py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200">
                        <FaApple className="text-gray-700" />
                    </button>
                    <button className="flex justify-center items-center py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200">
                        <FaFacebook className="text-gray-700" />
                    </button>
                </div>

                <div className="text-center">
                    <p className="text-gray-600">
                        Don&apos;t have an account?{' '}
                        <a href="/signup" className="text-blue-500 font-medium hover:text-blue-600">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;