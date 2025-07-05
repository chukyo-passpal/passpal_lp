import React from "react";
import { Separator } from "@/components/ui/separator";
import { Sparkles, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-2">
                                <Sparkles className="w-5 h-5 text-white m-1.5" />
                            </div>
                            <span className="text-xl font-bold">PassPal</span>
                        </div>
                        <p className="text-gray-400">学生生活をサポートする、やさしく頼れるパートナー</p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">サポート</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="#" className="hover:text-white">
                                    お問い合わせ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    バグ報告
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">法的情報</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="#" className="hover:text-white">
                                    利用規約
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    プライバシーポリシー
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">SNS</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <Separator className="my-8 bg-gray-800" />

                <div className="text-center text-gray-400">
                    <p>&copy; 2025 PassPal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
