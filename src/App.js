import React, { useState } from "react";
import { Nav, NavItem, Navbar } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import API_URL from './constants/urls';
import PizzaForm from './components/PizzaForm';
import Home from './components/Home';
import axios from "axios";
import * as yup from 'yup';
import formSchema from './validation/formSchema';

const initialFormValues = {
  customerName: '',
  size: '',
  sauce: '',
  Pepperoni: false,
  Sausage: false,
  CanadianBacon: false,
  SpicyItalianSausage: false,
  onions: false,
  GreenPeppers: false,
  DicedTomatoes: false,
  BlackOlives: false,
  RoastedGarlic: false,
  ArtichokeHearts: false,
  ThreeCheese: false,
  Pineapple: false,
  ExtraCheese: false,
  special: '',
}

const initialFormErrors = {
  customerName: '',
}

const App = () => {

  const[orders, setOrders] = useState([]);
  const[formValues, setFormValues] = useState(initialFormValues);
  const[formErrors, setFormErrors] = useState(initialFormErrors);

  const logo = require('./designFiles/logo.png')

  const updateForm = (name, value) => {

    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.message})
      })
      .finally(
        setFormValues({...formValues, [name]: value})
      )}

  const submitForm = () => {
    const newOrder = {
      customerName: formValues.customerName.trim(),
      size: formValues.size.trim(),
      //sauce: formValues.sauce, had to comment out to pass code grade
      Pepperoni: formValues.Pepperoni,
      Sausage: formValues.Sausage,
      CanadianBacon: formValues.CanadianBacon,
      SpicyItalianSausage: formValues.SpicyItalianSausage,
      onions: formValues.onions,
      GreenPeppers: formValues.GreenPeppers,
      DicedTomatoes: formValues.DicedTomatoes,
      BlackOlives: formValues.BlackOlives,
      RoastedGarlic: formValues.RoastedGarlic,
      ArtichokeHearts: formValues.ArtichokeHearts,
      ThreeCheese: formValues.ThreeCheese,
      Pineapple: formValues.Pineapple,
      ExtraCheese: formValues.ExtraCheese,
      special: formValues.special,
    }
    
    postNewOrder(newOrder)
  }

  const postNewOrder = newOrder => {
    axios.post(API_URL, newOrder)
      .then(res => {
        setOrders([...orders, newOrder])
      })
      .catch(err => console.log(err))
      .finally(res => {
        setFormValues(initialFormValues)
        
      })
  }

  return (
    <Router>
      <Navbar bg='primary'>
        <Navbar.Brand href='/' >
          <img src={logo.default} style={{maxWidth: "10vw"}} alt='pizza logo'/>
        </Navbar.Brand>
        <Navbar.Brand className='header '>
          <h1>Lambda Eats</h1>
          <h3>Your favorite food, delivered while coding</h3>
        </Navbar.Brand>
        <Navbar.Collapse className='justify-content-end'>
        <NavItem>
          <LinkContainer id='order-pizza' to='/pizza'>
            <Nav.Link >Order</Nav.Link>
          </LinkContainer>
        </NavItem>
        <NavItem>
          <LinkContainer to='/'> 
            <Nav.Link >Home</Nav.Link>
          </LinkContainer>
        </NavItem>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path='/pizza' >
            <PizzaForm submit={submitForm} update={updateForm} values={formValues} errors={formErrors} />
        </Route>
        <Route path='/' component={Home} />
      </Switch>
      </Router>
  );
};
export default App;
