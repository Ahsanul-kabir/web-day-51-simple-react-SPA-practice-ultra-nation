import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country.js/Country';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        console.log(data);
        const names = data.map(country => country.name)
        console.log(names);
      })
  }, [])
  return (
    <div >
      <h1>Country Loaded: {countries.length}</h1>
      <ul>
        {
          countries.map(country => <Country name={country.name}></Country>)
        }
      </ul>
    </div>
  );
}

export default App;
