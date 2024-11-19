/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}", 
    "./public/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        DarkPrimary: "#2A254B",
        Primary: "#4E4D93",
        LightGrey: "#F9F9F9",
        BorderGrey: "#EBE8F4",
        White: "#FFFFFF",
        BorderDark: "#CAC6DA"
      }),
      textColor: {
        Dark: "#2A254B",
        Light: "#FFFFFF"
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Open_Sans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        Headline_one: ['36px', {
          fontWeight: '500',
          lineHeight: '150%'
        }],
        Headline_one: ['32px', {
          fontWeight: '500',
          lineHeight: '150%'
        }],
        Headline_one: ['24px', {
          fontWeight: '500',
          lineHeight: '150%'
        }],
        Headline_one: ['20px', {
          fontWeight: '500',
          lineHeight: '150%'
        }],
        Headline_one: ['16px', {
          fontWeight: '500',
          lineHeight: '150%'
        }],
        Headline_one: ['14px', {
          fontWeight: '500',
          lineHeight: '150%'
        }],
        Body_small: ['14px', {
          fontWeight: '400',
          lineHeight: '150%'
        }],
        Body_medium: ['16px', {
          fontWeight: '400',
          lineHeight: '150%'
        }],
        Body_large: ['18px', {
          fontWeight: '400',
          lineHeight: '150%'
        }]
      }
    },
  },
  plugins: [],
}

