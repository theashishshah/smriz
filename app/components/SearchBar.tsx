"use client";

import { Link as LinkIcon, Send } from "lucide-react";
import { useState } from "react";

export default function UrlInputBar() {
    const [url, setUrl] = useState("");

    const handleSubmit = () => {
        if (!url.trim()) return;
        console.log("Submitted URL:", url);
        // Handle API call or logic here
        setUrl("");
    };

    return (
        <div className="w-full max-w-3xl mx-auto px-4">
            <div className="flex items-center w-full rounded-3xl overflow-hidden border border-white/30 dark:border-white/10 backdrop-blur-md bg-white/10 dark:bg-black/20 shadow-md">
    
                <div className="p-3 border-r border-white/30 dark:border-white/10 text-white">
                    <LinkIcon className="w-5 h-5" />
                </div>

                <input
                    type="text"
                    placeholder="paste your URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex-1 px-4 py-2 bg-transparent outline-none text-white placeholder-white/70 dark:placeholder-white/60 text-base"
                />

                <button
                    onClick={handleSubmit}
                    className="p-3 border-l border-white/30 dark:border-white/10 text-white hover:bg-white/10 dark:hover:bg-white/5 transition-colors duration-200"
                >
                    <Send className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
