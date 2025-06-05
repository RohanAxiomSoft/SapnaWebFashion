import React from 'react';

export function WhyChooseUs() {
    const features = [
        {
            icon: "🎨",
            title: "Handcrafted Designs",
            description: "Each piece is made with love and intricate detailing to match your elegance.",
        },
        {
            icon: "🚚",
            title: "Free Delivery",
            description: "Enjoy fast & free shipping across India on all your favorite picks.",
        },
        {
            icon: "🧵",
            title: "Authentic Fabric",
            description: "We use premium-quality fabrics that feel luxurious and last long.",
        },
    ];

    return (
        <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-pink-50 to-white text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 mb-12" data-aos="fade-up">
                ✨ Why Choose <span className="text-black">Sapna Sriwaz</span>?
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((f, i) => (
                    <div
                        key={i}
                        data-aos="fade-up"
                        data-aos-delay={i * 100}
                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
                    >
                        <div className="text-5xl mb-4">{f.icon}</div>
                        <h3 className="text-xl font-bold text-pink-800 mb-2">{f.title}</h3>
                        <p className="text-gray-600 text-sm">{f.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
