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
        LightPrimary: "#E8EAEA",
        DarkPrimary: "#BFC4CB",
        Primary: "#FF6F61"
      }),
      textColor: {
        Dark: "#000000",
        Light: "#FFFFFF"
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Open_Sans: ["Open+Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
}

