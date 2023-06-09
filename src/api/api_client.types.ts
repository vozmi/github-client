import { GetUserReposQuery } from "../gql/operation_types";

export interface IApiClient {
    getUserRepos(login: string): Promise<GetUserReposQuery>;
}
