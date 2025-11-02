import React from "react";
import Script from "next/script";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickStats from "@/components/QuickStats";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "本当にセキュリティは大丈夫？",
            acceptedAnswer: {
                "@type": "Answer",
                text: "PassPalは業界標準のセキュリティ対策を実装し、すべてのデータを暗号化して保護しています。簡単に使える仕様でも安全性を最優先に設計しています。",
            },
        },
        {
            "@type": "Question",
            name: "うちの学校も対応してる？",
            acceptedAnswer: {
                "@type": "Answer",
                text: "PassPalは日本の主要大学・専門学校に対応済みで、対応校は定期的に追加しています。アプリ内から現在の対応状況を確認できます。",
            },
        },
        {
            "@type": "Question",
            name: "本当に完全無料？",
            acceptedAnswer: {
                "@type": "Answer",
                text: "学生の学習を支援する目的で、PassPalの基本機能はすべて無料で提供しています。追加課金なしで課題管理や時間割確認などの必須機能を使えます。",
            },
        },
    ],
};

export default function Home() {
    return (
        <>
            <Script id="faq-jsonld" type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify(faqStructuredData)}
            </Script>
            <div className="flex min-h-screen flex-col bg-white">
                <Header />
                <main id="main-content" className="flex-1">
                    <HeroSection />
                    <QuickStats />
                    <FeaturesSection />
                    <HowItWorksSection />
                    <TestimonialsSection />
                    <FAQSection />
                    <CTASection />
                </main>
                <Footer />
            </div>
        </>
    );
}
