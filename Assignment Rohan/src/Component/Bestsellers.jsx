import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Bestsellers() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const bestsellers = [
        {
            id: 1,
            name: "Elegant Silk Saree",
            price: "₹2,499",
            image:
                "https://images.unsplash.com/photo-1705164453572-69b94a306f92?q=80&w=1947&auto=format&fit=crop",
        },
        {
            id: 2,
            name: "Modern Kurti Set",
            price: "₹1,299",
            image:
                "https://images.unsplash.com/photo-1711965138480-2d6f7bb84986?q=80&w=1974&auto=format&fit=crop",
        },
        {
            id: 3,
            name: "Designer Lehenga",
            price: "₹3,999",
            image:
                "https://images.unsplash.com/photo-1602210666042-4d76a62d6fcb?q=80&w=1974&auto=format&fit=crop",
        },
        {
            id: 4,
            name: "Festive Anarkali",
            price: "₹2,799",
            image:
                "https://images.unsplash.com/photo-1546253424-b92aa1e18c2e?q=80&w=1974&auto=format&fit=crop",
        },
        {
            id: 5,
            name: "Modern Style",
            price: "₹3,499",
            image:
                "https://images.unsplash.com/photo-1591338459467-bd36100b07c2?q=80&w=2104&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        },
        {
            id: 6,
            name: "Western Special",
            price: "₹4,299",
            image:
                "https://images.unsplash.com/photo-1603217040830-34473db521a2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 7,
            name: "Traditional Sutt ",
            price: "₹6,999",
            image:
                "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 4,
            name: "Sport Wears",
            price: "₹1,799",
            image:
                "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

    ];

    return (
        <section className="bg-pink-50 py-10 px-6 md:px-12 lg:px-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-900 mb-8">
                Best Sellers
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {bestsellers.map((item) => (
                    <div
                        key={item.id}
                        data-aos="fade-up"
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                            <p className="text-pink-700 font-bold mt-2">{item.price}</p>
                            <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700 transition">
                                Shop Now
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
