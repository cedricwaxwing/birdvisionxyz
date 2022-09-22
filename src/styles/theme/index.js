import { createTheme } from "@mui/material/styles"
import CursorDefault from "../../../public/assets/imgs/cursor_default.svg"
import CursorHover from "../../../public/assets/imgs/cursor_hover.svg"

export const colors = {
  white: "#ffffff",
  // black: "#252128",
  black: "#403C43",
  gray: "#fafafa",
  yellow: "#EFF320",
  orange: "#F38620",
  violet: "#7600D3",

  // Projects
  "gnosis-guild": "#903B18",
  "dao-drops": "#3C1DFE",
  "sisu": "#11C589",
  "polywrap": "#395176",
  "zigzag": "#29A2E3",
  "ranch-house-dao": "#201a1e",
}

export const typography = {
  fontFamilies: {
    ultraextended: ['normalidad-ultraextended', 'sans-serif'].join(','),
    extended: ['normalidad-extended', 'sans-serif'].join(','),
    sans: ['normalidad-compact', 'sans-serif'].join(','),
    serif: ['utopia-std-subhead', 'serif'].join(','),
    monospace: ['Roboto Mono', 'monospace'].join(','),
  },
}

export const easings = {
  cubic: "cubic-bezier(0.34, 1.56, 0.64, 1)",
}

const defaultTheme = createTheme({
  palette: {
    secondary: {
      main: colors.violet
    },
  },
  shadows:{
    1: {
      boxShadow: `0px 11px 15px -7px rgb(0 0 0 / 2%), 0px 24px 38px 3px rgb(0 0 0 / 2%), 0px 9px 46px 8px rgb(0 0 0 / 1%)`
    },
    2: {
      boxShadow: `0px 11px 15px -7px rgb(0 0 0 / 5%), 0px 24px 38px 3px rgb(0 0 0 / 4%), 0px 9px 46px 8px rgb(0 0 0 / 3%)`
    }
  },
  typography: {
    fontFamily: typography.fontFamilies.sans,
    h1: {
      fontFamily: typography.fontFamilies.ultraextended,
      fontSize: "8rem",
      fontWeight: 900,
      textTransform: "uppercase",
      lineHeight: 1,
    },
    h2: {
      fontFamily: typography.fontFamilies.ultraextended,
      fontSize: "6rem",
      fontWeight: 900,
      textTransform: "uppercase",
      lineHeight: 1,
    },
    h3: {
      fontFamily: typography.fontFamilies.ultraextended,
      fontSize: "3rem",
      fontWeight: 900,
      textTransform: "uppercase",
    },
    h4: {
      fontFamily: typography.fontFamilies.ultraextended,
      fontSize: "2rem",
      fontWeight: 900,
      textTransform: "uppercase",
    },
    h5: {
      fontFamily: typography.fontFamilies.ultraextended,
      fontSize: "1.5rem",
      fontWeight: 900,
      textTransform: "uppercase",
    },
    h6: {
      fontFamily: typography.fontFamilies.ultraextended,
      fontSize: "1.25rem",
      fontWeight: 900,
      textTransform: "uppercase",
    },
    subtitle1: {
      fontFamily: typography.fontFamilies.extended,
      fontSize: "1.5em",
      fontWeight: 500,
      lineHeight: 1.25,
    },
    subtitle2: {
      fontFamily: typography.fontFamilies.extended,
      fontSize: "1.25em",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: typography.fontFamilies.sans,
      fontSize: "1em",
      fontWeight: 400,
      lineHeight: 1.75,
    },
    body2: {
      fontFamily: typography.fontFamilies.sans,
      fontSize: "0.75em",
      fontWeight: 400,
      lineHeight: 1.75,
    },
  },
});


export const theme = createTheme(defaultTheme, {
  ...defaultTheme,
  typography: {
    h1: {
      [defaultTheme.breakpoints.down('lg')]: {
        fontSize: "4rem",
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          background-color: #bbb;
          cursor: url(${CursorDefault.src}), auto !important;
        }
        body {
          background: radial-gradient(farthest-side at top left, #eee, #bbb);
          color: ${colors.black};
          font-family: ${typography.fontFamilies.sans};
          font-weight: 600;
        }
      `
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: colors.white,
          fontFamily: typography.fontFamilies.extended,
          fontSize: 10,
          fontWeight: 600,
          height: defaultTheme.spacing(3),
          letterSpacing: 2,
          textTransform: "uppercase",
          transition: "all 0.25s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.black,
          cursor: `url(${CursorHover.src}), pointer !important`,
          transition: "color 0.25s ease-in-out",
          "&:hover": {
            color: colors.violet,
          }
        }
      }
    },
  }
})
