import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }


    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'white' }}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <h5>Population:{population}</h5>
            <p><small>Area:{area}</small></p>
            <p>Code:{cca3}</p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button><br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flags</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit this country'}
            <hr />
            <CountryDetail country={country} handleVisitedCountry={handleVisitedCountry}handleVisitedFlags={handleVisitedFlags}></CountryDetail>

        </div>
    );
};

export default Country;