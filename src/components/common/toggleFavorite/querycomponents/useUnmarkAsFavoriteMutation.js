import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';

export const MUTATION = gql`
  mutation UnmarkAsFavorite($code: String) {
    unmarkAsFavorite(code: $code) {
      id: code
      code
      isFavorite
    }
  }
`;

function useUnmarkAsFavoriteMutation(code) {
  return useMutation(MUTATION, {
    variables: { code },
    optimisticResponse: { unmarkAsFavorite: { id: code, code, isFavorite: false, __typename: 'Country' } }
  });
}

export default useUnmarkAsFavoriteMutation;
