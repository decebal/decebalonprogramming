export default {
  author: "Decebal D.",
  title: `IoC - Understanding the need for binding interfaces to implementations`,
  tags: ["php", "coding", "oop", "opinions", "programming advice"],
  spoiler: "The problem: *Write testable code.*\n" +
    "\n" +
    "Principles used: *Code to an Interface.*",
  date: new Date("2015-09-01T15:00:00+00:00"),
  getContent: () => import('./document.mdx'),
}
