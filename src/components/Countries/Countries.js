import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            <div className='countries'>
                {
                    countries.map(country =>
                        /******* Advanced way (show country info) ********/
                        <Country country={country}
                            /*********** remove key error ***********/
                            key={country.cca3}></Country>

                        /************ normal  way **********/
                        // <Country
                        //     name={country.name.common}
                        //     area={country.area}
                        //     population={country.population}
                        //     capital={country.capital}
                        //     flag={<img src="country.flags.png" alt="flags of the country"></img>}>
                        // </Country>
                    )
                }
            </div>
        </div>
    );
};

export default Countries;