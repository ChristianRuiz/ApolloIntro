import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ToggleFavorite from '../common/toggleFavorite';
import Loading from '../common/loading';

import GetCountryByCodeQuery from './querycomponents/getCountryByCodeQuery';

import './detail.css';

const Detail = ({ match }) => {
  const code = match.params.code;

  return (
    <div className="country-detail">
      <Paper elevation={1} key={code} className="country-detail-card">
        <GetCountryByCodeQuery code={code}>
          {({ loading, data }) => {
            const { country } = data;

            return loading ? (
              <Loading />
            ) : (
              <Fragment>
                <div className="country-detail-card-content">
                  <img src={`https://www.countryflags.io/${code}/flat/64.png`} alt={code} />
                  <Typography variant="h5" component="h3">
                    {country.name}
                  </Typography>
                  <Typography component="p">
                    <b>Continent: </b>
                    {country.continent.name}
                  </Typography>
                  <Typography component="p">
                    <b>Currency: </b>
                    {country.currency}
                  </Typography>
                  <Typography component="p">
                    <b>Languages</b>
                  </Typography>
                  <ul>
                    {country.languages.map(language => (
                      <Typography component="li" key={language.name}>
                        {language.name}
                      </Typography>
                    ))}
                  </ul>
                </div>
                <ToggleFavorite code={code} isFavorite={country.isFavorite} />
              </Fragment>
            );
          }}
        </GetCountryByCodeQuery>
      </Paper>
    </div>
  );
};

Detail.propTypes = {
  match: propTypes.shape({
    params: {
      code: propTypes.string
    }
  }).isRequired
};

export default Detail;
