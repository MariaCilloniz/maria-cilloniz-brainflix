import "./VideoPlayer.scss";

function VideoPlayer({ videoDetails = {} }) {
    return (
        <section className="video">
            <div className="video__player">
                <video className="video__content" controls poster={videoDetails.image}>
                    <source src={videoDetails.video} type="video/mp4" />
                </video>
            </div>
        </section>
    );
}

export default VideoPlayer;