import * as Navi from 'navi'

export default Navi.route({
  title: "Books",
  getView: () => import('./document.mdx'),
})
