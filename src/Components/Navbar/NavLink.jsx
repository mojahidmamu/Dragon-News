// components/NavLink.jsx
import React from 'react';

const NavLink = () => {
    const handleNavClick = (e, pageName) => {
        e.preventDefault();
        console.log(`Navigating to: ${pageName}`);
        alert(`Navigating to ${pageName} page...`);
    };

    return (
        <nav className="bg-black/30 border-t border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul className="flex justify-center space-x-8 md:space-x-12 py-3">
                    {['Home', 'About', 'Career'].map((item) => (
                        <li key={item}>
                            <a
                                href={`/${item.toLowerCase()}`}
                                onClick={(e) => handleNavClick(e, item)}
                                className="relative text-gray-300 hover:text-amber-400 font-medium tracking-wide transition-colors duration-300 group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavLink;