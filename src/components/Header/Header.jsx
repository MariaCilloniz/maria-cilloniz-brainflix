import "./Header.scss";
import UploadButton from "../UploadButton/UploadButton";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";
import UserAvatar from "../UserAvatar/UserAvatar";


function Header() {
    return (
        <header className="header">
            <Logo />
            <div className="header__left">
                <SearchBar />
                <div className="header__details">
                    <UploadButton />
                    <UserAvatar />
                </div>
            </div>
        </header>
    );
}

export default Header;
