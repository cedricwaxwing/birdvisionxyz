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
            overflowX: "clip",
            position: "relative",
            py: 16,
            zIndex: 1,
          }}
        >
          <Container>
            <Box sx={{ pt: 16, position: "relative" }}>
              <Typography
                variant="h2"
                sx={{
                  color: colors.white,
                  fontFamily: typography.fontFamilies.serif,
                  fontSize: ["20rem", "40rem", "40rem", "60rem"],
                  position: "absolute",
                  opacity: 0.5,
                  bottom: ["-10rem", "-20rem", null, "-25rem"],
                  right: ["-2rem", "-5rem", null, "-15rem"],
                  zIndex: -1,
                }}
              >
                ✼
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: typography.fontFamilies.serif,
                  fontSize: ["1.75rem", "2rem", "2.5rem", "3rem"],
                  fontWeight: 400,
                  lineHeight: "1.5",
                  maxWidth: 900,
                  textTransform: "unset",
                }}
              >
                We see things differently at Bird Vision. We use our specialized
                skillsets in web3 design and development to craft beautiful,
                intuitive user experiences that make it easy for people to
                interact with complex, cutting-edge technology.
              </Typography>
            </Box>
            <Grid container spacing={[8, 8, 20]} mb={12} mt={[8, 16]}>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="h3"
                  sx={{
                    color: colors.white,
                    lineHeight: 1,
                    mt: -1,
                    WebkitTextStroke: `2px ${colors.black}33`,
                  }}
                >
                  The
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: `${colors.black}cc`,
                    lineHeight: 1,
                    WebkitTextStroke: `2px ${colors.black}33`,
                  }}
                >
                  Flock
                </Typography>
              </Grid>
              <Grid item xs={12} md={9} lg={7}>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    borderBottom: `2px solid ${colors.black}`,
                    borderTop: `2px solid ${colors.black}`,
                    py: 8,
                  }}
                >
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
                          lazyBoundary="500px"
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
                            fontSize: ["1.25rem", "1.75rem", "2.1rem"],
                            fontWeight: 800,
                            lineHeight: "1",
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
                                  lazyBoundary="500px"
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
                        fontSize: ["1.5rem", "1.75rem"],
                        fontWeight: 400,
                        lineHeight: "1.35",
                        textTransform: "unset",
                      }}
                    >
                      Currently flying solo at Bird Vision, Waxwing has a wealth
                      of experience in both web3 product design, and branding.
                      He&apos;s proud and excited to use his skills to create a
                      more equitable and decentralized future.
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            <Box id="projects" sx={{ mb: [4, 8], pt: 16 }}>
              <Typography
                variant="h2"
                sx={{
                  color: colors.white,
                  fontSize: ["2.75rem", "3.5rem", "6rem"],
                  WebkitTextStroke: `2px ${colors.black}33`,
                }}
              >
                SELECTED
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: `${colors.black}cc`,
                  fontSize: ["2.75rem", "3.5rem", "6rem"],
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
