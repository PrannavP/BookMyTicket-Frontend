import './styles/app.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { EventProvider } from './context/EventContext';
import { UserProvider } from './context/UserContext';

import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import AttendeeDashboardPage from './pages/Attendee/AttendeeDashboardPage';
import RegisterPage from './pages/RegisterPage';
import EventDetailsPage from "./pages/EventDetailsPage";
import TestPage from './pages/TestPage';import AttendeeTicketsPage from './pages/Attendee/AttendeeTicketsPage';
import AttendeeUpcomingEventsPage from './pages/Attendee/AttendeeUpcomingEventsPage';
import AttendeeSettingsPage from './pages/Attendee/AttendeeSettingsPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <UserProvider><HomePage /></UserProvider>,
		errorElement: <NotFoundPage />
	},
	{
		path: '/events',
		element: <UserProvider>
					<EventProvider>
						<EventsPage />
					</EventProvider>
				</UserProvider>
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
		path: '/attendeedashboard',
		element: <UserProvider>
					<AttendeeDashboardPage />
				</UserProvider>
	},
	{
		path: '/events/:id',
		element: <UserProvider>
					<EventDetailsPage />
				</UserProvider>
	},
	{
		path: '/test',
		element: <TestPage />
	},
	{
		path: '/yourtickets',
		element: <UserProvider>
					<AttendeeTicketsPage />
				</UserProvider>
	},
	{
		path: '/upcomingevents',
		element: <UserProvider>
					<AttendeeUpcomingEventsPage />
				</UserProvider>
	},
	{
		path: '/attendeesettings',
		element: <UserProvider>
					<AttendeeSettingsPage />
				</UserProvider>
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