import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from "axios"

class CreateSmartphone extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeStorage = this.onChangeStorage.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeFeature = this.onChangeFeature.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeCurrency = this.onChangeCurrency.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    // Setting up state
    this.state = {


      name: '',
      brand: '',
      modelNo: '',
      storage: '',
      color: '',
      features: '',
      description: '',
      rating: '',
      price: '',
      currency: '',
      imgUrl: ''
    }
  }

  onChangeName(e) { this.setState({ name: e.target.value }) }
  onChangeBrand(e) { this.setState({ brand: e.target.value }) }
  onChangeModel(e) { this.setState({ modelNo: e.target.value }) }
  onChangeStorage(e) { this.setState({ storage: e.target.value }) }
  onChangeColor(e) { this.setState({ color: e.target.value }) }
  onChangeFeature(e) { this.setState({ features: e.target.value }) }
  onChangeDescription(e) { this.setState({ description: e.target.value }) }
  onChangePrice(e) { this.setState({ price: e.target.value }) }
  onChangeRating(e) { this.setState({ rating: e.target.value }) }
  onChangeCurrency(e) { this.setState({ currency: e.target.value }) }
  onChangeImage(e) { this.setState({ imgUrl: e.target.value }) }



  onSubmit(e) {
    e.preventDefault()

    const newMobile = {

      name: this.state.name,
      brand: this.state.brand,
      modelNo: this.state.modelNo,
      storage: this.state.storage,
      color: this.state.color,
      features: this.state.features,
      description: this.state.description,
      rating: this.state.rating,
      price: this.state.price,
      currency: this.state.currency,
      imgUrl: this.state.imgUrl
    };
    axios.post('http://localhost:8000/api/admin/smartphones/', newMobile)
      .then(res => console.log(res.data));

    this.setState({

      name: '',
      brand: '',
      modelNo: '',
      storage: '',
      color: '',
      features: '',
      description: '',
      rating: '',
      price: '',
      currency: '',
      imgUrl: ''
    })
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={this.state.name} onChange={this.onChangeName} />
          </Form.Group>

          <Form.Group controlId="Brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control type="text" value={this.state.brand} onChange={this.onChangeBrand} />
          </Form.Group>

          <Form.Group controlId="Model">
            <Form.Label>Model No</Form.Label>
            <Form.Control type="text" value={this.state.modelNo} onChange={this.onChangeModel} />
          </Form.Group>

          <Form.Group controlId="Storage">
            <Form.Label>Storage</Form.Label>
            <Form.Control type="text" value={this.state.storage} onChange={this.onChangeStorage} />
          </Form.Group>

          <Form.Group controlId="Color">
            <Form.Label>Color</Form.Label>
            <Form.Control type="text" value={this.state.color} onChange={this.onChangeColor} />
          </Form.Group>

          <Form.Group controlId="Features">
            <Form.Label>Features</Form.Label>
            <Form.Control as="textarea" rows="3" value={this.state.features} onChange={this.onChangeFeature} />
          </Form.Group>

          <Form.Group controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" value={this.state.description} onChange={this.onChangeDescription} />
          </Form.Group>

          <Form.Group controlId="Rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="text" value={this.state.rating} onChange={this.onChangeRating} />
          </Form.Group>

          <Form.Group controlId="Price">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" value={this.state.price} onChange={this.onChangePrice} />
          </Form.Group>

          <Form.Group controlId="Currency">
            <Form.Label>Currency</Form.Label>
            <Form.Control type="text" value={this.state.currency} onChange={this.onChangeCurrency} />
          </Form.Group>

          <Form.Group controlId="ImageURL">
            <Form.Label>Image URL</Form.Label>
            <Form.Control as="textarea" rows="10" value={this.state.imgUrl} onChange={this.onChangeImage} />
          </Form.Group>



          <Button variant="danger" size="lg" block="block" type="submit">
            Create Smartphone
          </Button><br></br>
          {" "}
        </Form>
      </div>
    );
  }
}

export default CreateSmartphone;