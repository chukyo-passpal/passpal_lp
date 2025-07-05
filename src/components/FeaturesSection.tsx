import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Bell, Sparkles, Timer, Zap, MousePointer, Clock } from "lucide-react";

export default function FeaturesSection() {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
                        <Sparkles className="w-4 h-4 mr-2" />
                        手軽で簡単
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ぱすぱるの主な特徴</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">複雑な設定は一切不要。今すぐ使い始められます。</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-purple-50 to-white hover:shadow-xl transition-shadow">
                        <CardHeader className="text-center pb-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                                <BookOpen className="h-8 w-8 text-white" />
                            </div>
                            <CardTitle className="text-xl text-gray-900">授業・課題管理</CardTitle>
                            <Badge className="bg-green-100 text-green-700 text-xs">
                                <Timer className="w-3 h-3 mr-1" />
                                リアルタイム更新
                            </Badge>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-gray-600 mb-6">授業・課題を自動整理。次の授業や残り課題数が一目で分かります。</p>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-700">データ構造</span>
                                    <Badge className="bg-red-100 text-red-600 border-red-200 text-xs">
                                        <Clock className="w-3 h-3 mr-1" />
                                        締切間近
                                    </Badge>
                                </div>
                                <div className="text-sm text-gray-500">明日 23:59 まで</div>
                                <div className="mt-2 w-full bg-red-100 rounded-full h-2">
                                    <div className="bg-red-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Feature 2 */}
                    <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-green-50 to-white hover:shadow-xl transition-shadow">
                        <CardHeader className="text-center pb-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                                <Bell className="h-8 w-8 text-white" />
                            </div>
                            <CardTitle className="text-xl text-gray-900">お知らせ一元管理</CardTitle>
                            <Badge className="bg-blue-100 text-blue-700 text-xs">
                                <Zap className="w-3 h-3 mr-1" />
                                自動収集
                            </Badge>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-gray-600 mb-6">複数サービスからのお知らせ・メールをまとめて管理。見逃しゼロ！</p>
                            <div className="space-y-2">
                                <div className="bg-white rounded-xl p-3 shadow-sm text-left border-l-4 border-green-400">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span className="text-sm text-gray-700">休講のお知らせ</span>
                                        </div>
                                        <Badge className="bg-green-100 text-green-600 text-xs">新着</Badge>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl p-3 shadow-sm text-left border-l-4 border-blue-400">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            <span className="text-sm text-gray-700">成績発表</span>
                                        </div>
                                        <Badge className="bg-blue-100 text-blue-600 text-xs">重要</Badge>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Feature 3 */}
                    <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-blue-50 to-white hover:shadow-xl transition-shadow">
                        <CardHeader className="text-center pb-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                                <Sparkles className="h-8 w-8 text-white" />
                            </div>
                            <CardTitle className="text-xl text-gray-900">超シンプルデザイン</CardTitle>
                            <Badge className="bg-purple-100 text-purple-700 text-xs">
                                <MousePointer className="w-3 h-3 mr-1" />
                                直感操作
                            </Badge>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-gray-600 mb-6">迷わず操作できるシンプルさ。説明書不要で今すぐ使えます。</p>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                                <div className="flex justify-center space-x-2 mb-4">
                                    <div className="w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
                                    <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                                    <div className="w-6 h-6 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                                    <div className="w-6 h-6 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }}></div>
                                </div>
                                <p className="text-sm text-gray-500">親しみやすいカラーパレット</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
