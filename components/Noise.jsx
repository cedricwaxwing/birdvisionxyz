import React from "react";
import { styled, useMediaQuery } from "@mui/material";
import NoiseImg from "../public/assets/imgs/noise.png";

const NoiseEl = styled("div")(({ prefersReducedMotion }) => {
  return {
    animation: !prefersReducedMotion ? `noise 0.4s steps(8) infinite` : null,
    backgroundImage: `url(${NoiseImg.src})`,
    backgroundRepeat: "repeat",
    backgroundAttachment: "fixed",
    opacity: 0.7,
    pointerEvents: "none",
    position: "absolute",
    inset: 0,
    "@keyframes noise": {
      "0%": {
        backgroundPosition: "0 0",
      },
      "100%": {
        backgroundPosition: "100% 100%",
      },
    },
  };
});

export const Noise = () => {
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduced)"
  );
  return <NoiseEl prefersReducedMotion={prefersReducedMotion} />;
};
