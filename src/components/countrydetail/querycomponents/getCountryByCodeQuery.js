import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

export const QUERY = gql`
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

const GetCountryByCodeQuery = ({ children, code }) => (
  <Query query={QUERY} variables={{ code }}>
    {({ loading, error, data, refetch }) => children({ loading, error, data, refetch })}
  </Query>
);

GetCountryByCodeQuery.propTypes = {
  children: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired
};

export default GetCountryByCodeQuery;
