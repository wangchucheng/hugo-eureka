const themeDir = __dirname + "/../../";
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  darkMode: "class",
  content: [
    themeDir + "hugo_stats.json",
    themeDir + "layouts/**/*.html",
    themeDir + "exampleSite/content/**/*.html",
    "layouts/**/*.html",
    "content/**/*.html",
  ],
  theme: {
    fontFamily: {
      eureka: ["var(--fonts-eureka)", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      height: {
        "(screen-16)": "calc(100vh - 4rem)",
        "(16-4px)": "calc(4rem - 4px)",
        96: "24rem",
        128: "32rem",
        160: "40rem",
      },
      minHeight: {
        16: "4rem",
      },
      maxHeight: {
        "doc-sidebar": "calc(100vh - 4rem - var(--height-doc-title, 4rem))",
      },
      lineHeight: {
        "(16-4px)": "calc(4rem - 4px)",
      },
      inset: {
        16: "4rem",
        32: "8rem",
        48: "12rem",
      },
      padding: {
        scrollbar: "calc(100vw - 100%)",
      },
      colors: {
        eureka: "var(--color-eureka)",
        "primary-bg": "var(--color-primary-bg)",
        "secondary-bg": "var(--color-secondary-bg)",
        "tertiary-bg": "var(--color-tertiary-bg)",
        "primary-text": "var(--color-primary-text)",
        "secondary-text": "var(--color-secondary-text)",
        "tertiary-text": "var(--color-tertiary-text)",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.secondary-text"),
            "--tw-prose-headings": theme("colors.primary-text"),
            "--tw-prose-lead": theme("colors.secondary-text"),
            "--tw-prose-links": theme("colors.primary-text"),
            "--tw-prose-bold": theme("colors.primary-text"),
            "--tw-prose-counters": theme("colors.tertiary-text"),
            "--tw-prose-bullets": theme("colors.tertiary-text"),
            "--tw-prose-hr": theme("colors.tertiary-bg"),
            "--tw-prose-quotes": theme("colors.tertiary-text"),
            "--tw-prose-quote-borders": theme("colors.tertiary-bg"),
            "--tw-prose-captions": theme("colors.tertiary-text"),
            "--tw-prose-code": theme("colors.primary-text"),
            "--tw-prose-pre-code": theme("colors.tertiary-text"),
            "--tw-prose-pre-bg": theme("colors.tertiary-bg"),
            "--tw-prose-th-borders": theme("colors.tertiary-bg"),
            "--tw-prose-td-borders": theme("colors.tertiary-bg"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-rtl")],
};
