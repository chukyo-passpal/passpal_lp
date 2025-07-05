import React from "react";
import { Sparkles } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-passpal-primary rounded-lg mr-2 shadow-sm">
                            <Sparkles className="w-5 h-5 text-passpal-white m-1.5" />
                        </div>
                        <span className="text-xl font-bold text-passpal-black">PassPal</span>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#features" className="text-passpal-gray-600 hover:text-passpal-primary transition-colors">
                            機能
                        </a>
                        <a href="#how-it-works" className="text-passpal-gray-600 hover:text-passpal-primary transition-colors">
                            使い方
                        </a>
                        <a href="#testimonials" className="text-passpal-gray-600 hover:text-passpal-primary transition-colors">
                            レビュー
                        </a>
                        <a href="#faq" className="text-passpal-gray-600 hover:text-passpal-primary transition-colors">
                            FAQ
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
