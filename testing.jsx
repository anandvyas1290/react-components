import React from "react";
import { createRoot } from "react-dom/client";

import { Button, Message } from "./src";

let mode = import.meta.env.VITE_MODE;

mode === "development"
    ? createRoot(document.getElementById("root")).render(
          <React.StrictMode>
              <Button onClick={() => Message.info("Hello")}>Ok</Button>
          </React.StrictMode>
      )
    : null;
