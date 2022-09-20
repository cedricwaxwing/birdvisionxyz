import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { colors, typography } from "../../src/styles/theme";

export const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      sx={{
        // bgcolor: colors.yellow,
        background: `radial-gradient(farthest-corner at top left, #edca37 5%, ${colors.yellow})`,
        height: "100vh",
      }}
    >
      <Container sx={{ position: "relative", zIndex: 1, height: "100%" }}>
        <Grid container height="100%">
          <Grid
            item
            xs={12}
            sm={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              justifyContent: "center",
              mt: 32,
            }}
          >
            <Stack spacing={8}>
              <Stack>
                <Typography
                  variant="h1"
                  sx={{
                    color: `${colors.black}ed`,
                    WebkitTextStroke: `2px ${colors.black}`,
                    lineHeight: 0.8,
                  }}
                >
                  BIRD
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    color: `${colors.white}cc`,
                    WebkitTextStroke: `2px ${colors.black}`,
                    lineHeight: 0.8,
                  }}
                >
                  VISION
                </Typography>
              </Stack>
              <Box
                sx={{
                  pl: 4,
                  borderLeft: `8px solid ${colors.orange}`,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: typography.fontFamilies.displaySans,
                    // fontStyle: "italic",
                    fontWeight: 400,
                    lineHeight: 1.75,
                  }}
                >
                  Building and designing incredible products for the
                  decentralized web.
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
