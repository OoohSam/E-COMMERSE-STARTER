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
          {this.state.products.map((prod) => {
           

            return (
              <Product
                key={prod.id}
                // productName={productName}
                // price={price}
                // quantity={quantity}
                product = {prod}
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
    console.log(product.id)
    console.log("this is the increment function that is being pressed as we speak")
    let allProducts = [...this.state.products]


    

    for (let index = 0; index < allProducts.length; index++) {
      const element = allProducts[index];

      if(element.id == product.id){
        element.quantity++
        break;
      
      }

      this.setState( {products:allProducts})

      
    }
  }







    handleDecrement = (product) => {
      let allProduct = [...this.state.products]

      for (let index = 0; index < allProduct .length; index++) {
        const element = allProduct[index];

        if(element.id == product.id){
          console.log("They are the same as i can see it")
          element.quantity--
          break;
        }

        this.setState( {product:allProduct} )
        
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
  
                                            






  




