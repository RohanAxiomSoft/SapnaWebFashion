import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Testimonials() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);


    const fabricBrands = [
        {
            name: "Suta",
            tagline: "Soft handwoven elegance for everyday charm",
            image: "https://i.ibb.co/SnFKRwN/suta-logo.png",
        },
        {
            name: "Fabindia",
            tagline: "Tradition meets modern Indian design",
            image: "https://i.ibb.co/smyTFyM/fabindia-logo.png",
        },
        {
            name: "Bunaai",
            tagline: "Comfort-first ethnic styles",
            image: "https://i.ibb.co/2NkFSL5/bunaai-logo.png",
        },
        {
            name: "Jaypore",
            tagline: "Timeless craftsmanship from artisans",
            image: "https://i.ibb.co/GnKMjtr/jaypore-logo.png",
        },
        {
            name: "Biba",
            tagline: "Contemporary ethnic for the bold woman",
            image: "https://i.ibb.co/d6bzCQQ/biba-logo.png",
        },
        {
            name: "Raw Mango",
            tagline: "Luxurious silks with a cultural soul",
            image: "https://i.ibb.co/KhDYQqL/rawmango-logo.png",
        },
    ];



    const newArrivalsImages = [
        "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1655333879254-1fb721db743c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1585240975858-7264fd020798?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div>
            {/* Testimonials Section */}
            {/* Testimonials Section with Slider */}
            <section className="py-4 px-4 md:px-12 bg-gray-950 text-center">
                <h2
                    className="text-2xl md:text-3xl font-semibold mb-6 text-pink-400"
                    data-aos="fade-up"
                >
                    Our Featured <span className='text-white'>Fabric Brands..</span>
                </h2>

                <div className="max-w-5xl mx-auto" data-aos="fade-up">
                    <Slider {...settings}>
                        {fabricBrands.map((brand, index) => (
                            <div key={index} className="px-2">
                                <div className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm hover:shadow-md transition h-full">
                                    <img
                                        src={brand.image}
                                        alt={brand.name}
                                        className="h-14 mx-auto mb-3 object-contain"
                                    />
                                    <h3 className="text-base font-medium text-pink-800">{brand.name}</h3>
                                    <p className="text-xs text-gray-600 mt-1">{brand.tagline}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>


            {/* New Arrivals Section */}
            <section className="py-20 px-6 md:px-20 bg-gray-100">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Text Section */}
                    <div data-aos="fade-up" className="lg:w-1/2">
                        <h3 className="text-9xl md:text-9xl font-bold text-pink-900 mb-4">
                            New <span className='text-black'>Arrivals</span> Are Here..!
                        </h3>
                        <p className="text-gray-700 text-lg mb-6">
                            Discover our freshest collection of ethnic wear – crafted with vibrant hues, fine fabrics, and timeless charm. Made for today’s modern yet traditional woman.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                            <li>✨ Premium fabrics: Soft silks, breezy cottons & luxurious georgettes</li>
                            <li>🧵 Hand-embroidered details & unique prints</li>
                            <li>💃 Perfect fits for festive occasions, weddings & casual glam</li>
                            <li>🌈 Color palette designed to complement every skin tone</li>
                        </ul>
                        <button className="bg-pink-600 text-white content-center px-6 py-2 rounded-full hover:bg-pink-700 transition duration-300">
                            Shop the Collection
                        </button>
                    </div>

                    {/* Image Grid Section */}
                    <div data-aos="fade-up" data-aos-delay="200" className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {newArrivalsImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`New Arrival ${index + 1}`}
                                className="rounded-2xl shadow-md hover:scale-105 transition-all duration-300"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
