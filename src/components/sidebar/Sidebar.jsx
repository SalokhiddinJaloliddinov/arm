import "./sidebar.scss"
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TelegramIcon from '@mui/icons-material/Telegram';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">TDTU kutubxonasi</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">FANLAR</p>

                    <Link to="/physics" style={{ textDecoration: "none" }}>
                        <li><MenuBookIcon className="icon" />
                            <span>Fizika</span>
                        </li>
                    </Link>

                    <Link to="/maths" style={{ textDecoration: "none" }}>
                        <li><MenuBookIcon className="icon" /><span>Matematika</span></li>
                    </Link>
                    <Link to="/chemistry" style={{ textDecoration: "none" }}>
                        <li><MenuBookIcon className="icon" /><span>Kimyo</span></li>
                    </Link>
                    <Link to="/biology" style={{ textDecoration: "none" }}>
                        <li><MenuBookIcon className="icon" /><span>Biologiya</span></li>
                    </Link>
                    <p className="title">FAKULTETLAR</p>
                    <li><MenuBookIcon className="icon" /><span>Elektronika va Avtomatika</span></li>
                    <li><MenuBookIcon className="icon" /><span>Mashinasozlik</span></li>
                    <li><MenuBookIcon className="icon" /><span>Elektr energetikasi</span></li>
                    <li><MenuBookIcon className="icon" /><span>Mexanika</span></li>
                    <li><MenuBookIcon className="icon" /><span>Geologiya-qidiruv	</span></li>
                    <li><MenuBookIcon className="icon" /><span>Konchilik ishi va metallurgiya</span></li>
                    <li><MenuBookIcon className="icon" /><span>Issiqlik energetikasi</span></li>
                    <p className="title">FOYDALI HAVOLALAR</p>
                    <a href="http://tdtu.uz" target="_blank" style={{ textDecoration: "none" }}>
                        <li><PublicOutlinedIcon className="icon" /><span>TDTU.UZ</span>
                        </li>
                    </a>
                    <a href="https://t.me/tdtu_arm" target="_blank" style={{ textDecoration: "none" }}>
                        <li><TelegramIcon className="icon" /><span>@tdtu_arm</span></li>
                    </a>
                    <a href="mailto:tstu_info@tdtu.uz;" target="_blank" style={{ textDecoration: "none" }}>
                        <li><ForwardToInboxOutlinedIcon className="icon" /><span>tstu_info@tdtu.uz</span></li>
                    </a>

                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>

        </div>
    )
}

export default Sidebar