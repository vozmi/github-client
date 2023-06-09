import { ApolloProvider } from '@apollo/client'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApiClient } from './api'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={ApiClient}>
    <App />
  </ApolloProvider>,
)
