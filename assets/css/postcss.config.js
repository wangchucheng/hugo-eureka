const themeDir = __dirname + "/../../";

module.exports = {
  plugins: [
    require("tailwindcss")(themeDir + "assets/css/tailwind.config.js"),
    require("autoprefixer")({
      path: [themeDir],
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
