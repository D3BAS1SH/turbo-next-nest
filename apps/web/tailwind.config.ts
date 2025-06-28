/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',       // App Router (Next.js)
        './pages/**/*.{js,ts,jsx,tsx}',         // Pages Router (optional)
        './components/**/*.{js,ts,jsx,tsx}',    // Local UI components
        // '../../packages/ui/**/*.{js,ts,jsx,tsx}', // Add later if needed
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};