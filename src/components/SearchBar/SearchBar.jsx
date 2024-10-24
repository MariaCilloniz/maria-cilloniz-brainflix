import SearchIcon from "../../assets/Icons/search.svg";
import UserAvatar from "../../assets/Images/Mohan-muruge.jpg";
import "../SearchBar/SearchBar.scss";

function SearchBar() {
    return (
        <div className="header__searchbar">
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
            <img
                src={UserAvatar}
                alt="User avatar"
                className="header__useravatar"
            />
        </div>
    );
}
export default SearchBar;