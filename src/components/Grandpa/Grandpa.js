import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

/**
 * Context API
 * 1. Call createContext with a default value
 * 2. Set a variable of the context with uppercase
 * 3. Make sure you export the context to use it in other places
 * 4. Wrap your child content using contextName.Provider
 * 5. Provide a value
 * 6. To consume the context form child component
 * 7. Use useContext hook and you will need to pass the contextName 
 */

export const RingContext = createContext('ring');

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring';

    const handleBuyAHouse = () => {
        setHouse(house + 1);
    }

    return (
        <RingContext.Provider value={ornament}>
            <div className='grandpa'>
                <h2>Grand Pa</h2>
                <button onClick={handleBuyAHouse}>Buy A House</button>
                <p>House: {house}</p>
                <div style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;