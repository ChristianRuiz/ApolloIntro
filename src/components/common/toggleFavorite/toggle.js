import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

class ToggleFavorite extends Component {
  static propTypes = {
    isFavorite: propTypes.bool.isRequired
  };

  state = {
    isFavorite: this.props.isFavorite
  };

  handleToggleFavorite = event => {
    event.preventDefault();

    const { isFavorite } = this.state;
    this.setState({ isFavorite: !isFavorite });
  };

  render() {
    const { isFavorite } = this.state;

    return (
      <Fragment>
        {isFavorite ? (
          <Star color="secondary" fontSize="large" onClick={this.handleToggleFavorite} />
        ) : (
          <StarBorder color="secondary" fontSize="large" onClick={this.handleToggleFavorite} />
        )}
      </Fragment>
    );
  }
}

export default ToggleFavorite;
