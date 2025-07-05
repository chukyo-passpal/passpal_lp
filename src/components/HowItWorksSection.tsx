import React from "react";
import { Badge } from "@/components/ui/badge";
import { Zap, CheckCircle, Sparkles } from "lucide-react";
import DownloadCTA from "./DownloadCTA";

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-gradient-to-r from-green-400 to-blue-400 text-white border-0">
                        <Zap className="w-4 h-4 mr-2" />
                        超カンタン3ステップ
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">たった30秒で完了！</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">面倒な設定は一切不要。今すぐ始められます。</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="text-center">
                        <div className="relative mb-8">
                            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <span className="text-2xl font-bold text-white">1</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">学校を選ぶだけ</h3>
                        <p className="text-gray-600">ドロップダウンから学校を選択。アカウント作成やパスワード設定は不要です。</p>
                        <div className="mt-4 flex justify-center">
                            <Badge className="bg-green-100 text-green-700 text-xs">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                登録不要
                            </Badge>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="text-center">
                        <div className="relative mb-8">
                            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <span className="text-2xl font-bold text-white">2</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">自動で情報取得</h3>
                        <p className="text-gray-600">時間割や課題情報を自動的に取得。面倒な手動入力は一切不要です。</p>
                        <div className="mt-4 flex justify-center">
                            <Badge className="bg-blue-100 text-blue-700 text-xs">
                                <Zap className="w-3 h-3 mr-1" />
                                自動同期
                            </Badge>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="text-center">
                        <div className="mb-8">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <span className="text-2xl font-bold text-white">3</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">すぐに使い始める</h3>
                        <p className="text-gray-600">ホーム画面ですべて確認。チュートリアルや説明書を読む必要もありません。</p>
                        <div className="mt-4 flex justify-center">
                            <Badge className="bg-purple-100 text-purple-700 text-xs">
                                <Sparkles className="w-3 h-3 mr-1" />
                                完了！
                            </Badge>
                        </div>
                    </div>
                </div>

                {/* CTA in How it works */}
                <div className="text-center mt-12">
                    <DownloadCTA />
                </div>
            </div>
        </section>
    );
}
