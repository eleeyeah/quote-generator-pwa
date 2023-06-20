import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Lottie from "react-lottie-player";

export const ImageBlobContainer = styled.div`
  top: 130px;
  position: relative;
  text-align: center;
  transition: 0.3s all ease-in-out;
  width: fit-content;
  height: fit-content;
  margin: auto;
  z-index: 99999;

  &:hover {
    transform: scale(4.8);
    z-index: 99999;
    transition: 0.3s ease-in-out;
    box-shadow: 0 0 30px 40px rgba(0, 0, 0, 0.6);
    height: 100px;
    @media only screen and (max-width: 800px) {
      transform: scale(3.3);
      z-index: 99999;
      transition: 0.3s all ease-in-out;
      box-shadow: 0 0 80px 90px rgba(0, 0, 0, 0.6);
    }
    @media only screen and (max-width: 600px) {
      transform: scale(2.2);
      z-index: 99999;
      transition: 0.3s all ease-in-out;
      box-shadow: 0 0 80px 90px rgba(0, 0, 0, 0.6);
    }
  }
`;
export const DownloadQuoteCardContainer = styled.div`
  background: rgba(74, 93, 216, 0.744);
  border: 2px solid darkgrey;
  width: 300px;
  height: 300px;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  transform: scale(0.4);
  top: 5rem;

  margin: auto;
  &:hover {
    background: rgb(193 193 255 / 3%);
    box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  @media only screen and (max-width: 600px) {
    width: 150px;
  height: 150px;
  }
`;

export const CenteredLottie = styled(Lottie)`
  width: 150px;
  height: 150px;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
  margin-top: 35px;
  pointer-events: none;
`;

export const DownloadQuoteCardContainerText = styled.div`
  color: #cc9191;
  font-family: "Permanent Marker", sans-serif;
  font-size: 38px;
  position: relative;
  width: 100%;
  text-align: center;
  padding: 0px 20px 0px 20px;

  pointer-events: none;
  @media only screen and (max-width: 600px) {
    font-size: 25px;
  }
`;
