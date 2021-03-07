const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: {
		content: ["./src/**/*.svelte"],

		// These options are passed through directly to PurgeCSS
		options: {
			safelist: [
				"max-w-20",
				"max-w-30",
				"max-w-40",
				"max-w-50",
				"max-w-55",
				"max-w-60",
				"max-w-70",
				"max-w-80",
			],
			blocklist: [/^debug-/],
			keyframes: true,
			fontFace: true,
		},
	},
	darkMode: "class",
	theme: {
		extend: {
			minHeight: {
				0: "0",
				"1/4": "25%",
				"1/2": "50%",
				"3/4": "75%",
				full: "100%",
				screen: "100vh",
			},
			maxWidth: {
				"1/2": "50%",
				20: "20%",
				30: "30%",
				40: "40%",
				50: "50%",
				55: "55%",
				60: "60%",
				70: "70%",
				80: "80%",
			},
			width: {
				"90%": "90%",
			},
			fontFamily: {
				sans: ["Nunito\\ Sans", ...defaultTheme.fontFamily.sans],
				mono: ["Roboto\\ Mono", ...defaultTheme.fontFamily.mono],
			},
			listStyleType: {
				square: "square",
				roman: "upper-roman",
			},
			screens: {
				print: { raw: "print" },
			},
			colors: {
				orange: {
					400: "#FF7733",
					50: "#FFF1EB",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
