import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Bell, Sparkles, Timer, Zap, MousePointer, Clock } from "lucide-react";

export default function FeaturesSection() {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-passpal-warning-light text-passpal-warning border-passpal-warning">
                        <Sparkles className="w-4 h-4 mr-2" />
                        手軽で簡単
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-passpal-black mb-4">ぱすぱるの主な特徴</h2>
                    <p className="text-xl text-passpal-gray-600 max-w-2xl mx-auto">複雑な設定は一切不要。今すぐ使い始められます。</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-passpal-primary-light to-white hover:shadow-xl transition-shadow">
                        <CardHeader className="text-center pb-4">
                            <div className="w-16 h-16 bg-passpal-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                                <BookOpen className="h-8 w-8 text-passpal-white" />
                            </div>
                            <CardTitle className="text-xl text-passpal-black">授業・課題管理</CardTitle>
                            <Badge className="bg-passpal-success-light text-passpal-success text-xs">
                                <Timer className="w-3 h-3 mr-1" />
                                リアルタイム更新
                            </Badge>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-passpal-gray-600 mb-6">授業・課題を自動整理。次の授業や残り課題数が一目で分かります。</p>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-passpal-primary">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-passpal-black">データ構造</span>
                                    <Badge className="bg-passpal-error-light text-passpal-error border-passpal-error text-xs">
                                        <Clock className="w-3 h-3 mr-1" />
                                        締切間近
                                    </Badge>
                                </div>
                                <div className="text-sm text-passpal-gray-600">明日 23:59 まで</div>
                                <div className="mt-2 w-full bg-passpal-error-light rounded-full h-2">
                                    <div className="bg-passpal-error h-2 rounded-full" style={{ width: "85%" }}></div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Feature 2 */}
                    <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-passpal-green-light to-white hover:shadow-xl transition-shadow">
                        <CardHeader className="text-center pb-4">
                            <div className="w-16 h-16 bg-passpal-success rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                                <Bell className="h-8 w-8 text-passpal-white" />
                            </div>
                            <CardTitle className="text-xl text-passpal-black">お知らせ一元管理</CardTitle>
                            <Badge className="bg-passpal-blue-light text-passpal-blue text-xs">
                                <Zap className="w-3 h-3 mr-1" />
                                自動収集
                            </Badge>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-passpal-gray-600 mb-6">複数サービスからのお知らせ・メールをまとめて管理。見逃しゼロ！</p>
                            <div className="space-y-2">
                                <div className="bg-white rounded-xl p-3 shadow-sm text-left border-l-4 border-passpal-success">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-passpal-success rounded-full mr-3"></div>
                                            <span className="text-sm text-passpal-black">休講のお知らせ</span>
                                        </div>
                                        <Badge className="bg-passpal-success-light text-passpal-success text-xs">新着</Badge>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl p-3 shadow-sm text-left border-l-4 border-passpal-info">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-passpal-info rounded-full mr-3"></div>
                                            <span className="text-sm text-passpal-black">成績発表</span>
                                        </div>
                                        <Badge className="bg-passpal-info-light text-passpal-info text-xs">重要</Badge>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Feature 3 */}
                    <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-passpal-blue-light to-white hover:shadow-xl transition-shadow">
                        <CardHeader className="text-center pb-4">
                            <div className="w-16 h-16 bg-passpal-info rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                                <Sparkles className="h-8 w-8 text-passpal-white" />
                            </div>
                            <CardTitle className="text-xl text-passpal-black">超シンプルデザイン</CardTitle>
                            <Badge className="bg-passpal-primary-light text-passpal-primary text-xs">
                                <MousePointer className="w-3 h-3 mr-1" />
                                直感操作
                            </Badge>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-passpal-gray-600 mb-6">迷わず操作できるシンプルさ。説明書不要で今すぐ使えます。</p>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-passpal-info">
                                <div className="flex justify-center space-x-2 mb-4">
                                    <div className="w-6 h-6 bg-passpal-primary rounded-full animate-pulse"></div>
                                    <div className="w-6 h-6 bg-passpal-success rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                                    <div className="w-6 h-6 bg-passpal-info rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                                    <div className="w-6 h-6 bg-passpal-pink rounded-full animate-pulse" style={{ animationDelay: "0.6s" }}></div>
                                </div>
                                <p className="text-sm text-passpal-gray-600">親しみやすいカラーパレット</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
