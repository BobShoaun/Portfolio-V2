const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
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
      },
      width: {
        "90%": "90%",
      },
			fontFamily: {
				sans: [...defaultTheme.fontFamily.sans],
      },
      listStyleType: {
       square: 'square',
       roman: 'upper-roman',
      },
      screens: {
        'print': {'raw': 'print'},
      },
      colors: {
        orange: {
          400: '#FF7733',
          50: '#FFF1EB',
        },
      }
  
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
