import { GraphQLClient } from "graphql-request";

export const apiClient = new GraphQLClient("https://api.github.com/graphql", {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_AUTH_TOKEN}`,
  }
});