import React from "react";
import Head from "next/head";
import Logo from "../common/Logo";
import TwitterLogo from "../public/assets/imgs/socials/Twitter.svg";
import InstagramLogo from "../public/assets/imgs/socials/Instagram.svg";
import FxHashLogo from "../public/assets/imgs/socials/fxhash.png";
import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import { colors, easings, typography } from "../src/styles/theme";
import Image from "next/image";

const links = [
  {
    name: "TETRACHROMA",
    description: "{generative nft collection}",
    link: "https://www.fxhash.xyz/generative/20388",
  },
  {
    name: "fx(hash)",
    icon: FxHashLogo,
    link: "https://fxhash.xyz/u/birdvision",
  },
  {
    name: "instagram",
    icon: InstagramLogo,
    link: "https://instagram.com/birdvisionxyz",
  },
  {
    name: "twitter",
    icon: TwitterLogo,
    link: "https://twitter.com/birdvisionxyz",
  },
  {
    name: "twitter(cedric)",
    icon: TwitterLogo,
    link: "https://twitter.com/cedricwaxwing",
  },
];

const LinkTree = ({ link, name, description, icon }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noredirect"
      underline="none"
      sx={{ width: "100%" }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{
          bgcolor: colors.black,
          color: colors.white,
          fontFamily: typography.fontFamilies.monospace,
          fontSize: 24,
          px: 3,
          py: 2,
          transition: `all 0.25s ${easings.cubic}`,
          width: "100%",
          "&:hover, &:active": {
            bgcolor: colors.violet,
          },
        }}
      >
        {icon && (
          <Image src={icon} alt="Bird Vision Twitter" width={32} height={32} />
        )}
        <Stack sx={{ alignItems: "center" }}>
          <Box sx={{ lineHeight: 1 }}>{name}</Box>
          {description && (
            <Box sx={{ fontSize: 14, lineHeight: 1 }}>{description}</Box>
          )}
        </Stack>
      </Stack>
    </Link>
  );
};

const Links = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <title>
          Links - BIRD VISION - Bringing the decentralized web to life.
        </title>
        <meta
          name="description"
          content={
            "A web3 design and development collective that crafts beautiful, intuitive experiences which make it easy for people to interact with cutting-edge technology."
          }
          key="description"
        />
      </Head>
      <Box
        component="main"
        role="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          flexGrow: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            background: `radial-gradient(farthest-corner at top left, #edca37 5%, ${colors.yellow})`,
          }}
        >
          <Container
            maxWidth="sm"
            sx={{
              position: "relative",
              mt: [4, 8, 16],
              mb: [20, 24, 32],
              zIndex: 1,
            }}
          >
            <Stack
              spacing={[3, 4]}
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Link href="/" underline="none">
                <Logo sx={{ width: 96 }} />
              </Link>
              <Link
                href="/"
                underline="none"
                sx={{ "&:hover": { color: "currentColor" } }}
              >
                <Typography
                  sx={{
                    fontFamily: typography.fontFamilies.extended,
                    fontWeight: 900,
                    fontSize: [32, 48],
                    textTransform: "uppercase",
                    lineHeight: 1,
                    WebkitTextStrokeWidth: [1, 2],
                    WebkitTextStrokeColor: `${colors.black}99`,
                  }}
                >
                  BIRD{" "}
                  <Typography variant="span" sx={{ color: colors.white }}>
                    VISION
                  </Typography>
                </Typography>
              </Link>
              <Typography
                sx={{
                  fontSize: [20, 24],
                  fontWeight: 700,
                  fontFamily: typography.fontFamilies.monospace,
                  lineHeight: 1.25,
                  textAlign: "center",
                }}
              >
                We're a web3 art, design and development collective.
              </Typography>
              <Stack spacing={[2, 3]} sx={{ width: "100%" }}>
                {links.map((link, i) => (
                  <LinkTree key={i} {...link} />
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Links;
