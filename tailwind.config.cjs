/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#1E3A8A",
				secondary: "#0D9488",
				accent: "#F97316",
				"heading-1": "#1e293b",
				"heading-2": "#334155",
				"heading-3": "#475569",
				"body": "#1e293b",
			}
		},
	},
	plugins: [],
}
