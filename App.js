import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const heading = React.createElement("h1", {id:"heading"}, "Namaste React");

/*
Header
-Logo
-Home
-AboutUs
-Cart

Body
-Search bar
-Restaurent container
-Restaurent card

Footer
-copyright
-links
*/

//JSX -- HTML Like syntax or XML Like syntax not HTML in javascript (jsx is transpiled before it reaches to JS engine) - Parcel -Babel
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>



const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);