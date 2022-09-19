import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customerCount: 50,
    message: "of the hour",
    customers: [
      {
        id: 1,
        name: "Reamy",
        phone: "0701121",
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1015/60",
      },
      {
        id: null,
        name: "Philip",
        phone: "1969-094",
        address: { city: "Zanzibar" },
        photo: "https://picsum.photos/id/10/60",
      },
      {
        id: 3,
        name: "Jacob",
        phone: undefined,
        address: { city: "Cairo" },
        photo: "https://picsum.photos/id/110/60",
      },
      {
        id: 4,
        name: "Huncho",
        phone: "969-134",
        address: null,
        photo: "https://picsum.photos/id/1045/60",
      },
      {
        id: 5,
        name: "Samoove",
        phone: "47-7829",
        address: { city: "Nairobi" },
        photo: "https://picsum.photos/id/140/60",
      },
    ],
  };
  
  

  customerNameStyle = (name) =>{
    if(name.startsWith("H")) return "red-hightlight";
    else if(name.startsWith("S")) return "aqua-highlight";
    else if(name.startsWith("J")) return "yellow-highlight"
    else if(name.startsWith("P")) return "yellow-highlight"
    else if(name.startsWith("H")) return "yellow-highlight"
    else return {}

  }

   
  render() {
    return (
      <div>
        <h4 className=" m-1 p-1">
          <p>{this.state.pageTitle}</p>

          <span className="badge badge-secondary m-2">
            {this.state.customerCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick} >Referedj</button>
        </h4>

        <table className="table">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>message</th>
          </tr>

          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  //executes when the user clicks on Refresh button

  onRefreshClick = () => {
    this.setState({
      customerCount: 9009,
    });
  };

  getPhoneToRender(phone) {
    if (phone == null) {
      return <div className="bg-warning p-2 text-center">*no phone*</div>;
    } else {
      return phone;
    }
  }
dsdm
  getIdRender = (id) => {
    if (id == null) {
      return <div className="bg-warning p-2 text-center">*null*</div>;
    } else {
      return id;
    }
  };

  getNameRender = (name) => {
    
    if (name == null) {
      return <div className="bg-warning p-2 text-center">*no name*</div>;
    } else {
      return name;
    }
  };

  getAddressRender(address) {
    if (address == null) {
      return <div className="bg-warning p-2 text-center">*no address*</div>;
    } else {
      return address.city;
    }
  }

  getphotoRender(photo) {
    if (photo == null) {
      return <div>*no photo*</div>;
    } else {
      return photo;
    }
  }



 

  

  // style={{ backgroundColor: phone.startsWith("9") ? "green" : "red" }}

  getCustomerRow = () => {
    return this.state.customers.map((x, index) => {
      let { id, name, phone, address, photo } = x;

      return ( 
        <tr key={x.id}>
          <td>{this.getIdRender(id)}</td>
          <td> 
            <img src={this.getPhoneToRender(photo)} alt="Customer" />
            <div>
              <button className="btn btn-sm btn-secondary" onClick={ () =>{this.onChangePictureClick(x, index); }}>Change Picture</button>
            </div>
          </td>

          <td>{this.getNameRender(name)}</td>

          <td>{this.getPhoneToRender(phone)} </td>
          <td>{this.getAddressRender(address)}</td>
        </tr>
      );
    });
  };


    //Executes when the user clicks the "Change Picture "button in the grid 
    //Receives the "customer" object and index og the currently clicked customer
  onChangePictureClick = (x, index) =>{
    // console.log(index)
    console.log(x)

    //get the existing customer
    let customerArr = this.state.customers;
    let numbered = Math.floor(Math.random())
    customerArr[4].photo = `https://picsum.photo//id/${numbered}/60`


    //the customerArr variable get hold of the customer array 
    //enabling it to be altered **youll gett the hang of it usiworry
    //update "customer" arrat in the state
    this.setState( {customers:customerArr })

    
  }
}



//So you can set a css style with a method
