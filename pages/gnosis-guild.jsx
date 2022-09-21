import Head from "next/head";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { Numeral } from "../common/Numeral";
import { ProjectTemplate } from "../components/ProjectTemplate";
import { projects } from "../constants/projects";
import Image from "next/image";
import DaoDrops1 from "../public/assets/imgs/dao-drops/1.jpg";

const project = projects["gnosis-guild"];

const DaoDrops = () => {
  const theme = useTheme();

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
            background: `radial-gradient(farthest-corner at 0% -40vw, #e5d3fe 10%, #fff 20%, #fff 60%, #9fe8fe 100% )`,
            content: `""`,
            position: "absolute",
            inset: 0,
            opacity: 0.6,
          },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <ProjectTemplate {...project} />
          <Container>
            <Box sx={{ boxShadow: theme.shadows[2], display: "flex" }}>
              <Image
                src={DaoDrops1}
                alt={"fdjkala"}
                style={{ borderRadius: 2 }}
              />
            </Box>
            <Stack spacing={2} sx={{ justifyContent: "center", mt: 12, mb: 8 }}>
              <Box display="flex" justifyContent="center">
                <Numeral number={1} sx={{ textAlign: "center" }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  letterSpacing: 3,
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                {project.tags[0]}
              </Typography>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default DaoDrops;
