import React from 'react';
import "./VideoDetails.scss";
import LikeIcon from "../../assets/Icons/likes.svg";
import ViewsIcon from "../../assets/Icons/views.svg";


function VideoDetails ({ videoDetails = {} }) {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString();
    };

    return (
        <section className="video">
            {/* <div className="video__player">
                <video className="video__content" controls poster={videoDetails.image}>
                    <source src={videoDetails.video} type="video/mp4" />
                </video>
            </div> */}

            <div className="video__info">
                <h1 className="video__title">{videoDetails.title}</h1>
                
                <div className="video__details">
                    <div className="video__data">
                        <p className="video__author">By {videoDetails.channel}</p>
                        <p className="video__date">{formatDate(videoDetails.timestamp)}</p>
                    </div>
                    
                    <div className="video__stats">
                        <div className="video__views">
                            <img src={ViewsIcon} alt="views" />
                            <span>{videoDetails.views}</span>
                        </div>
                        <div className="video__likes">
                            <img src={LikeIcon} 
                            alt="likes" />
                            <span>{videoDetails.likes}</span>
                        </div>
                    </div>
                </div>

                <p className="video__description">{videoDetails.description}</p>

            </div>
        </section>
    );
}

export default VideoDetails;