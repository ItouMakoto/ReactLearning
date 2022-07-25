import React from "react";
import {createRoot} from "react-dom/client";
import OnEvent from "./01event/onEvent";
import ComponentStyle from "./componentStyle"
import UseState from "./02state/UseState";



const root = createRoot(document.getElementById('root'))
root.render(<UseState></UseState>)
