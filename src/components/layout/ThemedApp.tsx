import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "../../theme/theme";
import App from "../../App";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemedApp = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

export default ThemedApp;