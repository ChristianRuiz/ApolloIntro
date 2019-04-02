import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

import MarkAsFavoriteMutation from './querycomponents/markAsFavoriteMutation';
import UnmarkAsFavoriteMutation from './querycomponents/unmarkAsFavoriteMutation';

class ToggleFavorite extends Component {
  static propTypes = {
    code: propTypes.string.isRequired,
    isFavorite: propTypes.bool.isRequired
  };

  state = {
    isFavorite: this.props.isFavorite
  };

  handleToggleFavorite = (event, mutate) => {
    event.preventDefault();

    const { isFavorite } = this.state;
    this.setState({ isFavorite: !isFavorite });

    const { code } = this.props;
    mutate({ variables: { code } });
  };

  render() {
    const { isFavorite } = this.state;

    return (
      <Fragment>
        {isFavorite ? (
          <UnmarkAsFavoriteMutation>
            {({ mutate }) => (
              <Star color="secondary" fontSize="large" onClick={event => this.handleToggleFavorite(event, mutate)} />
            )}
          </UnmarkAsFavoriteMutation>
        ) : (
          <MarkAsFavoriteMutation>
            {({ mutate }) => (
              <StarBorder
                color="secondary"
                fontSize="large"
                onClick={event => this.handleToggleFavorite(event, mutate)}
              />
            )}
          </MarkAsFavoriteMutation>
        )}
      </Fragment>
    );
  }
}

export default ToggleFavorite;
