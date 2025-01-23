import { TypographyStyleOptions } from "@mui/material/styles/createTypography";
import { textGlow } from "../utils/keyframes";

interface CustomTypography {
  h2?: TypographyStyleOptions;
  h3?: TypographyStyleOptions;
  h4?: TypographyStyleOptions;
  h5?: TypographyStyleOptions;
  subtitle1: TypographyStyleOptions;
  subtitle2: TypographyStyleOptions;
  body1?: TypographyStyleOptions;
  body2?: TypographyStyleOptions;
  caption?: TypographyStyleOptions;
}


export const typography: CustomTypography = {
  h2: {
    fontFamily: "'Roobert Bold', sans-serif",
    maxWidth: "15ch",
    paddingBottom: '5px',
    background: 'linear-gradient(273.77deg, #b9daff 18.45%, #086ad8 94.53%)',
    backgroundClip: 'text',
    "-webkit-background-clip": "text",
    WebkitTextFillColor: 'rgba(0, 0, 0, 0)',
    fontSize: '3.75rem',
    fontWeight: 700,
    letterSpacing: '-1px',
    lineHeight: 1,
    '@media (max-width: 1200px)': {
      textAlign: "center",

    },
    '@media (max-width: 700px)': {
      fontSize: "3.5rem"
    },
    '@media (max-width: 765px)': {
      fontSize: "2.875rem",
    }
  },
  h3: {
    // fontSize: "1.17em",
    // fontWeight: "bold",
    fontSize: "1.375rem",
    fontWeight: 500,
    color: "white",
    display: "block",
    marginInlineStart: 0,
    marginInlineEnd: 0,
    unicodeBidi: "isolate",
  },
  h4: {
    color: "white",
    fontSize: "1.75rem",
    fontWeight: 700,
    lineHeight: 1.25,
  },
  h5: {
    fontSize: "1.125rem",
    fontFamily: '"JetBrains Mono", monospace',
    color: "rgba(255, 255, 255, .25)",
  },
  subtitle1: {
    color: "white",
    fontSize: "1.5rem",
    lineHeight: 1.5,
  },
  subtitle2: {
    fontSize: ".875rem",
    fontFamily: '"JetBrains Mono", monospace',
    color: "rgba(255, 255, 255, .25)",
  },
  body1: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: ".875rem",
    color: "#fff",
    animation: `${textGlow} 1.6s infinite`
  },
  body2: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: ".875rem",
    color: "#fff",
  },
  caption: {
    color:"rgba(255, 255, 255, .75)",
    fontSize: ".938rem",
    lineHeight: 1.5,
  } 
} 