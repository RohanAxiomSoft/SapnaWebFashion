import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink, useLocation } from "react-router-dom";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <header className={`top-0 left-0 w-full z-50 ${isHome ? "absolute" : "relative bg-black"}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
                <div className="text-xl font-extrabold tracking-wide">SapnA SriwaZ</div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex flex-1 justify-center space-x-8 text-base font-semibold">
                    <NavLink to="/" className="block no-underline text-white hover:text-pink-200">Home</NavLink>
                    <NavLink to="/shop" className="block no-underline text-white hover:text-pink-200">Shop</NavLink>
                    <NavLink to="/about" className="block no-underline text-white hover:text-pink-200">About Us</NavLink>
                    <NavLink to="/blogs" className="block no-underline text-white hover:text-pink-200">Blogs</NavLink>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-2">
                    <button className="hidden md:inline-block border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition duration-300">
                        Login
                    </button>
                    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-semibold">U</div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-white text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black px-6 py-4 space-y-4 text-center text-white font-semibold">
                    <NavLink to="/" className="block no-underline text-white hover:text-pink-200">Home</NavLink>
                    <NavLink to="/shop" className="block no-underline text-white hover:text-pink-200">Shop</NavLink>
                    <NavLink to="/about" className="block no-underline text-white hover:text-pink-200">About Us</NavLink>
                    <NavLink to="/blogs" className="block no-underline text-white hover:text-pink-200">Blogs</NavLink>
                    <button className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition duration-300">
                        Login
                    </button>
                </div>
            )}
        </header>
    );
}
