import React from 'react';
import './Country.css'

/*************** normal way***********/
// const Country = (props) => {

//     return (
//         <div className='country'>

//             <h6>
//                 Country Name: {props.name} <br />
//                 Capital: {props.capital} <br />
//                 Country Area: {props.area} <br />
//                 Country Population: {props.population}
//             </h6>
//         </div>
//     );
// };

/*************** Advanced way***********/
const Country = (props) => {
    const { name, capital, area, population, flags } = props.country
    return (
        <div className='country'>
            <h6>
                Country Name: {name.common} <br />
                Capital: {capital} <br />
                Country Area: {area} <br />
                Country Population: {population}
            </h6>
            <img src={flags.png} alt="Flags of the Country" />
        </div>
    );
};

export default Country;
