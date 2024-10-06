import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";

// The way that we render our app in the DOM in react version 18;
const rootElement = document.getElementById("root");

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}

// React before 18
// React.render(<App />);
