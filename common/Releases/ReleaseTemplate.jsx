import React from "react";
import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { colors, typography } from "../../src/styles/theme";
import { ViewLink } from "../ViewLink";

const ProjectTemplate = ({
  slug,
  name,
  link,
  marketplace,
  caption,
  description,
  body,
  tags,
  thumb,
}) => {
  return (
    <>
      <Typography variant="h4" sx={{ color: colors[slug], lineHeight: 1 }}>
        {name}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: typography.fontFamilies.sans,
          fontSize: 12,
          mt: 0.5,
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
      >
        {caption}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: typography.fontFamilies.serif,
          fontWeight: 500,
          lineHeight: 1.35,
          mt: 8,
        }}
      >
        {description}
      </Typography>
      <Box sx={{ mt: 4 }}>
        <ViewLink href={link} target="_blank" rel="noredirect">
          Mint on {marketplace}
        </ViewLink>
      </Box>
      {body}
    </>
  );
};

export default ProjectTemplate;
