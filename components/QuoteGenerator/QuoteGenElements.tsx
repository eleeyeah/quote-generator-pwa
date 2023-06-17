import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { execSync } from "child_process";

export const GradientBackgroundCon = styled.div`
  background: linear-gradient(to right, #8ba5e7, #0d65b2);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
  height: 100vh;
  width: 100vw;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
export const BackgroundImage1 = styled(Image)`
  position: fixed;
  z-index: 2;
  margin-left: 10px;
  margin-top: -40px;
  height: 60%;
  width: 38%;

  @media only screen and (max-width: 600px) {
    margin-left: -10px;
    margin-top: -0px;
  }
`;
export const BackgroundImage2 = styled(Image)`
  position: relative;
  z-index: 2;
  right: -18px;
  margin-bottom: 10px;
  height: 40%;
  width: 20%;

  transform: scaleX(-1) scaleY(-1);
`;
export const FooterContainer = styled.div`
  width: 100vw;
  height: 50px;
  text-align: center;
  font-family: "Permanent Marker", sans-serif;
  font-weight: 100;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  color: white;
  z-index: 9999;
`;

export const RedSpan = styled.span`
  color: red;
`;

export const CustomLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: #bfcb7e;
  }
`;

export const QuoteGeneratorContainer = styled.div`
  min-height: 350px;
  min-width: 350px;
  width: 70vw;
  height: 70vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 2;

  /* Glassmorphism */
  background: rgba(255, 223, 126, 0.36);
  box-shadow: 0 8px 32px 0 rgba(74, 81, 186, 0.37);
  backdrop-filter: blur(14.5px);
  -webkit-backdrop-filter: blur(14.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
export const QuoteGeneratorInnerContainer = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
`;

export const QuoteGeneratorTitle = styled.div`
  font-family: "Permanent Marker", cursive;
  font-size: 40px;
  text-align: center;
  color: #f8e4ff;
  padding: 0 20px;
  position: relative;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
export const QuoteGeneratorSubtitle = styled.div`
  color: #ffffff;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  position: relative;
  width: 100%;
  text-align: center;
  padding: 0 20px;
  @media only screen and (max-width: 600px) {
    font-size: 8px;
  }
`;
export const QuoteGeneratorButton = styled.div`
  height: 60px;
  width: 160px;
  border: 2px solid darkgrey;

  margin-top: 20px;
  position: relative;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  top: 20px;
  margin: auto;
  transform-origin: center;

  background: rgba(137, 137, 220, 0.8);
  box-shadow: 0 8px 32px 0 rgba(118, 124, 205, 0.3);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(18px);
  border-radius: 10px;
  border: 1px solid rgba(177, 177, 245, 0.59);
  &:hover {
    filter: brightness(1.1);
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
    transform-origin: center;
  }
  @media only screen and (max-width: 600px) {
    width: 100px;
    height: 50px;
  }
`;
export const QuoteGeneratorButtonText = styled.div`
  color: #ffffff;
  font-family: "Permanent Marker", cursive;
  font-size: 20px;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    padding: 0 10px 0 10px;
  }
`;
