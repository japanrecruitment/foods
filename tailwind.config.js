module.exports = {
    content: [
        './pages/**/*.{html,js,jsx,ts,tsx}',
        './app/**/*.{html,js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            listStyleType: {
                roman: 'upper-roman'
            },
            colors: {
                'primary-red': '#ed1c24',
                'primary-blue': '#002e6e'
            }
        }
    },
    corePlugins: {
        aspectRatio: false
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
    ]
};
