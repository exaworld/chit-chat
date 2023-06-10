import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';
import Cookies from 'js-cookie';

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include',
});

const authMiddleware = new ApolloLink((operation, forward) => {
    const accessToken = Cookies.get('accessToken');
    // add the authorization to the headers
    operation.setContext(({ headers = {} }) => ({
        headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : null,
        }
    }));

    return forward(operation);
})

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
    credentials: 'include'
});
