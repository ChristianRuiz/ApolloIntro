import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

import useMarkAsFavoriteMutation from './querycomponents/useMarkAsFavoriteMutation';
import useUnmarkAsFavoriteMutation from './querycomponents/useUnmarkAsFavoriteMutation';

const handleToggleFavorite = (event, mutate) => {
  event.preventDefault();

  mutate();
};

const ToggleFavorite = ({ code, isFavorite }) => {
  const mutateMarkAsFavorite = useMarkAsFavoriteMutation(code);
  const mutateUnmarkAsFavorite = useUnmarkAsFavoriteMutation(code);
  return (
    <Fragment>
      {isFavorite ? (
        <Star
          color="secondary"
          fontSize="large"
          onClick={event => handleToggleFavorite(event, mutateUnmarkAsFavorite)}
        />
      ) : (
        <StarBorder
          color="secondary"
          fontSize="large"
          onClick={event => handleToggleFavorite(event, mutateMarkAsFavorite)}
        />
      )}
    </Fragment>
  );
};

ToggleFavorite.propTypes = {
  code: propTypes.string.isRequired,
  isFavorite: propTypes.bool.isRequired
};

export default ToggleFavorite;
