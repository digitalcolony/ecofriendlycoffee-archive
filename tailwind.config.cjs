/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Open Sans", "ui-sans-serif", "system-ui", "sans-serif"],
				serif: ["Lora", "ui-serif", "Georgia", "serif"],
			},
		},
	},
	plugins: [],
};
