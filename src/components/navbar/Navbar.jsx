import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon />
                        Uzbek
                    </div>
                    <div className="item">
                        <NightsStayOutlinedIcon />
                        Dark Mode
                    </div>
                </div>
                <div className="search">
                    <input type="text" placeholder="Qidiruv..." />
                    <SearchOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Navbar;