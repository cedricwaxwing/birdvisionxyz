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
import DaoDropsImg from "../public/assets/imgs/daodrops/preview.png";
import { colors, typography } from "../src/styles/theme";

export const ProjectPreview = ({ project, index }) => {
  const { name, tags } = project;
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
        width: el.current.clientWidth,
        height: el.current.clientHeight,
      },
      info: {
        width: info.current.clientWidth,
        height: info.current.clientHeight,
        x: info.current.offsetLeft,
        y: info.current.offsetTop,
      },
      title: {
        x: letters.current.offsetLeft,
        y: letters.current.offsetTop,
      },
      letters: letterPositions,
      letterSize: {
        width: letters.current.children[0].clientWidth,
        height: letters.current.children[0].clientHeight,
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
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
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
          transition:
            "box-shadow 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.1s",
        },
        "&:hover .project-image": {
          boxShadow: theme.shadows[2],
          transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transform: "scale(1.05)",
        },
      }}
    >
      <Grid
        container
        spacing={isMobile ? 3 : 6}
        direction={index % 2 ? "row-reverse" : "row"}
      >
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Image
              src={DaoDropsImg}
              alt="DAO Drops"
              className="project-image"
              style={{
                aspectRatio: "1/1",
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
              <Typography
                sx={{
                  borderBottom: `2px solid ${colors.violet}`,
                  color: colors.violet,
                  display: "inline",
                  fontFamily: typography.fontFamilies.displaySans,
                  fontWeight: 700,
                  lineHeight: 1,
                  pb: 1,
                }}
              >
                {index.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
              </Typography>
            </Box>
            <Stack spacing={isMobile ? 1 : 2}>
              {tags.map((tag) => (
                <Typography
                  variant="body2"
                  fontFamily={typography.fontFamilies.displaySans}
                  letterSpacing={3}
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
            sx={{ position: "absolute", bottom: theme.spacing(6), zIndex: 1 }}
          >
            {name.split(" ").map((word, i) => {
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
                          fontFamily: typography.fontFamilies.displaySans,
                          fontSize: isMobile ? "2rem" : "4rem",
                          lineHeight: 0.8,
                          textTransform: "uppercase",
                          transform: !isHovering ? offset : null,
                          transition: `opacity 0.5s ease-in-out, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)`,
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
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
