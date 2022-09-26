import Image from "next/image";
import ProjectLayout from "../common/Projects/ProjectLayout";
import { ProjectBody } from "../common/Projects/ProjectBody";
import { ViewLink } from "../common/Projects/ViewLink";
import { FigmaEmbed } from "../components/FigmaEmbed";
import { LightBoxImage } from "../components/LightBoxImage";
import { projects } from "../constants/projects";
import { Box, Grid, Link, useTheme } from "@mui/material";
import Landing1 from "../public/assets/imgs/polywrap/landing-page-1.png";
import Landing2 from "../public/assets/imgs/polywrap/landing-page-2.png";
import Landing3 from "../public/assets/imgs/polywrap/landing-page-3.png";
import Docs1 from "../public/assets/imgs/polywrap/docs-1.png";
import Docs2 from "../public/assets/imgs/polywrap/docs-2.png";
import Docs3 from "../public/assets/imgs/polywrap/docs-3.png";
import PolyfolioDiscovery1 from "../public/assets/imgs/polywrap/polyfolio-discovery-1.png";
import PolyfolioDiscovery2 from "../public/assets/imgs/polywrap/polyfolio-discovery-2.png";
import Polyfolio1 from "../public/assets/imgs/polywrap/polyfolio-1.png";
import PolyfolioMobile from "../public/assets/imgs/polywrap/polyfolio-3.png";
import { Context } from "../common/Projects/Context";
import { SubProjectTitle } from "../common/Projects/SubProjectTitle";

const project = projects["polywrap"];

const Body = () => {
  return (
    <>
      <ProjectBody>
        While the brand already existed in a nascent state, we helped bring it
        to life via the polywrap website and documentation. We also lead the
        design on it&apos;s sister products: defiwrapper and polyfolio.
      </ProjectBody>
    </>
  );
};

project.body = <Body />;
const GnosisGuild = () => {
  const theme = useTheme();
  return (
    <ProjectLayout project={project}>
      <Box component="section" id="landing-page" mt={20}>
        <Grid container alignItems="flex-end">
          <Grid item xs={12} md={7}>
            <SubProjectTitle>Polywrap</SubProjectTitle>
            <Context>
              Visual Identity, Product Design, and Frontend Development
            </Context>
          </Grid>
        </Grid>
        <Box
          sx={{
            borderRadius: 8,
            boxShadow: theme.shadows[3],
            display: "flex",
            mt: 4,
          }}
        >
          <Image
            placeholder="blur"
            src={Landing3}
            alt="Polywrap Landing Page Mockup preview"
          />
        </Box>
        <Box sx={{ mt: 8 }}>
          <Image
            placeholder="blur"
            src={Landing1}
            alt="Polywrap Landing Page"
          />
        </Box>
        <Box sx={{ mt: 4 }}>
          <Image
            placeholder="blur"
            src={Landing2}
            alt="Polywrap wrapper showcase"
          />
        </Box>
      </Box>

      <Box component="section" id="polyfolio" mt={20}>
        <Grid container alignItems="flex-end">
          <Grid item xs={12} md={7}>
            <SubProjectTitle>Polyfolio</SubProjectTitle>
            <Context>Portfolio management design app</Context>
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
              href="https://miro.com/app/board/uXjVOMjSbeY=/"
            >
              View Site
            </ViewLink>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, position: "relative" }}>
          <Box maxWidth={theme.breakpoints.values.md - 70}>
            <Image placeholder="blur" src={Polyfolio1} alt="Polyfolio App" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              borderRadius: 56,
              top: "10%",
              boxShadow: theme.shadows[2],
              display: "flex",
              right: 0,
              width: 350,
              transform: "rotateZ(2deg) rotateY(-10deg)",
              zIndex: 1,
            }}
          >
            <Image
              placeholder="blur"
              src={PolyfolioMobile}
              alt="Polyfolio App - mobile"
            />
          </Box>
        </Box>
        <FigmaEmbed
          id="polyfolio-prototype"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbAmE0FZ9jjYA9m4bLHadCb%2FPolyfolio%3Fpage-id%3D141%253A2856%26node-id%3D203%253A45689%26viewport%3D-1726%252C-5126%252C0.5%26scaling%3Dscale-down%26starting-point-node-id%3D203%253A45689"
        />
        <Grid container mt={0} spacing={4}>
          <Grid item xs={12} md={6}>
            <Image
              src={PolyfolioDiscovery1}
              alt="Polyfolio Discovery wireframe"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src={PolyfolioDiscovery2}
              alt="Polyfolio Discovery wireframe"
            />
          </Grid>
        </Grid>
      </Box>

      <Box component="section" id="documentation" mt={20}>
        <Grid container alignItems="flex-end">
          <Grid item xs={12} md={7}>
            <SubProjectTitle>Documentation</SubProjectTitle>
            <Context>
              Documentation design and development, using docusaurus
            </Context>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Image
            placeholder="blur"
            src={Docs1}
            alt="Polywrap documentation homepage"
          />
        </Box>
        <Box sx={{ mt: 4 }}>
          <Image
            placeholder="blur"
            src={Docs2}
            alt="Polywrap documentation page"
          />
        </Box>
        <Box sx={{ mt: 4 }}>
          <Image placeholder="blur" src={Docs3} alt="DefiWrapper homepage" />
        </Box>
      </Box>
    </ProjectLayout>
  );
};

export default GnosisGuild;
