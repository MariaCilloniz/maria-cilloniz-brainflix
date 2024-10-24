
import './App.scss';
import { useState } from 'react';
import Header from "./components/Header/Header";
import Comments from "./components/Comments/Comments";
import videoData from "./assets/Data/video-details.json";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import NextVideoList from './components/NextVideoList/NextVideoList';



function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]); 
  const { comments } = selectedVideo;

  // const [videoList, setVideoList] = useState(videoData);
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <Header />
      <VideoDetails videoDetails={selectedVideo} />

      <Comments data= {comments} />
      <NextVideoList videoList={videoData}
      selectedVideo = {selectedVideo}
      onVideoSelect= {handleVideoSelect} />

    </>
  )
}

export default App
