import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
//import axios from 'axios';

 class EditSmartphone extends Component {
  render() {
    return (
        <div class="form-wrapper">
        <Form>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group controlId="Brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group controlId="Model">
            <Form.Label>Model No</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group controlId="Storage">
            <Form.Label>Storage</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group controlId="Color">
            <Form.Label>Color</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group controlId="Features">
            <Form.Label>Features</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group controlId="Rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group controlId="Price">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group controlId="Currency">
            <Form.Label>Currency</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group controlId="ImageURL">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
  
         
  
          <Button variant="danger" size="lg" block="block" type="submit">
Update Smartphone
          </Button><br></br>
          {" "}
        </Form>
      </div>
    );
  }
}


export default EditSmartphone;