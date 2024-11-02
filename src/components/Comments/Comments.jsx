import React from 'react'
import "../Comments/Comments.scss";

function Comments({ data = [] }) {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString();
    };

    return (
        <section className="comments">
            {data.map((comment) => {
                return (
                    <article key={comment.id} className="comment">
                        <div className="comment__avatar"></div>
                        <div className="comment__details">
                            <div className="comment__info">
                                <h3 className="comment__name">{comment.name}</h3>
                                <span className="comment__date">
                                    {formatDate(comment.timestamp)}
                                </span>
                            </div>
                            <p className="comment__text">{comment.comment}</p>
                        </div>
                    </article>
                );
            })}
        </section>
    );
}

export default Comments;

