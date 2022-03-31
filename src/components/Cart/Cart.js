import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    //conditional rendering options
    //1. Element variable
    //2. Ternary operator
    //3. && operator (shorthand)
    //4. || operator (shorthand)
    let command;
    if (cart.length === 0) {
        command = <p>Please, Add at least one items.</p>;
    }
    else if (cart.length === 1) {
        command = <p>Please, Add More...</p>;
    }
    else {
        command = <p><small>Thanks for adding items</small></p>;
    }

    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <div className='orange'>
                <h3>YAY!!! You are buying</h3>
            </div>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon re gift dba??</p>
            </div>}
            {command}
            {cart.length === 4 ? <button>Remove All</button> : <p>KEEP ADDING</p>}
            {cart.length === 4 && <button className='orange'>Review order</button>}
        </div>
    );
};

export default Cart;