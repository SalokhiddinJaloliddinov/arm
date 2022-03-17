import "./card.scss"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const Card = (props) => {
    return (
        <div className="card">
            <img width={200} src={props.imgUrl} alt="" />
            <p className="cardTitle">{props.title}</p>
            <hr />

            <a href={props.file} target="_blank" style={{ textDecoration: "none" }}>
                <FileDownloadOutlinedIcon />
                <span>Yuklab Olish</span>
            </a>


        </div>
    )
}

export default Card;