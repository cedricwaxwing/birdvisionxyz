import * as React from "react";
import "../src/styles/globals.css";
import App, { AppContext, AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { Header } from "../common/Header";
import { CursorEffect } from "../components/CursorEffect";
import { Noise } from "../components/Noise";
import { theme } from "../src/styles/theme";
import { isMobile } from "../utils/isMobile";

export default function MyApp(props: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }

    const handleRouteChange = (url: URL) => {
      const body = document.querySelector("body");

      body?.scrollTo(0, 0);
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

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" key="icon" />
        <link rel="stylesheet" href="https://use.typekit.net/eej4glk.css" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <meta
          name="description"
          content="Bird Vision is a collective of designers, strategists, developers, and content creators who seek to build the decentralized web."
          key="description"
        />
        <title>BIRD VISION - Building the decentralized web</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack sx={{ minHeight: "100vh" }}>
          <Header />
          <Component {...pageProps} />
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

MyApp.getInitialProps = async (context: AppContext) => {
  const [appProps] = await Promise.all([App.getInitialProps(context)]);

  return {
    ...appProps,
  };
};
