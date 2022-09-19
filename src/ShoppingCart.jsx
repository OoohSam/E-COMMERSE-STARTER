import React,{Component} from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
    state ={
        products: [
            {id:1, productName:"iPhone", price:8900, quantity:0},
            {id:2, productName:"Sony Camera", price:4500, quantity:0},
            {id:3, productName:"Samsung QLED TV", price:77400, quantity:0},
            {id:4, productName:"iPad Pro", price:12400, quantity:0},
            {id:5, productName:"Xbox", price:7780, quantity:0},
            {id:6, productName:"Dell Monitor", price:890, quantity:0},


        ]
    }

    render(){
        return (<div>
            <h4> Shopping cart</h4>
            
            <div>
                {this.state.products.map((x) =>{
                   let {id, productName, price, quantity} = x
                    return <Product key={id} id={price} />
                })}
            </div>

            </div>)
    }


}