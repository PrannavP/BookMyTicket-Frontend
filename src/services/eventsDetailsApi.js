import axios from "axios";

// getting all events details from the api

const eventsURL = "http://localhost:3000/events";

const getAllEvents = async () => {
    try{
        const response = await axios.get(eventsURL);
        return response.data;
        // console.log(response.data);
    }catch(err){
        // console.error(err);
        throw err;
    }
};

export default getAllEvents;