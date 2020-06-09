---
to: src/routes/posts/<%= folderName %>/post.js
---
export default {
  author: "Decebal D.",
  title: "<%= h.inflection.titleize(title) %>",
  tags: [],
  spoiler: "<%= h.inflection.capitalize(description) %>",
  getContent: () => import('./document.mdx'),
}


