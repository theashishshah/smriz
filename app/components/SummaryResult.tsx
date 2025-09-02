"use client";

interface SummaryResultProps {
    summary: string;
}

export default function SummaryResult({ summary }: SummaryResultProps) {
    if (!summary) return null;

    return (
        <div className="mt-6 p-6 bg-white/20 dark:bg-black/30 rounded-2xl backdrop-blur-md border border-white/20 dark:border-white/10 text-white max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">Summary:</h3>
            <p className="text-base leading-relaxed whitespace-pre-line">{summary}</p>
        </div>
    );
}
