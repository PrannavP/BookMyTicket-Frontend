import { createContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { fetchEvents, filterEvents } from '../services/eventsDetailsApi';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadDefaultEvents = async () => {
        try {
            setLoading(true);
            const response = await fetchEvents();
            setEvents(response);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const applyFilters = async (filters) => {
        try {
            setLoading(true);
            let response;
            if (filters.location) {
                response = await filterEvents(`http://localhost:3000/api/events/filter?location=${filters.location}`);
            } else if (filters.genre.length > 0) {
                response = await filterEvents(`http://localhost:3000/api/events/filter?genre=${filters.genre.join(',')}`);
            } else if(filters.fromDate && filters.toDate){
                response = await filterEvents(`http://localhost:3000/api/events/filter?fromDate=${filters.fromDate}&toDate=${filters.toDate}`);
            } else {
                response = await fetchEvents();
            }
            setEvents(response);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <EventContext.Provider value={{ events, setEvents, loadDefaultEvents, applyFilters, loading, error }}>
            {children}
        </EventContext.Provider>
    );
};

// Define prop types
EventProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validate 'children' prop
};
