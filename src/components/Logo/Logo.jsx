import BrainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import "../Logo/Logo.scss";

function Logo() {
    return (
        <div className="header__right">
            <div className="header__logo">
                <img
                    src={BrainFlixLogo}
                    alt="BrainFlix Logo"
                    className="header__brainflix"
                />
            </div>
            </div>
    );
}

export default Logo;