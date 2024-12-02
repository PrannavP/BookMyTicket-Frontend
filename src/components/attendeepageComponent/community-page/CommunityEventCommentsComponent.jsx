import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import '../../../styles/attendee_styles/attendee_community_event_comments.css';

const CommunityEventCommentsComponent = () => {
    const { id } = useParams();

    const [comments, setComments] = useState([]);
    const [commentError, setCommentError] = useState();

    useEffect(() => {
        // function to load comments
        const loadAllComments = async() => {
            try{
                const response = await axios.post("http://localhost:3000/event/comments", {
                    eventID: id
                });

                if(response.status === 200){
                    setComments(response.data);
                }else{
                    alert("Could not comment!");
                }
            }catch(err){
                setCommentError(err);
                // console.log(commentError);
            }   
        };

        loadAllComments();
    }, [id]);

    return(
        <div className="community-event-comments-container">
            {commentError && <p>Error while getting comment</p>}
            <h3>Comments</h3>
            <ul className="comments-list">
                {comments.map((comment, index) => (
                    <li key={index} className="comment-item">
                        <p><strong>{comment.commenter_name}</strong> ({new Date(comment.commented_at).toLocaleString()}):</p>
                        <p>{comment.comment_text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommunityEventCommentsComponent;