/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        bubble: "0px 8px 20px rgba(45, 18, 133, 0.2)",
        toggle:
          "0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06)",
        dropdown: "0px 0px 12px rgba(0, 0, 0, 0.08)",
        drawer: "0px -4px 12px rgba(206, 206, 206, 0.25)",
        button: "0px 1px 1px rgba(0, 0, 0, 0.09)",
        tab: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(107.2deg, #B9BEF5 0%, #DEDFEC 32.81%, #EAE0D5 67.19%, #F2CFC8 100%)",
        "overlay-buttons":
          "linear-gradient(360deg, #5622FF -31.43%, rgba(0, 0, 0, 0) 100%)",
      },
      screens: { sm: { max: "640px" } },
      minWidth: ({ theme }) => ({
        ...theme("spacing"),
      }),
      maxWidth: ({ theme }) => ({
        ...theme("spacing"),
      }),
      minHeight: ({ theme }) => ({
        ...theme("spacing"),
      }),
      maxHeight: ({ theme }) => ({
        ...theme("spacing"),
      }),
    },
    colors: {
      surface: {
        DEFAULT: "#FFFFFF",
        purple: "#F7F4FF",
        grey: "#F3F3F5",
        "lighter-grey": "#FAFAFB",
        transparent: "transparent",
      },
      text: {
        DEFAULT: "#FFFFFF",
        100: "#110733",
        60: "#41395C",
        30: "#706A85",
      },
      white: "#ffffff",
      neutral: {
        100: "#110730",
        90: "#292047",
        80: "#41395C",
        70: "#585170",
        DEFAULT: "#706A85",
        50: "#888399",
        40: "#A09CAD",
        30: "#B8B5C2",
        20: "#CFCDD6",
        10: "#E7E6EB",
        0: "#F3F3F5",
      },
      red: {
        100: "#340B32",
        90: "#570F31",
        80: "#791231",
        70: "#9C1630",
        DEFAULT: "#BF1A2F",
        50: "#CC4859",
        40: "#D97682",
        30: "#E5A3AC",
        20: "#F2D1D5",
        10: "#F9E8EA",
      },
      orange: {
        100: "#3E252C",
        90: "#6B4326",
        80: "#99601F",
        70: "#C67E19",
        DEFAULT: "#F39C12",
        50: "#F5B041",
        40: "#F8C471",
        30: "#FAD7A0",
        20: "#FDEBD0",
        10: "#FEF5E7",
      },
      yellow: {
        100: "#412E29",
        90: "#70561F",
        80: "#A07D14",
        70: "#CFA50A",
        DEFAULT: "#FFCC00",
        50: "#FFD633",
        40: "#FFE066",
        30: "#FFEB99",
        20: "#FFF5CC",
        10: "#FFFAE5",
      },
      dark_green: {
        100: "#152035",
        90: "#193938",
        80: "#1C523A",
        70: "#206B3D",
        DEFAULT: "#24843F",
        50: "#509D65",
        40: "#7CB58C",
        30: "#A7CEB2",
        20: "#D3E6D9",
        10: "#E9F3EC",
      },
      blue: {
        100: "#182455",
        90: "#1F4176",
        80: "#265E98",
        70: "#2D7BB9",
        DEFAULT: "#3498DB",
        50: "#5DADE2",
        40: "#85C1E9",
        30: "#AED6F1",
        20: "#D6EAF8",
        10: "#EBF5FB",
        0: "#F5FAFD",
      },
      green: {
        100: "#273040",
        90: "#3C5A4D",
        80: "#52835A",
        70: "#67AD67",
        DEFAULT: "#7DD674",
        50: "#97DE90",
        40: "#B1E6AC",
        30: "#CBEFC7",
        20: "#E5F7E3",
        10: "#F2FBF1",
      },
      pink: {
        100: "#3C1945",
        90: "#682C57",
        80: "#933E68",
        70: "#BF517A",
        DEFAULT: "#EA638C",
        50: "#EE82A3",
        40: "#F2A1BA",
        30: "#F7C1D1",
        20: "#FBE0E8",
        10: "#FDEFF3",
      },
      purple: {
        100: "#1F0C5C",
        90: "#2D1285",
        80: "#3A17AD",
        70: "#481DD6",
        DEFAULT: "#5622FF",
        50: "#784EFF",
        40: "#9A7AFF",
        30: "#BBA7FF",
        20: "#DDD3FF",
        10: "#EEE9FF",
        0: "#F7F4FF",
      },
    },
    fontFamily: {
      sans: ["Be Vietnam Pro", "sans-serif"],
    },
    fontSize: {
      h1: [
        "6rem",
        {
          fontWeight: 700,
          letterSpacing: "-1.5px",
        },
      ],
      "h1-light": [
        "6rem",
        {
          fontWeight: 300,
          letterSpacing: "-1.5px",
        },
      ],
      h2: [
        "3.75rem",
        {
          fontWeight: 300,
          letterSpacing: "-0.5px",
        },
      ],
      h3: [
        "3rem",
        {
          fontWeight: 400,
          letterSpacing: "0px",
        },
      ],
      h4: [
        "2.125rem",
        {
          fontWeight: 400,
          letterSpacing: "0.25px",
        },
      ],
      h5: [
        "1.5rem",
        {
          fontWeight: 700,
          letterSpacing: "0px",
        },
      ],
      h6: [
        "1.25rem",
        {
          fontWeight: 600,
          letterSpacing: "0.15px",
        },
      ],
      subtitle: [
        "1.125rem",
        {
          fontWeight: 700,
          letterSpacing: "0.15px",
        },
      ],
      "subtitle-sm": [
        "0.875rem",
        {
          fontWeight: 700,
          letterSpacing: "0.1px",
        },
      ],
      "body-lg": [
        "1rem",
        {
          fontWeight: 400,
          letterSpacing: "0.5px",
        },
      ],
      body: [
        "0.875rem",
        {
          fontWeight: 400,
          letterSpacing: "0.25px",
        },
      ],
      "body-sm": [
        "0.75rem",
        {
          fontWeight: 400,
          letterSpacing: "0.25px",
        },
      ],
      button: [
        "0.875rem",
        {
          fontWeight: 400,
          letterSpacing: "0.4px",
        },
      ],
      caption: [
        "0.75rem",
        {
          fontWeight: 400,
          letterSpacing: "0.4px",
        },
      ],
      overline: [
        "0.625rem",
        {
          fontWeight: 400,
          letterSpacing: "1.5px",
        },
      ],
    },
  },
  plugins: [],
  prefix: "t-",
};
