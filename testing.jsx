import React from "react";
import { createRoot } from "react-dom/client";
import { PrimaryBtn, SecondaryBtn, SecondaryBtn2 } from "./src";
import "./src/index.css";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <PrimaryBtn>Ok</PrimaryBtn> <SecondaryBtn>Ok</SecondaryBtn>{" "}
        <SecondaryBtn2>Ok</SecondaryBtn2>
    </React.StrictMode>
);
