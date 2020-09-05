import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import CreateSmartphone from "./Components/CreateSmartphone";
import EditSmartphone from "./Components/EditSmartphone";
import SmartphoneList from "./Components/SmartphoneList";



function App() {
  return (<>
   <Router>
    {/* <div className="App">
      <header className="App-header"  > */}
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          

            <Navbar.Brand>
              <Link to="/" className="nav-link">
                SmartPhone.lk Dashboard
              </Link>
            </Navbar.Brand>
           {/* < a class="navbar-brand" href="/">SmartPhone.lk Dashboard</a> */}

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/CreateSmartphone"} className="nav-link">
                  Create Smartphone
                </Link>
              </Nav>

          

              <Nav>
                <Link to={"/SmartphoneList"} className="nav-link">
                  View all Smartphones
                </Link>
                
              </Nav>
              {/* <Nav>
                <Link to={"/student-list"} className="nav-link">
                  View Smartphone
                </Link>
            </Nav> */}
            </Nav>

          
        </nav>
    

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/CreateSmartphone' component={CreateSmartphone} />
                <Route path="/SmartphoneList" component={SmartphoneList} />
                 <Route path="/EditSmartphone/:id" component={EditSmartphone} />
                <Route path="/student-list" component={EditSmartphone} /> 
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    
  </Router>

</>
  );
}

export default App;
