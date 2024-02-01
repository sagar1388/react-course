import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
//import Instamart from "./components/Instamart";

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
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {

// Hypothetical scenario to explain Provider
const [userInfo, setUserInfo] = useState();

useEffect(() => {
  // Make an API call which authenticate the user and send user name
  const data = {
    loggedInUser: "Minal"
  };

  setUserInfo(data.loggedInUser);
}, [])

// In below example, UserContext.Provider is wrapped for whole app, so data will get updated everywhere in the app
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo}}>
      <div className="app">
        <Header />
        {/* <Body /> */}
        <Outlet />
      </div>
      </UserContext.Provider>
    </Provider>
  );

  // In below example, UserContext.Provider is wrapped only for Header, so data will get updated only in Header
  // return (
  //   <div className="app">
  //     <UserContext.Provider value={{loggedInUser: userInfo}}>
  //     <Header />
  //     </UserContext.Provider>
  //     {/* <Body /> */}
  //     <Outlet />
  //   </div>    
  // );

  // In Below Example, there are 2 UserContaxt.Provider.
  // When app runs, the default value where loggedInUser is defained as "Sagar" will run.
  // On Top of that, "<UserContext.Provider value={{loggedInUser: userInfo}}>" will run and update everywhere loggedInUser=userInfo. In userInfo, loggedInUser is updated as Minal.
  // On Top of that, "<UserContext.Provider value={{loggedInUser: "Sparsh"}}>" will run and since it is wrapping only Header inside it, sp only Header Value will get updated for loggedInUser as Sparsh

  // return (
  //   <UserContext.Provider value={{loggedInUser: userInfo}}>
  //   <div className="app">
  //     <UserContext.Provider value={{loggedInUser: "Sparsh"}}>
  //       <Header />
  //     </UserContext.Provider>
  //     {/* <Body /> */}
  //     <Outlet />
  //   </div>
  //   </UserContext.Provider>
  // );
};

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement: <Error />
//   },
//   {
//     path: "/about",
//     element: <About />
//   },
//   {
//     path: "/contact",
//     element: <Contact />
//   },
// ]);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      // {
      //   path: "/about",
      //   element: <About />
      // },
      {
        path: "/about",
        element: <About name="Sagar Mane" profile="FrontEnd Engineer" />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("container"));

//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
