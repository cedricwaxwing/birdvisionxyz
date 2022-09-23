import Head from "next/head";
import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import { HeroSection } from "../components/Home/HeroSection";
import { projects, getActiveProjects } from "../constants/projects";
import { socials } from "../constants/socials";
import { ProjectPreview } from "../components/ProjectPreview";
import { colors, easings, typography } from "../src/styles/theme";
import Image from "next/image";
import CedricWaxwing from "../public/assets/imgs/cedricwaxwing/waxwing_logo2.png";
import ArrowLongRight from "../public/assets/imgs/arrow-long-right.svg";

const Home = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <meta name="description" content={"fdaf"} key="description" />
        <title>BIRD VISION - Building the decentralized web</title>
      </Head>
      <Box
        component="main"
        role="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          flexGrow: 1,
          position: "relative",
        }}
      >
        <HeroSection />
        <Box
          sx={{
            bgcolor: `${colors.white}99`,
            position: "relative",
            py: 16,
            zIndex: 1,
          }}
        >
          <Container>
            <Grid container justifyContent="center">
              {/* <Grid item md={5} mt={[12, 24]}>
                <Image src={ArrowLongRight} alt="" />
              </Grid> */}
              <Grid item xs={12} sm={9} md={7} mt={[12, 16]}>
                <Stack direction="row" spacing={1}>
                  <Stack spacing={3}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          border: `4px solid ${colors.black}11`,
                          borderRadius: 999,
                          display: "flex",
                          transform: "translateX(-6px)",
                          width: 160,
                        }}
                      >
                        <Image
                          placeholder="blur"
                          src={CedricWaxwing}
                          alt="Cedric Waxwing avatar"
                        />
                      </Box>
                      <Box>
                        <Typography
                          variant="h2"
                          sx={{
                            fontFamily: typography.fontFamilies.extended,
                            fontSize: ["1.75rem", "2.1rem"],
                            fontWeight: 800,
                            lineHeight: "1.25",
                          }}
                        >
                          Cedric Waxwing
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: typography.fontFamilies.serif,
                            fontSize: "1.25rem",
                            fontStyle: "italic",
                            fontWeight: 400,
                            lineHeight: "1.25",
                            mt: 0.5,
                          }}
                        >
                          Bombycillidae cedricum
                        </Typography>
                        <Stack direction="row" spacing={2} mt={2}>
                          {socials.map((social) => (
                            <Link
                              key={social.name}
                              href={social.link}
                              target="_blank"
                              rel="noredirect"
                            >
                              <Box
                                sx={{
                                  bgcolor: colors.black,
                                  borderRadius: 999,
                                  display: "flex",
                                  opacity: 0.85,
                                  p: "5px",
                                  transition: `opacity 0.25s ${easings.cubic}, transform 0.25s ${easings.cubic}`,
                                  "&:hover": {
                                    bgcolor: colors.violet,
                                    opacity: 1,
                                    transform: "scale(1.05)",
                                  },
                                }}
                              >
                                <Image
                                  src={social.image}
                                  alt={social.name}
                                  width={19}
                                  height={19}
                                />
                              </Box>
                            </Link>
                          ))}
                        </Stack>
                      </Box>
                    </Stack>
                    <Typography
                      variant="h2"
                      sx={{
                        fontFamily: typography.fontFamilies.serif,
                        fontSize: ["1.75rem", "1.75rem"],
                        fontWeight: 400,
                        lineHeight: "1.35",
                        textTransform: "unset",
                      }}
                    >
                      {/* <em>Cedric Waxwing</em> is a product and branding designer
                      with over{" "}
                      <em>
                        {new Date().getFullYear() - 2010} years of design
                        experience
                      </em>{" "}
                      – the last {new Date().getFullYear() - 2020} of which have
                      been strictly <em>focused on web3</em>. */}
                      {/* <strong>Cedric Waxwing</strong>{" "}
                      <em>(currently flying solo at Bird Vision)</em> has a */}
                      Currently flying solo at Bird Vision, Waxwing has a wealth
                      of experience in both web3 product design, and branding.
                      He&apos;s excited to use his skills to create a more
                      equitable and decentralized future.
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            <Box id="projects" sx={{ mt: [20, 32], mb: [6, 8] }}>
              <Typography
                variant="h2"
                sx={{
                  color: colors.white,
                  fontSize: ["2rem", "6rem"],
                  WebkitTextStroke: `2px ${colors.black}33`,
                }}
              >
                SELECTED
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: colors.white,
                  fontSize: ["2rem", "6rem"],
                  WebkitTextStroke: `2px ${colors.black}33`,
                }}
              >
                WORK
              </Typography>
            </Box>
            <Stack spacing={12}>
              {getActiveProjects().map((project, index) => {
                return (
                  // <div></div>
                  <ProjectPreview
                    key={project}
                    project={project}
                    index={index + 1}
                  />
                );
              })}
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home;
