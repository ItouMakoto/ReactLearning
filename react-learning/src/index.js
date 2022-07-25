import React from "react";
import {createRoot} from "react-dom/client";
import Todolist from "./03todo-list/Todolsit";



const root = createRoot(document.getElementById('root'))
root.render(<Todolist></Todolist>)
