import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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
  // const heading = React.createElement(
  //   "h1",
  //   { id: "heading", class: "heading-class" },
  //   "Hello World from React!!!"
  // );
  
// Creating above code in JSX

  //const jsxHeading = <h1 id="heading">Hello World from JSX!!</h1>

  // const jsxHeading = (
  //   <div>
  // <h1 id="heading">Hello World from JSX!!</h1>
  // <h2 id="heading2">Hello World from JSX 2!!</h2>
  // </div>
  // );

  

  // const Heading = () => {
  //   return <h1>This is a functional component.</h1>
  // }

  // const Heading = () => <h1>This is a functional component.</h1>;

  // const Heading = () => {
  //   return (<div>
  //     <h1>This is a functional component.</h1>
  //     </div>
  //   )
  // };

  // const Heading = () => {
  //   return (
  //   <div>
  //     <h1>big Heading</h1>
  //     <h2>small Heading</h2>
  //     </div>
  //   )
  // };

  // Above Heading functional component is giving lot of div's... so to resolve that we use React.Fragment tag or just empty tag

  // const Heading = () => {
  //   return (
  //   <React.Fragment>
  //     <h1>big Heading</h1>
  //     <h2>small Heading</h2>
  //   </React.Fragment>
  //   )
  // };

  // const Heading = () => {
  //   return (
  //   <>
  //     <h1>big Heading</h1>
  //     <h2>small Heading</h2>
  //   </>
  //   )
  // };

  // const jsxHeading = (
  //   <div>
  //     <span>This is a span</span>
  //     <p>This is a para</p>
  //     <Heading />
  //   </div>
  // );

  // // we can also call <Heading /> like {Heading()}
  // const Div = () => {
  //   return (
  //     <div>
  //       <span>This is a span.</span>
  //       {/* {100 + 200}
  //       {console.log("Working")} */}
  //       <Heading />
  //     </div>
  //   )
  // }

  //const root = ReactDOM.createRoot(document.getElementById("container"));

  //root.render(<Heading />);
  //root.render(<Div />);

  // const AppLayout = () => {
  //   return <div className="app text-3xl font-bold">App</div>
  // }

  // const root = ReactDOM.createRoot(document.getElementById("container"));

  // root.render(<AppLayout />);

  const AppLayout = () => {
    return <div className="app">
      <Header />
      <Body />
    </div>
  }
  
  const root = ReactDOM.createRoot(document.getElementById("container"));
  
  

  root.render(<AppLayout />);