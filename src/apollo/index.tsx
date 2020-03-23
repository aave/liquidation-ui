import { ApolloClient } from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';

export function getApolloClient(): ApolloClient<NormalizedCacheObject> {
  const queryLink = new HttpLink({ uri: 'https://protocol-api.aave.com/graphql' });

  // depending on what kind of operation is being sent
  const mutationsLink = new HttpLink({ uri: 'http://protocol-api.aave.com/graphql' });
  // using the ability to split links, you can send data to each link
  const hybridLink = split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'mutation';
    },
    mutationsLink,
    queryLink
  );

  const cache = new InMemoryCache();
  return new ApolloClient({
    cache,
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        // TODO: should be customized
        console.log('graphQLErrors', graphQLErrors);
        if (networkError) console.log(`[Network error]: ${networkError}`);
      }),
      hybridLink,
    ]),
  });
}
