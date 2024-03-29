import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Grid,
  Link as MUILink,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { Numeral } from "../Numeral";
import { releases } from "../../constants/releases";
import { colors, easings, typography } from "../../src/styles/theme";
import Link from "next/link";

export const Release = ({ release, index }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { description, cursor, name, slug, link, thumb } = releases[release];
  const [isHovering, setHovering] = useState(false);
  const [elementContext, setElementContext] = useState({
    el: {
      width: undefined,
      height: undefined,
    },
    info: {
      width: undefined,
      height: undefined,
      x: undefined,
      y: undefined,
    },
    title: {
      x: undefined,
      y: undefined,
    },
    letters: [{ x: undefined }, { y: undefined }],
    letterSize: {
      width: undefined,
      height: undefined,
    },
  });

  const el = useRef();
  const info = useRef();
  const letters = useRef();

  useEffect(() => {
    let letterPositions = [];
    [...letters.current.children].forEach((word) => {
      [...word.children].forEach((letter) => {
        const x = letter.offsetLeft;
        const y = letter.offsetTop;
        const position = { x, y };
        letterPositions.push(position);
      });
    });

    setElementContext({
      el: {
        width: el.current?.clientWidth,
        height: el.current?.clientHeight,
      },
      info: {
        width: info.current?.clientWidth,
        height: info.current?.clientHeight,
        x: info.current?.offsetLeft,
        y: info.current?.offsetTop,
      },
      title: {
        x: letters.current?.offsetLeft,
        y: letters.current?.offsetTop,
      },
      letters: letterPositions,
      letterSize: {
        width: letters.current?.children[0]?.clientWidth,
        height: letters.current?.children[0]?.clientHeight,
      },
    });
  }, [el, info, letters]);

  const handleMouseOver = () => {
    setHovering(true);
  };

  const handleMouseOut = () => {
    setHovering(false);
  };

  const handleInlineLink = (e, link) => {
    e.preventDefault();
    window.open(link);
  };

  let letterNum = -1;

  return (
    <Box
      component="section"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      ref={el}
      sx={{
        cursor: `url(${cursor}), auto !important`,
        position: "relative",
        zIndex: 1,
        "& .release-image": {
          transition: `box-shadow 0.25s ${easings.cubic}, transform 0.1s`,
        },
        [theme.breakpoints.up("md")]: {
          "&:hover .release-image": {
            boxShadow: theme.shadows[2],
            transition: `transform 0.5s ${easings.cubic}`,
            transform: "scale(1.05)",
          },
        },
      }}
    >
      <Link href={`/${slug}`}>
        <Grid
          container
          spacing={isMobile ? 1 : 6}
          direction={
            !isMobile ? (index % 2 ? "row-reverse" : "row") : "column-reverse"
          }
        >
          <Grid item xs={12} sm={6}>
            <Box
              className="release-image"
              sx={{ display: "flex", width: "100%" }}
            >
              <Image
                lazyBoundary="500px"
                src={thumb}
                alt={name}
                loading="eager"
                placeholder="blur"
                style={{
                  aspectRatio: "1/1",
                  borderRadius: 4,
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack
              ref={info}
              spacing={isMobile ? 2 : 4}
              mt={isMobile ? 3 : 6}
              mb={isMobile ? 3 : 2}
            >
              <Box sx={{ display: "inline" }}>
                <Numeral
                  number={index}
                  sx={{ borderColor: colors[slug], color: colors[slug] }}
                />
              </Box>
              <Typography
                variant="subtitle2"
                fontFamily={typography.fontFamilies.serif}
              >
                {description}
              </Typography>
              <Box
                onClick={(e) => handleInlineLink(e, link)}
                sx={{
                  color: colors.violet,
                  fontWeight: 600,
                  fontSize: 14,
                  fontFamily: typography.fontFamilies.extended,
                  letterSpacing: 3,
                  transition: `all 1s ${easings.cubic}`,
                  textTransform: "uppercase",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                  textDecorationColor: `${colors.violet}33`,
                  textDecorationThickness: 1.5,
                  "&:hover": {
                    color: colors.violet,
                    textDecorationColor: colors.violet,
                    textUnderlineOffset: 4,
                    textDecorationThickness: 3,
                  },
                }}
              >
                Mint on fxhash.xyz
              </Box>
              {/* <Stack spacing={1}>
                {tags.map((tag) => (
                  <Box
                    key={tag}
                    sx={{ display: "inline-flex", alignItems: "center" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: `${colors.black}66`,
                        fontFamily: typography.fontFamilies.sans,
                        fontSize: ["0.5rem", "1rem"],
                        fontWeight: 500,
                        marginRight: 1,
                        lineHeight: 1,
                      }}
                    >
                      ✼
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: typography.fontFamilies.extended,
                        fontSize: ["0.65rem", "0.75rem"],
                        fontWeight: 500,
                        letterSpacing: 1,
                        lineHeight: 1,
                        textTransform: "uppercase",
                      }}
                    >
                      {tag}
                    </Typography>
                  </Box>
                ))}
              </Stack> */}
            </Stack>
            <Box
              ref={letters}
              sx={{
                position: ["relative", null, "absolute"],
                bottom: [null, null, theme.spacing(6)],
                mb: [2, 1, null],
                mt: [1, 2, null],
                zIndex: 1,
              }}
            >
              {isMobile ? (
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: ["1.5rem", "2rem", "3rem"],
                    textTransform: "uppercase",
                  }}
                >
                  {name}
                </Typography>
              ) : (
                name.split(" ").map((word, i) => {
                  return (
                    <Box key={i} sx={{ display: "flex" }}>
                      {[...word].map((letter, j) => {
                        letterNum++;
                        const x =
                          Math.random() * elementContext.el.width -
                          (elementContext.title.x +
                            elementContext.letters[letterNum]?.x) -
                          elementContext.letterSize?.width / 2;
                        const y =
                          Math.random() * elementContext.el.height -
                          (elementContext.title.y +
                            elementContext.letters[letterNum]?.y) -
                          elementContext.letterSize?.height / 2;

                        const offset = `translate(${x}px, ${y}px)`;
                        const scale = isMobile
                          ? `scale(${Math.random() + 0.6})`
                          : `scale(${Math.random() * 0.6 + 0.4})`;
                        return (
                          <Box
                            key={letterNum}
                            sx={{
                              color: isHovering
                                ? `${colors[slug]}cc`
                                : `${colors[slug]}22`,
                              display: "inline-block",
                              fontFamily: typography.fontFamilies.extended,
                              fontSize: isMobile ? "1.5rem" : "2rem",
                              lineHeight: 0.8,
                              textTransform: "uppercase",
                              transform: !isHovering ? offset : null,
                              transition: `opacity 0.5s ease-in-out, transform 0.5s ${easings.cubic}`,
                              willChange: "transform",
                            }}
                          >
                            <Box
                              sx={{
                                transform: !isHovering ? scale : null,
                              }}
                            >
                              {letter}
                            </Box>
                          </Box>
                        );
                      })}
                    </Box>
                  );
                })
              )}
            </Box>
          </Grid>
        </Grid>
      </Link>
    </Box>
  );
};
