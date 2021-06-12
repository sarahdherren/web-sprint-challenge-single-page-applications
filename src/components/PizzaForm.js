import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'

const imageHero = require('../designFiles/pizzaPie.jpg');

const sauceChoices = ['Traditional', 'Spicy Red Pepper', "Creamy Garlic Butter", "BBQ"];

const toppings = ['Pepperoni', 'Sausage', 'Canadian Bacon', 'Spicey Italian Sausage', 'onions',
    'Green Peppers', 'Diced Tomatoes', 'Black Olives', 'Roasted Garlic', 'Artichoke Hearts', 'Three Cheese',
    'Pineapple', 'Extra Cheese' ];

const PizzaForm = ({ submit, update, values, updateToppings }) => {

    

    const changeHandler = (e) => {
        const { name, value, checked, type } = e.target;
        const valueToUse = type === 'checkbox' ? checked : value;

        update(name, valueToUse)

    }

    const toppingHandler = (e) => {
        const topping = e.target.name
    
        updateToppings(topping)
    }

    const submitHandler = (e, selectedToppings) => {
        e.preventDefault()
        submit(e, selectedToppings)
    }

    return(
        <div>
            <img src={imageHero.default} alt='pizza'/>
            <h3>Build Your Own Pizza</h3>
            <Form id='pizza-form' onSubmit={submitHandler} >
                <Form.Group >
                    <Form.Label className='labels'>Name</Form.Label>
                    <Form.Control id='name-input' type='text' placeholder="Enter Customer Name" name='name' value={values.name} onChange={changeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='labels'>Choice of Size</Form.Label>
                    <Form.Control id='size-dropdown' as='select' name='size' value={values.size} onChange={changeHandler}>
                        <option value={null}> --- Select the Size of Your Pie ---</option>
                        <option>Regular 10"</option>
                        <option>Personal Pan 8"</option>
                        <option>Large 14"</option>
                        <option>X-Large 16"</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    {sauceChoices.map((sauceName) => (
                        <div key={sauceName} className="mb-3">
                          <Form.Check 
                            type='radio'
                            id={sauceName}
                            label={sauceName}
                            name='sauce'
                            value={sauceName}

                            onChange={changeHandler}
                          />
                        </div>
                      ))}
                      </Form.Group>
                <Form.Group>
                    <Form.Label className='labels'>Add Toppings</Form.Label>
                    <div className='toppings'>
                    {toppings.map((toppingName, index) => (
                        <div key={toppingName} className="mb-3">
                          <Form.Check 
                            type='checkbox'
                            label={toppingName}
                            name={toppingName}
                            checked={values.toppingName}
                            onChange={toppingHandler}
                          />
                        </div>
                      ))}
                      </div>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='labels'>Special Instructions</Form.Label>
                    <Form.Control id='special-text' as='textarea' name='special' value={values.special} rows={3} maxLength='250' onChange={changeHandler} />
                </Form.Group>
                <Button id='order-button' type='submit'>Submit Order</Button>
            </Form>
        </div>
    )
};

export default PizzaForm;