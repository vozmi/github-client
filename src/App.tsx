import { useQuery } from '@apollo/client';
import './App.css';
import { GET_USER_REPOS } from './api/queries/getUserRepos';
import { useEffect } from 'react';
import { GetUserReposQuery } from './gql/operation_types';

function App() {
  const { data } = useQuery<GetUserReposQuery>(GET_USER_REPOS, {
    variables: {
      login: "vozmi"
    }
  });

  useEffect(() => {
    console.debug(data);
  }, [data]);

  return (
    <div>test</div>
  )
}

export default App
