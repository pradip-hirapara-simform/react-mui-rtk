import { StyledEngineProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "src/routes/router";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeGlobalStyles from "./ThemeGlobalStyles";

function App() {
  return (
    <ThemeProvider>
      <StyledEngineProvider injectFirst>
        <ThemeGlobalStyles />
        <RouterProvider router={router} />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
