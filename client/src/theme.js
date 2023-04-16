export const colorTokens = {
    grey: {
        0: "#FFFFFF",
        10: "#F6F6F6",
        50: "#FOFOFO",
        100: "#E0E0E0",
        200: "#C2C2C2",
        300: "#A3A3A3",
        400: "#855858",
        500: "#666666"
    },
    primary: {
        50: "#E6FBFF",
        100: "#CCF7FE",
        200: "#99EEFD",
        300: "#66E6FC",
        400: "#33DDFB",
        500: "#00D5FA",
        600: "#00A0BC",
        700: "#006B7D",
        800: "#00353F",
        900: "#001519"
    }
}

export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"?  {
                primary: {
                    dark: colorTokens.primary[200],
                    main: colorTokens.primary[500],
                    light: colorTokens.primary[800],
                },
                neutral: {
                    dark: colorTokens.grey[100],
                    main: colorTokens.grey[200],
                    mediumMain: colorTokens.grey[300],
                    medium: colorTokens.grey[400],
                    light: colorTokens.grey[700],

                },
                 // add reset of color settings
                 background: {
                    default: colorTokens.grey[900],
                    alt: colorTokens.grey[800]
                 }
            }: 
            {
                // light mode
                primary: {
                    dark: colorTokens.primary[400],
                    main: colorTokens.primary[800]
                },
                neutral: {
                    dark: colorTokens.grey[700],
                    main: colorTokens.grey[500],
                    light: colorTokens.grey[300],

                }
                // add reset of color settings
                ,
                background: {
                    default: colorTokens.grey[10],
                    alt: colorTokens.grey[0]
                 }
            }
            )
        },
        // time 02.15
        typography: {
            fontFamily: ["Rubik","sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Rubik","sans-serif"].join(","),
                fontSize: 40
            },
            h2: {
                fontFamily: ["Rubik","sans-serif"].join(","),
                fontSize: 32
            },
            h3: {
                fontFamily: ["Rubik","sans-serif"].join(","),
                fontSize: 24
            },
            h4: {
                fontFamily: ["Rubik","sans-serif"].join(","),
                fontSize: 20
            },
            h5: {
                fontFamily: ["Rubik","sans-serif"].join(","),
                fontSize: 16
            },
            h6: {
                fontFamily: ["Rubik","sans-serif"].join(","),
                fontSize: 14
            }
        }
    }
}