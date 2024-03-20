import { GlobalStyles } from "@mui/material";

const ThemeGlobalStyles = () => {
  return (
    <GlobalStyles
      styles={(theme) => ({
        body: {
          margin: 0,
          background: theme.palette.common.white,
          color: theme.palette.common.black,
          fontFamily: "'Manrope', sans-serif;",
        },
      })}
    />
  );
};
export default ThemeGlobalStyles;
