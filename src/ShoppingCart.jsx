import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {


  constructor(props){
    console.log("the constructor is running")

    super()


    this.state = {
      products: [
        { id: 1, productName: "iPhone", price: 8900, quantity: 0 },
        { id: 2, productName: "Sony Camera", price: 4500, quantity: 0 },
        { id: 3, productName: "Samsung QLED TV", price: 77400, quantity: 0 },
        { id: 4, productName: "iPad Pro", price: 12400, quantity: 0 },
        { id: 5, productName: "Xbox", price: 7780, quantity: 0 },
        { id: 6, productName: "Dell Monitor", price: 890, quantity: 0 },
      ],
    };
  }

 
    

  

  render() {
    console.log("the render function is running")

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
                onIncrement ={this.handleIncrement}
                onDecrement = {this.handleDecrement}
                onZero = {this.onPressZero}
              >
                <button className="btn btn-primary" > Buy Now </button>
              </Product>
            );
          })}
        </div> 
      </div>
    );
  }


  handleIncrement =(product)=>{
    console.log("this is the increment function that is being pressed as we speak")
    let allProducts = [...this.state.product]


    let temp = undefined;

    for (let index = 0; index < allProducts.length; index++) {
      const element = allProducts[index];

      if(element.id == product.id){
        temp = index
        break;
      }

      
      
    }
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

    onPressZero = (product) =>{
      console.log("the number button has been pressed... please continue")
    }




    componentDidMount(){
      console.log("the component has mounted")
      
    }


  componentDidUpdate(prevProps,prevState){
    console.log("the component did update")
  }  
  
}

  // console.log(tmp)
  
                                            






  




