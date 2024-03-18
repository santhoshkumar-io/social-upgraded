// Fonts

import { createTheme, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: PaletteColorOptions;
    tertiaryLight: PaletteColorOptions;
    textHalfLight: PaletteColorOptions;
    halfLight:PaletteColorOptions;
    light: PaletteColorOptions;
    gray: PaletteColorOptions;
    halfGray: PaletteColorOptions;
    inputBackGray:PaletteColorOptions;
    barIcon:PaletteColorOptions;
    purpleLight:PaletteColorOptions;
    successLight:PaletteColorOptions;
    warningLight:PaletteColorOptions;
    danger:PaletteColorOptions;
    dangerLight:PaletteColorOptions;
    purple:PaletteColorOptions;
    activeLight:PaletteColorOptions;
    active:PaletteColorOptions;
    geo:PaletteColorOptions;
    geoLight:PaletteColorOptions;
  }
  interface PaletteOptions {
    tertiary: PaletteColorOptions;
    tertiaryLight: PaletteColorOptions;
    textHalfLight: PaletteColorOptions;
    halfLight:PaletteColorOptions;
    light: PaletteColorOptions;
    gray: PaletteColorOptions;
    halfGray: PaletteColorOptions;
    inputBackGray:PaletteColorOptions;
    barIcon:PaletteColorOptions;
    purpleLight:PaletteColorOptions;
    successLight:PaletteColorOptions;
    warningLight:PaletteColorOptions;
    danger:PaletteColorOptions;
    dangerLight:PaletteColorOptions;
    purple:PaletteColorOptions;
    activeLight:PaletteColorOptions;
    active:PaletteColorOptions;
    geo:PaletteColorOptions;
    geoLight:PaletteColorOptions;
  }
}


const theme = createTheme({
    palette: {
      primary: { main: "#FFFFFF" },
      secondary: { main: "#171717" },
      tertiary: { main: " #0061F7" },
      tertiaryLight:{main:"#0061F71a"},
      light: { main: "#E5E5E5" },
      textHalfLight:{main:"#ffffff99"},
      halfLight:{main:"#ffffff1a"},
      halfGray: { main: "#B9B9B9" },
      gray: {main:"#767676"},
      inputBackGray:{main:"#EFF0F6"},
      barIcon:{main:"#2f49d11a"},
      warning:{main:"#ffb648"},
      warningLight:{main:"#ffb6481a"},
      purpleLight:{main:"#5f2eea1a"},
      successLight:{main:"#4bde971a"},
      success:{main:"#4BDE97"},
      danger:{main:"#F26464"},
      dangerLight:{main:"#F264641a"},
      purple:{main:"#5F2EEA"},
      active:{main:"#5887FF"},
      activeLight:{main:"#5887FF1a"},
      geo:{main:" #2F49D1"},
      geoLight:{main:"#2f49d11a"}
    },
    typography: {
        fontFamily:  "Inter",
        h1: {
          fontSize: "2rem",
          fontWeight: "700",
          lineHeight: "3.5rem",
        },
        h2: {
          fontSize: "1.5rem",
          fontWeight: "700",
          lineHeight: "150%",
        },
        h3: {
          fontSize: "1.25rem",
          fontWeight: "600",
          lineHeight: "150%",
        },
        h4: {
          fontSize: "1rem",
          fontWeight: "600",
          lineHeight: "150%",
        },

        body1: {
          fontSize: "0.75rem",
          fontWeight: "600",
          lineHeight: "150%",
        },
        body2: {
          fontSize: "0.8rem",
          fontWeight: "500",
          lineHeight: "150%",
        },
        subtitle1: {
          fontSize: "0.75rem",
          fontWeight: "400",
          lineHeight: "150%",
        },
        subtitle2:{
            fontSize: "0.7rem",
            fontWeight: "400",

        }
        
}}
    );

    export default theme;