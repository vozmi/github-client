import { GraphQLClient } from "graphql-request";
import { IApiClient } from "./api_client.types";
import { GetUserReposQuery } from "../gql/operation_types";
import { queries } from "./queries";

/**
 * Client for GitHub API requests
 */
class ApiClient implements IApiClient {
    private _gqlClient = new GraphQLClient("https://api.github.com/graphql", {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_AUTH_TOKEN}`,
        },
    });

    getUserRepos(login: string): Promise<GetUserReposQuery> {
        return this._gqlClient.request<GetUserReposQuery>({
            document: queries.GET_USER_REPOS,
            variables: {
                login: login,
            },
        });
    }
}

export const apiClient = new ApiClient();
