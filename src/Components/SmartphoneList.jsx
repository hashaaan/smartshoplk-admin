import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TableviewData from './TableviewData';


export default class StudentList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      allMobile: []
    };
  }

 async componentDidMount() {
    // axios.get('http://localhost:500/api/admin')
    //   .then(res => {
    //     this.setState({
    //       allMobile: res.data
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

    let { data } = await axios.get("http://localhost:5000/api/admin")
    console.log(data)

    let newMobile = data.map(mobile => {
      return {
          id:mobile._id,
        name: mobile.name,
        brand: mobile.brand,
        modelNo: mobile.modelNo,
        storage:mobile.Storage,
        color:mobile.color,
        feature:mobile.feature,
        description:mobile.description,
        rating:mobile.rating,
        price:mobile.price,
        currency:mobile.currency,
        imageURL:mobile.imageURL
        
      };
    });
    this.setState({ allMobile: newMobile })
  

  }

  DataTable() {
    return this.state.allMobile.map((res, i) => {
      return <TableviewData obj={res} key={i} />;
    });
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
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}