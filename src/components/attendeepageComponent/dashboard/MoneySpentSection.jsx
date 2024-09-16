import axios from "axios";
import { useEffect, useState } from "react";

import { IconContext } from 'react-icons';
import { RiCashLine } from "react-icons/ri";

import '../../../styles/attendee_styles/attendee_money_spent.css';

const MoneySpentSection = ({ userID }) => {
    const [moneySpent, setMoneySpent] = useState(null);
    const [loading, setLoading]  = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventCount = async () => {
            try{
                const response = await axios.post("http://localhost:3000/details/spentmoney/", {
                    userId: userID,
                });
                setMoneySpent(response.data);
                setLoading(false);
            }catch(err){
                setError("Error fetching event count");
            }
        };

        fetchEventCount();
    }, [userID]);

    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>{error}</div>
    }

    return(
        <div className="money-spent-count-container">
            <div className="money-spent-count-heading-container">
                <h4>Total $$ Spent</h4>
            </div>
            <div className="money-spent-count-icon-container">
            <IconContext.Provider value={{ size: "2.2em" }}>
                <RiCashLine />
            </IconContext.Provider>
            </div>
            <div className="money-spent-count-value-container">
                Rs. {moneySpent}
            </div>
            <div className="money-spent-count-message-container">
                <p>You spent Rs. {moneySpent}.</p>
            </div>
        </div>
    );
};

export default MoneySpentSection;