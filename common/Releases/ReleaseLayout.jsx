import Head from "next/head";
import ProjectTemplate from "./ReleaseTemplate";
import {
  Box,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { colors, easings } from "../../src/styles/theme";
import { releases } from "../../constants/projects";
import { ArrowLongRight } from "../../common/ArrowLongRight";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Release } from "./Release";

const ProjectLayout = ({ release, children }) => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>{`${release.name.toUpperCase()} -  - ${release.type}`}</title>
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
        {/* Layout 1 */}
        <Box sx={{ mt: [24, 32], position: "relative" }}>
          <Container>
            <Grid container spacing={12}>
              <Grid item xs={12} sm={5}>
                <ProjectTemplate {...release} />
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
            {/* <Link
              href={`/${nextProject?.slug}`}
              underline="none"
              className="nextrelease-link"
              sx={{
                "@keyframes point": {
                  "0%, 100%": {
                    transform: "translateX(0)",
                  },
                  "50%, 95%": {
                    transform: "translateX(-10%)",
                  },
                },
                cursor: `url(${nextProject?.cursor}), pointer !important`,
                "&:hover": {
                  color: colors.black,
                  transition: `all 0.5s ${easings.cubic}`,
                },
                "&:hover .hover": {
                  color: colors[nextProject?.slug],
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
                  flexDirection: ["column", "row"],
                  mt: 12,
                  py: 4,
                  mb: -4,
                }}
              >
                <Stack spacing={0.5} width="100%">
                  <Typography lineHeight={1}>Next Project:</Typography>
                  <Typography
                    lineHeight={1}
                    variant="h5"
                    component="span"
                    className="hover"
                  >
                    {nextProject?.name}
                  </Typography>
                </Stack>
                <Box
                  display="flex"
                  width="100%"
                  sx={{
                    ml: ["0 !important", "initial"],
                    mt: [`${theme.spacing(2)} !important`, 0],
                  }}
                >
                  <ArrowLongRight className="hover arrow" width="100%" />
                </Box>
              </Stack>
            </Link> */}
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default ProjectLayout;
