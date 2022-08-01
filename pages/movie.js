import Head from "next/head";
import { AddMovie, Header, UserMovies } from "../components";

const movie = () => {
  return (
    <div >
      <Head>
        <title>Movie App</title>
      </Head>
      <Header />
      <UserMovies  />  
     
    </div>
  );
};

export default movie;
