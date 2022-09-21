import React, { useState } from "react";
import { colors, easings } from "../src/styles/theme";

export const Hamburger = (props) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
      style={{
        zIndex: 100,
      }}
      {...props}
    >
      <rect
        x={active ? 24.5442 : 18}
        y={active ? 69.799 : 24}
        width="64"
        height="8"
        transform={active ? "rotate(-405 24.5442 69.799)" : null}
        fill={active ? colors.white : colors.black}
        style={{
          transition: `all 0.75s ${easings.cubic}`,
        }}
      />
      <rect
        x={active ? 30.2009 : 18}
        y={active ? 24.5442 : 64}
        width="64"
        height="8"
        transform={active ? "rotate(405 30.2009 24.5442)" : null}
        fill={active ? colors.white : colors.black}
        style={{
          transition: `all 0.75s ${easings.cubic}`,
        }}
      />
    </svg>
  );
};

<svg
  width="100"
  height="100"
  viewBox="0 0 100 100"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    x="24.5442"
    y="69.799"
    width="64"
    height="8"
    transform="rotate(-45 24.5442 69.799)"
    fill="#403C43"
  />
  <rect
    x="30.2009"
    y="24.5442"
    width="64"
    height="8"
    transform="rotate(45 30.2009 24.5442)"
    fill="#403C43"
  />
</svg>;
