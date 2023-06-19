import React from "react";

// MUI Imports
import { Backdrop, Fade, Modal } from "@mui/material";
import {
  QuoteGeneratorModalContainer,
  QuoteGeneratorModalInnerContainer,
} from "./QuoteGenElements";

interface QuoteGeneratorModalProps {
  open: boolean;
  close: () => void;
  processingQuote: boolean;
  seProcessingQuote: React.Dispatch<React.SetStateAction<boolean>>;
  quoteReceived: String | null;
  setQuoteReceived: React.Dispatch<React.SetStateAction<String | null>>;
}

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
};

const QuoteGeneratorModal = ({
  open,
  close,
  processingQuote,
  seProcessingQuote,
  quoteReceived,
  setQuoteReceived,
}: QuoteGeneratorModalProps) => {
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
          <QuoteGeneratorModalInnerContainer></QuoteGeneratorModalInnerContainer>
        </QuoteGeneratorModalContainer>
      </Fade>
    </Modal>
  );
};

export default QuoteGeneratorModal;
