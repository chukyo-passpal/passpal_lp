import React from "react";

export default function QuickStats() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-10 max-w-2xl text-center">
                    <h2 className="text-2xl font-bold text-passpal-black md:text-3xl">数字で見るPassPal</h2>
                    <p className="mt-3 text-base text-passpal-gray-600 md:text-lg">導入のしやすさと安心を示す主要なポイントを、ひと目で確認できます。</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="bg-passpal-primary-light rounded-2xl p-6">
                        <div className="text-2xl font-bold text-passpal-primary mb-1">30秒</div>
                        <div className="text-sm text-passpal-primary-dark">セットアップ時間</div>
                    </div>
                    <div className="bg-passpal-green-light rounded-2xl p-6">
                        <div className="text-2xl font-bold text-passpal-success mb-1">0円</div>
                        <div className="text-sm text-passpal-success">基本機能すべて</div>
                    </div>
                    <div className="bg-passpal-blue-light rounded-2xl p-6">
                        <div className="text-2xl font-bold text-passpal-blue mb-1">3ステップ</div>
                        <div className="text-sm text-passpal-info">簡単スタート</div>
                    </div>
                    <div className="bg-passpal-pink-light rounded-2xl p-6">
                        <div className="text-2xl font-bold text-passpal-pink mb-1">24/7</div>
                        <div className="text-sm text-passpal-pink">自動で更新</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
