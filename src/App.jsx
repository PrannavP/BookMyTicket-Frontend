import './styles/app.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { EventProvider } from './context/EventContext';

import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import RegisterPage from './pages/RegisterPage';
import EventDetailsPage from "./pages/EventDetailsPage";

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <NotFoundPage />
	},
	{
		path: '/events',
		element: <EventProvider>
					<EventsPage />
				</EventProvider>
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
		path: '/register',
		element: <RegisterPage />
	},
	{
		path: '/dashboard',
		element: <DashboardPage />
	},
	{
		path: '/events/:id',
		element: <EventDetailsPage />
	}
]);

function App() {
	return(
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App;