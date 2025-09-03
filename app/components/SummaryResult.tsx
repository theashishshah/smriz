"use client";

interface SummaryResultProps {
    summary: string;
}

export default function SummaryResult({ summary }: SummaryResultProps) {
    if (!summary) return null;

    return (
        <div className="mt-6 max-w-3xl mx-auto">
            <div
                className="
          p-6 rounded-2xl transition-colors
          bg-white text-gray-800 border border-gray-200 shadow-sm
          dark:bg-black/30 dark:text-white dark:border-white/10 dark:shadow-none
        "
            >
                <h3 className="text-xl font-semibold mb-3">Summary:</h3>
                <p className="text-base leading-relaxed whitespace-pre-line break-words select-text">
                    {summary}
                </p>
            </div>
        </div>
    );
}
