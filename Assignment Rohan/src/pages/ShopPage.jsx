import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function ShopPage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="min-h-screen px-6 py-16 bg-white text-gray-800">
            {/* Header */}
            <div className="text-center mb-12" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-pink-900 mb-4">🛍️ Shop Our Collection</h2>
                <p className="max-w-2xl mx-auto text-gray-600">
                    Discover the elegance of traditional Indian ethnic wear – sarees, lehengas, kurtis, and more.
                </p>
            </div>

            {/* Product Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                        key={item}
                        data-aos="fade-up"
                        className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={`https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D,${item}`}
                            alt="Product"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Product Name</h3>
                            <p className="text-pink-600 font-bold mt-2">₹1,999</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Services Section */}
            <div className="text-center py-16 bg-pink-50 rounded-2xl mb-20" data-aos="fade-up">
                <h3 className="text-3xl font-bold text-pink-900 mb-6">✨ Our Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {['Free Shipping', 'Easy Returns', 'Secure Payments', 'Custom Tailoring'].map((service, index) => (
                        <div key={index} className="p-6 bg-white rounded-xl shadow-md" data-aos="fade-up">
                            <h4 className="text-xl font-semibold text-pink-700 mb-2">{service}</h4>
                            <p className="text-sm text-gray-600">
                                Enjoy our {service.toLowerCase()} for a smooth shopping experience.
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Customer Feedback */}
            <div className="mb-20" data-aos="fade-up">
                <h3 className="text-3xl font-bold text-pink-900 text-center mb-8">💬 Customer Reviews</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[1, 2, 3].map((review) => (
                        <div key={review} className="p-6 bg-gray-100 rounded-xl shadow" data-aos="fade-up">
                            <p className="text-gray-700 mb-4 italic">
                                "Absolutely stunning collections! Quality is top-notch and delivery was quick. Highly recommended."
                            </p>
                            <div className="font-semibold text-pink-800">— Happy Customer</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Store Info */}
            <div className="bg-gray-100 py-16 px-6 rounded-2xl" data-aos="fade-up">
                <h3 className="text-3xl font-bold text-pink-900 text-center mb-8">🏬 Our Store</h3>
                <div className="flex flex-col lg:flex-row gap-10 items-center max-w-6xl mx-auto">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248807.9719447882!2d77.50623118031073!3d12.995848174355768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae160a66867819%3A0xbe80f4c87c8e5e4e!2sSapna%20Fashion!5e0!3m2!1sen!2sin!4v1749107848920!5m2!1sen!2sin"
                        width="50%"
                        height="300"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: 0 }}
                        className="rounded-xl shadow-md"
                    />
                    <div className="lg:w-1/2 text-left space-y-4">
                        <h4 className="text-xl font-semibold text-pink-800">Sapna Sriwaz Boutique</h4>
                        <p className="text-gray-700">
                            Visit us to experience the finest Indian ethnic wear in person. Explore our vibrant range of sarees,
                            salwar suits, lehengas, and more.
                        </p>
                        <p className="text-gray-700">
                            <strong>Location:</strong> 123 Ethnic Street, Bengaluru, Karnataka - 560001
                        </p>
                        <p className="text-gray-700">
                            <strong>Timings:</strong> Mon–Sat, 10 AM to 8 PM
                        </p>
                        <a
                            href="https://goo.gl/maps/example"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
                        >
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
