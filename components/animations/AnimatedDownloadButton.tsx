import React from "react";
import Image from "next/image";
import Lottie from "react-lottie-player";
import lottieJson from "../../assets/downl-cloud.json";
import {
  CenteredLottie,
  DownloadQuoteCardContainer,
  DownloadQuoteCardContainerText,
} from "./AnimationElem";

const AnimatedDownloadButton = () => {
  return (
    <DownloadQuoteCardContainer>
      <CenteredLottie loop animationData={lottieJson} play />
      <DownloadQuoteCardContainerText>
        Download Quote
      </DownloadQuoteCardContainerText>
    </DownloadQuoteCardContainer>
  );
};

export default AnimatedDownloadButton;
