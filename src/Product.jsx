import React,{Component} from "react";

export default class Product extends Component {
    render(){
        return <div>Product #{this.props.id}</div>
    }
}