import React from 'react';
import propTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ToggleFavorite from '../common/toggleFavorite';

import './detail.css';

const Detail = ({ match }) => {
  const code = match.params.code;

  return (
    <div className="country-detail">
      <Paper elevation={1} key={code} className="country-detail-card">
        <div className="country-detail-card-content">
          <img src={`https://www.countryflags.io/${code}/flat/64.png`} alt={code} />
          <Typography variant="h5" component="h3">
            Spain
          </Typography>
          <Typography component="p">
            <b>Continent: </b>Europe
          </Typography>
          <Typography component="p">
            <b>Currency: </b>EUR
          </Typography>
          <Typography component="p">
            <b>Languages</b>
          </Typography>
          <ul>
            <Typography component="li">Catalan</Typography>
            <Typography component="li">Spanish</Typography>
            <Typography component="li">Basque</Typography>
          </ul>
        </div>
        <ToggleFavorite isFavorite />
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
