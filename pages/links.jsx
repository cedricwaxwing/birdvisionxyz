import React from "react";
import Head from "next/head";
import Logo from "../common/Logo";
import TwitterLogo from "../public/assets/imgs/socials/Twitter.svg";
import GithubIcon from "../public/assets/imgs/socials/Github.svg";
import InstagramLogo from "../public/assets/imgs/socials/Instagram.svg";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { colors, easings, typography } from "../src/styles/theme";
import Image from "next/image";
// import { loadEnvConfig } from "@next/env";

const site = process.env.REACT_APP_SITE;

const links = [
  {
    name: "Elemental",
    description: "{generative nft collection}",
    link: "https://www.fxhash.xyz/generative/25734",
  },
  {
    name: "twitter(cedric)",
    icon: TwitterLogo,
    link: "https://twitter.com/cedricwaxwing",
  },
  {
    name: "fx(hash)",
    link: "https://www.fxhash.xyz/u/cedricwaxwing",
  },
  {
    name: "website",
    link: "/",
    internal: true,
  },
];

const socials = [
  {
    name: "instagram.",
    icon: InstagramLogo,
    link: "https://instagram.com/cedricwaxwing_",
  },
  {
    name: "twitter",
    icon: TwitterLogo,
    link: "https://twitter.com/birdvisionxyz",
  },
  {
    name: "github",
    icon: GithubIcon,
    link: "https://www.github.com/cedricwaxwing",
  },
  {
    name: "twitter",
    icon: TwitterLogo,
    link: "https://twitter.com/cedricwaxwing",
  },
];

export const site_links = {
  cedricwaxwing: {
    links: [links[0], links[2], links[3]],
    socials: [socials[0], socials[3], socials[2]],
  },
  birdvision: { links: links, socials: [socials[0], socials[1], socials[2]] },
};

const LinkTree = ({ link, internal, name, description, icon }) => {
  return (
    <Link
      href={link}
      target={internal ? null : "_blank"}
      rel={internal ? null : "noredirect"}
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
          {`Links - ${
            site === "birdvision" ? "BIRD VISION" : "CEDRIC WAXWING"
          } - Bringing the decentralized web to life.`}
        </title>
        <meta
          name="description"
          content={`${
            site === "birdvision"
              ? "A web3 design and development collective that crafts"
              : "Crafting"
          } beautiful, intuitive experiences which make it easy for people to interact with cutting-edge technology.`}
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
                    fontSize: [32, site === "cedricwaxwing" ? 36 : 48],
                    textTransform: "uppercase",
                    lineHeight: 1,
                    textAlign: "center",
                    WebkitTextStrokeWidth: [1, 2],
                    WebkitTextStrokeColor: `${colors.black}99`,
                  }}
                >
                  {site === "cedricwaxwing" ? "CEDRIC" : "BIRD"}{" "}
                  <Typography variant="span" sx={{ color: colors.white }}>
                    {site === "cedricwaxwing" ? "WAXWING" : "VISION"}
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
                web3 art, design and development
              </Typography>
              <Stack spacing={[2, 3]} sx={{ width: "100%" }}>
                {site_links[site].links.map((link, i) => (
                  <LinkTree key={i} {...link} />
                ))}
              </Stack>
            </Stack>
            <Stack
              direction="row"
              spacing={3}
              sx={{ mt: 4, display: "flex", justifyContent: "center" }}
            >
              {site_links[site].socials.map((social, i) => (
                <Link
                  href={social.link}
                  target="_blank"
                  rel="noredirect"
                  key={i}
                  sx={{
                    height: 40,
                    width: 40,
                    backgroundColor: colors.black,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover, &:active": {
                      bgcolor: colors.violet,
                    },
                  }}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Links;
