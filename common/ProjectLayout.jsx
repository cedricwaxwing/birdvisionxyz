import Head from "next/head";
import ProjectTemplate from "./ProjectTemplate";
import { Box, Container, Grid } from "@mui/material";
import { colors } from "../src/styles/theme";

const ProjectLayout = ({ project, children }) => {
  return (
    <>
      <Head>
        <title>{`${project.name.toUpperCase()} -  - ${project.type}`}</title>
        <meta name="description" content={project.description} />
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
                ${colors[project.slug]}66 10%,
                #fff 40%,
               #fff 60%,
               ${colors[project.slug]}11 100%
              )
            `,
            content: `""`,
            position: "absolute",
            inset: 0,
            opacity: 0.6,
          },
        }}
      >
        {/* Layout 1 */}
        <Box sx={{ mt: [24, 32], position: "relative" }}>
          <Container>
            <Grid container spacing={12}>
              <Grid item xs={12} sm={5}>
                <ProjectTemplate {...project} />
              </Grid>
              <Grid item xs={12} sm={7}>
                {children}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default ProjectLayout;
