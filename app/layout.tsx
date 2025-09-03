import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import { BackgroundBeams } from "./components/ui/background-beams";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Smriz - Article/Blog summarizer",
    description: "This app summarize articles and blogs you provide link",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <ThemeProvider>
                <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                    <Navbar />
                    <div className="pointer-events-none fixed inset-0 -z-10">
                        <BackgroundBeams />
                    </div>
                    <main className="pt-28">{children}</main>
                </body>
            </ThemeProvider>
        </html>
    );
}
