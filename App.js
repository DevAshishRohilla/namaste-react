import React from "react";
import ReactDOM from "react-dom/client"

const Heading =()=> (
    <div class="container">
        <h1>This is Funtional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>); x