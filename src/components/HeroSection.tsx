import React from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Clock, BookOpen, Bell, Sparkles } from "lucide-react";
import DownloadCTA from "./DownloadCTA";

export default function HeroSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="flex justify-center items-center mb-4">
                        <Badge className="bg-gradient-to-r from-green-400 to-blue-400 text-white border-0 px-4 py-2 text-sm">
                            <Zap className="w-4 h-4 mr-2" />
                            たった3分でセットアップ完了！
                        </Badge>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        学生生活を
                        <br />
                        もっと<span className="text-purple-600">スマート</span>に。
                    </h1>
                    <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
                        ぱすぱるは、授業・課題・連絡を一元管理できる新しい学生生活サポートアプリです。
                    </p>
                    <div className="flex justify-center items-center mb-8 text-green-600">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="text-lg">セットアップ不要 • 完全無料 • すぐに使える</span>
                    </div>
                    <DownloadCTA />
                </div>

                {/* App Preview */}
                <div className="mt-16 flex justify-center">
                    <div className="relative max-w-md mx-auto">
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur opacity-30 animate-pulse"></div>
                        <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                            <div className="flex justify-between items-center mb-4">
                                <Badge className="bg-green-100 text-green-700 text-xs">
                                    <Clock className="w-3 h-3 mr-1" />
                                    リアルタイム更新
                                </Badge>
                                <Badge className="bg-blue-100 text-blue-700 text-xs">自動同期中</Badge>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-6 mb-4">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 bg-purple-500 rounded-full mr-3 flex items-center justify-center">
                                        <Sparkles className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <div className="h-3 bg-purple-300 rounded w-20 mb-1"></div>
                                        <div className="h-2 bg-purple-200 rounded w-16"></div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-green-400">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <BookOpen className="h-5 w-5 text-purple-500 mr-3" />
                                                <div>
                                                    <div className="h-3 bg-gray-300 rounded w-24 mb-1"></div>
                                                    <div className="h-2 bg-gray-200 rounded w-16"></div>
                                                </div>
                                            </div>
                                            <Badge className="bg-green-100 text-green-600 text-xs">完了</Badge>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-yellow-400">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <Bell className="h-5 w-5 text-orange-500 mr-3" />
                                                <div>
                                                    <div className="h-3 bg-gray-300 rounded w-28 mb-1"></div>
                                                    <div className="h-2 bg-gray-200 rounded w-20"></div>
                                                </div>
                                            </div>
                                            <Badge className="bg-orange-100 text-orange-600 text-xs">新着</Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
