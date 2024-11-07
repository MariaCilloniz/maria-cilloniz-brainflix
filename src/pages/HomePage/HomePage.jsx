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
    const API_URL = import.meta.env.VITE_API_URL;

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    const fetchAllVideos = async () => {
        try {
            const response = await axios.get(`${API_URL}/videos`);
            setVideos(response.data);

            if (!id && response.data.length > 0) {
                fetchVideoDetails(response.data[0].id);
            }
        } catch (error) {
            console.error("Error fetching videos", error);
        }
    }

    const loadDefaultVideo = () => {
        if (videos.length > 0) {
            fetchVideoDetails(videos[0].id);
        }
    };

    const fetchVideoDetails = async (id) => {
        if (!id) return;

        try {
            const response = await axios.get(
                `${API_URL}/videos/${id}`
            );
            setSelectedVideo(response.data);
        } catch (error) {
            console.error("Error fetching video details", error);
        }
    };

    useEffect(() => {
        fetchAllVideos();
    }, []);

    useEffect(() => {
        !id && loadDefaultVideo();
    }, [id, videos]);

    useEffect(() => {
        fetchVideoDetails(id);
    }, [id]);


    const filteredVideos = videos.filter(video => selectedVideo && video.id !== selectedVideo.id)

    if (!selectedVideo) {
        return <p className="main-page__loading">Please Wait...</p>;
    }

    const handleCommentAdded = async () => {
        if (selectedVideo && selectedVideo.id) {
            try {
                const response = await axios.get(`${API_URL}/videos/${selectedVideo.id}`);
                setSelectedVideo(response.data); 
            } catch (error) {
                console.error("Error refreshing video details", error);
            }
        }
    };

    return (
        <main className="main-page">
            <VideoPlayer videoDetails={selectedVideo} />
            <div className="main">
                <div className="main__content">
                    <VideoDetails videoDetails={selectedVideo} />
                    <Conversation comments={selectedVideo.comments} id={selectedVideo.id} onCommentAdded={handleCommentAdded} />
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