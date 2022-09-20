import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="text-muted">Product #{this.props.id}</div>
        </div>
      </div>
    );
  }
}

//remember that the render fuction dictates how the information should display to 
// the user
