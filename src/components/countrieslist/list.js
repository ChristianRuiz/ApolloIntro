import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Autorenew from '@material-ui/icons/Autorenew';

import ToggleFavorite from '../common/toggleFavorite';
import Loading from '../common/loading';

import GetCountriesQuery from './querycomponents/getCountriesQuery';

import './list.css';

const List = () => (
  <div className="countries-list">
    <GetCountriesQuery>
      {({ data, loading, refetch }) =>
        loading ? (
          <Loading />
        ) : (
          <Fragment>
            <div className="countries-list-refresh">
              <Autorenew color="secondary" fontSize="large" onClick={() => refetch()} />
            </div>
            {data.countries.map(country => (
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
            ))}
          </Fragment>
        )
      }
    </GetCountriesQuery>
  </div>
);

export default List;
