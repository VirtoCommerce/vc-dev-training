import { inject, Provider } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '../../environments/environment';

function apolloOptionsFactory() {
  const httpLink = inject(HttpLink);

  return {
    link: httpLink.create({ uri: environment.graphqlUrl }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network' as const,
        errorPolicy: 'all' as const,
      },
      query: {
        fetchPolicy: 'cache-first' as const,
        errorPolicy: 'all' as const,
      },
      mutate: {
        errorPolicy: 'all' as const,
      },
    },
  };
}

export const graphqlProviders: Provider[] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
