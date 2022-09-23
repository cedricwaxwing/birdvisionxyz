import Head from "next/head";
import ProjectTemplate from "./ProjectTemplate";
import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { colors, easings } from "../../src/styles/theme";
import { projects, getActiveProjects } from "../../constants/projects";
import { ArrowLongRight } from "../../common/ArrowLongRight";
import { useEffect, useState } from "react";

const ProjectLayout = ({ project, children }) => {
  const getNextProject = () => {
    const activeProjects = getActiveProjects();
    let nextProj;
    activeProjects.find((activeProject, i) => {
      const curProj = activeProject === project.slug;
      if (curProj) {
        const iterator = i === activeProjects.length - 1 ? 0 : i + 1;
        nextProj = activeProjects[iterator];
      }
    });
    return nextProj;
  };
  const nextProject = getNextProject();

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
                <Image
                  src={project.thumb}
                  placeholder="blur"
                  priority
                  alt={project.caption}
                />
              </Grid>
            </Grid>
            {children}
            <Link
              href={`/${projects[nextProject].slug}`}
              underline="none"
              sx={{
                "@keyframes point": {
                  "0%, 100%": {
                    transform: "translateX(0)",
                  },
                  "50%, 95%": {
                    transform: "translateX(-10%)",
                  },
                },
                "&:hover": {
                  color: colors.black,
                  transition: `all 0.5s ${easings.cubic}`,
                },
                "&:hover .hover": {
                  color: colors.violet,
                },
                "&:hover .arrow": {
                  animation: `point 1s 0.5s ${easings.cubic} infinite`,
                },
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={4}
                sx={{
                  justifyContent: "space-between",
                  mt: 12,
                  py: 4,
                  mb: -4,
                }}
              >
                <Stack spacing={0.5}>
                  <Typography lineHeight={1}>Next Project:</Typography>
                  <Typography
                    lineHeight={1}
                    variant="h5"
                    component="span"
                    className="hover"
                  >
                    {projects[nextProject].name}
                  </Typography>
                </Stack>
                <Box display="flex">
                  <ArrowLongRight className="hover arrow" />
                </Box>
              </Stack>
            </Link>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default ProjectLayout;
