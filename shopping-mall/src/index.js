import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App tab="home" />
    </BrowserRouter>
);
