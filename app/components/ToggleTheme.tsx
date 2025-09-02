"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function ToggleTheme() {
    const ctx = useTheme();

    if (!ctx) throw new Error("ToggleTheme must be used within a ThemeProvider");

    const { theme, toggleTheme } = ctx;

    return (
        <button
            onClick={toggleTheme}
            className="relative flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-t from-indigo-500 to-purple-500 text-white font-medium shadow-md hover:shadow-lg transition-all duration-500 ease-in-out cursor-pointer w-12 h-10 justify-center"
        >
            <Sun
                className={`
                    absolute transition-all duration-500 ease-in-out w-5 h-5
                    ${
                        theme === "dark"
                            ? "opacity-100 scale-100 rotate-0"
                            : "opacity-0 scale-90 rotate-45"
                    }
                `}
            />
            <Moon
                className={`
                    absolute transition-all duration-500 ease-in-out w-5 h-5
                    ${
                        theme === "light"
                            ? "opacity-100 scale-100 rotate-0"
                            : "opacity-0 scale-90 -rotate-45"
                    }
                `}
            />
        </button>
    );
}
