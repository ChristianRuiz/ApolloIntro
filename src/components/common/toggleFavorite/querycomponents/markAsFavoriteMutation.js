import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

export const MUTATION = gql`
  mutation MarkAsFavorite($code: String) {
    markAsFavorite(code: $code) {
      id: code
      code
      isFavorite
    }
  }
`;

const MarkAsFavoriteMutation = ({ children, code }) => (
  <Mutation
    mutation={MUTATION}
    variables={{ code }}
    optimisticResponse={{ markAsFavorite: { id: code, code, isFavorite: true, __typename: 'Country' } }}
  >
    {(mutate, { loading, error, data }) => children({ mutate, loading, error, data })}
  </Mutation>
);

MarkAsFavoriteMutation.propTypes = {
  children: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired
};

export default MarkAsFavoriteMutation;
