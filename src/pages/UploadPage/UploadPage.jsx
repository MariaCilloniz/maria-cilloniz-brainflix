import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './UploadPage.scss';
import Thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import UploadBtnIcon from "../../assets/Icons/publish.svg"
import axios from 'axios';

function UploadPage() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isPublished, setIsPublished] = useState(false);

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const isTitleValid = () => {
        if (!isPublished && title === "") return true;
        if (title.length < 3) {
            return false;
        }
        return true;
    };
    const isDescriptionValid = () => {
        if (!isPublished && description === "") return true;
        if (description.length < 10) {
            return false;
        }
        return true;
    };

    const isFormValid = () => {
        if (!title || !description) {
            alert("Please fill in the form");
            return false;
        }
        if (!isTitleValid()) {
            alert("The title needs 3 or more characters")
            return false;
        }
        if (!isDescriptionValid()) {
            alert("The description needs 10 or more characters")
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsPublished(true);

        if (isFormValid()) {
            try {
                const response = await axios.post('http://localhost:3001/videos', {
                    title,
                    description
                });
                alert('Upload successful!');
                navigate('/');
            } catch (error) {
                console.error('Error uploading video:', error);
                alert('Failed to upload video. Please try again.');
            }
        }
    };

    return (
        <div className="upload">
            <h1 className="upload__title">Upload Video</h1>

            <div className="upload__container">
                <div className="upload__thumbnail">
                    <h2 className="upload__label">Video thumbnail</h2>
                    <div className="upload__preview">
                        <img
                            src={Thumbnail}
                            alt="Upload video thumbnail"
                        />
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="upload__form">
                    <div className="upload__field">
                        <label htmlFor="title" className="upload__label">
                            Title your video
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className={`upload__input ${isTitleValid() ? "" : "upload__input--invalid"}`}
                            placeholder="Add a title to your video"
                            value={title}
                            onChange={handleChangeTitle}
                        />
                    </div>
                    <div className="upload__field">
                        <label htmlFor="description" className="upload__label">
                            Add a video description
                        </label>
                        <textarea
                            id="description"
                            className={`upload__input upload__input--text ${isDescriptionValid() ? "" : "upload__input--invalid"}`}
                            placeholder="Add a description to your video"
                            value={description}
                            onChange={handleChangeDescription}
                        />
                    </div>
                    <div className="upload__actions">
                        <button
                            type="submit"
                            className="upload__btn upload__btn--primary"
                        >
                            <img
                                src={UploadBtnIcon}
                                alt="Upload Button Icon"
                                className="upload__icon"
                            />
                            Publish
                        </button>
                        <button
                            type="button"
                            className="upload__btn upload__btn--secondary"
                            onClick={() => navigate('/')}>
                            <img
                                src={UploadBtnIcon}
                                alt="Upload Button Icon"
                                className="upload__icon"
                            />
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UploadPage
