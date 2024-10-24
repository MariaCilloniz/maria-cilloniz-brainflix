import './NextVideoCard.scss';

function NextVideoCard({ image, title, channel, onClick }) {
    return (
        <article className="suggestion" onClick={onClick}>
            <div className="suggestion__thumb">
                <img
                    src={image}
                    alt={title}
                    className="suggestion__image"
                />
            </div>
            <div className="suggestion__details">
                <h3 className="suggestion__title">{title}</h3>
                <p className="suggestion__author">{channel}</p>
            </div>
        </article>
    );
}

export default NextVideoCard;