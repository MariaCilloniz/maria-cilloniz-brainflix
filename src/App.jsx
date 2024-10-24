
import './App.scss'
import Header from "./components/Header/Header"
import Comments from "./components/Comments/Comments";
import videoData from "./assets/Data/video-details.json";
import VideoDetails from "./components/VideoDetails/VideoDetails";



function App() {
  const selectedVideo = videoData[0]; 

  const { comments } = selectedVideo;

  return (
    <>
    <Header />
    <VideoDetails videoDetails={selectedVideo} />

    <Comments data={comments}/>

    </>
  )
}

export default App
