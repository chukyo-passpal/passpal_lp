import React from "react";

export default function QuickStats() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
