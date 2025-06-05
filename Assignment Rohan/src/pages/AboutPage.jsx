import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AboutPage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const designers = [
        {
            name: "Anjali Mehta",
            role: "Head Designer",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Priya Sharma",
            role: "Textile Artist",
            image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Riya Kapoor",
            role: "Pattern Specialist",
            image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    return (
        <section className="min-h-screen px-6 py-16 bg-white text-gray-800">
            {/* About Us Header */}
            <div className="text-center mb-12" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-pink-900 mb-4">👗 About Sapna Sriwaz</h2>
                <p className="max-w-2xl mx-auto text-gray-600">
                    Celebrating the timeless beauty of Indian fashion, empowering women through elegance and culture.
                </p>
            </div>

            {/* Brand Story */}
            <div className="max-w-5xl mx-auto mb-20 text-center space-y-6" data-aos="fade-up">
                <p>
                    Sapna Sriwaz was founded with a passion to bring traditional Indian wear into the modern spotlight. Every
                    piece we create blends handcrafted artistry with contemporary trends.
                </p>
                <p>
                    From festive sarees to stylish kurtis, our goal is to make ethnic wear a powerful form of self-expression
                    for women across all walks of life.
                </p>
                <p className="italic text-pink-700 font-medium">“Fashion is art, and every woman is the canvas.”</p>
            </div>

            {/* Meet Our Designers */}
            <div className="mb-20" data-aos="fade-up">
                <h3 className="text-3xl font-bold text-pink-900 text-center mb-8">🎨 Meet Our Designers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {designers.map((designer, index) => (
                        <div key={index} className="bg-pink-50 p-6 rounded-xl text-center shadow" data-aos="fade-up">
                            <img
                                src={designer.image}
                                alt={designer.name}
                                className="w-40 h-40 object-cover mx-auto rounded-full mb-4 shadow-md"
                            />
                            <h4 className="text-xl font-semibold text-pink-800">{designer.name}</h4>
                            <p className="text-gray-600">{designer.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-gray-100 py-16 px-6 rounded-2xl" data-aos="fade-up">
                <h3 className="text-3xl font-bold text-pink-900 text-center mb-8">🌟 What We Stand For</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Empowerment",
                            desc: "We design to empower women with confidence and cultural pride.",
                        },
                        {
                            title: "Craftsmanship",
                            desc: "Each garment reflects rich Indian craftsmanship passed down generations.",
                        },
                        {
                            title: "Sustainability",
                            desc: "We support eco-conscious fashion with ethical sourcing and production.",
                        },
                    ].map((value, index) => (
                        <div key={index} className="p-6 bg-white rounded-xl shadow" data-aos="fade-up">
                            <h4 className="text-xl font-semibold text-pink-700 mb-2">{value.title}</h4>
                            <p className="text-sm text-gray-600">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
