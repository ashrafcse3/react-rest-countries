import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);

  return (
    <div>
      <h1>Welcome to the world countries!</h1>
      <h3>Total countries: {countries.length}</h3>
      {
        countries.map(country => <Country country={country}></Country>)
      }
    </div>
  );
}

function Country(props) {
  const { name, area, region } = props.country;
  console.log(name);
  return (
    <div style={{
      border: 'solid 3px', margin: '20px', padding: '20px', borderRadius: '20px'
    }}>
      <h2>Name: {name.common}</h2>
      <p>Area: {area}</p>
      <p>Region: {region}</p>
    </div >
  );
}

export default App;
