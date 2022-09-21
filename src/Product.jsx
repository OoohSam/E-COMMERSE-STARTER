import { extend } from "jquery";
import React, { Component } from "react";

export default class Product extends Component {
  state = {
    id:this.props.id,
    productName:this.props.productName,
    price:this.props.price,
    
    
  };

  render() {
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">Product #{this.state.id}</div>
            <h5 className="pt-5 border-top">{this.state.productName}</h5>
            <div>${this.state.price}</div>
          </div>
        </div>
      </div>
    );
  }
}


// export default class Product extends Component{
//   state={
//     id:this.props.id,
//     productName:this.props.productName,
//     price:this.props.price,
//   }
//   render(){
//     return(
//       <div className="col-lg-5">
//         Lorem ipsum dolor {this.state.price} sit amet consectetur adipisic
//         ing elit. Dolor sapiente earum sit reiciendis? Quisquam 
//         temporibus nam obcaecati illo reprehenderit facilis dolore cons
//         ectetur facere tenetu
//         r, maxime et? Voluptatibus ea reprehenderit ipsum.
//       </div>
//     )
//   }
// }

//remember that the render fuction dictates how the information should display to
// the user
//Yet another beautiful day to be alive and be coding
