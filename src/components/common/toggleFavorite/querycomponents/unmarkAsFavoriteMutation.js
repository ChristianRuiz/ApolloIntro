import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

export const MUTATION = gql`
  mutation UnmarkAsFavorite($code: String) {
    unmarkAsFavorite(code: $code) {
      id: code
      code
      isFavorite
    }
  }
`;

const LoginMutation = ({ children, code }) => (
  <Mutation
    mutation={MUTATION}
    variables={{ code }}
    optimisticResponse={{ unmarkAsFavorite: { id: code, code, isFavorite: false, __typename: 'Country' } }}
  >
    {(mutate, { loading, error, data }) => children({ mutate, loading, error, data })}
  </Mutation>
);

LoginMutation.propTypes = {
  children: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired
};

export default LoginMutation;
