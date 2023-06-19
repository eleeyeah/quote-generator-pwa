import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { quotesQueryName } from "@/src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";

//Components
import {
  BackgroundImage1,
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
import QuoteGeneratorModal from "@/components/QuoteGenerator";

// interface for DynamoDB object
interface UpdateQuoteInfoData {
  id: string;
  queryName: string;
  quotesGenerated: number;
  createdAt: string;
  updatedAt: string;
}

// type quard for the fetch function
function isGraphQLResultForquotesQueryName(
  response: any
): response is GraphQLResult<{
  quotesQueryName: {
    items: [UpdateQuoteInfoData];
  };
}> {
  return (
    response.data &&
    response.data.quotesQueryName &&
    response.data.quotesQueryName.items
  );
}



export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  const [openGenerator, setOpenGenerator] = useState<boolean>(false);

  const [processingQuote, setProcessingQuote] = useState<boolean>(false);
  const [quoteReceived, setQuoteReceived] = useState<String | null>(null);



  // quotes generated (DynamoDB object fetch function)
  const updateQuoteInfo = async () => {
    try {
      const response = await API.graphql<UpdateQuoteInfoData>({
        query: quotesQueryName,
        authMode: "AWS_IAM",
        variables: {
          queryName: "LIVE",
        },
      });

      console.log("response from DynamoDB", response);
      // setNumberOfQuotes();

      // create the type guards
      if (!isGraphQLResultForquotesQueryName(response)) {
        throw new Error("Response is not of type GraphQLResult");
      }

      if (!response.data) {
        throw new Error("Response data is undefined");
      }

      const receivedNumberOfQuotes =
        response.data.quotesQueryName.items[0].quotesGenerated;
      setNumberOfQuotes(receivedNumberOfQuotes);
    } catch (error) {
      console.log("error getting data", error);
    }
  };

  useEffect(() => {
    updateQuoteInfo();
  }, []);

  // Quote Generator Modal function
  const HandleCloseGenerator = () => {
    setOpenGenerator(false);  
  }

  // Open Quote Generator Modal function
  const handleOpenGenerator = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setOpenGenerator(true);
  }

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
        <QuoteGeneratorModal
        open={openGenerator}
        close={HandleCloseGenerator}
        processingQuote={processingQuote}
        seProcessingQuote={setProcessingQuote}
        quoteReceived={quoteReceived}
        setQuoteReceived={setQuoteReceived}
        />


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
              <QuoteGeneratorButtonText
              onClick={handleOpenGenerator}
              >Generate</QuoteGeneratorButtonText>
            </QuoteGeneratorButton>
          </QuoteGeneratorInnerContainer>
        </QuoteGeneratorContainer>

        {/* Background Images */}
        <BackgroundImage1 src={speechBubble} height={300} alt="speech bubble" />

        {/* Footer */}
        <FooterContainer>
          <>
            Quotes Generated: {numberOfQuotes}
            <br />
            Developed with <RedSpan>🎔 </RedSpan> by{" "}
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
