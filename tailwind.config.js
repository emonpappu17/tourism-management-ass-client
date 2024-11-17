import daisyui from 'daisyui';
import withMT from "@material-tailwind/react/utils/withMT";
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    aspectRatio,
  ],
});

// ==========================================================

// import daisyui from 'daisyui';
// import withMT from "@material-tailwind/react/utils/withMT";
// import aspectRatio from '@tailwindcss/aspect-ratio';
// import flyonui from 'flyonui';
// import flyonuiPlugin from 'flyonui/plugin';

// /** @type {import('tailwindcss').Config} */
// export default withMT({
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/flyonui/dist/js/*.js" // FlyonUI JS component path
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     daisyui,
//     aspectRatio,
//     flyonui,         // FlyonUI components
//     flyonuiPlugin    // FlyonUI plugin for JS components
//   ],
// });



