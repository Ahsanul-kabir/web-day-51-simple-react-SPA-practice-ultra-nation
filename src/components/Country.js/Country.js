import React from 'react';

const Country = (props) => {
    console.log(props.country)
    const {name,population,region,flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    const countryStyle = {
        border: '1px solid red',
        margin: '10px',
        padding: '10px'
    }
    return (
        <div style={countryStyle}>
            <h2>This a {name}</h2>
            <img src={flag} style={{height:'50px'}} alt=""/>
            <p><small>Population {population}</small></p>
            <p><small>Region {region}</small></p>
            <button onClick={()=>handleAddCountry(props.country)}>Add Country </button>
        </div>
    );
};

export default Country;