import axios from 'axios'; // Ensure axios is imported

const BASE_URL = 'http://localhost:3000/events'; // Ensure BASE_URL is defined

export const fetchEvents = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (err) {
        console.error('Error fetching events:', err); // Log the error
        throw err;
    }
};

export const filterEvents = async (url) => {
    try{
        const response = await axios.get(url);
        return response.data;
    }catch(err){
        console.log('Error fetching events');
        throw err;
    }
};