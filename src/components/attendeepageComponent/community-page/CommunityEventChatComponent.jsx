import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import '../../../styles/attendee_styles/attendee_community_event_chat.css';

const CommunityEventChatComponent = ({ uId }) => {
    const { id } = useParams();
    const [commentInputValue, setCommentInputValue] = useState("");
    const [error, setError] = useState(null);

    const handleComment = async() => {
        try{
            const response = await axios.post("http://localhost:3000/event/post/comment", {
                eventID: id,
                userID: uId,
                commentText: commentInputValue,
            });

            if(response.status === 200){
                alert("Commented Success!");
                window.location.reload();
            }else{
                alert("Could not post comment!");
            }
        }catch(err){
            console.error(err);
            setError(err);
        }
    }

    if(error){
        return <p>Error</p>
    }

    return (
        <div className="comment-input-container">
            <input
                type="text"
                value={commentInputValue}
                onChange={(e) => setCommentInputValue(e.target.value)}
                placeholder="Write a comment..."
            />
            <button onClick={handleComment}>Post Comment</button>
        </div>
    );
};

export default CommunityEventChatComponent;