import './NextVideoList.scss';
import NextVideoCard from "../NextVideoCard/NextVideoCard"
import { Link } from 'react-router-dom';


function NextVideoList({ videos }) {


    return (
        <section className="suggestions">
            <h2 className="suggestions__title">Next Videos</h2>
            {videos.map((video) => (
                <Link to={`/videos/${video.id}`} key={video.id} className="suggestions__link">
                    <NextVideoCard
                        id={video.id}
                        image={video.image}
                        title={video.title}
                        channel={video.channel}
                    />
                </Link>
            ))}
        </section>
    );
}
export default NextVideoList;
