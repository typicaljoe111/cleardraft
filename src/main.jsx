import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/signup',
		element: <Signup />
	}
]);

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)

/*
Host: https://app.pockethost.io/
Username: riniwo2663@vasteron.com
Password: NjU0MzIx
*/
