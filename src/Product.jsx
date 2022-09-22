import { extend } from "jquery";
import React, { Component } from "react";

export default class Product extends Component {
  state = {
    id:this.props.id,
    productName:this.props.productName,
    price:this.props.price,
    quantity:this.props.quantity
    
    
  };

  render() {
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">Product #{this.state.id}</div>
            <h5 className="pt-5 border-top">{this.state.productName}</h5>
            <div>${this.state.price}</div>
            {/* <div className="card-foote text-right">{this.props.children}</div> */}
            
          </div>
          {/*the card-body ends here*/}
            <div className="card-footer ">
              <div className="float-left">
                <span className="badge">{this.state.quantity}</span>

                {/*THIS IS THE INCREMENT FUNCTION*/}   

                <div className="btn-group">
                  <button className="btn btn-outline-success" 
                  onClick={ ()=>{
                    this.props.onIncrement(this.state.productName)
                  }}
                  >
                      +
                  </button>

                  {/*THIS IS THE DECREMENT FUNCTION*/}   

                  <button className="btn btn-outline-success"
                   onClick={ ()=>{                       
                     this.props.onDecrement(this.state.productName)
                    }}
                    >
                      -
                   </button>
                </div>
              </div>

              {/*float-left ends here*/}

              <div className="float-right">{this.props.children}
              </div>
              </div>
              {/*card footer ends here*/}
        </div>
      </div>
    );
  }

  
}




//remember that the render fuction dictates how the information should display to
// the user
//Yet ano
