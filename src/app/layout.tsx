import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
    subsets: ["latin"],
    weight: ["400", "700"],
    preload: false,
    variable: "--font-noto-sans-jp",
    display: "swap",
    fallback: ["Hiragino Sans", "Hiragino Kaku Gothic ProN", "sans-serif"],
});

export const metadata: Metadata = {
    title: "PassPal",
    description: "PassPalは、中京大学非公式の学生生活支援アプリです。",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={`${notoSansJp.variable} antialiased`}>{children}</body>
        </html>
    );
}
