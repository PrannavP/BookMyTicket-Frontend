import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                /// toast message
                toast.success("Comment Posted!", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                // clear the input field
                setCommentInputValue("");

                setTimeout(() => {
                    window.location.reload();
                }, 4200);
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
        <>
        <div className="comment-input-container">
            <input
                type="text"
                value={commentInputValue}
                onChange={(e) => setCommentInputValue(e.target.value)}
                placeholder="Write a comment..."
            />
            <button onClick={handleComment}>Post Comment</button>
        </div>
        <ToastContainer />
        </>
    );
};

export default CommunityEventChatComponent;