    // components/Header.jsx
    import React, { useState, useEffect } from 'react';

    const Headline = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentDateTime, setCurrentDateTime] = useState({
        day: '',
        date: '',
        month: '',
        year: '',
        time: ''
    });

    useEffect(() => {
        const updateDateTime = () => {
        const now = new Date();
        
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
        setCurrentDateTime({
            day: days[now.getDay()],
            date: now.getDate(),
            month: months[now.getMonth()],
            year: now.getFullYear(),
            time: now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit',
            hour12: true 
            })
        });
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleLoginClick = (e) => {
        e.preventDefault();
        setIsLoggedIn(!isLoggedIn);
        console.log('Login clicked - Current state:', !isLoggedIn);
    };
    

    return (
        <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl border-b-4 border-amber-500">
        

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left side - empty for balance */}
            <div className="flex-1 hidden md:block"></div>

            {/* Center - Logo and Tagline */}
            <div className="flex-2 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight">
                <span className="bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent">
                    The Dragon
                </span>
                <span className="text-amber-500 ml-2">News</span>
                </h1>
                <p className="text-amber-400 text-xs md:text-sm italic mt-2 tracking-wide">
                Journalism Without Fear or Favour
                </p>
            </div>

            

            {/* Right side - Login Button */}
            <div className="flex-1 flex justify-end">
                <button
                onClick={handleLoginClick}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isLoggedIn
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/30'
                    : 'bg-amber-500 hover:bg-amber-600 text-gray-900 shadow-lg shadow-amber-500/30'
                }`}
                >
                {isLoggedIn ? '🔓 Logout' : '🔒 Login'}
                </button>
            </div>
            </div>

            {/* Top Bar with Date and Time */}
        <div className="border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                    <div className="flex justify-center items-center text-xs text-gray-400">
                    <div className="border-b border-gray-700 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex justify-between items-center text-xs text-gray-400">
                <div className="flex items-center  space-x-4">
                <span className="font-mono font-bold text-2xl">
                    {currentDateTime.day}, {currentDateTime.month} {currentDateTime.date}, {currentDateTime.year} -
                </span>
                <span className="font-mono font-semibold text-2xl">
                    {currentDateTime.time}
                </span>
                </div>
            </div>
            </div>
        </div>
                    </div>
                </div>
            </div>


        </div>
        </header>
    );
    };

    export default Headline;