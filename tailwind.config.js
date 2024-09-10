/** @type {import('tailwindcss').config} */

module.exports = {
    content: ['./build/*.html'],
    theme: {
        extend: {
            screens: {
                'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
                'tailscreen': {'raw': '(min-aspect-ratio: 1/2)'},
            }
        },
    },
    plugin: [],
}