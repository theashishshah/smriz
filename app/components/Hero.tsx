"use client";

import React, { useEffect, useState } from "react";
import SummaryResult from "./SummaryResult";
import { useLazyGetArticleSummaryQuery } from "../services/articleApi";
import { ArticleType } from "../types/types";
import { Link as LinkIcon, Send } from "lucide-react";

export default function Hero() {
    const [url, setUrl] = useState("");
    const [allArticles, setAllArticles] = useState<ArticleType[]>([]);
    const [copied, setCopied] = useState(false);
    const [submitted, setSubmitted] = useState<boolean>(false)

    const [getArticleSummary, { data, error, isFetching }] = useLazyGetArticleSummaryQuery();

    const copyToClipboardURL = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
        } catch (err) {
            console.log("Failed to copy!", err);
        }
    };

    useEffect(() => {
        const stored = localStorage.getItem("articles");
        if (stored) setAllArticles(JSON.parse(stored));
    }, []);

    const handleSubmit = async (): Promise<void> => {
        setSubmitted(true)
        if (!url.trim()) return;
        try {
            const response = await getArticleSummary({ articleUrl: url });
            const summary = response?.data?.summary;
            if (summary) {
                const newArticle: ArticleType = { url, summary };
                const updatedArticles = [newArticle, ...allArticles];
                setAllArticles(updatedArticles);
                localStorage.setItem("articles", JSON.stringify(updatedArticles));
                setUrl("");
            }
        } catch (err) {
            console.log("Error fetching summary:", err);
        } finally {
            setSubmitted(false)
        }
    };

    return (
        <section className="relative min-h-screen text-center px-4 py-12 max-w-4xl mx-auto">
            <div className="pt-28">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                    Read what is important, <br />
                    <span className="text-indigo-500">with the help of Smriz powered by AI</span>
                </h1>

                <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 select-text">
                    Paste a link, and let AI turn long articles into clear, concise summaries in
                    seconds.
                </p>

                <div className="w-full max-w-3xl mx-auto px-4">
                    <div className="flex items-center w-full rounded-3xl overflow-hidden border bg-white text-gray-700 shadow-sm border-gray-300 transition-colors focus-within:ring-2 focus-within:ring-gray-200 dark:bg-black/20 dark:text-white dark:border-white/10 dark:shadow-md dark:focus-within:ring-white/10">
                        <button
                            type="button"
                            onClick={() => copyToClipboardURL(url)}
                            title="Copy URL"
                            className="p-3 border-r border-gray-300 text-gray-600 hover:bg-gray-50 dark:border-white/10 dark:text-white dark:hover:bg-white/5 cursor-pointer"
                        >
                            <LinkIcon
                                className={`w-5 h-5 ${
                                    copied ? "text-green-600 dark:text-green-500" : ""
                                }`}
                            />
                        </button>

                        <input
                            type="text"
                            placeholder="paste your URL"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                            className="flex-1 px-4 py-2 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-base dark:text-white dark:placeholder-white/60"
                        />

                        <button
                            type="button"
                            onClick={handleSubmit}
                            aria-label="Summarize"
                            disabled={submitted || !url.trim()}
                            className="p-3 border-l border-gray-300 text-gray-600 hover:bg-gray-50 dark:border-white/10 dark:text-white dark:hover:bg-white/5 transition-colors cursor-pointer
                            disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {isFetching && (
                    <p className="mt-4 text-gray-600 dark:text-white/70">Loading summary...</p>
                )}
                {error && (
                    <p className="mt-4 text-red-600 dark:text-red-400">Error fetching summary</p>
                )}

                {data?.summary && <SummaryResult summary={data.summary} />}

                {allArticles.length > 0 && (
                    <div className="mt-8 text-left space-y-4">
                        <h2 className="text-xl font-semibold">Recents searches</h2>
                        {allArticles.map((article, idx) => (
                            <div
                                key={idx}
                                className="p-4 rounded-lg flex justify-between items-center transition-colors bg-white border border-gray-200 shadow-sm dark:bg-white/10 dark:border-white/10 dark:shadow-none"
                            >
                                <p className="flex-1 min-w-0 truncate text-gray-700 dark:text-gray-200">
                                    {article.url}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
