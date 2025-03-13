import Image from "next/image";
import ProjectLayout from "../common/Projects/ProjectLayout";
import { ProjectBody } from "../common/Projects/ProjectBody";
import { projects } from "../constants/projects";
import { Box, Grid, Link, Typography } from "@mui/material";
import WandNFTApp from "../public/assets/imgs/gnosis-guild/WandNFTApp.webp";
import WandNFT1 from "../public/assets/imgs/gnosis-guild/wand-nft-1.webp";
import WandNFT2 from "../public/assets/imgs/gnosis-guild/wand-nft-2.jpeg";
import WandNFT3 from "../public/assets/imgs/gnosis-guild/wand-nft-3.jpeg";
import WandNFT4 from "../public/assets/imgs/gnosis-guild/wand-nft-4.jpeg";
import ZodiacHome from "../public/assets/imgs/gnosis-guild/ZodiacHome.webp";
import Zodiac1 from "../public/assets/imgs/gnosis-guild/roles-1.webp";
import Zodiac2 from "../public/assets/imgs/gnosis-guild/reality-1.webp";
import TabulaHome from "../public/assets/imgs/gnosis-guild/TabulaHome.webp";
import Tabula2 from "../public/assets/imgs/gnosis-guild/tabula-2.webp";
import { typography } from "../src/styles/theme";
import { Context } from "../common/Context";
import { SubProjectTitle } from "../common/Projects/SubProjectTitle";
import { ViewLink } from "../common/ViewLink";

const project = projects["gnosis-guild"];
const wandIsLive = true;

const Body = () => {
  return (
    <Typography
      variant='body1'
      fontFamily={typography.fontFamilies.serif}
      sx={{
        mt: 4,
      }}>
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
        }}>
        <Box component='section' id='tabula' mt={20}>
          <Grid container alignItems='flex-end'>
            <Grid item xs={12} md={7}>
              <SubProjectTitle>Tabula</SubProjectTitle>
              <Context>
                Branding, Product Design, and Frontend Development
              </Context>
              <ProjectBody>
                Tabula is a web3 publication platform for writers, DAOs, and any
                Ethereum-based account. It was spurred by{" "}
                <Link
                  target='_blank'
                  rel='noredirect'
                  href='https://twitter.com/auryn_macmillan'>
                  Auryn
                </Link>{" "}
                and{" "}
                <Link
                  target='_blank'
                  rel='noredirect'
                  href='https://github.com/samepant'>
                  Sam
                </Link>{" "}
                at Gnosis Guild in a hackathon and the MVP is live in production
                now after a 6 week sprint cycle. You can read more about Tabula
                {` `}
                <Link
                  href='https://twitter.com/GnosisGuild/status/1550182460025147392'
                  target='_blank'
                  rel='noredirect'>
                  here
                </Link>
                .
              </ProjectBody>
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
                href='https://tabula.gg'>
                View Site
              </ViewLink>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4 }}>
            <Image
              lazyBoundary='500px'
              placeholder='blur'
              src={TabulaHome}
              alt='Tabula landing page'
            />
          </Box>
          <Box sx={{ mt: 4 }}>
            <Image
              lazyBoundary='500px'
              placeholder='blur'
              src={Tabula2}
              alt='Tabula post creation page'
            />
          </Box>
        </Box>

        {wandIsLive && (
          <Box component='section' id='wand-nft' mt={20}>
            <Grid container alignItems='flex-end'>
              <Grid item xs={12} md={7}>
                <SubProjectTitle>Wand NFT</SubProjectTitle>
                <Context>
                  Minting App Visual Design, UX, and Frontend Development
                </Context>
                <ProjectBody>
                  The Wand NFT project was a massive undertaking by many folks
                  at Gnosis Guild and it broke new ground on many fronts. These
                  reputation-based NFTs are only available via in-person
                  receivables or by contributing to the Zodiac Wiki. The NFT
                  levels up as you gain more experience from your peers. The
                  minting app allows the user to completely customize their
                  wand, and in true Gnosis Guild fashion, we included a
                  generative soundtrack based on the parameters. Ultimately the
                  project was ditched in place of the new{" "}
                  <Link
                    sx={{ fontWeight: 900 }}
                    href='https://mech-omega.vercel.app/'
                    target='_blank'
                    rel='noredirect'>
                    Mech
                  </Link>{" "}
                  initiative, but luckily, much of the effort that was spent
                  here was able to apply to the new initiative.
                </ProjectBody>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                sx={{ display: "flex", justifyContent: "flex-end" }}>
                <ViewLink
                  target='_blank'
                  rel='noredirect'
                  href='https://wand-bk6ng1zhh-gnosis-guild.vercel.app/'>
                  View Site
                </ViewLink>
              </Grid>
            </Grid>
            <Box sx={{ mt: 4 }}>
              <Image
                lazyBoundary='500px'
                placeholder='blur'
                src={WandNFTApp}
                alt='Wand NFT Minting App'
              />
            </Box>
            <Grid container spacing={4} sx={{ mt: 0 }}>
              <Grid item xs={12} md={3}>
                <Image
                  lazyBoundary='500px'
                  placeholder='blur'
                  src={WandNFT1}
                  alt='Wand NFT preview'
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Image
                  lazyBoundary='500px'
                  placeholder='blur'
                  src={WandNFT2}
                  alt='Wand NFT preview'
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Image
                  lazyBoundary='500px'
                  placeholder='blur'
                  src={WandNFT3}
                  alt='Wand NFT preview'
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Image
                  lazyBoundary='500px'
                  placeholder='blur'
                  src={WandNFT4}
                  alt='Wand NFT preview'
                />
              </Grid>
            </Grid>
          </Box>
        )}

        <Box component='section' id='zodiac-protocol' mt={20}>
          <Grid container alignItems='flex-end'>
            <Grid item xs={12} md={7}>
              <SubProjectTitle>Zodiac Protocol</SubProjectTitle>
              <Context>Product Design and Frontend Development</Context>
              <ProjectBody>
                Zodiac is a composable philosophy and collection of tools built
                according to an open standard. We helped Gnosis Guild create the
                Roles Modifier app as well as various usability improvements to
                the Reality Module.
              </ProjectBody>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4 }}>
            <Image
              lazyBoundary='500px'
              placeholder='blur'
              src={ZodiacHome}
              alt='Zodiac Protocol App'
            />
          </Box>
          <Box sx={{ mt: 4 }}>
            <Image
              lazyBoundary='500px'
              placeholder='blur'
              src={Zodiac1}
              alt='Roles Modifier App'
            />
          </Box>
          <Box sx={{ mt: 4 }}>
            <Image
              lazyBoundary='500px'
              placeholder='blur'
              src={Zodiac2}
              alt='Zodiac Safe App - Reality Module UI'
            />
          </Box>
        </Box>
      </Box>
    </ProjectLayout>
  );
};

export default GnosisGuild;
