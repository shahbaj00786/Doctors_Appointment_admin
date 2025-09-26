# npm create vite@latest
# npm i axios react-router-dom react-toastify
# add   server:{port:5174} in vite.config.js


# tailwind setup
- npm install -D tailwindcss @tailwindcss/postcss

- postcss.config.js
postcss.config.js

- index.css
  @import "tailwindcss";

- tailwind.config.js:
  /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
};
