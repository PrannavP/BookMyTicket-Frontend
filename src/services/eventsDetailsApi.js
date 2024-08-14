import axios from "axios";

const BASE_URL = "http://localhost:3000/events";

export const fetchEvents = async () => {
    try{
        const response = await axios.get(BASE_URL);
        return response.data;
    }catch(err){
        throw(err);
    }
};