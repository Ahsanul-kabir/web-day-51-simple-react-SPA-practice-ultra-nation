import React from 'react';

const Country = (props) => {
    console.log(props.country)
    const {name,population,region,flag} = props.country;
    return (
        <div>
            <h2>This a {name}</h2>
            <img src={flag} style={{height:'50px'}} alt=""/>
            <p><small>Population {population}</small></p>
            <p><small>Region {region}</small></p>
        </div>
    );
};

export default Country;