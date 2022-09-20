import React, { useEffect, useState } from "react";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import Logo from "./Logo";
import { theme, typography } from "../src/styles/theme";

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const body = document.querySelector("body");
    const handleScroll = () => {
      setScrollY(body.scrollTop);
    };

    body.addEventListener("scroll", handleScroll, { passive: true });
    return () => body.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="header"
      sx={{
        pt: scrollY > 1 ? 3 : 6,
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
            scrollY > 1 ? "100% !important" : theme.breakpoints.values.lg,
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
                fontFamily={typography.fontFamilies.displaySans}
                textTransform="uppercase"
                letterSpacing={3}
              >
                Projects
              </Typography>
            </Link>
            <Typography
              fontSize={12}
              fontFamily={typography.fontFamilies.displaySans}
              textTransform="uppercase"
              letterSpacing={3}
            >
              Contact
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
