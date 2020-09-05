import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TableviewData from './TableviewData';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


 class SmartphoneList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allMobile: []
    };

    this.deleteMobile = this.deleteMobile.bind(this)
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

    let { data } = await axios.get("http://localhost:8000/api/admin/mobile/")
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
        imgUrl:mobile.imgUrl
        
      };
    });
    this.setState({ allMobile: newMobile })


//delete



  

  }

  // async deleteMobile(mobileID) {
  //   // await  axios.delete(`http://localhost:8000/api/admin/${mobileID}` )
  //   //       .then((res) => {
  //   //           console.log('Student successfully deleted!')
  //   //       }).catch((error) => {
  //   //           console.log(error)
  //   //       })


  //    // await  axios.delete(`http://localhost:5000/api/admin/${mobileID}`)
  //      // this.setState({allMobile:newMobile})

  // }

  async deleteMobile(mobileId){
    await  axios.delete(`http://localhost:8000/api/admin/mobile/${mobileId}`)
    .then(res => {})
    .catch(err => { console.log(err) })
  //  this.setState({allMobile:newMobile})
  }
 

  // DataTable() {
  //   return this.state.allMobile.map((mobile, id) => {
  //     return <TableviewData mobile={mobile} key={id} />;
  //   });
  // }


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
                    <td>{mobile.feature}</td>
                    <td>{mobile.description}</td>
                    <td>{mobile.rating}</td>
                    <td>{mobile.price}</td>
                    <td>{mobile.currency}</td>
                    <td>
                    <Link className="edit-link" to={"/EditSmartphone/"+mobile.id }>
                        Edit
                    </Link> {" "}</td>
                    <td>
                    <button className="danger" size="sm" variant="danger" onClick={() => this.deleteMobile(mobile.id)}>Delete</button>
                </td>
                   
                   
                   

                  </tr>
                )}

        </tbody>
        
      </Table>
      
    </div>);
  }
}

export default SmartphoneList;