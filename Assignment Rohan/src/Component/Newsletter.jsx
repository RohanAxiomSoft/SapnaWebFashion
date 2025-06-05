import React from 'react';

export function Newsletter() {
    const feedback = [
        { name: "Priya", text: "Absolutely love the fabric and fit!", rating: 5 },
        { name: "Anjali", text: "Beautiful designs, great customer service.", rating: 4 },
        { name: "Ritika", text: "Got so many compliments wearing this saree!", rating: 5 },
        { name: "Meena", text: "Stylish and comfortable – perfect combo!", rating: 5 },
    ];

    return (
        <section className="bg-gray-100 py-16 px-6 text-center">
            {/* Newsletter Section */}
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="mb-6">Sign up for our newsletter and never miss a style update!</p>
            <div className="flex justify-center gap-2 max-w-md mx-auto mb-12">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-2 rounded-l-full border focus:outline-none"
                />
                <button className="bg-black text-white px-6 py-2 rounded-r-full hover:bg-gray-800 transition duration-300">
                    Subscribe
                </button>
            </div>

            {/* Customer Feedback Section */}
            <h3 className="text-2xl font-semibold text-pink-900 mb-8">💬 What Customers Are Saying</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {feedback.map((f, i) => (
                    <div
                        key={i}
                        className="bg-white border border-pink-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
                    >
                        <p className="italic text-pink-800 mb-3">"{f.text}"</p>
                        <div className="font-semibold text-pink-900">- {f.name}</div>
                        <div className="text-yellow-400 mt-1 text-lg">
                            {"★".repeat(f.rating)}{"☆".repeat(5 - f.rating)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
