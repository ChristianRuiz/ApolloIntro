import React from 'react';
import { Route } from 'react-router-dom';

import CountriesList from './components/countrieslist';
import CountryDetail from './components/countrydetail';

import './app.css';

const App = () => (
  <div className="app">
    <CountriesList />
    <Route path="/contry/:code" component={CountryDetail} />
  </div>
);

export default App;
