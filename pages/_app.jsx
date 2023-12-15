import * as React from "react";
import "../src/styles/globals.css";
import App from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Box,
  CssBaseline,
  Stack,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { CursorEffect } from "../components/CursorEffect";
import { Noise } from "../components/Noise";
import { colors, theme } from "../src/styles/theme";
import OgImage from "../public/assets/imgs/og_image.png";
import OgImageCedricWaxwing from "../public/assets/imgs/og_image_cedricwaxwing.png";

const site = process.env.REACT_APP_SITE;

export default function MyApp(props) {
  const router = useRouter();
  const [page, setPage] = React.useState();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }

    let vh = window.innerHeight * 0.01;
    document.body.style.setProperty("--vh", `${vh}px`);

    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const { Component, pageProps } = props;
  const _theme = useTheme();
  const isMobile = useMediaQuery(_theme.breakpoints.down("md"));

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/${site}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/${site}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/${site}/favicon-16x16.png`}
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <title>{`${
          site === "birdvision" ? "BIRD VISION" : "CEDRIC WAXWING"
        } - Bringing the decentralized web to life.`}</title>
        <meta
          name="description"
          content={`${
            site === "birdvision"
              ? "A web3 design and development collective that crafts"
              : "Crafting"
          } beautiful, intuitive experiences which make it easy for people to interact with cutting-edge technology.`}
          key="description"
        />
        <meta
          property="og:url"
          content={
            site === "birdivsion"
              ? "https://www.birdvision.xyz"
              : "https://www.cedricwaxwing.xyz"
          }
        />
        <meta
          property="og:title"
          content={`${
            site === "birdvision" ? "BIRD VISION" : "CEDRIC WAXWING"
          } - Bringing the decentralized web to life.`}
        />
        <meta
          property="og:description"
          content={`${
            site === "birdvision"
              ? "A web3 design and development collective that crafts"
              : "Crafting"
          } beautiful, intuitive experiences which make it easy for people to interact with cutting-edge technology.`}
        />
        <meta
          property="og:image"
          content={
            site === "birdivsion" ? OgImage.src : OgImageCedricWaxwing.src
          }
        />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content={colors.black} />
        <meta name="theme-color" content={colors.black} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack
          sx={{ minHeight: "calc(var(--vh, 1vh) * 100)", overflow: "hidden" }}
        >
          {router.route !== "/links" && <Header />}
          <Component {...pageProps} />
          <Footer />
          {!isMobile && <CursorEffect />}
          <Box
            sx={{
              position: "fixed",
              pointerEvents: "none",
              inset: 0,
              zIndex: 100,
            }}
          >
            <Noise />
          </Box>
        </Stack>
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (context) => {
  const [appProps] = await Promise.all([App.getInitialProps(context)]);

  return {
    ...appProps,
  };
};
