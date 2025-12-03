import React, { useEffect, useRef, useState } from "react";
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
import { site_links } from "../pages/links";
import TwitterLogo from "../public/assets/imgs/socials/Twitter.svg";
import GithubIcon from "../public/assets/imgs/socials/Github.svg";
import InstagramLogo from "../public/assets/imgs/socials/Instagram.svg";
import { colors, easings, typography } from "../src/styles/theme";
import Image from "next/image";
import ArrowShortUp from "../public/assets/imgs/arrow-short-up.svg";
// import { loadEnvConfig } from "@next/env";

const site = process.env.REACT_APP_SITE;

export const Footer = () => {
  const footerRef = useRef();
  const [showArrow, setShowArrow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  let date = new Date();
  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(
        window.scrollY > footerRef.current.offsetTop - window.innerHeight
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="footer"
      ref={footerRef}
      sx={{
        bgcolor: colors.black,
        color: colors.white,
        minHeight: "calc(var(--vh, 1vh) * 50)",
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
              mt: [
                "calc(var(--vh, 1vh) * 3)",
                "calc(var(--vh, 1vh) * 8)",
                "calc(var(--vh, 1vh) * 16)",
              ],
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
                    © {date.getFullYear()}{" "}
                    {site === "birdvision" ? "Bird Vision" : "Cedric Waxwing"}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Stack spacing={2} id="contact">
                  <Typography variant="h5" fontSize={["1rem", "1.25rem"]}>
                    Contact
                  </Typography>
                  <Box sx={{ display: "inline" }}>
                    <Link
                      href={`mailto:hello@cedricwaxwing.xyz`}
                      underline="none"
                      sx={{
                        color: "rgba(255,255,255,0.7)",
                        "&:hover": { color: colors.yellow },
                      }}
                    >
                      <Typography
                        sx={{
                          display: "inline",
                          fontFamily: typography.fontFamilies.sans,
                          fontWeight: 300,
                        }}
                      >
                        {`hello@cedricwaxwing.xyz`}
                      </Typography>
                    </Link>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Stack spacing={2}>
                  <Typography variant="h5" fontSize={["1rem", "1.25rem"]}>
                    Follow
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {site_links[site].socials.map((social, i) => (
                      <Link
                        href={social.link}
                        target="_blank"
                        rel="noredirect"
                        key={i}
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
                          lazyBoundary="500px"
                          src={social.icon}
                          alt={social.name}
                          width={19}
                          height={19}
                        />
                      </Link>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: [24, 32],
          right: [24, 32],
          opacity: showArrow ? 1 : 0,
          filter: "brightness(1.2)",
          transition: `transform 0.5s ${easings.cubic}, opacity 0.5s ease-in-out`,
          width: [24, 32, 48],
          zIndex: 2,
          "&:hover": {
            filter: "brightness(1.3)",
            transform: "scale(1.1)",
          },
        }}
      >
        <Image lazyBoundary="500px" src={ArrowShortUp} alt="" />
      </Box>
    </Box>
  );
};
