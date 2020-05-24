export default {
  author: "Decebal D.",
  title: `Learning new programming languages`,
  tags: ["opinions", "learning", "coding", "programming advice"],
  spoiler: "Looking for the new hit or sticking with your known language ?",
  date: new Date("2015-09-16T15:00:00+00:00"),
  getContent: () => import('./document.mdx'),
}
