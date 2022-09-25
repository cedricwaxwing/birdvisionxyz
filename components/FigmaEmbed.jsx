import React from "react";
import { Box } from "@mui/material";
import { colors } from "../src/styles/theme";

export const FigmaEmbed = (props) => {
  return (
    <Box mt={4} id={props.id}>
      <iframe
        style={{
          aspectRatio: `800/530`,
          border: `2px solid ${colors.black}33`,
          width: "100%",
        }}
        src={props.src}
        allowFullScreen
      ></iframe>
    </Box>
  );
};
