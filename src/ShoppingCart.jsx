import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone", price: 8900, quantity: 0 },
      { id: 2, productName: "Sony Camera", price: 4500, quantity: 0 },
      { id: 3, productName: "Samsung QLED TV", price: 77400, quantity: 0 },
      { id: 4, productName: "iPad Pro", price: 12400, quantity: 0 },
      { id: 5, productName: "Xbox", price: 7780, quantity:0 },
      { id: 6, productName: "Dell Monitor", price: 890, quantity: 0 },
    ],
  };

  render() {
    return (
      <div className="container-fluid">
        <h4> Shopping cart</h4>

        <div className="row">
          {this.state.products.map((x) => {
            let { id, productName, price,quantity } = x;
            
            return <Product
              key={id}
              id={id}
              productName={productName}
              price={price}
              quantity={quantity}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}

              >
                <button className="btn btn-primary" onClick={ ()=>{ this.buyNow(productName)}  }>Buy Now</button>
            </Product>;
          })}
        </div>  
      </div>
    );
  }

  //render ends here

  // updatethecount = ()=> {
  //   console.log("this is what updating the count looks like")
  //   this.setState
  //   //THIS IS MY ALTERNATIVE TO //
  // }

    
 

 handleIncrement = (productName) =>{
    console.log(typeof productName)
    let allProducts = {...this.state.products}
    let index = allProducts.indexOf(productName)
    console.log(index)



    // console.log("this is the increment function",productName);
    // let allProducts = [...this.state.products]
    // //this is the clone of the product array//
    // let index = allProducts.indexOf(productName)
    // console.log(index)
    

    
  };

  handleDecrement = (productName) =>{
    console.log("this is the decrement functi",productName)
    

  };

  buyNow =(productName)=>{
    console.log("this is the buy now function and its calling the",productName )
  }

  
}

// callMe =(Christine)=>{
//   console.log("I am the one calling this baddie", Christine, "to come and see me")
//

//indie.addEventListener("click",()=>{
//    callMe()
//})
// }






