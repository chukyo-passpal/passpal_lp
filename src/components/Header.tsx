import React from "react";
import { Sparkles } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg mr-2 shadow-sm">
                            <Sparkles className="w-5 h-5 text-white m-1.5" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">PassPal</span>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#features" className="text-gray-600 hover:text-purple-600">
                            機能
                        </a>
                        <a href="#how-it-works" className="text-gray-600 hover:text-purple-600">
                            使い方
                        </a>
                        <a href="#testimonials" className="text-gray-600 hover:text-purple-600">
                            レビュー
                        </a>
                        <a href="#faq" className="text-gray-600 hover:text-purple-600">
                            FAQ
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
