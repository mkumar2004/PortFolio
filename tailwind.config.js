/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      brown:'	rgb(16,0,0)',
      red:'#AA0000',
      lightbrown:'#645550',
      darkbrown:'#2d2421',
      likbrown:'#6E1700',
      black:'#1e1917',
      white:'#ffff',
      darkcyan:'#88e5f0',
      cyan:'#15d1e9',
      lightcyan:'#88e5f0',
      orange:'#fb9718',
      lightorange:'#fac27b',
      darkorange:'#d28422',
      grey:'#626965',
      lightgrey:'#978580',
      darkgrey:'#3f4441' ,
      Soft:'rgba(200,200,200,0.1)'    




    },
    extend: {
      boxShadow:{
        cyanShadow:'0px 0px 20px 0px rgba(94,206,220,0.5)',
        cyanMediumShadow:'10px 10px 200px 150px rgba(94,206,220,0.5)',
        orangeMediumShadow:'10px 10px 200px 150px rgba(240,169,79,0.5)'
      }
    },
    fontFamily:{
      body:['Poppins'],
      special:['Roboto'],
    }
  },
  plugins: [],
}
