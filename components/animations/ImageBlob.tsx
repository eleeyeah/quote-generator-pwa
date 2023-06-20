import React from "react";
import Image from "next/image";

interface ImageBlobProps {
  blobUrl: string | null;
  quoteReceived: String;
  
}

const ImageBlob = ({quoteReceived, blobUrl}: ImageBlobProps) => {
  return (
  <div>ImageBlob</div>
  );
};

export default ImageBlob;
