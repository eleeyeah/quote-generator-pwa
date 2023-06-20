import React from "react";

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
            {quoteReceived !== null && (
              <>
                {/* <QuoteGeneratorTitle>Download your quote</QuoteGeneratorTitle>
                <QuoteGeneratorSubtitle style={{ marginTop: "20px" }}>
                  See a quote you like? Download it!
                </QuoteGeneratorSubtitle> */}
                <ImageBlobContainer>
                  <ImageBlob />
                </ImageBlobContainer>
                <AnimatedDownloadButton />
              </>
            )}
          </QuoteGeneratorModalInnerContainer>
        </QuoteGeneratorModalContainer>
      </Fade>
    </Modal>
  );
};

export default QuoteGeneratorModal;
