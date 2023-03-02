import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "sammiekihara09@gmail.com",
      password: "indigo",
    };
  }

  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border-bottom">Login </h4>

        {/* Email Start */}
        <div className="form-group-row">
          <label className="col-lg-4">Email:</label>
          <input
            type="text"
            placeholder="Weka email yako"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
              console.log(this.state.email)
            }}
            
          />
        </div>

        <div className="form-group-row">
          <label className="col-lg-4">Password:</label>
          <input
            type="password"
            placeholder="weka password yako"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({
                password: event.target.value,
              });
              console.log(this.state.email);
            }}

          />
        </div>
      </div>
    );
  }
}
