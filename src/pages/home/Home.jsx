import Card from "../../components/card/Card"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.scss"
import Arr from "../../Data"

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <h1>Kutubxona</h1>
                <div className="cards">
                    {Arr.map((obj) => (
                        <Card title={obj.title} imgUrl={obj.imgUrl} file={obj.fileUrl} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home