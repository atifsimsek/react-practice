import { useState } from 'react';
import React from 'react';
import './App.css';


function App() {


  const [state, setState] = useState({
    route: "",
    stations: [

    ]

  });



  const handleChange = (e) => {
    setState({
      ...state,
      route: e.target.value
    })

  }

  const addStation = () => {
    setState({
      ...state,
      stations: [
        ...state.stations,
        {
          name: "",
          lat: "",
          long: "",
          errors: {}
        }

      ]
    })


  }

  const handleStation = (value, name, index) => {

    setState({
      ...state,
      stations: state.stations.map((station, i) => {
        if (index === i) {
          station[name] = value
          let current = state.stations.find((r, key) => r[name] === value && key !== index)
          if (current) {
            station.errors[name] = `${name} değeri başka bir alanda ${value} değeri ile zaten tanımlanmış`
          } else {
            delete station.errors[name]
          }
        }
        return station
      })
    })


  }

  const enabled = state.route && state.stations.every(
    station => Object.entries(station).every(([key, value]) => key === "errors" ? Object.values(value).length === 0 : value))


console.log(Object.entries(state.stations))


  return (

    <div className="App">
      <input type="text" value={state.route} onChange={(e) => { handleChange(e) }} placeholder='Güzergah' />
      <button onClick={() => { addStation() }} >Yeni Durak Ekle</button>
      <hr />



      {
        state.stations.map((station, index) => (


          <div key={index} >
            <input onChange={(e) => { handleStation(e.target.value, "name", index) }} type="text" placeholder='Durak Adı' />
            <input onChange={(e) => { handleStation(e.target.value, "lat", index) }} type="text" placeholder='Enlem' />
            <input onChange={(e) => { handleStation(e.target.value, "long", index) }} type="text" placeholder='Boylam' />
          </div>


        ))

      }


      <hr />
      <button disabled={!enabled}>Kaydet</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>

  );
}

export default App;
