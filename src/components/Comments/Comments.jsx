
import React from 'react'
import "../Comments/Comments.scss";



function Comments({ data }) {
    console.log("comments data", data);

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

// <section class="comments">
//     <article class="comment">
//         <div class="comment__avatar"></div>
//         <h3 class="comment__name">Noah Duncan</h3>
//         <span class="comment__date">8/11/2023</span>
//         <p class="comment__text">Your insights into the future of AI are enlightening! The intersection of technology and ethics is particularly thought-provoking. Keep us updated on the tech front!</p>
//     </article>

//     <article class="comment">
//         <div class="comment__avatar"></div>
//         <h3 class="comment__name">Terry Wong</h3>
//         <span class="comment__date">8/10/2023</span>
//         <p class="comment__text">This video is a fantastic overview of the AI landscape. Your ability to distill complex concepts into digestible content is impressive. Can't wait for more tech insights!</p>
//     </article>

//     <article class="comment">
//         <div class="comment__avatar"></div>
//         <h3 class="comment__name">Janice Rodriguez</h3>
//         <span class="comment__date">8/9/2023</span>
//         <p class="comment__text">Your channel is my go-to source for staying updated on tech trends. The exploration of AI's future implications is both informative and exciting. Kudos on another excellent video!</p>
//     </article>
// </section>
