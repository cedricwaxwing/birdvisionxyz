import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Logo from "./Logo";
import { Hamburger } from "../components/Hamburger";
import { typography } from "../src/styles/theme";

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

  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{
        pt: scrollY > 300 ? [2, 3] : [3, 4],
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
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link underline="none" href="/" display="block">
            <Logo
              sx={{
                transform: `rotate(${scrollY * 0.1}deg)`,
                width: scrollY > 300 ? { xs: 40, md: 60 } : { xs: 50, md: 80 },
              }}
            />
          </Link>
          {true ? (
            <Hamburger width={32} height={32} />
          ) : (
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
          )}
        </Stack>
      </Container>
    </Box>
  );
};
