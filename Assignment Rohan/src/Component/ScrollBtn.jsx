// components/ScrollToTopButton.jsx
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export function ScrollBtn() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(window.scrollY > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition duration-300 z-50"
                aria-label="Scroll to top"
            >
                <FaArrowUp />
            </button>
        )
    );
}
