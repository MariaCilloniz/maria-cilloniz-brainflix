import "./Header.scss";
import UploadButton from "../UploadButton/UploadButton";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";


function Header() {
    return (
        <header className="header">
                <Logo />
            <div className="header__right">
                <SearchBar/>
                <UploadButton />
            </div>
        </header>
    );
}

export default Header;
