import React from "react";
import { useRouter } from "next/router";
import { styled, useMediaQuery } from "@mui/material";
import NoiseImg from "../public/assets/imgs/noise.png";

const NoiseEl = styled("div")(({ prefersReducedMotion, subtle }) => {
  return {
    animation: prefersReducedMotion ? null : `noise 0.4s steps(8) infinite`,
    backgroundImage: `url(${NoiseImg.src})`,
    backgroundRepeat: "repeat",
    backgroundAttachment: "fixed",
    opacity: subtle ? 0.4 : 0.7,
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
  const router = useRouter();
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduced)"
  );
  return (
    <NoiseEl
      prefersReducedMotion={prefersReducedMotion}
      subtle={router.pathname.length > 1}
    />
  );
};
