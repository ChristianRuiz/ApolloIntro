import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

export const QUERY = gql`
  query GetCountries {
    countries {
      id: code
      name
      code
      isFavorite
    }
  }
`;

const GetCountriesQuery = ({ children }) => (
  <Query query={QUERY} fetchPolicy="cache-and-network">
    {({ loading, error, data, refetch }) => children({ loading, error, data, refetch })}
  </Query>
);

GetCountriesQuery.propTypes = {
  children: PropTypes.func.isRequired
};

export default GetCountriesQuery;
