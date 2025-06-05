import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="rounded-t-3xl bg-gradient-to-b from-black to-gray-900 text-pink-100 pt-16 pb-6 px-6 md:px-12 lg:px-20 mt-12 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-serif font-extrabold mb-4 text-white">Sapna Sriwaz</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Embrace the elegance of ethnic fashion with curated styles for today’s modern women.
            "Absolutely love the fabric and fit!"
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-pink-500">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <NavLink to="/" className="block no-underline text-white hover:text-pink-200">Home</NavLink>

            </li>
            <li>
              <NavLink to="/shop" className="block no-underline text-white hover:text-pink-200">Shop</NavLink>

            </li>
            <li>
              <NavLink to="/about" className="block no-underline text-white hover:text-pink-200">About Us</NavLink>

            </li>
            <li>
              <NavLink to="/blogs" className="block no-underline text-white hover:text-pink-200">Blogs</NavLink>

            </li>

          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-pink-500">Stay in Style</h3>
          <p className="text-sm text-gray-300 mb-3">
            Sign up for updates on new arrivals and exclusive deals.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full sm:w-auto rounded-full border border-pink-400 bg-transparent text-sm placeholder:text-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
            <button className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition text-sm">
              Follow
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-pink-500">Follow Us</h3>
          <p className="text-sm text-gray-300 mb-3">Join our social family for inspiration & offers.</p>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-pink-600 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-600 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-600 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-600 transition"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-pink-800 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-white">Sapna Sriwaz</span>. All rights reserved.
      </div>
    </footer>
  );
}
