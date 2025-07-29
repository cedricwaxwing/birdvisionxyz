import Image from "next/image";
import ProjectLayout from "../common/Projects/ProjectLayout";
import { ProjectBody } from "../common/Projects/ProjectBody";
import { projects } from "../constants/projects";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import Landing1 from "../public/assets/imgs/agentcoin/landing-page-1.webp";
import Landing2 from "../public/assets/imgs/agentcoin/landing-page-2.webp";
import Landing3 from "../public/assets/imgs/agentcoin/landing-page-3.webp";
import GeckoUI1 from "../public/assets/imgs/agentcoin/buy-gecko.webp";
import GeckoUI2 from "../public/assets/imgs/agentcoin/agentcoin-referral-post.webp";
import { Context } from "../common/Context";
import { SubProjectTitle } from "../common/Projects/SubProjectTitle";

const project = projects["agentcoin"];

project.body = <ProjectBody />;
const GnosisGuild = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <ProjectLayout project={project}>
      <Box component='section' id='landing-page' mt={20}>
        <Grid container alignItems='flex-end'>
          <Grid item xs={12} md={7}>
            <SubProjectTitle>Agentcoin.TV</SubProjectTitle>
            <Context>
              {project.tags.map((tag, i) => {
                return (
                  <>
                    <span key={i}>{tag}</span>
                    {i < project.tags.length - 2
                      ? ", "
                      : i === project.tags.length - 2
                      ? ", and "
                      : null}
                  </>
                );
              })}
            </Context>
          </Grid>
        </Grid>
        <Box sx={{ mt: 8 }}>
          <Image
            lazyBoundary='500px'
            placeholder='blur'
            src={Landing1}
            alt='AITV Landing Page'
          />
        </Box>
        <Box sx={{ mt: 8 }}>
          <Image
            lazyBoundary='500px'
            placeholder='blur'
            src={Landing2}
            alt='AITV App Page'
          />
        </Box>
        <Box sx={{ mt: 8 }}>
          <Image
            lazyBoundary='500px'
            placeholder='blur'
            src={Landing3}
            alt='AITV App Page'
          />
        </Box>
        <Grid container sx={{ mt: 2 }} spacing={6}>
          <Grid item xs={12} sm={6}>
            <Image
              lazyBoundary='500px'
              placeholder='blur'
              src={GeckoUI1}
              alt='Buy Gecko UI'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              lazyBoundary='500px'
              placeholder='blur'
              src={GeckoUI2}
              alt='AITV Profile page'
            />
          </Grid>
        </Grid>
      </Box>
    </ProjectLayout>
  );
};

export default GnosisGuild;
