import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TableviewData from './TableviewData';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


 class SmartphoneList extends Component {
  
  constructor(props) {
    super(props)
    this.state={
      allMobile:[]
    
    }

  }
  
 async componentDidMount() {
    // await axios.get("http://localhost:500/api/admin")
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
        storage:mobile.storage,
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


//delete



  

  }

  async deleteMobile(mobileID) {
    await  axios.delete(`http://localhost:5000/api/admin/${mobileID}` )
          .then((res) => {
              console.log('Student successfully deleted!')
          }).catch((error) => {
              console.log(error)
          })

     // await  axios.delete(`http://localhost:5000/api/admin/${mobileID}`)
       // this.setState({allMobile:newMobile})

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
          <th>ID</th>
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

export default SmartphoneList;