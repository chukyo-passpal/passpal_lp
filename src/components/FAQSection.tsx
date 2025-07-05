import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, School, CreditCard, Zap, CheckCircle } from "lucide-react";

export default function FAQSection() {
    return (
        <section id="faq" className="py-20 bg-passpal-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-passpal-black mb-4">よくある質問</h2>
                    <p className="text-xl text-passpal-gray-600">「簡単すぎて不安...」そんな疑問にお答えします。</p>
                </div>

                <div className="space-y-6">
                    {/* FAQ Item 1 */}
                    <Card className="border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                        <CardContent className="p-8">
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-passpal-primary rounded-full flex items-center justify-center mr-4 mt-1">
                                    <Shield className="h-4 w-4 text-passpal-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-passpal-black mb-2">本当にセキュリティは大丈夫？</h3>
                                    <p className="text-passpal-gray-600">
                                        はい、業界標準のセキュリティ対策を実装。簡単=不安全ではありません。 すべてのデータは暗号化され、厳重に保護されています。
                                    </p>
                                    <Badge className="mt-2 bg-passpal-success-light text-passpal-success text-xs">
                                        <Shield className="w-3 h-3 mr-1" />
                                        SSL暗号化
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* FAQ Item 2 */}
                    <Card className="border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                        <CardContent className="p-8">
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-passpal-success rounded-full flex items-center justify-center mr-4 mt-1">
                                    <School className="h-4 w-4 text-passpal-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-passpal-black mb-2">うちの学校も対応してる？</h3>
                                    <p className="text-passpal-gray-600">
                                        日本の主要な大学・専門学校に対応済み。対応校は毎週追加されています。 対応状況はアプリ内で即座に確認できます。
                                    </p>
                                    <Badge className="mt-2 bg-passpal-blue-light text-passpal-blue text-xs">
                                        <Zap className="w-3 h-3 mr-1" />
                                        随時拡大中
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* FAQ Item 3 */}
                    <Card className="border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                        <CardContent className="p-8">
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-passpal-info rounded-full flex items-center justify-center mr-4 mt-1">
                                    <CreditCard className="h-4 w-4 text-passpal-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-passpal-black mb-2">本当に完全無料？</h3>
                                    <p className="text-passpal-gray-600">
                                        はい、基本機能は永久無料です。学生の皆さんを応援したいので、 必要な機能はすべて無料で使えます。
                                    </p>
                                    <Badge className="mt-2 bg-passpal-success-light text-passpal-success text-xs">
                                        <CheckCircle className="w-3 h-3 mr-1" />
                                        永久無料
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
