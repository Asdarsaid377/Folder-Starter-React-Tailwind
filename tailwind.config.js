/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			backgroundColor: {
				"main-bg": "#FAFBFB",
				"main-dark-bg": "#20232A",
				"secondary-dark-bg": "#33373E",
				"light-gray": "#F7F7F7",
				"half-transparent": "rgba(0, 0, 0, 0.5)",
			},
			width: {
				400: "400px",
				760: "760px",
				780: "780px",
				800: "800px",
				1000: "1000px",
				1200: "1200px",
				1400: "1400px",
			},
			height: {
				80: "80px",
			},
			minHeight: {
				590: "590px",
			},
			colors: {
				primary: "#171738",
				secondary: "#0091AD",
			},
			borderWidth: {
				1: "1px",
			},
			borderColor: {
				color: "rgba(0, 0, 0, 0.1)",
			},
		},
	},
	plugins: [],
};
