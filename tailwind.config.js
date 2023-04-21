/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'mentor-light-red':'hsl(0, 100%, 67%)',
        'mentor-orange-yello':'hsl(39, 100%, 56%)',
        'mentor-green-teal':'hsl(166, 100%, 37%)',
        'mentor-cobalt-blue':'hsl(234, 85%, 45%)',
        'mentor-glight-slate-blue':'hsl(252, 100%, 67%)',
        'mentor-glight-royal-blue':'hsl(241, 81%, 54%)',
        'mentor-gviolet-blue':'hsla(256, 72%, 46%, 1)',
        'mentor-gpersian-blue':'hsla(241, 72%, 46%, 0)',
        'mentor-white':'hsl(0, 0%, 100%)',
        'mentor-pale-blue':'hsl(221, 100%, 96%)',
        'mentor-light-lavender':'hsl(241, 100%, 89%)',
        'mentor-dark-gray-blue':'hsl(224, 30%, 27%)',
        'mentor-anchor-color':'hsl(228, 45%, 44%)',
      },
      fontFamily:{
        'hanken':['hanken','sans-serif']
      },
    },
  },
  plugins: [],
}