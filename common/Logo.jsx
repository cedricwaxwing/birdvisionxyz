import React from "react";
import { Box } from "@mui/material";
import { easings } from "../src/styles/theme";
import LogoImg from "../public/assets/imgs/logo.png";
import Image from "next/image";

const Logo = ({ strokeWidth = 3, sx }) => (
  <Box
    className="logo"
    sx={{
      display: "flex",
      width: 80,
      ...sx,
    }}
  >
    <Box
      sx={{
        backdropFilter: "blur(4px)",
        borderRadius: 999,
        display: "flex",
        transition: `all 0.25s ${easings.cubic}`,
        "&:hover": { transform: "scale(1.2)" },
      }}
    >
      <Image src={LogoImg} alt="Bird Vision Logo" />
    </Box>
    {/* <svg
      width="58"
      height="57"
      fill="none"
      viewBox="0 0 58 57"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.3014 28.5888C31.3014 30.002 30.1558 31.1476 28.7426 31.1476C27.3294 31.1476 26.1838 30.002 26.1838 28.5888C26.1838 27.1757 27.3294 26.0301 28.7426 26.0301C30.1558 26.0301 31.3014 27.1757 31.3014 28.5888Z"
        stroke={colors.black}
        strokeWidth={`${strokeWidth}`}
      />
      <path
        d="M39.4191 28.4373C39.4191 28.5003 39.3891 28.7201 39.2125 29.127C39.0451 29.5125 38.7848 29.9785 38.4318 30.5037C37.7264 31.5533 36.7175 32.7419 35.5525 33.8609C34.3871 34.9804 33.1052 35.9922 31.8692 36.7146C30.6037 37.4542 29.5297 37.8063 28.7426 37.8063C28.1068 37.8063 27.1086 37.4751 25.8401 36.7205C24.6167 35.9927 23.3113 34.9735 22.1091 33.8478C20.9071 32.7222 19.8492 31.5285 19.105 30.4749C18.7324 29.9474 18.4571 29.4813 18.2803 29.0971C18.0925 28.6891 18.0662 28.4812 18.0662 28.4373C18.0662 28.3743 18.0962 28.1545 18.2728 27.7476C18.4401 27.362 18.7005 26.8961 19.0535 26.3709C19.7588 25.3212 20.7677 24.1327 21.9327 23.0136C23.0981 21.8942 24.3801 20.8824 25.6161 20.1599C26.8815 19.4203 27.9556 19.0682 28.7426 19.0682C29.5297 19.0682 30.6037 19.4203 31.8692 20.1599C33.1052 20.8824 34.3871 21.8942 35.5525 23.0136C36.7175 24.1327 37.7264 25.3212 38.4318 26.3709C38.7848 26.8961 39.0451 27.362 39.2125 27.7476C39.3891 28.1545 39.4191 28.3743 39.4191 28.4373Z"
        stroke={colors.black}
        strokeWidth={`${strokeWidth}`}
      />
      <path
        d="M43.4779 28.4372C43.4779 29.3624 43.0473 30.6956 42.1224 32.2743C41.2182 33.8178 39.925 35.4534 38.4085 36.9487C36.8921 38.4439 35.1883 39.7634 33.4832 40.7011C31.7642 41.6464 30.1357 42.1538 28.7426 42.1538C27.3496 42.1538 25.7211 41.6464 24.0021 40.7011C22.2969 39.7634 20.5931 38.4439 19.0768 36.9487C17.5603 35.4534 16.2671 33.8178 15.3629 32.2743C14.438 30.6956 14.0074 29.3624 14.0074 28.4372C14.0074 27.5119 14.438 26.1788 15.3629 24.6C16.2671 23.0566 17.5603 21.4209 19.0768 19.9256C20.5931 18.4304 22.2969 17.111 24.0021 16.1732C25.7211 15.2279 27.3496 14.7205 28.7426 14.7205C30.1357 14.7205 31.7642 15.2279 33.4832 16.1732C35.1883 17.111 36.8921 18.4304 38.4085 19.9256C39.925 21.4209 41.2182 23.0566 42.1224 24.6C43.0473 26.1788 43.4779 27.5119 43.4779 28.4372Z"
        stroke={colors.black}
        strokeWidth={`${strokeWidth}`}
      />
      <path
        d="M47.5367 28.4371C47.5367 30.0139 46.9549 31.9433 45.837 34.0115C44.7285 36.0621 43.1439 38.1538 41.27 40.0314C37.4654 43.8434 32.7535 46.5014 28.7426 46.5014C24.7318 46.5014 20.0199 43.8434 16.2153 40.0314C14.3414 38.1538 12.7568 36.0621 11.6483 34.0115C10.5304 31.9433 9.94858 30.0139 9.94858 28.4371C9.94858 26.8603 10.5304 24.9309 11.6483 22.8628C12.7568 20.8122 14.3414 18.7204 16.2153 16.8429C20.0199 13.0308 24.7318 10.3729 28.7426 10.3729C32.7535 10.3729 37.4654 13.0308 41.27 16.8429C43.1439 18.7204 44.7285 20.8122 45.837 22.8628C46.9549 24.9309 47.5367 26.8603 47.5367 28.4371Z"
        stroke={colors.black}
        strokeWidth={`${strokeWidth}`}
      />
      <path
        d="M51.5955 28.4372C51.5955 32.9846 49.0933 38.6139 44.8663 43.1417C40.6584 47.6489 34.9423 50.8491 28.7427 50.8491C22.543 50.8491 16.8269 47.6489 12.619 43.1417C8.39204 38.6139 5.88977 32.9846 5.88977 28.4372C5.88977 23.8898 8.39204 18.2605 12.619 13.7327C16.8269 9.22547 22.543 6.02533 28.7427 6.02533C34.9423 6.02533 40.6584 9.22547 44.8663 13.7327C49.0933 18.2605 51.5955 23.8898 51.5955 28.4372Z"
        stroke={colors.black}
        strokeWidth={`${strokeWidth}`}
      />
      <path
        d="M55.6543 28.5888C55.6543 44.6166 43.648 55.5 28.7426 55.5C13.8373 55.5 1.83093 44.6166 1.83093 28.5888C1.83093 12.561 13.8373 1.67767 28.7426 1.67767C43.648 1.67767 55.6543 12.561 55.6543 28.5888Z"
        stroke={colors.black}
        strokeWidth={`${strokeWidth}`}
      />
    </svg> */}
  </Box>
);

export default Logo;
