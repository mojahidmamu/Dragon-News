import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Section 1: Logo and Description */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <svg 
                                width="40" 
                                height="40" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fillRule="evenodd" 
                                clipRule="evenodd" 
                                className="fill-amber-500"
                            >
                                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                            </svg>
                            <div>
                                <h2 className="text-2xl font-bold">
                                    <span className="bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent">
                                        The Dragon
                                    </span>
                                    <span className="text-amber-500"> News</span>
                                </h2>
                                <p className="text-amber-400 text-xs italic mt-1">
                                    Journalism Without Fear or Favour
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your trusted news portal. Committed to delivering truthful and accurate news.
                            Latest updates from home and abroad, sports, entertainment, and much more.
                        </p>
                        {/* Social Media Links */}
                        <div className="flex gap-3 pt-2">
                            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.803-12.13c0-.212 0-.423-.015-.634A9.936 9.936 0 0024 4.59z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.689.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Section 2: Categories */}
                    <div>
                        <h3 className="text-lg font-bold text-amber-500 mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li><Link to="/category/breaking-news" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Breaking News</Link></li>
                            <li><Link to="/category/international" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">International</Link></li>
                            <li><Link to="/category/sports" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Sports</Link></li>
                            <li><Link to="/category/entertainment" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Entertainment</Link></li>
                            <li><Link to="/category/culture" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Culture</Link></li>
                            <li><Link to="/category/arts" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Arts</Link></li>
                        </ul>
                    </div>

                    {/* Section 3: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-amber-500 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/career" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Career</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Contact Us</Link></li>
                            <li><Link to="/privacy-policy" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Terms & Conditions</Link></li>
                            <li><Link to="/advertise" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Advertise</Link></li>
                        </ul>
                    </div>

                    {/* Section 4: Contact & Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold text-amber-500 mb-4">Contact Us</h3>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <svg className="w-5 h-5 text-amber-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span>Dhaka, Bangladesh</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <svg className="w-5 h-5 text-amber-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <span>info@thedragonnews.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <svg className="w-5 h-5 text-amber-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <span>+880 1234 567890</span>
                            </li>
                        </ul>
                        
                        {/* Newsletter Subscription */}
                        <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Subscribe to Newsletter</h4>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input 
                                    type="email" 
                                    placeholder="Your email address"
                                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                                />
                                <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold rounded-lg transition text-sm">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-gray-500 text-xs mt-2">
                                Get weekly updates delivered to your inbox
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-800 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm text-center">
                            &copy; {currentYear} The Dragon News. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm text-center">
                            Designed & Developed with ❤️ by Dragon Team
                        </p>
                        <div className="flex gap-4">
                            <Link to="/sitemap" className="text-gray-500 hover:text-amber-500 text-xs transition">
                                Sitemap
                            </Link>
                            <Link to="/rss" className="text-gray-500 hover:text-amber-500 text-xs transition">
                                RSS
                            </Link>
                            <Link to="/accessibility" className="text-gray-500 hover:text-amber-500 text-xs transition">
                                Accessibility
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;