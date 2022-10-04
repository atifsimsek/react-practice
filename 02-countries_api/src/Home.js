import React from 'react'
import { Link } from 'react-router-dom'

export const Home = (props) => {
    const { countries } = props


    return (
        <div className='App'>
            <h1>Countries Api</h1>
            {
                countries.map((country, i) =>
                (
                    <Link key={i} style={{ textDecoration: "none" }} to={`/country/${country.alpha3Code}`}>
                        <h2 >{country.name}</h2>
                    </Link>

                ))
            }
        </div>
    )
}
