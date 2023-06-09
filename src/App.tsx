import { useEffect } from 'react';
import './App.css';
import { apiClient } from './api';
import { GET_USER_REPOS } from './api/queries/getUserRepos';
import { GetUserReposQuery } from './gql/operation_types';

function App() {
  const getData = async () => {
    const data = await apiClient.request<GetUserReposQuery>({
      document: GET_USER_REPOS,
      variables: {
        login: "vozmi"
      }
    });
    console.debug(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>test</div>
  )
}

export default App
