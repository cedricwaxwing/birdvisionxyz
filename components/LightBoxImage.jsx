import React, { useEffect, useState } from "react";
import Image from "next/image";
import CursorHover from "../public/assets/imgs/cursor_hover.svg";
import { Box, Container, Dialog, Typography } from "@mui/material";
import { theme, typography } from "../src/styles/theme";

export const LightBoxImage = ({ src, alt, sx, ...props }) => {
  const [active, setActive] = useState(false);
  const [pixelDensity, setPixelDensity] = useState(false);

  const handleImageClick = () => {
    setActive(true);
  };

  const handleDialogClick = () => {
    setActive(false);
  };

  useEffect(() => {
    setPixelDensity(window.devicePixelRatio);
  }, []);

  return (
    <Box
      {...props}
      sx={{
        cursor: `url(${CursorHover.src}), auto !important`,
        position: "relative",
        width: "100%",
        height: "100%",
        transition: "opacity 0.25s ease-in-out",
        "&:hover": {
          opacity: 0.9,
        },
        ...sx,
      }}
    >
      <Image
        lazyBoundary="500px"
        src={src}
        alt={alt}
        placeholder="blur"
        onClick={handleImageClick}
      />
      <Dialog
        open={active}
        onClick={handleDialogClick}
        maxWidth="md"
        sx={{
          "& .MuiPaper-root": {
            boxShadow: "none",
            bgcolor: "transparent",
            display: "flex",
          },
        }}
      >
        <Box sx={{ boxShadow: theme.shadows[2], disply: "flex" }}>
          <Image
            lazyBoundary="500px"
            src={src}
            alt={alt}
            placeholder="blur"
            height={src.height / pixelDensity}
            width={src.width / pixelDensity}
            quality="100"
            style={{ borderRadius: 4 }}
          />
          {alt && (
            <Typography color="white" fontFamily={typography.fontFamilies.sans}>
              {alt}
            </Typography>
          )}
        </Box>
      </Dialog>
    </Box>
  );
};
