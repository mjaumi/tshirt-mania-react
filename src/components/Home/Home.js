import React, { useState } from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTshirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tShirt => {
        const exists = cart.find(item => item._id === tShirt._id);
        if (!exists) {
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }
        else {
            alert('Item Already Added');
        }
    }

    const handleRemoveFromCart = tShirt => {
        const restCart = cart.filter(item => item._id !== tShirt._id);
        setCart(restCart);
    }

    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;