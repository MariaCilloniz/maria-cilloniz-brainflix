import UploadIcon from "../../assets/Icons/upload.svg";
import { Link } from "react-router-dom";
import "../UploadButton/UploadButton.scss";

function UploadButton() {
    return (
        <Link to="/upload" className="header__upload">
            <img
                src={UploadIcon}
                alt="Upload icon"
                className="header__uploadicon"
            />
            <span className="header_uploadtext">UPLOAD</span>
        </Link>
    );
}

export default UploadButton;


