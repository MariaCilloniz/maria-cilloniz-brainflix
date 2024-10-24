import './NextVideoList.scss';
import NextVideoCard from "../NextVideoCard/NextVideoCard"


function NextVideoList({ videoList, selectedVideo, onVideoSelect }) {
    const filteredVideos = videoList.filter(video => video.id !== selectedVideo.id);
    return (
        <section className="suggestions">
            <h2 className="suggestions__title">Next Videos</h2>

            {filteredVideos.map((video) => (
                <NextVideoCard
                    key={video.id}
                    image={video.image}
                    title={video.title}
                    channel={video.channel}
                    onClick={() => onVideoSelect(video)}
                />
            ))}
        </section>
    );
}
export default NextVideoList;
