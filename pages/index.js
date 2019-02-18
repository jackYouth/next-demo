// pages/index.js

import Layout from "../components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const PostLink = ({ title, id }) => {
  return (
    <li>
      <Link as={`/p/${id}`} href={`/post?id=${id}`}>
        <a>{title}</a>
      </Link>
      <style jsx>{`
        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </li>
  );
};

const Index = ({ shows }) => {
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {shows.map(({ show }) => {
          const { name, id } = show;
          return <PostLink key={id} id={id} title={name} />;
        })}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: "Arial";
        }
        ul {
          padding: 0;
        }
      `}</style>
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);
  return { shows: data };
};

export default Index;
