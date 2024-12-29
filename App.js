import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", {id:"heading"}, "Namaste React");

//JSX -- HTML Like syntax or XML Like syntax not HTML in javascript (jsx is transpiled before it reaches to JS engine) - Parcel -Babel
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>

const Title = () => (
    <h1 id="heading">Namaste react using JSX</h1>
);

const HeadingComponent = () => (
    <div className="container">
        {/* <Title /> */
        Title()}
        <h1 className="heading">Namaste react functional component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);