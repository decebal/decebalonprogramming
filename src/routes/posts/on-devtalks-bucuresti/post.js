export default {
  author: "Decebal D.",
  title: `On DevTalks Bucuresti`,
  tags: ["conference", "learning"],
  spoiler: "I've witnessed my first dev conference on Wednesday 11th June. I was excited with some talks and I decided that it won't hurt to pay them a small tribute.",
  getContent: () => import('./document.mdx'),
  date: new Date("2014-06-12T15:00:00+00:00"),
}
