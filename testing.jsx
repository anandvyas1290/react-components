import React from "react";
import { createRoot } from "react-dom/client";

import { Button } from "./lib/main";
createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Button label="OK" />
    </React.StrictMode>
);
