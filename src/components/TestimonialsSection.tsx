import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock } from "lucide-react";

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">みんな「簡単すぎる」と驚いています</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">実際にPassPalを使っている学生たちの感想をご紹介します。</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
                        <CardContent className="p-8 text-center">
                            <div className="flex justify-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6">「本当に30秒で使えるようになった！課題提出忘れが完全になくなって、もう手放せません。」</p>
                            <div className="flex items-center justify-center">
                                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-bold">愛</span>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">田中 愛美</p>
                                    <p className="text-sm text-gray-500">東京大学 3年生</p>
                                </div>
                            </div>
                            <Badge className="mt-4 bg-green-100 text-green-700 text-xs">
                                <Clock className="w-3 h-3 mr-1" />
                                利用歴3ヶ月
                            </Badge>
                        </CardContent>
                    </Card>

                    {/* Testimonial 2 */}
                    <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
                        <CardContent className="p-8 text-center">
                            <div className="flex justify-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6">「設定とか面倒なことが大嫌いな私でも、本当にクリックするだけで使えました。神アプリです！」</p>
                            <div className="flex items-center justify-center">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-bold">健</span>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">佐藤 健太</p>
                                    <p className="text-sm text-gray-500">早稲田大学 2年生</p>
                                </div>
                            </div>
                            <Badge className="mt-4 bg-blue-100 text-blue-700 text-xs">
                                <Clock className="w-3 h-3 mr-1" />
                                利用歴1ヶ月
                            </Badge>
                        </CardContent>
                    </Card>

                    {/* Testimonial 3 */}
                    <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
                        <CardContent className="p-8 text-center">
                            <div className="flex justify-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6">「友達に教えたら『えっ、もうできるの？』って驚かれました。こんなに簡単なアプリ初めて！」</p>
                            <div className="flex items-center justify-center">
                                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-bold">さ</span>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">山田 さくら</p>
                                    <p className="text-sm text-gray-500">慶應義塾大学 1年生</p>
                                </div>
                            </div>
                            <Badge className="mt-4 bg-pink-100 text-pink-700 text-xs">
                                <Clock className="w-3 h-3 mr-1" />
                                利用歴2週間
                            </Badge>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
