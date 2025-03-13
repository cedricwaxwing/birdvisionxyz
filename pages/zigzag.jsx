import Image from "next/image";
import ProjectLayout from "../common/Projects/ProjectLayout";
import { ProjectBody } from "../common/Projects/ProjectBody";
import { ViewLink } from "../common/ViewLink";
import { FigmaEmbed } from "../components/FigmaEmbed";
import { LightBoxImage } from "../components/LightBoxImage";
import { projects } from "../constants/projects";
import { Box, Grid, Link, useMediaQuery, useTheme } from "@mui/material";
import Landing1 from "../public/assets/imgs/zigzag/landing-1.webp";
import Discovery1 from "../public/assets/imgs/zigzag/discovery-1.webp";
import Discovery2 from "../public/assets/imgs/zigzag/discovery-2.webp";
import App1 from "../public/assets/imgs/zigzag/app-1.webp";
import App2 from "../public/assets/imgs/zigzag/app-2.webp";
import App3 from "../public/assets/imgs/zigzag/app-3.webp";
import App4 from "../public/assets/imgs/zigzag/app-4.webp";
import App5 from "../public/assets/imgs/zigzag/app-5.webp";
import { Context } from "../common/Context";
import { SubProjectTitle } from "../common/Projects/SubProjectTitle";

const project = projects["zigzag"];

const Body = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <ProjectBody>
        We lead the design for this 1 week{" "}
        <Link
          target='_blank'
          rel='noredirect'
          href='https://miro.com/miroverse/hypersprint/'>
          Deep Work hypersprint
        </Link>
        . We first met with Zigzag Lab's for a 3 day workshop to ensure
        alignment. You can view the collaborative white board{" "}
        <Link
          target='_blank'
          rel='noredirect'
          href='https://miro.com/app/board/uXjVOMjSbeY=/'>
          here
        </Link>
        . Afterwards, we created a visual identity, high fidelity mock-ups and a
        prototype which was tested by 4 individuals. After incorporating the{" "}
        <Link
          target='_blank'
          rel='noredirect'
          href='https://app.pitch.com/app/public/player/0bf7b78c-3213-4fa2-9aee-40afe3e4d1d2/3e7d2a9a-10c3-4f16-ac3b-5bd34f2f180b'>
          feedback from the users
        </Link>
        , the client was thrilled with the end result.
      </ProjectBody>
    </>
  );
};

project.body = <Body />;
const GnosisGuild = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <ProjectLayout project={project}>
      <Box component='section' id='app' mt={20}>
        <Grid container alignItems='flex-end'>
          <Grid item xs={12} md={7}>
            <SubProjectTitle>ZigZag App</SubProjectTitle>
            <Context>Product Design, Visual Identity</Context>
          </Grid>
        </Grid>
        <Box
          mt={4}
          mb={1}
          sx={{
            borderRadius: 8,
            boxShadow: theme.shadows[3],
            display: "flex",
          }}>
          <Image
            lazyBoundary='500px'
            placeholder='blur'
            src={App5}
            alt='Zigzag App mocked up on macbook'
          />
        </Box>
        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} md={6}>
            <LightBoxImage src={App1} alt='Zigzag App not conneted' />
          </Grid>
          <Grid item xs={12} md={6}>
            <LightBoxImage src={App2} alt='Zigzag App Bridge UI' />
          </Grid>
          <Grid item xs={12} md={6}>
            <LightBoxImage src={App4} alt='Zigzag App sell ETH' />
          </Grid>
          <Grid item xs={12} md={6}>
            <LightBoxImage src={App3} alt='Zigzag App DEX Swap' />
          </Grid>
        </Grid>
        {!isMobile && (
          <FigmaEmbed
            id='app-prototype'
            src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FvuRJAUYM4woFrnkJvONmhA%2FZigZag%3Fpage-id%3D34%253A13451%26node-id%3D34%253A16901%26viewport%3D509%252C472%252C0.07%26scaling%3Dcontain%26starting-point-node-id%3D34%253A18041%26show-proto-sidebar%3D1'
          />
        )}
      </Box>

      <Box component='section' id='landing-page' mt={20}>
        <Grid container alignItems='flex-end'>
          <Grid item xs={12} md={7}>
            <SubProjectTitle>Landing Page</SubProjectTitle>
            <Context>Branding, Visual Identity</Context>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Image
            lazyBoundary='500px'
            placeholder='blur'
            src={Landing1}
            alt='Zigzag Landing Page'
          />
        </Box>
      </Box>

      <Box component='section' id='discovery' mt={20}>
        <Grid container alignItems='flex-end'>
          <Grid item xs={12} md={7}>
            <SubProjectTitle>Discovery Assets</SubProjectTitle>
            <Context>Align, Decide, Research and Exploration</Context>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              mt: [2, 2, null],
              justifyContent: [null, null, "flex-end"],
            }}>
            <ViewLink
              target='_blank'
              rel='noredirect'
              href='https://miro.com/app/board/uXjVOMjSbeY=/'>
              View Collaboration Board
            </ViewLink>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Image
            lazyBoundary='500px'
            placeholder='blur'
            src={Discovery2}
            alt='Zigzag Discovery artifacts'
          />
        </Box>
        <LightBoxImage
          src={Discovery1}
          alt='Zigzag Discovery wireframe'
          sx={{ mt: 4 }}
        />
      </Box>
    </ProjectLayout>
  );
};

export default GnosisGuild;
