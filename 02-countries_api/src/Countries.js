import React from 'react'
import { useParams } from 'react-router-dom'

export const Countries = (props) => {
    const { countries } = props
    let { code } = useParams();



    const country = countries.find(country => country.alpha3Code === code)


    return (
        <div>
            {
                <div className='App'>
                    <h1>{country.name}</h1>
                    <h2>{country.capital}</h2>
                    <img src={country.flags.png} style={{ width: "450px", marginTop: "1.1rem" }} alt="" />

                </div>
            }

        </div>
    )
}
