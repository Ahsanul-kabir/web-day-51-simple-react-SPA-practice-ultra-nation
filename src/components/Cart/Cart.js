import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    let totalPopulation = 0;
    // const totalPopulation = cart.reduce((sum,country)=>sum + country.population,0)

    // another way
    for (let i = 0; i < cart.length; i++) {
        const contry = cart[i];
        totalPopulation = totalPopulation + contry.population;
    }
    return (
        <div>
            <h1>Hi cart {cart.length}</h1>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;