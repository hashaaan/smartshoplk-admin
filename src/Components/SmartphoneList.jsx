import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';



 class SmartphoneList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allMobile: []
    };

    this.deleteMobile = this.deleteMobile.bind(this)
  }
  
  
 async componentDidMount() {

    let { data } = await axios.get("http://localhost:8000/api/admin/smartphones/")
    console.log(data)

    let newMobile = data.map(mobile => {
      return {
        id:mobile._id,
        name: mobile.name,
        brand: mobile.brand,
        modelNo: mobile.modelNo,
        storage:mobile.storage,
        color:mobile.color,
        features:mobile.features,
        description:mobile.description,
        rating:mobile.rating,
        price:mobile.price,
        currency:mobile.currency,
        imgUrl:mobile.imgUrl
        
      };
    });
    this.setState({ allMobile: newMobile })

  }

  async deleteMobile(mobileId){
    await  axios.delete(`http://localhost:8000/api/admin/smartphones/${mobileId}`)
    .then(res => {})
    .catch(err => { console.log(err) })
  
  }

  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
            <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Model No</th>
            <th>Storage</th>
            <th>Color</th>
            <th>Feature</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Currency</th>
          </tr>
        </thead>
        
        <tbody>
         {this.state.allMobile.map(mobile =>
                  <tr key={mobile.id}  >
                    <td>{mobile.name}</td>
                    <td>{mobile.brand}</td>
                    <td>{mobile.modelNo}</td>
                    <td>{mobile.storage}</td>
                    <td>{mobile.color}</td>
                    <td>{mobile.features}</td>
                    <td>{mobile.description}</td>
                    <td>{mobile.rating}</td>
                    <td>{mobile.price}</td>
                    <td>{mobile.currency}</td>
                    <td>
                    <Link className="edit-link" to={"/EditSmartphone/"+mobile.id }>
                        Edit
                    </Link> </td>
                    <td>
                    <button className="btn btn-outline-primary" size="sm" variant="danger" onClick={() => this.deleteMobile(mobile.id)}>Delete</button>
                </td>
               
                  </tr>
                )}

        </tbody>
        
      </Table>
      
    </div>);
  }
}

export default SmartphoneList;