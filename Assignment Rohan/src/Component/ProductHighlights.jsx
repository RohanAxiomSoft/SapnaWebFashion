import React from 'react';

export function ProductHighlights() {
    const products = [
        {
            title: "Sarees",
            img: "https://images.unsplash.com/photo-1717585679395-bbe39b5fb6bc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Lehengas",
            img: "https://images.unsplash.com/photo-1618232674171-5ea51c38b80b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmwlMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            title: "Kurtis",
            img: "https://images.unsplash.com/photo-1597983073750-16f5ded1321f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Ethnic Gowns",
            img: "https://images.unsplash.com/photo-1629455047322-a1fa628939a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Dupattas",
            img: "https://plus.unsplash.com/premium_photo-1682095664848-014a0a2bfd8a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Accessories",
            img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    return (
        <section className="py-14 px-6 bg-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-wide text-gray-800">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {products.map((item, index) => (
                    <div
                        key={index}
                        className="group border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                            <button className="px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                                Explore
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
