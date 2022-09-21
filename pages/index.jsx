import Head from "next/head";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { HeroSection } from "../components/Home/HeroSection";
import { projects } from "../constants/projects";
import { ProjectPreview } from "../components/ProjectPreview";
import { colors, typography } from "../src/styles/theme";

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
            py: 16,
            zIndex: 1,
          }}
        >
          <Container>
            <Grid container>
              <Grid item xs={12} sm={9} md={8} mt={[12, 16]}>
                {/* <Typography variant="body1" fontSize={["1.25rem", "1.5rem"]}>
                  We create effective and innovative design for apps and
                  protocols that span a wide range of crypto spaces, such as
                  DeFi, DAOs, and NFTs. Product design, visual design, and
                  frontend development are the fundamental tools we use to bring
                  your vision to life.
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={["1.25rem", "1.5rem"]}
                  mt={6}
                >
                  With over 15 years of experience in design, the last 2 years
                  of experience strictly focused on web3, we provide the
                  expertise you need.
                </Typography> */}
                <Typography
                  variant="h2"
                  fontFamily={typography.fontFamilies.serif}
                  fontSize={["1.75rem", "2.5rem"]}
                  fontWeight={400}
                  lineHeight="1.25"
                >
                  <em>Cedric Waxwing</em> is a web3 product and branding
                  designer with over{" "}
                  <em>
                    {new Date().getFullYear() - 2010} years of design experience
                  </em>{" "}
                  – the last {new Date().getFullYear() - 2020} of which have
                  been focused strictly on web3.
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ mt: [20, 32], mb: [6, 8] }}>
              <Typography
                variant="h2"
                sx={{
                  color: colors.white,
                  fontSize: ["2rem", "6rem"],
                }}
              >
                SELECTED
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: colors.white,
                  fontSize: ["2rem", "6rem"],
                }}
              >
                WORK
              </Typography>
            </Box>
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
