import Head from "next/head";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Release } from "../common/Releases/Release";
import { colors } from "../src/styles/theme";
import { releases } from "../constants/releases";

const Releases = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <title>
          Releases // BIRD VISION - Bringing the decentralized web to life.
        </title>
        <meta
          name="description"
          content={
            "A web3 design and development collective that crafts beautiful, intuitive experiences which make it easy for people to interact with cutting-edge technology."
          }
          key="description"
        />
        <meta name="robots" content="index, follow" />
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
            bgcolor: `${colors.white}99`,
            overflowX: "clip",
            position: "relative",
            py: 16,
            zIndex: 1,
          }}
        >
          <Container>
            <Box id="projects" sx={{ mb: [4, 8], pt: 16 }}>
              <Typography
                variant="h2"
                sx={{
                  color: `${colors.white}99`,
                  fontSize: ["2.5rem", "3.5rem", "6rem"],
                  WebkitTextStroke: `2px ${colors.black}33`,
                }}
              >
                RELEASES
              </Typography>
              {/* <Typography>
                NFT Collections, and other 
              </Typography> */}
            </Box>
            <Stack spacing={16}>
              {Object.keys(releases).map((release, i) => (
                <Release release={release} key={i} index={i + 1} />
              ))}
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Releases;
