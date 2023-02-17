import DiscordBlock from "@/components/DiscordBlock";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Kirill from "@/components/Kirill";
import MapBlock from "@/components/MapBlock";
import OnlineLearn from "@/components/OnlineLearn";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import WhySolidity from "@/components/WhySolidity";
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

      <MapBlock />

      <WhySolidity />

      <DiscordBlock />

      <Team />

      <Pricing />

      <Footer />
    </div>
  );
};

export default Home;
