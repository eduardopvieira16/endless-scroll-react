import "normalize.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { LayoutProvider } from "./context/LayoutContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
        <LayoutProvider>
          <App />
        </LayoutProvider>
    </UserProvider>
  </StrictMode>
);
