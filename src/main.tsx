import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import Application from "./Application";

// ...existing code...
const appRootElement = document.querySelector("#app");

if (!appRootElement) {
  throw new Error("Root element #app not found");
}

const root = createRoot(appRootElement);

root.render(
  <StrictMode>
    <Application />
  </StrictMode>
);
