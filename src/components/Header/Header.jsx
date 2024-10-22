import "./Header.scss";
import BrainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import SearchIcon from "../../assets/Icons/search.svg";
import UserAvatar from "../../assets/Images/Mohan-muruge.jpg";
import UploadIcon from "../../assets/Icons/upload.svg";


function Header() {
    return (
        <header className="header">
            <div className="header__left">
                <div className="header__logo">
                    <img
                        src={BrainFlixLogo}
                        alt="BrainFlix Logo"
                        className="header__brainflix"
                    />
                </div>
            </div>

            <div className="header__right">
                <div className="header__searchbar">
                    <div className="header__searchwrap">
                        <img
                            src={SearchIcon}
                            alt="Search icon"
                            className="header__searchicon"
                        />
                        <input
                            type="search"
                            className="header__searchinput"
                            placeholder="Search"
                        />
                    </div>
                    <div className="header__avatar">
                        <img
                            src={UserAvatar}
                            alt="User avatar"
                            className="header__useravatar"
                        />
                    </div>
                </div>

                <button className="header__upload">
                    <img
                        src={UploadIcon}
                        alt="Upload icon"
                        className="header__uploadicon"
                    />
                    <span className="header_uploadtext">UPLOAD</span>
                </button>
            </div>
        </header>
    );
}

export default Header;
