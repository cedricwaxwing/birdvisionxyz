import React from "react";
import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { colors, typography } from "../src/styles/theme";

export const ProjectTemplate = ({ slug, client, tags, name }) => {
  return (
    <Container sx={{ position: "relative", zIndex: 1 }}>
      <Stack
        spacing={2}
        sx={{
          alignItems: "center",
          flexDirection: { md: "column", lg: "row" },
          justifyContent: "space-between",
          borderBottom: `2px solid ${colors[slug]}`,
          borderTop: `2px solid ${colors[slug]}`,
          mt: 24,
          py: 4,
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: ["center", null, null, "flex-start"],
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            fontFamily={typography.fontFamilies.sans}
            fontWeight={600}
            letterSpacing={2}
            lineHeight={1}
            textTransform="uppercase"
          >
            {client}
          </Typography>
          <Typography
            sx={{
              bgcolor: colors.white,
              display: "inline",
              fontFamily: typography.fontFamilies.extended,
              fontSize: 10,
              fontWeight: 400,
              letterSpacing: 1,
              mt: 0.5,
              px: 1,
              py: "2px",
              textTransform: "uppercase",
              width: "fit-content",
            }}
          >
            September 2021
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {tags.map((tag) => (
            <Chip
              label={tag}
              key={tag}
              sx={{
                bgcolor: colors[slug],
                border: `2px solid ${colors.black}33`,
                color: colors.white,
                m: 0.5,
              }}
            />
          ))}
        </Box>
      </Stack>
      <Stack sx={{ alignItems: "center", mb: 12, mt: 16, width: "100%" }}>
        {name.split(" ").map((word, index) => (
          <Typography
            key={word}
            variant="h1"
            sx={{
              color: `${
                index == name.split(" ").length - 1
                  ? colors.white
                  : colors[slug]
              }ed`,
              fontSize: ["3rem", "5rem", "6rem"],
              WebkitTextStroke: `2px ${colors.black}66`,
              lineHeight: 0.8,
              textTransform: "uppercase",
            }}
          >
            {word}
          </Typography>
        ))}
      </Stack>
    </Container>
  );
};
