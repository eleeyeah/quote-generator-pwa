import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

//Components
import {
  BackgroundImage1,
  BackgroundImage2,
  FooterContainer,
  CustomLink,
  GradientBackgroundCon,
  RedSpan,
  QuoteGeneratorContainer,
  QuoteGeneratorInnerContainer,
  QuoteGeneratorTitle,
  QuoteGeneratorSubtitle,
  QuoteGeneratorButton,
  QuoteGeneratorButtonText,
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
        {/* Quote Generator Modal */}
        {/* <QuoteGeneratorModal/> */}
        {/* Quote Generator */}
        <QuoteGeneratorContainer>
          <QuoteGeneratorInnerContainer>
            <QuoteGeneratorTitle>
              Daily Inspirational Quotes
            </QuoteGeneratorTitle>
            <QuoteGeneratorSubtitle>
              Generate some inspiration for the day ahead!
              <br />
              by{" "}
              <CustomLink
                href="https://zenquotes.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ZenQuotes API
              </CustomLink>
            </QuoteGeneratorSubtitle>
            <QuoteGeneratorButton>
              <QuoteGeneratorButtonText>Generate</QuoteGeneratorButtonText>
            </QuoteGeneratorButton>
          </QuoteGeneratorInnerContainer>
        </QuoteGeneratorContainer>

        {/* Background Images */}
        <BackgroundImage1 src={speechBubble} height={300} alt="speech bubble" />
        {/* fix this image's css */}
        {/* <BackgroundImage2 src={speechBubble} alt="speech bubble" /> */}

        {/* Footer */}
        <FooterContainer>
          <>
            Quotes Generated:{quoteCounter}
            <br />
            Developed with <RedSpan>🎔</RedSpan> by{" "}
            <CustomLink
              href="https://portfolio-iliehonciuc.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ Ilie Honciuc
            </CustomLink>
          </>
        </FooterContainer>
      </GradientBackgroundCon>
    </>
  );
}
