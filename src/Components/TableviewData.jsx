import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from "axios";

export default class TableviewData extends Component {

    constructor(props) {
        super(props);

        
        
        this.deleteMobile = this.deleteMobile.bind(this);
    }
 
   deleteMobile(id) {
    axios.delete(`http://localhost:8000/api/admin/${id}`)
    .then((res) => {
        console.log('Student successfully deleted!')
    }).catch((error) => {
        console.log(error)
    })


    }
        

    render() {
        return (


            
            <tr key={this.props.mobile.id}>
                  <td>{this.props.mobile.id}</td>
                <td>{this.props.mobile.name}</td>
                <td>{this.props.mobile.brand}</td>
                <td>{this.props.mobile.modelNo}</td>
                <td>{this.props.mobile.storage}</td>
                <td>{this.props.mobile.color}</td>
                <td>{this.props.mobile.feature}</td>
                <td>{this.props.mobile.description}</td>
                <td>{this.props.mobile.rating}</td>
                <td>{this.props.mobile.price}</td>
                <td>{this.props.mobile.currency}</td>
                <td>{this.props.mobile.imageURL}</td>
             
                <td>
                    <Link className="edit-link" to={"/EditSmartphone/" + this.props.mobile._id}>
                        Edit
                    </Link> {" "}</td>
                    <td>
                    <Button size="sm" variant="danger" onClick={this.deleteMobile}>Delete</Button>
                </td>
            </tr>
        );
    }
}