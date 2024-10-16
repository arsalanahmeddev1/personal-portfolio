/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'manrope': ['"Manrope", sans-serif'],
				'poppins': ['"Poppins", sans-serif'],
			},
			backgroundImage: {
				'theme-gradiant': 'linear-gradient(267deg, #DA7C25 .36%, #B923E1 102.06%)',
			},
			container: {
				center: true,
				padding: {
					left: '15px',
					right: '15px'
				},
				maxWidth: {
					DEFAULT: '100%', // Full width container by default
          sm: '640px',     // Small screens
          md: '768px',     // Medium screens
          lg: '1024px',    // Large screens
          xl: '1280px',    // Extra large screens
				}

			}
		},
	},
	plugins: [],
}
