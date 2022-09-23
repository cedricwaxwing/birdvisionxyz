import Image from "next/image";
import ProjectLayout from "../common/Projects/ProjectLayout";
import { SubProjectBody } from "../common/Projects/SubProjectBody";
import { projects } from "../constants/projects";
import { Box, Grid, Link, Typography } from "@mui/material";
import WandNFTApp from "../public/assets/imgs/gnosis-guild/WandNFTApp.jpg";
import ZodiacHome from "../public/assets/imgs/gnosis-guild/ZodiacHome.jpg";
import TabulaHome from "../public/assets/imgs/gnosis-guild/TabulaHome.jpg";
import { theme, typography } from "../src/styles/theme";
import { Context } from "../common/Projects/Context";
import { SubProjectTitle } from "../common/Projects/SubProjectTitle";
import { ViewLink } from "../common/Projects/ViewLink";

const project = projects["gnosis-guild"];
const wandIsLive = true;

const Body = () => {
  return (
    <Typography
      variant="body1"
      fontFamily={typography.fontFamilies.serif}
      sx={{
        mt: 4,
      }}
    >
      Gnosis Guild&apos;s composable governance system is designed to be
      flexible and adaptable to the needs of any community or organization. Over
      the past year of working in the Gnosis Guild, we&apos;ve created a wide
      variety of apps and tooling for the community.
    </Typography>
  );
};

project.body = <Body />;
const GnosisGuild = () => {
  return (
    <ProjectLayout project={project}>
      <Box
        sx={{
          display: "flex",
          flexDirection: wandIsLive ? "column" : "column-reverse",
        }}
      >
        {wandIsLive && (
          <Box component="section" id="wand-nft" mt={20}>
            <Grid container alignItems="flex-end">
              <Grid item xs={12} md={7}>
                <SubProjectTitle>Wand NFT</SubProjectTitle>
                <Context>
                  Minting App Visual Design, UX, and Frontend Development
                </Context>
                <SubProjectBody>
                  The Wand NFT project was a massive undertaking by many folks
                  at Gnosis Guild and it broke new ground on many fronts. These
                  reputation-based NFTs are only available via in-person
                  receivables or by contributing to the Zodiac Wiki. The NFT
                  levels up as you gain more experience from your peers. The
                  minting app allows the user to completely customize their
                  wand, and in true Gnosis Guild fashion, we included a
                  generative soundtrack based on the parameters.
                </SubProjectBody>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <ViewLink href="">View Site</ViewLink>
              </Grid>
            </Grid>
            <Box sx={{ mt: 4 }}>
              <Image src={WandNFTApp} alt="Wand NFT Minting App" />
            </Box>
          </Box>
        )}
        <Box component="section" id="zodiac-protocol" mt={20}>
          <Grid container alignItems="flex-end">
            <Grid item xs={12} md={7}>
              <SubProjectTitle>Zodiac Protocol</SubProjectTitle>
              <Context>Product Design and Frontend Development</Context>
              <SubProjectBody>
                Zodiac is a composable philosophy and collection of tools built
                according to an open standard.
              </SubProjectBody>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4 }}>
            <Image src={ZodiacHome} alt="Zodiac Protocol App" />
          </Box>
        </Box>

        <Box component="section" id="tabula" mt={20}>
          <Grid container alignItems="flex-end">
            <Grid item xs={12} md={7}>
              <SubProjectTitle>Tabula</SubProjectTitle>
              <Context>
                Branding, Product Design, and Frontend Development
              </Context>
              <SubProjectBody>
                Tabula is an Instant web3 publications for writers, DAOs, and
                any Ethereum-based account. It was spurred by Aurangzeb and Sam
                at Gnosis in a hackathon and the MVP is live in production now
                after a 6 week sprint cycle. You can read more about Tabula
                here.
              </SubProjectBody>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <ViewLink href="">View Site</ViewLink>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4 }}>
            <Image src={TabulaHome} alt="Tabula landing page" />
          </Box>
        </Box>
      </Box>
    </ProjectLayout>
  );
};

export default GnosisGuild;
