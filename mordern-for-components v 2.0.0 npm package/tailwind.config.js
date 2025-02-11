/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            animation: {
                'fadeIn': 'fadeIn 0.5s ease-in',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            },
        },
    },
    plugins: [],
    safelist: [
        // Add all the classes used in your components
        'bg-white',
        'text-transparent',
        'bg-gradient-to-r',
        'from-pink-500',
        'to-purple-500',
        'from-pink-50',
        'to-purple-50',
        'border-pink-500',
        'border-gray-200',
        'border-red-500',
        'text-pink-500',
        'text-gray-400',
        'text-red-500',
        'text-green-500',
        // Add all other Tailwind classes used in your components
    ]
};