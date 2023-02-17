import Intro from "@/components/Intro";
import Kirill from "@/components/Kirill";
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

      <Kirill />
    </div>
  );
};

export default Home;
