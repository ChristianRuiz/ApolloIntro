import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

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

function useGetCountriesQuery(first, offset) {
  return useQuery(QUERY, { variables: { first, offset: offset || undefined }, fetchPolicy: 'cache-and-network' });
}

export default useGetCountriesQuery;
