import React from "react";
import {createRoot} from "react-dom/client";
import App from "./componentCombine.js";
import ComponentStyle from "./componentStyle"



const root = createRoot(document.getElementById('root'))
root.render(<ComponentStyle></ComponentStyle>)
