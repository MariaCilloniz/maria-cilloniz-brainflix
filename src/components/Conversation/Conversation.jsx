import "../Conversation/Conversation.scss"
import ConversationIcon from "../../assets/Icons/add_comment.svg"
import UserAvatar from "../../assets/Images/Mohan-muruge.jpg";
import { useState } from 'react';
import axios from 'axios';

function Conversation({ comments, id, onCommentAdded }) {
    const API_URL = import.meta.env.VITE_API_URL;
    let commentCount;
    if (comments) {
        commentCount = comments.length;
    } else {
        commentCount = 0;
    }

    const [comment, setComment] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChangeComment = (event) => {
        setComment(event.target.value);
    };

    const isCommentValid = () => {
        if (!isSubmitted && comment === "") return true;
        if (comment.length < 10) {
            return false;
        }
        return true;
    };

    const isFormValid = () => {
        if (!comment) {
            alert("Please enter a comment");
            return false;
        }
        if (!isCommentValid()) {
            alert("The comment needs 10 or more characters")
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitted(true);

        if (isFormValid()) {
            try {
                const newComment = {
                    name: "Mohan Muruge",
                    comment: comment
                };

                const response = await axios.post(`${API_URL}/videos/${id}/comments`, newComment);
                alert('Comment posted successfully!');
                
                setComment("");
                setIsSubmitted(false);

                if (onCommentAdded) {
                    onCommentAdded(); 
                }

            } catch (error) {
                console.error('Error uploading comment:', error);
                alert('Failed to comment on video. Please try again.');
            }
        }
    };

    return (
        <section className="conversation">
            <h2 className="conversation__count">{commentCount} Comments</h2>

            <form onSubmit={handleSubmit} className="conversation__form">
                <div className="conversation__avatar">
                    <img
                        src={UserAvatar}
                        alt="Mohan Muruge"
                        className="conversation__image"
                    />
                </div>

                <div className="conversation__wrapper">
                    <label
                        htmlFor="userComment"
                        className="conversation__label"
                    >
                        Join the Conversation
                    </label>
                    <div className="conversation__input-wrapper">
                        <textarea
                            id="userComment"
                            className="conversation__textarea"
                            placeholder="Add a new comment"
                            value={comment}
                            onChange={handleChangeComment}
                        ></textarea>

                        <button type="submit" className="conversation__button">
                            <img
                                src={ConversationIcon}
                                alt="conversation__icon"
                                className="conversation__icon"
                            />
                            COMMENT
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Conversation;
