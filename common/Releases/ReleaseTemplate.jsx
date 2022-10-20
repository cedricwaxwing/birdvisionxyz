import React from "react";
import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { colors, typography } from "../../src/styles/theme";
import { ViewLink } from "../ViewLink";

const ProjectTemplate = ({
  slug,
  name,
  link,
  date,
  iterations,
  marketplace,
  caption,
  tags,
  description,
  body,
}) => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          color: colors[slug],
          fontSize: ["1.5rem", "1.75rem", "2rem"],
          lineHeight: 1,
        }}
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
      <Stack spacing={1} sx={{ mt: 4 }}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: typography.fontFamilies.monospace,
            fontWeight: 700,
          }}
        >
          date:{` `}
          <Typography variant="span" sx={{ fontWeight: 300 }}>
            {date}
          </Typography>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: typography.fontFamilies.monospace,
            fontWeight: 700,
          }}
        >
          released:{` `}
          <Typography variant="span" sx={{ fontWeight: 300 }}>
            {marketplace}
          </Typography>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: typography.fontFamilies.monospace,
            fontWeight: 700,
          }}
        >
          iterations:{` `}
          <Typography variant="span" sx={{ fontWeight: 300 }}>
            {iterations}
          </Typography>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: typography.fontFamilies.monospace,
            fontWeight: 700,
          }}
        >
          tags:{` `}
          {tags.map((tag) => (
            <Typography variant="span" sx={{ fontWeight: 300 }}>
              {tag},
            </Typography>
          ))}
        </Typography>
      </Stack>
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
