"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import SummaryResult from "./SummaryResult";

export default function Hero() {
    const [url, setUrl] = useState("");
    const [summary, setSummary] =
        useState(`GitHub Copilot is an AI-powered code assistant that helps developers write better code faster. The documentation provides information on how to manage your Copilot account, including how to get free access to Copilot Pro.

If you don't qualify for free access, you can still try Copilot Pro for free with a one-time 30-day trial. After the trial, you'll need a paid plan for continued use. Alternatively, you can set up Copilot Free to get a limited experience of Copilot without a paid plan.

To access Copilot Pro for free, sign in to your GitHub account, go to your Copilot page, and click "Get access to GitHub Copilot" if you are eligible. You can then configure the Copilot use policies to meet your needs.`);
    const [loading, setLoading] = useState(false);

    // Replace this with your actual API call
    const fetchSummary = async () => {
        if (!url.trim()) return;

        setLoading(true);
        setSummary("");

        try {
            // Example POST request to your backend API
            const response = await fetch("/api/summarize", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url }),
            });

            if (!response.ok) throw new Error("Failed to fetch summary");

            const data = await response.json();

            setSummary(data.summary || "No summary available.");
        } catch (error) {
            setSummary("Error fetching summary. Please try again.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="text-center px-4 py-12 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Read what is important, <br />
                <span className="text-indigo-400">with the help of smriz powered by AI</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Paste a link, and let AI turn long articles into clear, concise summaries in
                seconds.
            </p>

            <SearchBar url={url} setUrl={setUrl} onSubmit={fetchSummary} />

            {loading && <p className="mt-4 text-white/70">Loading summary...</p>}

            <SummaryResult summary={summary} />
        </section>
    );
}
