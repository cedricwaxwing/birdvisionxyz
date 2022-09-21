import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { Numeral } from "../common/Numeral";
import { projects } from "../constants/projects";
import { colors, easings, typography } from "../src/styles/theme";
import Link from "next/link";
import { isMobile } from "../utils/isMobile";

export const ProjectPreview = ({ project, index }) => {
  const { client, name, slug, tags, thumb } = projects[project];
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

  const theme = useTheme();
  let letterNum = -1;

  return (
    <Box
      component="section"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      ref={el}
      sx={{
        cursor: "pointer",
        position: "relative",
        zIndex: 1,
        "& .project-image": {
          transition: `box-shadow 0.25s ${easings.cubic}, transform 0.1s`,
        },
        "&:hover .project-image": {
          boxShadow: theme.shadows[2],
          transition: `transform 0.5s ${easings.cubic}`,
          transform: "scale(1.05)",
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
              className="project-image"
              sx={{ display: "flex", width: "100%" }}
            >
              <Image
                src={thumb}
                alt={name}
                style={{
                  aspectRatio: "1/1",
                  borderRadius: 4,
                  objectFit: "cover",
                  position: "relative",
                  width: "100%",
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack ref={info} spacing={isMobile ? 2 : 4} mt={isMobile ? 3 : 6}>
              <Box sx={{ display: "inline" }}>
                <Numeral number={index} />
              </Box>
              <Stack spacing={isMobile ? 1 : 2}>
                {tags.map((tag) => (
                  <Typography
                    variant="body2"
                    fontFamily={typography.fontFamilies.extended}
                    fontSize={["0.65rem", "0.75rem"]}
                    fontWeight={500}
                    letterSpacing={1}
                    lineHeight={1}
                    key={tag}
                    textTransform="uppercase"
                  >
                    {tag}
                  </Typography>
                ))}
              </Stack>
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
                    fontSize: ["2.25rem", "3rem", "5rem"],
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
                                ? `${colors.black}cc`
                                : `${colors.violet}22`,
                              display: "inline-block",
                              fontFamily: typography.fontFamilies.ultraextended,
                              fontSize: isMobile ? "2rem" : "4rem",
                              lineHeight: 0.8,
                              textTransform: "uppercase",
                              transform: !isHovering ? offset : null,
                              transition: `opacity 0.5s ease-in-out, transform 0.5s ${easings.cubic}`,
                              willChange: "transform",
                            }}
                          >
                            <Box sx={{ transform: !isHovering ? scale : null }}>
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
