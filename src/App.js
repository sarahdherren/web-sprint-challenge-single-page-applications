import React, { useState } from "react";
import { Nav, NavItem, Navbar } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PizzaForm from './components/PizzaForm';
import Home from './components/Home';

const initialFormValues = [{
  name: '',
  size: '',
  sauce: '',
  toppings: [],
  special: '',
}]

const App = () => {

  const[orders, setOrders] = useState([]);
  const[formValues, setFormValues] = useState(initialFormValues);
  const[selectedToppings, setSelectedToppings] = useState([]);

  const logo = require('./designFiles/logo.png')

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const updateToppings = (topping) => {
    setSelectedToppings([...selectedToppings, topping]);
  }

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce,
      toppings: selectedToppings,
      special: formValues.special,
    }
    setOrders([...orders, newOrder])
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
          <LinkContainer to='/'> 
            <Nav.Link >Home</Nav.Link>
          </LinkContainer>
        </NavItem>
        <NavItem>
          <LinkContainer to='/pizza'>
            <Nav.Link id='order-pizza'>Order</Nav.Link>
          </LinkContainer>
        </NavItem>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path='/pizza' >
            <PizzaForm submit={submitForm} update={updateForm} values={formValues} updateToppings={updateToppings}/>
        </Route>
        <Route path='/' component={Home} />
      </Switch>
      </Router>
  );
};
export default App;
