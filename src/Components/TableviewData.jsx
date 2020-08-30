import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from "axios";

export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);

        
        
        this.deleteMobile = this.deleteMobile.bind(this);
    }

  async deleteMobile(mobileID) {
      await  axios.delete(`http://localhost:5000/api/admin/${mobileID}` )
            .then((res) => {
                console.log('Student successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })

        // let newMobile= this.props.state.allMobile.filter(
        //     (mobile) =>mobile.id !== mobileID
        //   );
        // await  axios.delete(`http://localhost:5000/api/${mobileID}`)
        //   this.setState({allMobile:newMobile})

    }
        

    render() {
        return (
            <tr key={this.props.obj.id}>
                  <td>{this.props.obj.id}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.brand}</td>
                <td>{this.props.obj.modelNo}</td>
                <td>{this.props.obj.storage}</td>
                <td>{this.props.obj.color}</td>
                <td>{this.props.obj.feature}</td>
                <td>{this.props.obj.description}</td>
                <td>{this.props.obj.rating}</td>
                <td>{this.props.obj.price}</td>
                <td>{this.props.obj.currency}</td>
                <td>{this.props.obj.imageURL}</td>
               
                <td>
                    <Link className="edit-link" to={"/EditSmartphone/" + this.props.obj._id}>
                        Edit
                    </Link> {" "}</td>
                    <td>
                    <Button size="sm" variant="danger" onClick={this.deleteMobile}>Delete</Button>
                </td>
            </tr>
        );
    }
}