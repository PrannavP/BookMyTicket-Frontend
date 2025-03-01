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
import AttendeeCommunityPage from './pages/Attendee/AttendeeCommunityPage';
import AttendeeSettingsPage from './pages/Attendee/AttendeeSettingsPage';
import SuccessfulPayment from './pages/SuccessfulPaymentPage';
import OrganizerDashboardPage from './pages/Organizer/OrgainzerDashboardPage';
import OrganizerTicketsPage from './pages/Organizer/OrganizerTicketsPage';
import OrganizerEventsPage from './pages/Organizer/OrganizerEventsPage';
import OrganizerSendEmailPage from './pages/Organizer/OrganizerSendEmailPage';
import AttendeeCommunityEventPage from './pages/Attendee/AttendeeCommunityEventPage';

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
		element: <EventProvider>
					<UserProvider>
						<EventDetailsPage />
					</UserProvider>
				</EventProvider>
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
		path: '/community',
		element: <UserProvider>
					<AttendeeCommunityPage />
				</UserProvider>
	},
	{
		path: '/community/:id',
		element: <EventProvider>
					<UserProvider>
						<AttendeeCommunityEventPage />
					</UserProvider>
				</EventProvider>
	},
	{
		path: '/attendeesettings',
		element: <UserProvider>
					<AttendeeSettingsPage />
				</UserProvider>
	},
	{
		path: '/successfulpayment/:id',
		element: <UserProvider>
					<SuccessfulPayment />
				</UserProvider>
	},
	{
		path: '/organizerdashboard',
		element: <UserProvider>
					<OrganizerDashboardPage />
				</UserProvider>
	},
	{
		path: '/organizertickets',
		element: <UserProvider>
					<OrganizerTicketsPage />
				</UserProvider>
	},
	{
		path: '/organizerevents',
		element: <UserProvider>
					<OrganizerEventsPage />
				</UserProvider>
	},
	{
		path: '/organizer-send-mail',
		element: <UserProvider>
					<OrganizerSendEmailPage />
				</UserProvider>
	},
]);

function App() {
	return(
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App;