/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
			"primary": "var(--primary-color)",
			"secondary": "var(--secondary-color)",
			"orange": "var(--orange)",
			"gray": "var(--gray)",
			"green": "var(--green)",
			"indigo": "var(--indigo)",
			"lavender": "var(--lavender)",
		  },
		  backgroundImage: {
			service_bg: "url('/assets/service-bg.png')",
			counter_bg: "url('/assets/counter-bg.png')",
			frame1: "url('/assets/frame_1.svg')",
			frame2: "url('/assets/frame_2.svg')",
			frame3: "url('/assets/frame_3.svg')",

		  }

  	
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
