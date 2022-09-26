import Image from "next/image";
import ProjectLayout from "../common/Projects/ProjectLayout";
import { ProjectBody } from "../common/Projects/ProjectBody";
import { ViewLink } from "../common/Projects/ViewLink";
import { FigmaEmbed } from "../components/FigmaEmbed";
import { LightBoxImage } from "../components/LightBoxImage";
import { projects } from "../constants/projects";
import { Box, Grid, Link } from "@mui/material";
import Landing1 from "../public/assets/imgs/zigzag/landing-1.png";
import Discovery1 from "../public/assets/imgs/zigzag/discovery-1.png";
import Discovery2 from "../public/assets/imgs/zigzag/discovery-2.png";
import App1 from "../public/assets/imgs/zigzag/app-1.png";
import App2 from "../public/assets/imgs/zigzag/app-2.png";
import App3 from "../public/assets/imgs/zigzag/app-3.png";
import App4 from "../public/assets/imgs/zigzag/app-4.png";
import App5 from "../public/assets/imgs/zigzag/app-5.png";
import { Context } from "../common/Projects/Context";
import { SubProjectTitle } from "../common/Projects/SubProjectTitle";

const project = projects["dao-drops"];

const Body = () => {
  return (
    <>
      {/* <ProjectBody>
        The Ethereum Foundation has grown a massive treasury over the years, and
        has funded many incredible initiatives along the way. However, they lack
        the information needed to effectively allocate resources. It is simply
        too difficult for any single organization to focus on all of the needs
        of such a large and diverse ecosystem. The individuals and communities
        that know what’s needed are highly distributed.
      </ProjectBody> */}
      <ProjectBody>
        The Ethereum Foundation lack the information needed to effectively
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
const GnosisGuild = () => {
  return (
    <ProjectLayout project={project}>
      <Box component="section" id="app" mt={20}>
        <Grid container alignItems="flex-end">
          <Grid item xs={12} md={7}>
            <SubProjectTitle>ZigZag App</SubProjectTitle>
            <Context>Product Design, Visual Identity</Context>
          </Grid>
        </Grid>
        <Box mt={4} mb={1}>
          <Image src={App5} alt="Zigzag App mocked up on macbook" />
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <LightBoxImage src={App1} alt="Zigzag App not conneted" />
          </Grid>
          <Grid item xs={12} md={6}>
            <LightBoxImage src={App2} alt="Zigzag App Bridge UI" />
          </Grid>
          <Grid item xs={12} md={6}>
            <LightBoxImage src={App4} alt="Zigzag App sell ETH" />
          </Grid>
          <Grid item xs={12} md={6}>
            <LightBoxImage src={App3} alt="Zigzag App DEX Swap" />
          </Grid>
        </Grid>
        <FigmaEmbed
          id="app-prototype"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FvuRJAUYM4woFrnkJvONmhA%2FZigZag%3Fpage-id%3D34%253A13451%26node-id%3D34%253A16901%26viewport%3D509%252C472%252C0.07%26scaling%3Dcontain%26starting-point-node-id%3D34%253A18041%26show-proto-sidebar%3D1"
        />
      </Box>

      <Box component="section" id="landing-page" mt={20}>
        <Grid container alignItems="flex-end">
          <Grid item xs={12} md={7}>
            <SubProjectTitle>Landing Page</SubProjectTitle>
            <Context>Branding, Visual Identity</Context>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Image src={Landing1} alt="Zigzag Landing Page" />
        </Box>
      </Box>

      <Box component="section" id="discovery" mt={20}>
        <Grid container alignItems="flex-end">
          <Grid item xs={12} md={7}>
            <SubProjectTitle>Discovery Assets</SubProjectTitle>
            <Context>Align, Decide, Research and Exploration</Context>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <ViewLink href="https://miro.com/app/board/uXjVOMjSbeY=/">
              View Collaboration Board
            </ViewLink>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Image src={Discovery2} alt="Zigzag Discovery artifacts" />
        </Box>
        <LightBoxImage
          src={Discovery1}
          alt="Zigzag Discovery wireframe"
          sx={{ mt: 4 }}
        />
      </Box>
    </ProjectLayout>
  );
};

export default GnosisGuild;
