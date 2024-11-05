import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Comments from "../../components/Comments/Comments";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import NextVideoList from '../../components/NextVideoList/NextVideoList';
import Conversation from '../../components/Conversation/Conversation';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import "./HomePage.scss"
import axios from 'axios'


function HomePage() {
    const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
    const API_KEY = "b4e093c4-0d2f-4acb-b89f-987dc81e2d2c"

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchAllVideos = async () => {
        try {
            const response = await axios.get(`${API_URL}/videos?api_key=${API_KEY}`);
            setVideos(response.data);

            if (!id && response.data.length > 0) {
                await fetchVideoDetails(response.data[0].id);
            }
        } catch (error) {
            if (error.response?.status === 404) {
                console.error("No video with that id exists");
            } else {
                console.error("Error fetching videos", error);
            }
        }
    }

    const fetchVideoDetails = async (id) => {
        if (!id) return;

        try {
            const response = await axios.get(
                `${API_URL}/videos/${id}?api_key=${API_KEY}`
            );
            setSelectedVideo(response.data);
        } catch (error) {
            console.error("Error fetching video details", error);
            navigate('/');
        }
    };


    useEffect(() => {
        fetchAllVideos();
    }, []);

    useEffect(() => {
        fetchVideoDetails(id);
    }, [id]);


    const filteredVideos = videos.filter(video => selectedVideo && video.id !== selectedVideo.id)

    if (!selectedVideo) {
        return <p className="main-page__loading">Please Wait...</p>;
    }

    return (
        <main className="main-page">
            <VideoPlayer videoDetails={selectedVideo} />
            <div className="main">
                <div className="main__content">
                    <VideoDetails videoDetails={selectedVideo} />
                    <Conversation comments={selectedVideo.comments} />
                    <Comments data={selectedVideo.comments} />
                </div>
                <div className="main__sidebar">
                    <NextVideoList
                        videos={filteredVideos} />
                </div>
            </div>
        </main>
    );
}


export default HomePage;