import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { socials } from "../constants/socials";
import { colors, easings, typography } from "../src/styles/theme";
import Image from "next/image";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: colors.black,
        color: colors.white,
        minHeight: "50vh",
        py: 16,
      }}
    >
      <Container sx={{ position: "relative", zIndex: 1, height: "100%" }}>
        <Grid container height="100%">
          <Grid
            item
            xs={12}
            md={9}
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              justifyContent: "center",
              mt: ["3vh", "8vh", "16vh"],
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: `${colors.white}ed`,
                fontSize: ["2.25rem", "3rem", null, "5rem"],
                WebkitTextStroke: `2px ${colors.black}`,
                lineHeight: 0.8,
              }}
            >
              Let's work together
            </Typography>
            <Grid container rowGap={6} columnGap={8} mt={8}>
              <Grid item xs={12} sm={3}>
                <Stack spacing={2}>
                  <Typography variant="h5" fontSize={["1rem", "1.25rem"]}>
                    Copyright
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      fontFamily: typography.fontFamilies.sans,
                      fontWeight: 300,
                    }}
                  >
                    © 2022 Bird Vision
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Stack spacing={2}>
                  <Typography variant="h5" fontSize={["1rem", "1.25rem"]}>
                    Contact
                  </Typography>
                  <Link
                    href="mailto:hello@birdvision.xyz"
                    underline="none"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      "&:hover": { color: colors.yellow },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: typography.fontFamilies.sans,
                        fontWeight: 300,
                      }}
                    >
                      hello@birdvision.xyz
                    </Typography>
                  </Link>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Stack spacing={2}>
                  <Typography variant="h5" fontSize={["1rem", "1.25rem"]}>
                    Follow
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {socials.map((social) => (
                      <Link
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noredirect"
                      >
                        <Box
                          sx={{
                            bgcolor: colors.black,
                            borderRadius: 999,
                            display: "flex",
                            opacity: 0.85,
                            p: "5px",
                            transition: `opacity 0.25s ${easings.cubic}, transform 0.25s ${easings.cubic}`,
                            "&:hover": {
                              bgcolor: colors.violet,
                              opacity: 1,
                              transform: "scale(1.05)",
                            },
                          }}
                        >
                          <Image
                            src={social.image}
                            alt={social.name}
                            width={19}
                            height={19}
                          />
                        </Box>
                      </Link>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
