export default function (eleventyConfig) {
  // avoid processing files with 11ty
  eleventyConfig.ignores.add("./src/assets/**/*");
  // avoid watching files for change with 11ty dev server
  eleventyConfig.watchIgnores.add("./src/assets/**/*");

  // copy files / folders
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("./src/assets/img/");
  eleventyConfig.addPassthroughCopy("./src/assets/videos/");
  // when you pass an object instead of a string, the key is the source (what you want to copy) and the destination directory is what you specify as the value (relative to your build directory)
  eleventyConfig.addPassthroughCopy({ "./src/static/": "./" });

  // watch compiled CSS and JS for change and reload browser
  eleventyConfig.setServerOptions({
    watch: ["./dist/assets/css/**/*.css", "./dist/assets/js/**/*.js"],
  });
}

export const config = {
  dir: {
    input: "src/",
    output: "dist/",
    data: "_data",
    includes: "_includes",
  },
  templateFormats: ["njk", "md", "html"],
  htmlTemplateEngine: "njk",
  markdownTemplateEngine: "njk",
};
