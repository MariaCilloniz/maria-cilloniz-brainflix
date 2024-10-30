import BrainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import "../Logo/Logo.scss";
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <div className="header__right">
            <div className="header__logo">
                <Link to="/">
                    <img
                        src={BrainFlixLogo}
                        alt="BrainFlix Logo"
                        className="header__brainflix"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Logo;