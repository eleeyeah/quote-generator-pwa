import Head from "next/head";
import Image from "next/image";

import { GradientBackgroundCon } from "@/components/QuoteGenerator/QuoteGenElement";

export default function Home() {
  return (
    <>
      <Head>
        <title>QuoteGen-PWA</title>
        <meta name="description" content="generate inspirational quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackgroundCon></GradientBackgroundCon>
    </>
  );
}
