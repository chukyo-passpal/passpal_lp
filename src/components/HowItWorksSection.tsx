import React from "react";
import { Badge } from "@/components/ui/badge";
import { Zap, CheckCircle, Sparkles } from "lucide-react";
import DownloadCTA from "./DownloadCTA";

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-20 bg-gradient-to-b from-passpal-primary-light to-passpal-pink-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-passpal-success text-passpal-white border-0">
                        <Zap className="w-4 h-4 mr-2" />
                        超カンタン3ステップ
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-passpal-black mb-4">たった30秒で完了！</h2>
                    <p className="text-xl text-passpal-gray-600 max-w-2xl mx-auto">面倒な設定は一切不要。今すぐ始められます。</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="text-center">
                        <div className="relative mb-8">
                            <div className="w-20 h-20 bg-passpal-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <span className="text-2xl font-bold text-passpal-white">1</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-passpal-black mb-4">学校を選ぶだけ</h3>
                        <p className="text-passpal-gray-600">ドロップダウンから学校を選択。アカウント作成やパスワード設定は不要です。</p>
                        <div className="mt-4 flex justify-center">
                            <Badge className="bg-passpal-success-light text-passpal-success text-xs">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                登録不要
                            </Badge>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="text-center">
                        <div className="relative mb-8">
                            <div className="w-20 h-20 bg-passpal-success rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <span className="text-2xl font-bold text-passpal-white">2</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-passpal-black mb-4">自動で情報取得</h3>
                        <p className="text-passpal-gray-600">時間割や課題情報を自動的に取得。面倒な手動入力は一切不要です。</p>
                        <div className="mt-4 flex justify-center">
                            <Badge className="bg-passpal-blue-light text-passpal-blue text-xs">
                                <Zap className="w-3 h-3 mr-1" />
                                自動同期
                            </Badge>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="text-center">
                        <div className="mb-8">
                            <div className="w-20 h-20 bg-passpal-info rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <span className="text-2xl font-bold text-passpal-white">3</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-passpal-black mb-4">すぐに使い始める</h3>
                        <p className="text-passpal-gray-600">ホーム画面ですべて確認。チュートリアルや説明書を読む必要もありません。</p>
                        <div className="mt-4 flex justify-center">
                            <Badge className="bg-passpal-primary-light text-passpal-primary text-xs">
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
