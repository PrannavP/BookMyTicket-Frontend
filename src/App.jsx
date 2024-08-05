import './styles/app.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <NotFoundPage />
	},
	{
		path: '/events',
		element: <EventsPage />
	},
	{
		path: '/contactus',
		element: <div>contact us page is getting build...</div>
	},
	{
		path: '/login',
		element: <LoginPage />
	},
	{
		path: '/dashboard',
		element: <h1>Dashboard is getting build...</h1>
	}
]);

function App() {
	return(
		<>
			<RouterProvider router={router} />
		</>
	)
};

export default App;