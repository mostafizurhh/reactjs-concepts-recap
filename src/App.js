import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Countries/Country';
import Header from './components/Header/Header';



function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Header></Header>
      <Country></Country>
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([])
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])

//   return (
//     <div className='country'>
//       <h3>All Countries of the World</h3>
//       <h4>Total countries: {countries.length}</h4>

//       {countries.map(country => <Countries name={country.name.common}></Countries>)}
//     </div>
//   )
// }

// function Countries(props) {
//   return (
//     <div className='countries'>
//       <h3>Name: {props.name}</h3>
//     </div>
//   )
// }

export default App;
