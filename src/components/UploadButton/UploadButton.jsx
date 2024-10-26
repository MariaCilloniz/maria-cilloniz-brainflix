import UploadIcon from "../../assets/Icons/upload.svg";
import "../UploadButton/UploadButton.scss";

function UploadButton() {
    return (
        <button className="header__upload">
            <img
                src={UploadIcon}
                alt="Upload icon"
                className="header__uploadicon"
            />
            <span className="header_uploadtext">UPLOAD</span>
        </button>
    );
}

export default UploadButton;


