import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

import MarkAsFavoriteMutation from './querycomponents/markAsFavoriteMutation';
import UnmarkAsFavoriteMutation from './querycomponents/unmarkAsFavoriteMutation';

const handleToggleFavorite = (event, mutate) => {
  event.preventDefault();

  mutate();
};

const ToggleFavorite = ({ code, isFavorite }) => (
  <Fragment>
    {isFavorite ? (
      <UnmarkAsFavoriteMutation code={code}>
        {({ mutate }) => (
          <Star color="secondary" fontSize="large" onClick={event => handleToggleFavorite(event, mutate)} />
        )}
      </UnmarkAsFavoriteMutation>
    ) : (
      <MarkAsFavoriteMutation code={code}>
        {({ mutate }) => (
          <StarBorder color="secondary" fontSize="large" onClick={event => handleToggleFavorite(event, mutate)} />
        )}
      </MarkAsFavoriteMutation>
    )}
  </Fragment>
);

ToggleFavorite.propTypes = {
  code: propTypes.string.isRequired,
  isFavorite: propTypes.bool.isRequired
};

export default ToggleFavorite;
