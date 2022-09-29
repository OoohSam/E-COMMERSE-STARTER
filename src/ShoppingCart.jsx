import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone", price: 8900, quantity: 0 },
      { id: 2, productName: "Sony Camera", price: 4500, quantity: 0 },
      { id: 3, productName: "Samsung QLED TV", price: 77400, quantity: 0 },
      { id: 4, productName: "iPad Pro", price: 12400, quantity: 0 },
      { id: 5, productName: "Xbox", price: 7780, quantity: 0 },
      { id: 6, productName: "Dell Monitor", price: 890, quantity: 0 },
    ],
  };

  render() {
    return (
      <div className="container-fluid">
        <h4> Shopping cart</h4>
        <div className="row">
          {this.state.products.map((x) => {
            let { id, productName, price, quantity } = x;

            return (
              <Product
                key={id}
                // productName={productName}
                // price={price}
                // quantity={quantity}
                product = {x}
                onIncrement = {this.handleIncrement}
                onDecrement = {this.handleDecrement}
              >
                <button className="btn btn-primary" > Buy Now </button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }


  handleIncrement = (product) => {
    
    console.log(`You have increased the number of ${JSON.stringify(product) }`);
    let allProducts = [...this.state.products]
    

    // let tmp = undefined;

    // // console.log(allProducts)

    // for (let index = 0; index < allProducts.length; index++) {
    //   const element = allProducts[index];
    //   console.log(JSON.stringify(element))
      
    //   if(element.id == product.id){
    //     tmp = index;
    //     break;
    //   }
      
    // }

    let index = allProducts.indexOf(product)
    console.log(index)

    // console.log(tmp)
    





    
    
    

    }


    handleDecrement = (product) => {
      console.log(`You have decreased the number of ${product} `);
      console.log(product.quantity)
      if(product.quantity == 0){
        return 0
        
      }else{
        product.quantity -=1
        

      }
    };


  }
  // console.log(tmp)
  
                                            






  




