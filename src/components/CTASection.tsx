import React from "react";
import DownloadCTA from "./DownloadCTA";

export default function CTASection() {
    return (
        <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">もう迷う必要はありません</h2>
                <p className="text-xl text-purple-100 mb-8">たった30秒で、あなたの学生生活が変わります。</p>
                <DownloadCTA noteColor="text-white" />
            </div>
        </section>
    );
}
