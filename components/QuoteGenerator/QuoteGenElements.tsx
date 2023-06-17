import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { execSync } from "child_process";

export const GradientBackgroundCon = styled.div`
  background: linear-gradient(to right, #7e7ecb, #5e086c);
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
  position: relative;
  z-index: 1;
  margin-left: -10px;
  margin-top: -10px;
`;
export const BackgroundImage2 = styled(Image)`
  position: fixed;
  z-index: 1;
  right: 40px;
  bottom: 40px;
  height: 80px;
  width: auto;
`;
export const FooterContainer = styled.div`
  width: 100vw;
  height: 50px;
  text-align: center;
  font-family: "Permanent Marker", sans-serif;
  font-weight: 100;
  font-size: 15px;
  position: absolute;
  bottom: 0;
  color: white;
  z-index: 9999;
`;

export const RedSpan = styled.span`
  color: red;
`;

export const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: #bfcb7e;
  }
`;
