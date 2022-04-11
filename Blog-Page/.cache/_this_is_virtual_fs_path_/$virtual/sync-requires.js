
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/sarahmendez/Local/Gatsby-Blog/Blog-Page/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/sarahmendez/Local/Gatsby-Blog/Blog-Page/src/pages/index.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/sarahmendez/Local/Gatsby-Blog/Blog-Page/src/templates/blog-post.js"))
}

