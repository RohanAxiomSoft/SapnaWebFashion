import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';

export function HeroSection() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });

        // Show splash screen for 5 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    // Splash Screen
    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen bg-white">
                <div className="text-center">
                    <img
                        src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your logo URL
                        alt="Sapna Sriwaz Logo"
                        className="w-40 h-40 mx-auto animate-pulse rounded-3xl"
                    />
                    <div data-aos="fade-down">
                        <p className="mt-4 text-4xl md:text-8xl font-medium text-pink-800">
                            WelComE To SapnA SriwaZ
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Hero Section
    return (
        <section
            className="relative h-[90vh] flex items-center justify-center text-white bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D')] filter brightness-110"
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />

            {/* Fade-up heading card */}
            <div
                data-aos="fade-up"
                className="relative z-10 bg-black/60 w-[500px] md:w-[600px] p-8 rounded-2xl text-center shadow-2xl"
            >
                <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif tracking-wide leading-tight">
                    <Typewriter
                        words={[
                            'Embrace Ethnic Elegance',
                            'Discover Timeless Fashion',
                            'Celebrate Your Culture in Style',
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={200}
                        deleteSpeed={10}
                        delaySpeed={150}
                    />
                </h1>
                <p className="text-base md:text-lg mb-6 font-light text-gray-200">
                    Step into timeless tradition with <span className="font-semibold text-white">Sapna Sriwaz</span>
                </p>
                <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 shadow-md hover:scale-105">
                    Shop Now
                </button>
            </div>
        </section>
    );
}
