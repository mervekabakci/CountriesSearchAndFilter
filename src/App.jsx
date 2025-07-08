import { useState } from 'react'
import './App.css'
import { data } from './data'

export default function App() {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  const regions = Array.from(new Set(data.map(x => x.region)));

  function handleChange(e) {
    setCountry(e.target.value.toLowerCase());
  }

  function handleSelectChange(e) {
    setRegion(e.target.value);
  }

  return (
    <>
      <div className='container'>
        <div className="twiceColumn">
          <div className="searchColumn">
            <div className="inputColumn">
              <input type="text" onChange={handleChange} placeholder='search for a country' />
              <span className='icon-search'></span>
            </div>
            <div className="selectColumn">
              <select onChange={handleSelectChange}>
                <option value="">Filter bey Region</option>
                {regions.map(x => <option key={x}>{x}</option>)}
              </select>
            </div>
          </div>
          <div className="rightColumn">
            <div className="cards">
              {data
                .filter(x => x.name.common.toLocaleLowerCase().includes(country) && x.region.includes(region))
                .map(x => 
                  <Card
                    key={x.name.common}
                    name={x.name.common}
                    population={x.population}
                    region={x.region}
                    capital={x.capital}
                    flagUrl={x.flags.png}
                  />)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Card({ name, population, region, capital, flagUrl }) {
  return (
    <>
      <div className="card">
        <figure>
          <img src={flagUrl} alt={flagUrl} />
        </figure>
        <h3>{name}</h3>
        <div className='info'>
          <p><strong>Population: </strong>{population}</p>
          <p><strong>Region: </strong>{region}</p>
          <p><strong>Capital: </strong>{capital}</p>
        </div>
      </div>
    </>
  )
}