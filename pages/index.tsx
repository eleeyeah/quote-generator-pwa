import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

//Components
import {
  BackgroundImage1,
  BackgroundImage2,
  FooterContainer,
  FooterLink,
  GradientBackgroundCon,
  RedSpan,
} from "@/components/QuoteGenerator/QuoteGenElements";

//Assets
import speechBubble from "@/assets/speechBubble.png";
import quotes from "@/assets/quotes.png";

export default function Home() {
  const [quoteCounter, setQuoteCounter] = useState<Number | null>(0);

  return (
    <>
      <Head>
        <title>QuoteGen-PWA</title>
        <meta name="description" content="generate inspirational quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background */}
      <GradientBackgroundCon>
        <BackgroundImage1 src={speechBubble} height={300} alt="speech bubble" />
        <BackgroundImage2 src={quotes} height={300} alt="speech bubble" />
      </GradientBackgroundCon>
      <FooterContainer>
        <>
          Quotes Generated:{quoteCounter}
          <br />
          Developed with <RedSpan>🎔</RedSpan> by{" "}
          <FooterLink
            href="https://portfolio-iliehonciuc.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ Ilie Honciuc
          </FooterLink>
        </>
      </FooterContainer>
    </>
  );
}
