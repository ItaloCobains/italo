import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Landing from "../src/components/Landing";

import Noticia from "../src/components/Noticias";
import Skills from "../src/components/Skills";

const Home: NextPage = () => {
  return (
    <>
      <Landing />
      <Noticia />
      <Skills />
    </>
  );
};

export default Home;
