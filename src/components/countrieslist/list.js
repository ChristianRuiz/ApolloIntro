import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ToggleFavorite from '../common/toggleFavorite';
import Loading from '../common/loading';

import GetCountriesQuery from './querycomponents/getCountriesQuery';

import './list.css';

const List = () => (
  <div className="countries-list">
    <GetCountriesQuery>
      {({ data, loading }) =>
        loading ? (
          <Loading />
        ) : (
          data.countries.map(country => (
            <Link to={`/contry/${country.code}`} key={country.code}>
              <Paper className="country-card" elevation={1}>
                <img src={`http://www.countryflags.io/${country.code}/flat/64.png`} alt={country.code} />
                <div className="country-card-content">
                  <Typography variant="h5" component="h3">
                    {country.name}
                  </Typography>
                </div>
                <ToggleFavorite code={country.code} isFavorite={country.isFavorite} />
              </Paper>
            </Link>
          ))
        )
      }
    </GetCountriesQuery>
  </div>
);

export default List;
