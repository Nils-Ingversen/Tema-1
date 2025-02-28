import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import Home from "./Home.jsx";

import "./assets/styles/base/imports.css";

// Import CSS files
import "./assets/styles/base/imports.css";

// Import vendors
import "./vendors/lenis.js";
import "./vendors/mouse-follower.js";
import { Scroller } from "./vendors/scroller.js";

// Initialise the Scroller class
const scroller = new Scroller();
scroller.init();

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
);
