export default {
  author: "Decebal D.",
  title: `Blog future under consideration`,
  tags: ["opinions"],
  spoiler: "",
  date: new Date("2014-06-03T15:00:00+00:00"),
  getContent: () => import('./document.mdx'),
}
