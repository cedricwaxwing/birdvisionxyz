import { createTheme } from "@mui/material/styles"

export const colors = {
  white: "#ffffff",
  // black: "#252128",
  black: "#403C43",
  gray: "#fafafa",
  yellow: "#EFF320",
  orange: "#F38620",
  violet: "#7600D3",

  // Projects
  "dao-drops": "#3C1DFE"
}

const fontFamilyFallbacks = [
"Roboto",
'"Helvetica Neue"',
"Arial",
"sans-serif",
'"Apple Color Emoji"',
'"Segoe UI Emoji"',
'"Segoe UI Symbol"',
]

export const typography = {
  fontFamilies: {
    displaySans: ['monument_extended', ...fontFamilyFallbacks].join(','),
    sans: ['satoshi', ...fontFamilyFallbacks].join(','),
    monospace: ['Roboto Mono', 'monospace', ...fontFamilyFallbacks].join(','),
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
      fontFamily: "monument_extended",
      fontSize: "8rem",
      fontWeight: 600,
      lineHeight: 1,
    },
    h2: {
      fontFamily: "monument_extended",
      fontSize: "6rem",
      fontWeight: 600,
      lineHeight: 1,
    },
    h3: {
      fontFamily: "monument_extended",
      fontSize: "3rem",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "monument_extended",
      fontSize: "2rem",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "monument_extended",
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "monument_extended",
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "1.5em",
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: "1.25em",
    },
    body1: {
      fontSize: "1em",
      fontWeight: 600,
      lineHeight: 1.75,
    },
    body2: {
      fontSize: "0.75em",
      fontWeight: 600,
      lineHeight: 1.75,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          overflow: hidden;
          height: 100vh;
        }
        body {
          // background-color: ${colors.white};
          // background: radial-gradient(200vw 720vw at top left, #e0bb46, ${colors.yellow} 50%, #fff);
          background: radial-gradient(farthest-side at top left, #eee, #bbb);
          color: ${colors.black};
          font-family: ${typography.fontFamilies.sans};
          font-weight: 600;
          height: 100%;
          overflow: auto;
        }
      `
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: colors.white,
          fontFamily: typography.fontFamilies.displaySans,
          fontSize: "0.75rem",
          fontWeight: 400,
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
          transition: "color 0.25s ease-in-out",
          "&:hover": {
            color: colors.violet,
          }
        }
      }
    },
  }
});


export const theme = createTheme(defaultTheme, {
  ...defaultTheme,
  typography: {
    h1: {
      [defaultTheme.breakpoints.down('lg')]: {
        fontSize: "4rem",
      }
    }
  }
})
