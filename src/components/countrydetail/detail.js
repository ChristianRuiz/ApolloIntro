import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ToggleFavorite from '../common/toggleFavorite';
import Loading from '../common/loading';

import './detail.css';

const Detail = ({ match, data }) => {
  const code = match.params.code;
  const { loading, country } = data;

  return (
    <div className="country-detail">
      <Paper elevation={1} key={code} className="country-detail-card">
        {loading ? (
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
                  <Typography component="li">{language.name}</Typography>
                ))}
              </ul>
            </div>
            <ToggleFavorite code={code} isFavorite={country.isFavorite} />
          </Fragment>
        )}
      </Paper>
    </div>
  );
};

Detail.propTypes = {
  match: propTypes.shape({
    params: {
      code: propTypes.string
    }
  }).isRequired,
  data: propTypes.object.isRequired
};

const query = gql`
  query GetContryByCode($code: String) {
    country(code: $code) {
      code
      name
      isFavorite
      currency
      continent {
        name
      }
      languages {
        code
        name
      }
    }
  }
`;

export default graphql(query, { options: ({ match }) => ({ variables: { code: match.params.code } }) })(Detail);
