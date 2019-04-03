import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

export const QUERY = gql`
  query GetCountries($first: Int, $offset: Int) {
    countries(first: $first, offset: $offset) {
      id: code
      name
      code
      isFavorite
    }
  }
`;

const GetCountriesQuery = ({ children, first, offset }) => (
  <Query query={QUERY} fetchPolicy="cache-and-network" variables={{ first, offset: offset || undefined }}>
    {({ loading, error, data, refetch }) => children({ loading, error, data, refetch })}
  </Query>
);

GetCountriesQuery.propTypes = {
  children: PropTypes.func.isRequired,
  first: PropTypes.number,
  offset: PropTypes.number
};

GetCountriesQuery.defaultProps = {
  first: undefined,
  offset: undefined
};

export default GetCountriesQuery;
