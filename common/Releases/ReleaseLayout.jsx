import Head from "next/head";
import ReleaseTemplate from "./ReleaseTemplate";
import { Box, Container, Grid, useTheme } from "@mui/material";
import Image from "next/image";
import { colors } from "../../src/styles/theme";

const ProjectLayout = ({ release, children }) => {
  return (
    <>
      <Head>
        <title>{`${release.slug.toUpperCase()} - ${
          release.type
        } by BIRD VISION`}</title>
        <meta name="description" content={release.description} />
      </Head>
      <Box
        component="main"
        role="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          position: "relative",
          pb: 16,
          zIndex: 1,
          "&:before": {
            background: `
              radial-gradient(
                farthest-corner at 0% -40vw,
                ${colors[release.slug]}44 10%,
                #fff 40%,
               #fff 60%,
               ${colors[release.slug]}11 100%
              )
            `,
            content: `""`,
            position: "absolute",
            inset: 0,
            opacity: 0.6,
          },
        }}
      >
        <Box sx={{ mt: [24, 32], position: "relative" }}>
          <Container>
            <Grid container spacing={[6, 6, 12]}>
              <Grid item xs={12} sm={5}>
                <ReleaseTemplate {...release} />
              </Grid>
              <Grid item xs={12} sm={7}>
                <Image
                  lazyBoundary="500px"
                  style={{ borderRadius: 4 }}
                  src={release.thumb}
                  placeholder="blur"
                  priority
                  alt={release.caption}
                />
              </Grid>
            </Grid>
            {children}
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default ProjectLayout;
