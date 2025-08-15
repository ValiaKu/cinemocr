import { createRoot } from 'react-dom/client';
import { StrictMode } from "react";

import Application from './Application';

const appRootElement = document.querySelector("#app");
const root = createRoot(appRootElement);

root.render(
  <StrictMode>
    <Application />
  </StrictMode>
);



