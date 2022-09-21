import * as React from "react";
import "../src/styles/globals.css";
import App, { AppContext } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { Header } from "../common/Header";
import { CursorEffect } from "../components/CursorEffect";
import { Noise } from "../components/Noise";
import { colors, theme } from "../src/styles/theme";

export default function MyApp(props) {
  const router = useRouter();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }

    const handleRouteChange = (url) => {
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content={colors.yellow} />
        <meta name="theme-color" content={colors.yellow} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack sx={{ minHeight: "100vh" }}>
          <Header />
          <Component {...pageProps} />
          <CursorEffect />
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
