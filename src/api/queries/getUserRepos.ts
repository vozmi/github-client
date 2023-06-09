import { gql } from "graphql-request";

export const GET_USER_REPOS = gql`
query getUserRepos($login: String!) {
    repositoryOwner(login: $login) {
        repositories(first: 5, orderBy: {field: UPDATED_AT, direction: DESC}) {
            edges {
                node {
                    name
                    owner {
                        avatarUrl
                        login
                        url
                    }
                    stargazers {
                        totalCount
                    }
                    homepageUrl
                    description
                }    
            }
        }
    }
}
`;