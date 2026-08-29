export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"src/admin": "admin"});
  eleventyConfig.addPassthroughCopy({"src/favicon.svg": "favicon.svg"});

  eleventyConfig.addGlobalData("site", () => ({
    name: "株式会社オカダ",
    url: process.env.URL || "https://example.com",
    email: "okada250421@gmail.com",
    defaultImage: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1600&q=82",
    address: "〒860-0803 熊本市中央区新市街3-7 アクアビル地下1階",
    representative: "福留 明"
  }));

  eleventyConfig.addFilter("dateJP", (dateObj) => {
    const d = new Date(dateObj);
    return new Intl.DateTimeFormat("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
  });
  eleventyConfig.addFilter("json", (value) => JSON.stringify(value));
  eleventyConfig.addFilter("dateISO", (dateObj) => {
    const d = new Date(dateObj);
    return d.toISOString().slice(0,10);
  });

  eleventyConfig.addCollection("blog", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/blog/*.md").sort((a,b) => b.date - a.date);
  });
  eleventyConfig.addCollection("services", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/services/*.njk");
  });
  eleventyConfig.addCollection("works", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/works/*.md").sort((a,b) => b.date - a.date);
  });

  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}
