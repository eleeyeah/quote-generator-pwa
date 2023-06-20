import React, { useState, useEffect } from "react";

// MUI Imports
import { Backdrop, Fade, Modal } from "@mui/material";

import {
  ModalCircularProgress,
  QuoteGeneratorModalContainer,
  QuoteGeneratorModalInnerContainer,
  QuoteGeneratorSubtitle,
  QuoteGeneratorTitle,
} from "./QuoteGenElements";
import ImageBlob from "../animations/ImageBlob";
import { ImageBlobContainer } from "../animations/AnimationElem";
import AnimatedDownloadButton from "../animations/AnimatedDownloadButton";

interface QuoteGeneratorModalProps {
  open: boolean;
  close: () => void;
  processingQuote: boolean;
  seProcessingQuote: React.Dispatch<React.SetStateAction<boolean>>;
  quoteReceived: String | null;
  setQuoteReceived: React.Dispatch<React.SetStateAction<String | null>>;
}

const style = {};

const QuoteGeneratorModal = ({
  open,
  close,
  processingQuote,
  seProcessingQuote,
  quoteReceived,
  setQuoteReceived,
}: QuoteGeneratorModalProps) => {
  const wiseDevQuote = "Failure is always an option";
  const wiseDevQuoteAuthor = " - a wise senior developer";

  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  // Handle the card download functionality
  const handleDownload = () => {
    const link = document.createElement("a");
    if (typeof blobUrl === "string") {
      link.download = "quote.png";
      link.click();
    }
  };

  // Handle the receiving of the card functionality
  useEffect(() => {
    if (quoteReceived) {
      const binaryData = Buffer.from(quoteReceived, "base64"); // Convert the base64 string to a buffer
      const blob = new Blob([binaryData], { type: "image/png" }); // Create Blob from buffer
      const blobUrlGenerated = URL.createObjectURL(blob); // Create an object URL from blob
      console.log(blobUrlGenerated);
      setBlobUrl(blobUrlGenerated);

      return () => {
        URL.revokeObjectURL(blobUrlGenerated); // Free the memory
      };
    }
  }, [quoteReceived]);

  return (
    <Modal
      id="QuoteGeneratorModal"
      aria-labelledby="spring-modal-quote-generator-modal"
      aria-describedby="spring-modal-description-open-close-quopte-generator"
      open={open}
      onClose={close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <QuoteGeneratorModalContainer sx={style}>
          <QuoteGeneratorModalInnerContainer>
            {/* State #1: Proccessing request of quote + quote state is empty*/}

            {processingQuote === true && quoteReceived === null && (
              <>
                <ModalCircularProgress size={"5rem"} thickness={5} />
                <QuoteGeneratorTitle>Generating Quote...</QuoteGeneratorTitle>
                <QuoteGeneratorSubtitle style={{ marginTop: "20px" }}>
                  {wiseDevQuote}
                  <br />
                  <span style={{ fontSize: "26" }}> {wiseDevQuoteAuthor} </span>
                </QuoteGeneratorSubtitle>
              </>
            )}

            {/* State #2: Quote state fullfilled*/}
            {quoteReceived === null && (
              <>
                <QuoteGeneratorTitle>Preview your quote</QuoteGeneratorTitle>
                <ImageBlobContainer>
                  <ImageBlob quoteReceived={quoteReceived} blobUrl={blobUrl} />
                </ImageBlobContainer>
                <AnimatedDownloadButton handleDownload={handleDownload} />
                <QuoteGeneratorSubtitle style={{ marginTop: "2px" }}>
                  See a quote you like? Download it!
                </QuoteGeneratorSubtitle>
              </>
            )}
          </QuoteGeneratorModalInnerContainer>
        </QuoteGeneratorModalContainer>
      </Fade>
    </Modal>
  );
};

export default QuoteGeneratorModal;
