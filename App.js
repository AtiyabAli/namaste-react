// const heading = React.createElement("h1", { id: 'heading' }, "Helow world from React Namaste React")

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement
            ("h1",
                {},
                "I am an h1 tag"
            )))

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)