import { extend } from "jquery";
import React, { Component } from "react";

export default class Product extends Component {

  state  ={
    // id:this.props.id,
    // productName:this.props.productName,
    // price:this.props.price,
    // quantity:this.props.quantity
    product:this.props.product
    
    
  }
  render() {
    
    return (
      <div className="col-lg-6"> 
      <div className="card m-2">
        <div className="card-body">
          <div className="text-muted"># {this.state.product.id}</div>

          <h5 className="pt-5 border-top">{this.state.product.productName}</h5>

          <div>{this.state.product.price}</div>

          <div className="card-footer text-right" >
            
            <div className="float-left">

              {/* <span className="badge">{this.state.quantity}</span> */}
              <div className="btn-group">
                <button  onClick={()=>{this.props.onIncrement(this.state.product)}} className="btn btn-outline-success">+</button>
                <button className="btn btn-outline-success"><span className="badge">{this.props.product.quantity}</span></button>
                <button  onClick={()=>{this.props.onDecrement(this.state.product)}} className="btn btn-outline-success">-</button>
              </div>
            </div>
            <div className="float-right"></div>
            
            {this.props.children}</div>
               {/* children is a predifined property in react which represents HTML content
                SUPPLIED FROM the parent */}
        </div>
      </div>
      </div>
    );
  }
}

//remember that the render fuction dictates how the information should display to
// the user
//Yet another day to code innit?
//Yes it is ...there is none greater than this here..init?
