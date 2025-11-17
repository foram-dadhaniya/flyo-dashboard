import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProviderContext } from "./context/ThemeContext";
import ThemedApp from "./components/layout/ThemedApp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProviderContext>
    <ThemedApp/>
  </ThemeProviderContext>
);