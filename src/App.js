import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country.js/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        // console.log(data);
        const names = data.map(country => country.name)
        // console.log(names);
      })
  }, [])

  const handleAddCountry = (country) => {
    // console.log('added', country)
    const newCart = [...cart, country];
    setCart(newCart);
  }

  return (
    <div >
      <h1>Country Loaded: {countries.length}</h1>
      <h4>Country Added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
      <ul>
        {
          countries.map(country => <Country key={country.alpha3Code} country={country} handleAddCountry={handleAddCountry}></Country>)
        }
      </ul>
    </div>
  );
}

export default App;
