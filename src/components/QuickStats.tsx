import React from "react";

export default function QuickStats() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                        <div className="text-2xl font-bold text-purple-600 mb-1">30秒</div>
                        <div className="text-sm text-purple-700">セットアップ時間</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                        <div className="text-2xl font-bold text-green-600 mb-1">0円</div>
                        <div className="text-sm text-green-700">基本機能すべて</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                        <div className="text-2xl font-bold text-blue-600 mb-1">3ステップ</div>
                        <div className="text-sm text-blue-700">簡単スタート</div>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6">
                        <div className="text-2xl font-bold text-pink-600 mb-1">24/7</div>
                        <div className="text-sm text-pink-700">自動で更新</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
