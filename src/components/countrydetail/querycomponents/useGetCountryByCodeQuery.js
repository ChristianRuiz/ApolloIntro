import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

export const QUERY = gql`
  query GetContryByCode($code: String) {
    country(code: $code) {
      id: code
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

function useGetCountryByCodeQuery(code) {
  return useQuery(QUERY, { variables: { code } });
}

export default useGetCountryByCodeQuery;
