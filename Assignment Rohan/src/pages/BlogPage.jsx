import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function BlogPage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const blogs = [
        {
            title: "Top 5 Saree Trends in 2025",
            desc: "Explore this year’s hottest saree styles, fabrics, and blouse designs dominating the ethnic fashion world.",
            image: "https://images.unsplash.com/photo-1610047879156-17b33d3d2c10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "#",
        },
        {
            title: "How to Style Kurtis for Every Occasion",
            desc: "From office looks to festive glam — discover versatile ways to wear your favorite kurtis.",
            image: "https://images.unsplash.com/photo-1619286188088-de820bdc1230?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "#",
        },
        {
            title: "Behind the Scenes: Handloom to Runway",
            desc: "Take a tour of how our designers craft ethnic pieces with love, care, and traditional artistry.",
            image: "https://images.unsplash.com/photo-1613483811459-1c4bb7a234f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "#",
        },
        {
            title: "Jewelry Pairing Tips for Lehengas",
            desc: "Learn how to elevate your lehenga look with matching statement jewelry pieces.",
            image: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "#",
        },
        {
            title: "Top 5 Saree Trends in 2025",
            desc: "Explore this year’s hottest saree styles, fabrics, and blouse designs dominating the ethnic fashion world.",
            image: "https://images.unsplash.com/photo-1610047879156-17b33d3d2c10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "#",
        },
        {
            title: "How to Style Kurtis for Every Occasion",
            desc: "From office looks to festive glam — discover versatile ways to wear your favorite kurtis.",
            image: "https://images.unsplash.com/photo-1619286188088-de820bdc1230?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "#",
        },
        {
            title: "Behind the Scenes: Handloom to Runway",
            desc: "Take a tour of how our designers craft ethnic pieces with love, care, and traditional artistry.",
            image: "https://images.unsplash.com/photo-1613483811459-1c4bb7a234f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "#",
        },
        {
            title: "Jewelry Pairing Tips for Lehengas",
            desc: "Learn how to elevate your lehenga look with matching statement jewelry pieces.",
            image: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "#",
        },
    ];

    return (
        <section className="min-h-screen px-6 py-16 bg-white text-gray-800">
            {/* Header */}
            <div className="text-center mb-12" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-pink-900 mb-4">📝 Fashion Blogs</h2>
                <p className="max-w-2xl mx-auto text-gray-600">
                    Tips, trends & stories from the world of Indian ethnic fashion.
                </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {blogs.map((blog, index) => (
                    <div key={index} className="bg-pink-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition" data-aos="fade-up">
                        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-pink-800 mb-2">{blog.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{blog.desc}</p>
                            <a
                                href={blog.link}
                                className="text-pink-600 hover:underline font-medium"
                            >
                                Read More →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
