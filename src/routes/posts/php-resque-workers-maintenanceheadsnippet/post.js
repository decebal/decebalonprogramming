export default {
  author: "Dec.I",
  title: `Php resque pool`,
  tags: ["php", "queues", "monitoring", "tools", "devops"],
  spoiler: "Resque is a great tool for creating background jobs, but the task of managing the queues and maintaining is not quite as straight forward. There is quite a lot of noise and a nice amount of options when it comes to translations of the resque pool to php language.",
  date: new Date("2015-09-09T15:00:00+00:00"),
  getContent: () => import('./document.mdx'),
}
