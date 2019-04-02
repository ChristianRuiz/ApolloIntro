import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

class ToggleFavorite extends Component {
  static propTypes = {
    code: propTypes.string.isRequired,
    isFavorite: propTypes.bool.isRequired,
    mutateMarkAsFavorite: propTypes.func.isRequired,
    mutateUnmarkAsFavorite: propTypes.func.isRequired
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
    const { mutateMarkAsFavorite, mutateUnmarkAsFavorite } = this.props;

    return (
      <Fragment>
        {isFavorite ? (
          <Star
            color="secondary"
            fontSize="large"
            onClick={event => this.handleToggleFavorite(event, mutateUnmarkAsFavorite)}
          />
        ) : (
          <StarBorder
            color="secondary"
            fontSize="large"
            onClick={event => this.handleToggleFavorite(event, mutateMarkAsFavorite)}
          />
        )}
      </Fragment>
    );
  }
}

const markAsFavoriteMutation = gql`
  mutation MarkAsFavorite($code: String) {
    markAsFavorite(code: $code) {
      code
      isFavorite
    }
  }
`;

const unmarkAsFavoriteMutation = gql`
  mutation UnmarkAsFavorite($code: String) {
    unmarkAsFavorite(code: $code) {
      code
      isFavorite
    }
  }
`;

export default compose(
  graphql(markAsFavoriteMutation, { name: 'mutateMarkAsFavorite' }),
  graphql(unmarkAsFavoriteMutation, { name: 'mutateUnmarkAsFavorite' })
)(ToggleFavorite);
