import Intro from "@/components/Intro";
import OnlineLearn from "@/components/OnlineLearn";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro /> 

      <OnlineLearn />
      
    </div>
  );
};

export default Home;
