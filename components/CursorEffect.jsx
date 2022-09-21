import React, { useEffect, useState } from "react";
import { useWindowSize } from "../utils/useWindowSize";
import { isMobile as isMobileFunction } from "../utils/isMobile";
import { Box, styled, useMediaQuery, useTheme } from "@mui/material";
import { colors } from "../src/styles/theme";

const G = styled("g")({
  transformOrigin: "center",
});

const options = {
  radiusDiff: 8,
  strokeGradient: {
    idStrokeGradient: "gradient",
    colors: [colors.violet, `${colors.orange}bb`],
  },
  strokeOpacityParticles: 0.4,
  strokeWidthParticles: 1,
  transitionDuration: 48,
  transitionOffset: 6,
};

export const CursorEffect = () => {
  const {
    radiusDiff,
    radiusStart = 200,
    strokeGradient,
    strokeOpacityParticles,
    strokeWidthParticles,
    transitionDuration,
    transitionOffset,
  } = options;
  const size = useWindowSize();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [ready, setReady] = useState(false);
  const [hatesAnimation] = useState(false);
  // const [scrollY, setScrollY] = useState(0);
  const BASE_FREQ = 0.003;
  const [filterFreq, setFilterFreq] = useState(BASE_FREQ);
  const [logoPos, setLogoPos] = useState({
    x: undefined,
    y: undefined,
    width: undefined,
    height: undefined,
  });
  const [pos, setPos] = useState({
    x: logoPos.x,
    y: logoPos.y,
  });

  const diagonalWindow = Math.ceil(
    Math.sqrt(size.width * size.width + size.height * size.height)
  );
  const nbrParticles = Math.round(
    (diagonalWindow + radiusDiff - radiusStart) / radiusDiff
  );

  const setRadiusParticles = (i) => {
    let radius = radiusStart + i * radiusDiff;
    if (radius <= 0) {
      radius = 0;
    }
    return radius;
  };

  useEffect(() => {
    const logo = document.querySelector(".logo");

    const _logoPos = {
      x: logo?.offsetLeft,
      y: logo?.offsetTop,
      width: logo?.offsetWidth,
      height: logo?.offsetHeight,
    };
    setLogoPos(_logoPos);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setReady(true);
    } else {
      let lastUpdateCall;
      const handleMove = (e) => {
        if (lastUpdateCall) cancelAnimationFrame(lastUpdateCall);
        lastUpdateCall = requestAnimationFrame(() => {
          setPos({
            x: e.clientX,
            y: e.clientY,
          });
          lastUpdateCall = null;
        });
      };

      setReady(true);

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (!prefersReducedMotion && !hatesAnimation) {
        window.addEventListener("mousemove", handleMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMove);
      }
    }
  }, [hatesAnimation, isMobile]);

  // useEffect(() => {
  //   const body = document.querySelector("body");
  //   const handleScroll = () => {
  //     setScrollY(body.scrollTop);
  //   };

  //   body.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => body.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    console.log("ismobile?", isMobile);
    if (!isMobile) {
      const body = document.querySelector("body");
      const handleClick = () => {
        let freq = 0.05;
        const interval = setInterval(() => {
          if (freq <= 0.0019) {
            setFilterFreq(BASE_FREQ);
            clearInterval(interval);
          } else {
            setFilterFreq(freq);
            freq -= BASE_FREQ;
          }
        }, 40);
      };

      body.addEventListener("click", handleClick);
      return () => body.removeEventListener("click", handleClick);
    }
  }, [isMobile]);

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        // mixBlendMode: "color-burn",
      }}
    >
      {ready && (
        <svg
          width={size.width}
          height={size.height}
          viewBox={`0 0 ${size.width} ${size.height}`}
          preserveAspectRatio="none"
          style={{ filter: `url(#turbulence)` }}
        >
          <G>
            <>
              <defs>
                <filter id="turbulence">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency={filterFreq}
                    numOctaves="5"
                    result="warp"
                  ></feTurbulence>
                  <feOffset dx="-90" result="warpOffset"></feOffset>
                  <feDisplacementMap
                    xChannelSelector="R"
                    yChannelSelector="G"
                    scale="35"
                    in="SourceGraphic"
                    in2="warpOffset"
                  ></feDisplacementMap>
                </filter>
                <linearGradient
                  id={strokeGradient.idStrokeGradient}
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  {" "}
                  {strokeGradient.colors.map((color, index) => {
                    const offset = Math.round(
                      index * (100 / (strokeGradient.colors.length - 1))
                    );
                    return (
                      <stop
                        key={index}
                        offset={`${offset}%`}
                        stopColor={color}
                      />
                    );
                  })}
                </linearGradient>
              </defs>
              {Array.from(Array(nbrParticles), (_, i) => {
                const duration = transitionDuration + i * transitionOffset;
                return (
                  <circle
                    key={i}
                    r={setRadiusParticles(i)}
                    cx={isMobile ? logoPos.x : pos.x}
                    cy={isMobile ? logoPos.y : pos.y}
                    fill="none"
                    stroke={`url(#${strokeGradient.idStrokeGradient})`}
                    strokeWidth={strokeWidthParticles}
                    strokeOpacity={strokeOpacityParticles}
                    id={`${i}"`}
                    style={{
                      transitionProperty: "cx, cy",
                      transitionDuration: `${duration}ms`,
                      transitionTimingFunction: "linear",
                    }}
                  />
                );
              })}
            </>
          </G>
        </svg>
      )}
    </Box>
  );
};
