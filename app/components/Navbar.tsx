"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import { ToggleTheme } from "./ToggleTheme";

export default function Navbar() {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[75%] z-50">
            <div className="flex items-center justify-between px-6 py-3 rounded-3xl transition-all duration-300 bg-white border border-gray-300 shadow-sm text-gray-600 dark:backdrop-blur-md dark:bg-black/20 dark:border-white/10 dark:text-white dark:shadow-md">
                <div className="flex items-center gap-3 cursor-pointer">
                    <Image
                        src={logo}
                        alt="Company logo"
                        width={36}
                        height={36}
                        className="rounded-full border border-gray-300 dark:border-white/20"
                    />
                    <p className="text-xl font-semibold">Smriz</p>
                </div>

                <div className="flex gap-4">
                    <ToggleTheme />
                    <Link
                        href="https://github.com/theashishshah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 rounded-xl font-medium transition-all duration-300 bg-white border border-gray-300 text-gray-600 hover:shadow-sm dark:bg-transparent dark:border-white/20 dark:text-white dark:hover:bg-white/10"
                    >
                        GitHub
                    </Link>
                </div>
            </div>
        </nav>
    );
}
