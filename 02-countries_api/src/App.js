import React, { useEffect, useState } from 'react';
import './App.css';
import { connect } from "react-redux";
import { getCountries } from './actions/actions';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './Home';
import { Countries } from './Countries';


const App = props => {


  useEffect(() => {

    props.getCountries()

  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home countries={props.countries} />} />
          <Route path="/country/:code" element={<Countries countries={props.countries} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    countries: state.countries

  }

}




export default connect(mapStateToProps, { getCountries })(App);
