import React from "react";

import { styled } from "../stitches";

import loaderGif from "../assets/loader.gif";

export const LoaderImg = styled("img", {
  maxWidth: "$8",
});

export const Loader = () => {
  return <LoaderImg src={loaderGif} alt="Loading" />;
};
