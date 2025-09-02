"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import { ToggleTheme } from "./ToggleTheme";

export default function Navbar() {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[75%] z-50">
            <div className="flex items-center justify-between px-6 py-3 rounded-3xl backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 shadow-md transition-all duration-300">
                <div className="flex items-center gap-3">
                    <Image
                        src={logo}
                        alt="Company logo"
                        width={36}
                        height={36}
                        className="rounded-full border border-white/30 dark:border-white/20"
                    />
                    <p className="text-white dark:text-white text-xl font-semibold">Smriz</p>
                </div>

                <div className="flex gap-4 text-white dark:text-white">
                    <ToggleTheme />
                    <Link
                        href="https://github.com/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 border border-white/40 dark:border-white/20 text-white dark:text-white rounded-xl font-medium transition-all duration-300 hover:bg-white/10"
                    >
                        GitHub
                    </Link>
                </div>
            </div>
        </nav>
    );
}
