
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "child element"),React.createElement("h2", {}, "child sibiling element")]
  ),React.createElement(
    "div",
    { id: "child 2" },
    [React.createElement("h1", {}, "child element"),React.createElement("h2", {}, "child sibiling element")]
  )]
);
const heading = React.createElement("h1",{id:"heading"},"hello World !");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
