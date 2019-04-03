import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';

export const MUTATION = gql`
  mutation MarkAsFavorite($code: String) {
    markAsFavorite(code: $code) {
      id: code
      code
      isFavorite
    }
  }
`;

function useMarkAsFavoriteMutation(code) {
  return useMutation(MUTATION, {
    variables: { code },
    optimisticResponse: { markAsFavorite: { id: code, code, isFavorite: true, __typename: 'Country' } }
  });
}

export default useMarkAsFavoriteMutation;
