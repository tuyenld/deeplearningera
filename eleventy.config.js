const pluginTailwind = require("eleventy-plugin-tailwindcss");
const { DateTime } = require("luxon");

const minifyHTML = require("./transforms/minify-html");

const postsColl = require("./collections/posts");
const tagListColl = require("./collections/tagList");
const pagedPostsColl = require("./collections/pagedPosts");
const pagedPostsByTagColl = require("./collections/pagedPostsByTag");

 /* Markdown Overrides */
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");
// const markdownItAnchor = require("markdown-it-anchor");
// const markdownItAnchor = require("markdown-it-footnote");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (config) => {

    config.addPlugin(pluginTailwind, {
        src: "src/assets/css/*"
    });
    config.addPlugin(pluginSyntaxHighlight);

    config.setDataDeepMerge(true);

    /* Fix github don't copy CNAME by default */
    config.addPassthroughCopy("CNAME");
    config.addPassthroughCopy("src/assets/js/**/*");
    config.addPassthroughCopy("src/assets/img/**/*");
    config.addPassthroughCopy({ "src/posts/img/**/*": "assets/img/" });

    /* Markdown Overrides */
    let markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    })
    .use(markdownItFootnote)
    .use(markdownItAnchor, {
        permalink: false,
        permalinkClass: "direct-link",
        permalinkSymbol: "#"
    });
    config.setLibrary("md", markdownLibrary);

    config.addLayoutAlias('default', 'layouts/default.njk');
    config.addLayoutAlias('post', 'layouts/post.njk');

    config.addFilter("readableDate", (date) => {
        return DateTime.fromJSDate(date, { zone: "utc" }).toFormat("d LLLL yyyy hh:mm a");
    });

    if (process.env.NODE_ENV === "production") {
        config.addTransform("minify-html", minifyHTML);
    }

    config.addCollection("posts", postsColl);
    config.addCollection("tagList", tagListColl);
    config.addCollection("pagedPosts", pagedPostsColl);
    config.addCollection("pagedPostsByTag", pagedPostsByTagColl);

    // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
    config.addShortcode("ytb", function(URLid) {
        return `<div class="video-wrapper">
            <iframe src="https://www.youtube.com/embed/${URLid}"
                frameborder="0" allowfullscreen
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
        </div>`;

    });
    
    return {
        dir: {
            input: "src",
            output: "dist"
        },
        // pathPrefix: "/subfolder/",
        templateFormats: ["md", "njk", "html"],
        dataTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    }

}

