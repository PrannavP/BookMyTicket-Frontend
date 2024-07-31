import './styles/app.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <NotFoundPage />
	},
	{
		path: '/events',
		element: <EventsPage />
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