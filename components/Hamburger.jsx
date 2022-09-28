import React from "react";
import { Box, styled } from "@mui/material";
import { colors, easings } from "../src/styles/theme";

const Hamburger = ({ active, height, width, style, ...props }) => {
  const Rect1 = styled("rect")(({ active }) => {
    return {
      fill: "currentColor",
      animation: active ? `animate1 0.5s ${easings.cubic} forwards` : null,
      "@keyframes animate1": {
        from: {
          transform: "rotate(0) translate(0)",
        },
        to: {
          transform: "rotate(-45deg) translate(-52%, 42%)",
        },
      },
    };
  });

  const Rect2 = styled("rect")(({ active }) => {
    return {
      fill: "currentColor",
      animation: active ? `animate2 0.5s ${easings.cubic} forwards` : null,
      "@keyframes animate2": {
        from: {
          transform: "rotate(0) translate(0)",
        },
        to: {
          transform: "rotate(45deg) translate(22%, -66%)",
        },
      },
    };
  });

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{
        zIndex: 100,
        ...style,
      }}
    >
      <Rect1 x={18} y={24} width="64" height="8" active={active} />
      <Rect2 x={18} y={64} width="64" height="8" active={active} />
    </svg>
  );
};

export default React.memo(Hamburger);
