/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite-react/tailwind');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        flowbite.content(),
        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '1.5rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', ...fontFamily.sans],
            },
            aspectRatio: {
                '4/3': '4 / 3',
            },
        },
    },
    plugins: [
        flowbite.plugin(),
    ],
};

