import React from "react";
import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { colors, typography } from "../../src/styles/theme";

const ProjectTemplate = ({
  slug,
  name,
  type,
  date,
  myRole,
  propsTo,
  caption,
  description,
  body,
  tags,
  thumb,
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          mx: -1,
          my: -0.5,
        }}
      >
        {tags.map((tag) => (
          <Box key={tag} px={1} py={0.5}>
            <Typography
              sx={{
                color: colors[slug],
                lineHeight: 1,
                fontFamily: typography.fontFamilies.sans,
              }}
            >
              {tag}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography
        variant="h4"
        sx={{ color: colors[slug], lineHeight: 1, mt: 4 }}
      >
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
      {body}
    </>
  );
};

export default ProjectTemplate;
