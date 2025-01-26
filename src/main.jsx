import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Turn from "./components/BtnChoseeTheme";
import Card from "./components/Card";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Turn>
      <Card />
    </Turn>
  </StrictMode>
);
