import { ApolloCache, ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4opxs3q0ne201yw61nwa4fo/master',
    cache: new InMemoryCache()
})