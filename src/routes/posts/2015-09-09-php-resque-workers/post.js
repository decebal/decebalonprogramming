export default {
  author: "Dec.I",
  title: `Php resque pool`,
  tags: ["php", "queues", "monitoring", "tools", "devops"],
  spoiler: "Resque is a great tool for creating background jobs, but the task of managing the queues and maintaining is not quite as straight forward. There is quite a lot of noise and a nice amount of options when it comes to translations of the resque pool to php language.",
  getContent: () => import('./document.mdx'),
}
