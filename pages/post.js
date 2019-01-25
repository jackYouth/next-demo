/**
 * withRouter
 */
// import { withRouter } from "next/router";
// import Layout from "../components/MyLayout";

// const Content = withRouter(({ router }) => {
//   const { title } = router.query || {};
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>This is the blog post content.</p>
//     </div>
//   );
// });

// export default ({ router }) => {
//   return (
//     <Layout>
//       <Content />
//     </Layout>
//   );
// };

import Layout from "../components/MyLayout.js";
import fetch from "isomorphic-unfetch";

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Post.getInitialProps = async function(context) {
  console.log(444444, context);
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
