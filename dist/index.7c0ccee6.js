// const heading = React.createElement(
//   "h1",
//   { id: "heading", class: "heading-class" },
//   "Hello World from React!!!"
// );
// const root = ReactDOM.createRoot(document.getElementById("container"));
// root.render(heading);
// Now we have to print html code as below
// <div class="nested-container">
//     <h1>Hello World</h1>
// </div>
// const div = React.createElement(
//   "div",
//   { class: "nested-container" },
//   React.createElement("h1", {}, "Hello World")
// );
// const root = ReactDOM.createRoot(document.getElementById("container"));
// root.render(div);
// Now we have to print html code as below
// <div class="nested-container">
//     <h1>Big Heading</h1>
//     <h2>Small Heading</h2>
// </div>
// const div = React.createElement(
//     "div",
//     { class: "nested-container" },
//     [React.createElement("h1", {}, "Big Heading"), React.createElement("h2", {}, "Small Heading")]
//   );
//   const root = ReactDOM.createRoot(document.getElementById("container"));
//   root.render(div);
// Now we have to print html code as below
//<div>
// <div class="nested-container">
//     <h1>Big Heading</h1>
//     <h2>Small Heading</h2>
// </div>
// <div class="nested-container2">
//     <p>Paragraph</p>
//     <span>Span</span>
// </div>
//</div>
// const div = React.createElement("div", {}, [
//   React.createElement("div", { class: "nested-container" }, [
//     React.createElement("h1", {}, "Big Heading"),
//     React.createElement("h2", {}, "Small Heading"),
//   ]),
//   React.createElement("div", { class: "nested-container2" }, [
//     React.createElement("p", {}, "Paragraph"),
//     React.createElement("span", {}, "Span"),
//   ]),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("container"));
// root.render(div);
//JSX
const heading = React.createElement("h1", {
    id: "heading",
    class: "heading-class"
}, "Hello World from React!!!");
// Creating above code in JSX
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(div);

//# sourceMappingURL=index.7c0ccee6.js.map
