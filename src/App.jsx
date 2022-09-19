import React, { Component } from "react";
import CustomersList from "./CustomersList";
import NavBar from "./Navbar";
import ShoppingCart from "./ShoppingCart";
import Product from "./Product";


export default class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        
        
        <NavBar />
        
        <ShoppingCart />

        

      </React.Fragment>
    );
  }
}


//as per the systax of jsx every tag must be self closing

//while putting classses in css use className instead of class 
//this is because there is a function called class in javascript
//Check out boot strap  classes in 
//this is the first thing that is happening here karibu sana nairobi 
//ukifika nairobi utapata nguvu za roho mtakatifu 
//atakujia 
//tuliwajia na uwoga mwingi na kupepea 
