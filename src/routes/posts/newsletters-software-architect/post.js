export default {
  author: "Decebal D.",
  title: "How do I stay updated as a Software Architect",
  tags: ["news", "newsletter", "software architecture", "books"],
  spoiler: "Staying up to date with technology developments is an important of a modern software \n" +
    "developer's daily activity, as well as one of the defining behaviours for a successful\n" +
    "career. This is my list of newsletter that I am grateful for.",
  date: new Date("2020-05-24T15:00:00+00:00"),
  getContent: () => import('./document.mdx'),
}
