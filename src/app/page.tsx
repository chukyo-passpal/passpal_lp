import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickStats from "@/components/QuickStats";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <HeroSection />
            <QuickStats />
            <FeaturesSection />
            <HowItWorksSection />
            <TestimonialsSection />
            <FAQSection />
            <CTASection />
            <Footer />
        </div>
    );
}
