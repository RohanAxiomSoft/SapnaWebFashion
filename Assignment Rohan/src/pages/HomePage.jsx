import React from "react";
import { HeroSection } from "../Component/HeroSection";
import { ProductHighlights } from "../Component/ProductHighlights";
import { Bestsellers } from "../Component/Bestsellers";
import { Testimonials } from "../Component/Testimonials";
import { WhyChooseUs } from "../Component/WhyChooseUs";
import { Newsletter } from "../Component/Newsletter";

export function HomePage() {
    return (
        <>
            <HeroSection />
            <Testimonials />
            <ProductHighlights />
            <Bestsellers />
            <WhyChooseUs />
            <Newsletter />
        </>
    );
}
