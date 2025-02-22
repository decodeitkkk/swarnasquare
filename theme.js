import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {
              grey: {
                  100: "#e0e0e0",
                  200: "#c2c2c2",
                  300: "#a3a3a3",
                  400: "#858585",
                  500: "#666666",
                  600: "#525252",
                  700: "#3d3d3d",
                  800: "#292929",
                  900: "#141414",
              },
              primary: {
                  100: "#d0d1d5",
                  200: "#a1a4ab",
                  300: "#727681",
                  400: "#1F2A40",
                  500: "#141b2d",
                  600: "#101624",
                  700: "#0c101b",
                  800: "#080b12",
                  900: "#040509",
              },
              greenAccent: {
                  900: "#001a00",
                  800: "#003300",
                  700: "#004d00",
                  600: "#339933",
                  500: "#006600",
                  400: "#008000",
                  300: "#66b366",
                  200: "#99cc99",
                  100: "#cce6cc",
              },
              redAccent: {
                  100: "#f8dcdb",
                  200: "#f1b9b7",
                  300: "#e99592",
                  400: "#e2726e",
                  500: "#E10101",
                  600: "#af3f3b",
                  700: "#832f2c",
                  800: "#58201e",
                  900: "#2c100f",
              },
              blueAccent: {
                  100: "#e1e2fe",
                  200: "#c3c6fd",
                  300: "#a4a9fc",
                  400: "#868dfb",
                  500: "#6870fa",
                  600: "#316bff",
                  700: "#3e4396",
                  800: "#2a2d64",
                  900: "#151632",
              },
              yellowAccent: {
                  100: "#332e1f",
                  200: "#665c3d",
                  300: "#99895c",
                  600: "#ffeaad",
                  400: "#ccb77a",
                  500: "#ffe599",
                  700: "#ffefc2",
                  800: "#fff5d6",
                  900: "#fffaeb",
              },
              pinkAccent: {
                  100: "#fffdf7",
                  200: "#fefaef",
                  300: "#fef8e6",
                  400: "#fdf5de",
                  500: "#fdf3d6",
                  600: "#cac2ab",
                  700: "#989280",
                  800: "#656156",
                  900: "#33312b",
              },
          }
        : {
              grey: {
                  100: "#141414",
                  200: "#292929",
                  300: "#3d3d3d",
                  400: "#525252",
                  500: "#666666",
                  600: "#858585",
                  700: "#a3a3a3",
                  800: "#c2c2c2",
                  900: "#e0e0e0",
              },
              primary: {
                  100: "#040509",
                  200: "#080b12",
                  300: "#0c101b",
                  400: "#FBFBFB", // manually changed
                  500: "#141b2d",
                  600: "#1F2A40",
                  700: "#727681",
                  800: "#a1a4ab",
                  900: "#d0d1d5",
              },
              greenAccent: {
                  100: "#001a00",
                  200: "#003300",
                  300: "#004d00",
                  600: "#339933",
                  400: "#006600",
                  500: "#008000",
                  700: "#66b366",
                  800: "#99cc99",
                  900: "#cce6cc",
              },
              redAccent: {
                  100: "#2c100f",
                  200: "#58201e",
                  300: "#832f2c",
                  400: "#af3f3b",
                  500: "#f04438",
                  600: "#e2726e",
                  700: "#e99592",
                  800: "#f1b9b7",
                  900: "#f8dcdb",
              },
              blueAccent: {
                  100: "#151632",
                  200: "#2a2d64",
                  300: "#3e4396",
                  400: "#535ac8",
                  //   500: "#1A50D9", // from figma design
                  500: "#175cd3",
                  600: "#316bff",
                  700: "#a4a9fc",
                  800: "#c3c6fd",
                  900: "#e1e2fe",
              },
              yellowAccent: {
                  100: "#fffaeb",
                  200: "#fff5d6",
                  300: "#ffefc2",
                  400: "#ffeaad",
                  500: "#ffe599",
                  600: "#ccb77a",
                  700: "#99895c",
                  800: "#665c3d",
                  900: "#332e1f",
              },
              pinkAccent: {
                  100: "#33312b",
                  200: "#656156",
                  300: "#989280",
                  600: "#fdf5de",
                  400: "#cac2ab",
                  500: "#fdf3d6",
                  700: "#fef8e6",
                  800: "#fefaef",
                  900: "#fffdf7",
              },
          }),
});

// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                      // palette values for dark mode
                      primary: {
                          main: colors.primary[500],
                      },
                      secondary: {
                          main: colors.greenAccent[500],
                      },
                      neutral: {
                          dark: colors.grey[700],
                          main: colors.grey[500],
                          light: colors.grey[100],
                      },
                      background: {
                          default: colors.primary[500],
                      },
                  }
                : {
                      // palette values for light mode
                      primary: {
                          main: colors.primary[100],
                      },
                      secondary: {
                          main: colors.greenAccent[500],
                      },
                      neutral: {
                          dark: colors.grey[700],
                          main: colors.grey[500],
                          light: colors.grey[100],
                      },
                      background: {
                          default: "#fcfcfc",
                      },
                  }),
        },
        typography: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 14,
            },
            // Custom bodyText variant
            YellowBar: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 14,
                fontWeight: 400,
                color: "#0B1215",
                lineHeight: "normal",
            },
            ImageCardTitle: {
                color: "#0B1215",
                fontFamily: "Inter",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
            },

            headingTwo: {
                color: "#0B1215",
                fontFamily: "Roboto Serif",
                fontSize: " 12px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
            },
            headingOneBold: {
                color: "#0B1215",
                fontFamily: "Poppins",
                fontSize: " 16px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
            },

            headingLink: {
                color: "#1A50D9",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                textDecoration: "underline",
            },
            billingCardHeading: {
                color: "#0B1215",
                fontFamily: "Poppins",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
            },

            // // nov
            hOne: {
                color: "#0B1215",
                fontFamily: "Inter",
                fontSize: " 20px",
                fontStyle: "normal",
                fontWeight: 550,
                lineHeight: "normal",
            },
            hTwo: {
                color: "#0B1215",
                fontFamily: "Inter",
                fontSize: " 16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
            },
            hText: {
                color: "#0B1215",
                fontFamily: "Inter",
                fontSize: " 14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
            },
            // nov 16
            headingOne: {
                color: "rgb(11, 18, 21)",
                fontFamily: "Poppins",
                fontSize: " 16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
            },
            tableHeading: {
                fontFamily: "Poppins",
                fontSize: "12px",
                fontWeight: "500",
                color: "rgba(0, 0, 0, 0.87)",
                lineHeight: "24px",
            },
            tableText: {
                fontFamily: "Poppins",
                fontSize: "12px",
                fontWeight: "400",
                color: "rgb(97,97,97)",
                lineHeight: "18px",
            },
            tableDesc: {
                fontFamily: "Poppins",
                fontSize: "10px",
                fontWeight: "400",
                color: "#919191",
                lineHeight: "15px",
            },
            grayText: {
                fontFamily: "Poppins",
                fontSize: "11px",
                color: "rgb(97,97,97)",
                fontWeight: "400",
            },
            grayHeading: {
                fontFamily: "Poppins",
                fontsize: "16px",
                color: "rgb(11, 18, 21)",
                fontWeight: "400",
            },
        },
    };
};

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
});

export const useMode = () => {
    const [mode, setMode] = useState("light");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};
