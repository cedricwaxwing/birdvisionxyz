import React, { useEffect, useState } from "react";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import Logo from "./Logo";
import { theme, typography } from "../src/styles/theme";

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [screenX, setScreenX] = useState(0);

  useEffect(() => {
    const body = document.querySelector("body");

    setScreenX(body.clientWidth);
    const handleResize = () => {
      setScreenX(body.clientWidth);
    };
    const handleScroll = () => {
      setScrollY(body.scrollTop);
    };

    body.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      body.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <Box
      component="header"
      sx={{
        pt: scrollY > 300 ? 3 : 4,
        position: "fixed",
        top: 0,
        transition: "padding 0.5s ease-in-out",
        width: "100%",
        zIndex: 10,
      }}
    >
      <Container
        sx={{
          transition: "max-width 0.5s ease-in-out",
          maxWidth:
            screenX < theme.breakpoints.values.lg + 200
              ? "100% !important"
              : scrollY > 300
              ? "100% !important"
              : theme.breakpoints.values.lg,
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Link underline="none" href="/" display="block">
            <Logo sx={{ transform: `rotate(${scrollY * 0.1}deg)` }} />
          </Link>
          <Stack direction="row" spacing={4} sx={{ alignItems: "center" }}>
            <Link
              href="/#/portfolio/demo"
              color="currentColor"
              underline="none"
            >
              <Typography
                fontSize={12}
                fontFamily={typography.fontFamilies.extended}
                fontWeight={600}
                textTransform="uppercase"
                letterSpacing={3}
              >
                Projects
              </Typography>
            </Link>
            <Link
              href="/#/portfolio/demo"
              color="currentColor"
              underline="none"
            >
              <Typography
                fontSize={12}
                fontFamily={typography.fontFamilies.extended}
                fontWeight={600}
                textTransform="uppercase"
                letterSpacing={3}
              >
                Contact
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
