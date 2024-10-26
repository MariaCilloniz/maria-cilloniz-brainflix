import "../Conversation/Conversation.scss"
import ConversationIcon from "../../assets/Icons/add_comment.svg"
import UserAvatar from "../../assets/Images/Mohan-muruge.jpg";

function Conversation() {
    const commentCount = 3
    return (
        <section className="conversation">
            <h2 className="conversation__count">{commentCount} Comments</h2>

            <form className="conversation__form">
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
