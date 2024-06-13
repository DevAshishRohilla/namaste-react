// const heading = React.createElement("h1", {id: "h1", alt:"Title"}, "Hello World React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading)

const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    React.createElement(
        "div", 
        {id:"child"}, 
        [
            React.createElement(
                "h1", 
                {id:"heading"}, 
                "I am H1 Tag"
            ),
            React.createElement(
                "h2", 
                {id:"heading2"}, 
                "I am H2 Tag"
            )
        ]
    )
)

root.render(parent);
console.log(parent)