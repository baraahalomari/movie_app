import Head from "next/head";
import { Header, NavBar, MoviesCol, HeroBanner } from "../components";
import collections from "../utils/requests";

const index = (props) => {
  return (
    <>
      <Head>
        <title>Movie App</title>
      </Head>
      <Header />
      <NavBar />
      <MoviesCol result={props.result} />

      {/* <HeroBanner /> */}
    </>
  );
};

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const result = await fetch(
    `https://api.themoviedb.org/3${
      collections[genre]?.url || collections.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      result: result.results,
    },
  };
}

export default index;
