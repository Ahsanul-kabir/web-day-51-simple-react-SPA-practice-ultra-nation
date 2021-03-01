import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [countries,setCountries] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data=>setCountries(data))
  },[])
  return (
    <div >
      <h1>Country Loaded: {countries.length}</h1>
    </div>
  );
}

export default App;
