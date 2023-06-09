import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

const httpLink = new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_AUTH_TOKEN}`
    }
});

const memoryCache = new InMemoryCache({
    /* Workaround to deal with query errors that can appear */
    addTypename: false 
});

export const ApiClient = new ApolloClient({
    link: httpLink,
    cache: memoryCache
});