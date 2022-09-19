import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/css/bootstrap.css";

import "./app.css";
//YOU MUST IMPORT THE PARENT COMPONENT
import App from "./App";


// check out bootstrap course on youtube called bootstrap in 2hrs//

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<App />,document.querySelector("#root"))
//BOTH WORK JUST FINE//
ReactDOM.render(<App/>,document.getElementById("root"))

//inside the ReactDOM render location function you can use the 
//document.getqueryselector("#id")


//the ReactDOM.render is the method used to render out the programming and the design logic 
//the design logic into the virtual dom and hence the final dom

console.log("Everything is working FINE")
