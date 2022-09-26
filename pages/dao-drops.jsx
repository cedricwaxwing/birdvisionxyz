import Image from "next/image";
import ProjectLayout from "../common/Projects/ProjectLayout";
import { ProjectBody } from "../common/Projects/ProjectBody";
import { ViewLink } from "../common/Projects/ViewLink";
import { FigmaEmbed } from "../components/FigmaEmbed";
import { LightBoxImage } from "../components/LightBoxImage";
import { projects } from "../constants/projects";
import { Box, Grid, Link, useMediaQuery, useTheme } from "@mui/material";
import UI2 from "../public/assets/imgs/dao-drops/ui-2.png";
import UI3 from "../public/assets/imgs/dao-drops/ui-3.png";
import UI5 from "../public/assets/imgs/dao-drops/ui-5.png";
import UI6 from "../public/assets/imgs/dao-drops/ui-6.png";
import { Context } from "../common/Projects/Context";
import { SubProjectTitle } from "../common/Projects/SubProjectTitle";

const project = projects["dao-drops"];

const Body = () => {
  return (
    <>
      <ProjectBody>
        The Ethereum Foundation lacks the information needed to effectively
        allocate resources. The individuals and communities that know what’s
        needed are very distributed.
      </ProjectBody>
      <ProjectBody>
        DAO Drops uses an algorithm to score addresses based on past on-chain
        activity (dapp usage, development, event attendance, etc) that gives
        them influence over fund allocation decisions. The program is seeded
        with funds and the allocation begins.
      </ProjectBody>
    </>
  );
};

project.body = <Body />;
const DaoDrops = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <ProjectLayout project={project}>
      <Box component="section" id="app" mt={20}>
        <Grid container alignItems="flex-end">
          <Grid item xs={12} md={7}>
            <SubProjectTitle>DAO Drops Website</SubProjectTitle>
            <Context>Branding, Visual Identity, Product Design</Context>
          </Grid>
        </Grid>
        <Box mt={4} mb={1}>
          <Image
            placeholder="blur"
            src={UI5}
            alt="Dao Drops landing page mockup"
          />
        </Box>
        <Box sx={{ mt: 4, position: "relative" }}>
          <Box maxWidth={theme.breakpoints.values.md}>
            <Image placeholder="blur" src={UI6} alt="Dao Drops Website" />
          </Box>
          {!isMobile && (
            <>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "10%",
                  display: "flex",
                  right: 0,
                  width: 450,
                  zIndex: 1,
                }}
              >
                <Image
                  placeholder="blur"
                  src={UI2}
                  alt="Dao Drops Nomination Submission modal"
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "10%",
                  display: "flex",
                  right: 0,
                  width: 450,
                  zIndex: 1,
                }}
              >
                <Image
                  placeholder="blur"
                  src={UI3}
                  alt="Dao Drops Nomination Submitted modal"
                />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </ProjectLayout>
  );
};

export default DaoDrops;
