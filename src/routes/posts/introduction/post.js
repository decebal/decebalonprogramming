export default {
  author: "Decebal D.",
  title: `Introduction`,
  tags: ["introduction", "php", "python", "mysql"],
  // date: "2014-01-13T15:00:00+00:00",
  spoiler: "Hello world! Have a look at the beginnings of my story as a programmer",
  getContent: () => import('./document.mdx'),
  date: new Date("2014-01-13T15:00:00+00:00"),
}
