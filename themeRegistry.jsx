"use client"; // 👈 Make this a client component

import { ThemeProvider, createTheme, CssBaseline, responsiveFontSizes} from "@mui/material";


let getTheme = (mode) => {
    let theme = createTheme({
        palette: {
            mode: mode,
            primary: { main: "#55b24a" }, // Orange Wheel
            secondary: { main: "rgb(30, 50, 90)" }, // Khaki
            error: { main: "#ff1b1c" }, // Red
         
            background: {
                default: mode === "dark" ? "#000000" : "#fffffc",
                paper: mode === "dark" ? "#000000" : "#fffffc",
                componentBg: mode === "dark" ? "rgba(53, 49, 49)" : "rgba(234, 232, 232)",
            },

            
            customColors: {
                black: "#000000",
                lightBlack: "rgba(53, 49, 49)",
                offWhite: "rgb(247, 249, 246)",
                deepNavy: "rgb(30, 50, 90)",
                goldenYellow: "rgb(240, 200, 80)",
                red: "#ff1b1c",
                blue: "#3f51b5", 
                yellow: "#ff9800", 
                deepPink: "#f50057", 

            },
        },
        typography: {
            fontFamily: "Nono sans",
            h1: { fontFamily: "Kanit", fontSize: "5rem", fontWeight: 900 },
            h2: { fontFamily: "Kanit", fontSize: "3.6rem", fontWeight: 700 },
            h3: { fontFamily: "Kanit", fontSize: "3rem", fontWeight: 600 },
            h4: { fontFamily: "Kanit", fontSize: "2.5rem", fontWeight: 500 },
            h5: { fontFamily: "Kanit", fontSize: "1.7rem", fontWeight: 500 },
            h6: { fontFamily: "Kanit", fontSize: "1rem", fontWeight: 500 },
            body1: { fontFamily: "Outfit", fontSize: "1rem" },
            body2: { fontSize: "1rem" },
            button: { textTransform: "none", fontFamily: "Outfit", color: "rgb(85, 178, 74)" },
        },
        breakpoints: {
            values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        },
        components: {
            MuiSvgIcon: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        fontSize: theme.breakpoints.up("xs") ? "20px" : "inherit",
                        
                        [theme.breakpoints.up("sm")]: { fontSize: "25px" },
                        [theme.breakpoints.up("md")]: { fontSize: "50px" },
                        [theme.breakpoints.up("lg")]: { fontSize: "50px" },
                    }),
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        backgroundColor: "rgb(85, 178, 74)", // 👈 Default button color
                        color: "#ffffff", // 👈 Text color for buttons
                        "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                        },
                    },
                },
            },
        },
    });


      return responsiveFontSizes(theme, {
        breakpoints: ["xs", "sm", "md", "lg", "xl"],
        factor: 3,
        disableAlign: false,
        variants: ["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2"],
      });

}

export {getTheme}

 const theme = getTheme('light');


export default function ThemeRegistry({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
