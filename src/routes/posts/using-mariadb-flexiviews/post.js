export default {
  author: "Decebal D.",
  title: "Using MariaDb FlexiViews",
  tags: ["mysql", "mariadb", "php", "programming advice"],
  spoiler: "In the quest to filtering data I ended up looking for a tool that allows me to move a part of a query that needed too many unions in order to achieve simple things that where not thought trough from the beginning.",
  date: new Date("2015-09-10T15:00:00+00:00"),
  getContent: () => import('./document.mdx'),
}
