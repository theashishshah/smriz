"use client"

export default function Footer() {
    return (
        <footer className="px-6 py-4 bg-gray-200 dark:bg-gray-800 text-center text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Ashish Shah. All rights reserved.
        </footer>
    );
}
