
import './App.scss';
import { useState } from 'react';
import Header from "./components/Header/Header";
import Comments from "./components/Comments/Comments";
import videoData from "../src/data/video-details.json";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import NextVideoList from './components/NextVideoList/NextVideoList';
import Conversation from './components/Conversation/Conversation';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';


function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
  const { comments } = selectedVideo;

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const filteredVideos = videoData.filter(video => video.id !== selectedVideo.id);


  return (
    <>
      <Header />
      <VideoPlayer videoDetails={selectedVideo} />
      {/* <VideoDetails videoDetails={selectedVideo} /> */}
      <div className="main">
        <div className="main__content">
          <VideoDetails videoDetails={selectedVideo} />
          <Conversation comments={selectedVideo.comments} />
          <Comments data={comments} />
        </div>
        <div className="main__sidebar">
          <NextVideoList
            videos={filteredVideos}
            handleVideoSelect={handleVideoSelect} />
        </div>
      </div>

    </>
  )
}

export default App
