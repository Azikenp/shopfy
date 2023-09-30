import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-3o18p4ss1wqmyczp.us.auth0.com"
    clientId="2tM00Ze7HXNkyzuY9RLEikqtw2LAMBxQ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
