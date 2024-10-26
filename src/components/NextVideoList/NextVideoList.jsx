import './NextVideoList.scss';
import NextVideoCard from "../NextVideoCard/NextVideoCard"


function NextVideoList({ videos, handleVideoSelect }) {

    
    return (
        <section className="suggestions">
            <h2 className="suggestions__title">Next Videos</h2>

            {videos.map((video) => (
                <NextVideoCard
                    key={video.id}
                    image={video.image}
                    title={video.title}
                    channel={video.channel}
                    onClick={() => handleVideoSelect(video)}
                />
            ))}
        </section>
    );
}
export default NextVideoList;
