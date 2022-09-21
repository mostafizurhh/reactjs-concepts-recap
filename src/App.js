import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
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
