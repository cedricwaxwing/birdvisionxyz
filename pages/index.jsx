import Head from "next/head";
import { Box, Container, Stack } from "@mui/material";
import { HeroSection } from "../components/Home/HeroSection";
import { projects } from "../constants/projects";
import { ProjectPreview } from "../components/ProjectPreview";
import { colors } from "../src/styles/theme";

const Home = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" key="icon" />
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
        <HeroSection />
        <Box
          sx={{
            bgcolor: `${colors.white}99`,
            position: "relative",
            py: 12,
            zIndex: 1,
          }}
        >
          <Container>
            <Stack spacing={12}>
              {Object.keys(projects).map((project, index) => {
                return (
                  // <div></div>
                  <ProjectPreview
                    key={project}
                    project={project}
                    index={index + 1}
                  />
                );
              })}
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home;
