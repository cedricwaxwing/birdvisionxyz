import Image from "next/image";
import ProjectLayout from "../common/Projects/ProjectLayout";
import { ProjectBody } from "../common/Projects/ProjectBody";
import { ViewLink } from "../common/Projects/ViewLink";
import { FigmaEmbed } from "../components/FigmaEmbed";
import { LightBoxImage } from "../components/LightBoxImage";
import { projects } from "../constants/projects";
import { Box, Grid, Link } from "@mui/material";
import Landing1 from "../public/assets/imgs/sisu/landing-page.png";
import Discovery1 from "../public/assets/imgs/sisu/discovery-1.png";
import Discovery2 from "../public/assets/imgs/sisu/discovery-2.png";
import Discovery3 from "../public/assets/imgs/sisu/discovery-3.png";
import App1 from "../public/assets/imgs/sisu/app-1.png";
import App1b from "../public/assets/imgs/sisu/app-1-b.png";
import App2 from "../public/assets/imgs/sisu/app-2.png";
import App3 from "../public/assets/imgs/sisu/app-3.png";
import App4 from "../public/assets/imgs/sisu/app-4.png";
import App5 from "../public/assets/imgs/sisu/app-5.png";
import AppModal from "../public/assets/imgs/sisu/welcome-modal.png";
import { theme } from "../src/styles/theme";
import { Context } from "../common/Projects/Context";
import { SubProjectTitle } from "../common/Projects/SubProjectTitle";

const project = projects["sisu"];

const Body = () => {
  return (
    <>
      <ProjectBody>
        First, as part of the of{" "}
        <Link
          target="_blank"
          rel="noredirect"
          href="https://miro.com/miroverse/hypersprint/"
        >
          Deep Work 7-day hypersprint
        </Link>
        , we met with their team for a 3 day workshop to ensure alignment. You
        can view the collaborative white board{" "}
        <Link
          target="_blank"
          rel="noredirect"
          href="https://miro.com/app/board/o9J_lsTajOE=/"
        >
          here
        </Link>
        . Afterwards, we created a visual identity, high fidelity mock-ups and a
        prototype which was tested by 4 individuals. After incorporating the{" "}
        <Link
          target="_blank"
          rel="noredirect"
          href="https://app.pitch.com/app/presentation/95df399d-4d6b-48cb-b890-e30e2e6f1fd3/6bd7acaa-1a50-4509-a410-d67b8df76f2f"
        >
          feedback from the users
        </Link>
        , the client was thrilled with the end result.
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
            <SubProjectTitle>SISU App</SubProjectTitle>
            <Context>Product Design, Visual Identity</Context>
          </Grid>
        </Grid>
        <Grid container spacing={4} mt={1}>
          <Grid item xs={12} md={6}>
            <LightBoxImage src={App2} alt="SISU App select connection" />
          </Grid>
          <Grid item xs={12} md={6}>
            <LightBoxImage src={App3} alt="SISU App setup overview" />
          </Grid>
          <Grid item xs={12} md={6}>
            <LightBoxImage src={App4} alt="SISU App enter api key" />
          </Grid>
          <Grid item xs={12} md={6}>
            <LightBoxImage src={App5} alt="SISU App create account" />
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, position: "relative" }}>
          <Box maxWidth={theme.breakpoints.values.md}>
            <Image lazyBoundary="500px" placeholder="blur" src={App1} alt="SISU App scrolled" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              borderRadius: 8,
              bottom: "10%",
              boxShadow: theme.shadows[2],
              display: "flex",
              right: 0,
              width: 350,
              zIndex: 1,
            }}
          >
            <Image lazyBoundary="500px" placeholder="blur" src={AppModal} alt="SISU welcome modal" />
          </Box>
        </Box>
        <Box mt={4}>
          <Image lazyBoundary="500px" placeholder="blur" src={App1b} alt="SISU App dashboard" />
        </Box>
        <FigmaEmbed
          id="app-prototype"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLIJBQHa9TUfpRj1xGbXa0x%2FSISU---Deep-Work%3Fpage-id%3D0%253A1%26node-id%3D311%253A16063%26viewport%3D-3698%252C-4880%252C1%26scaling%3Dscale-down%26starting-point-node-id%3D109%253A12961"
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
          <Image lazyBoundary="500px" placeholder="blur" src={Landing1} alt="SISU Landing page" />
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
            <ViewLink
              target="_blank"
              rel="noredirect"
              href="https://miro.com/app/board/o9J_lsTajOE=/"
            >
              View Collaboration Board
            </ViewLink>
          </Grid>
        </Grid>
        <LightBoxImage
          src={Discovery1}
          alt="SISU Discovery Userflow"
          sx={{ mt: 4 }}
        />
        <LightBoxImage
          src={Discovery2}
          alt="SISU Discovery wireframes"
          sx={{ mt: 4 }}
        />
      </Box>
    </ProjectLayout>
  );
};

export default GnosisGuild;
