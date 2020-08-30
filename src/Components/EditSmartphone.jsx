import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

 class EditSmartphone extends Component {

  constructor(props) {
    super(props)
  this.onChangeName= this.onChangeName.bind(this);
  this.onChangeBrand= this.onChangeBrand.bind(this);
  this.onChangeModel= this.onChangeModel.bind(this);
  this.onChangeStorage= this.onChangeStorage.bind(this);
  this.onChangeColor= this.onChangeColor.bind(this);
  this.onChangeFeature= this.onChangeFeature.bind(this);
  this.onChangeDescription= this.onChangeDescription.bind(this);
  this.onChangeRating= this.onChangeRating.bind(this);
  this.onChangePrice= this.onChangePrice.bind(this);
  this.onChangeCurrency= this.onChangeCurrency.bind(this);
  this.onChangeImage= this.onChangeImage.bind(this);
  this.onSubmit = this.onSubmit.bind(this);


  // Setting up state
  this.state = {

    id:'',
    name: '',
    brand: '',
    modelNo: '',
    storage: '',
    color: '',
    feature: '',
    description: '',
    rating: '',
    price: '',
    currency:'',
    imageURL: ''
  }
}



//cc

async componentDidMount() {


  axios.get('http://localhost:4000/students/edit-student/' + this.props.match.params.id)
  .then(res => {
    this.setState({
      name: res.data.name,
      brand: res.data.brand,
    modelNo: res.data.modelNo,
    storage: res.data.storage,
    color: res.data.color,
    feature: res.data.feature,
    description: res.data.feature,
    rating: res.data.rating,
    price: res.data.price,
    currency:res.data.currency,
    imageURL: res.data.imageURL
    });
  }).catch((error) => {
    console.log(error);
  })
  



}
onChangeName(e) { this.setState({name: e.target.value})}
    onChangeBrand(e){this.setState({  brand: e.target.value})}
    onChangeModel(e){this.setState({  modelNo: e.target.value})}  
    onChangeStorage(e){this.setState({storage: e.target.value})}
    onChangeColor(e){this.setState({color: e.target.value})}
    onChangeFeature(e){this.setState({ feature: e.target.value})}
    
    onChangeDescription(e){this.setState({ description: e.target.value})}
    onChangePrice(e){this.setState({   price: e.target.value})}  
    onChangeRating(e){this.setState({rating: e.target.value})}
    onChangeCurrency(e){this.setState({currency: e.target.value})}
    onChangeImage(e){this.setState({ imageURL: e.target.value})}


    onSubmit(e) {
      e.preventDefault()
  
      const mobile = {
        name: this.state.name,
        email: this.state.email,
        rollno: this.state.rollno
      };
  
      axios.put('http://localhost:5000/api/admin/' + this.props.match.params.id, mobile)
        .then((res) => {
          console.log(res.data)
          console.log('Student successfully updated')
        }).catch((error) => {
          console.log(error)
        })
  
      // Redirect to Student List 
      this.props.history.push('/SmartphoneList')
    }



  render() {
    return (
        <div class="form-wrapper">
        <Form>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
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