import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

import MarkAsFavoriteMutation from './querycomponents/markAsFavoriteMutation';
import UnmarkAsFavoriteMutation from './querycomponents/unmarkAsFavoriteMutation';

const handleToggleFavorite = (event, mutate, code) => {
  event.preventDefault();

  mutate({ variables: { code } });
};

const ToggleFavorite = ({ code, isFavorite }) => (
  <Fragment>
    {isFavorite ? (
      <UnmarkAsFavoriteMutation>
        {({ mutate }) => (
          <Star color="secondary" fontSize="large" onClick={event => handleToggleFavorite(event, mutate, code)} />
        )}
      </UnmarkAsFavoriteMutation>
    ) : (
      <MarkAsFavoriteMutation>
        {({ mutate }) => (
          <StarBorder color="secondary" fontSize="large" onClick={event => handleToggleFavorite(event, mutate, code)} />
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
