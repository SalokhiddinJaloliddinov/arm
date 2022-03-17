import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./maths.scss"

const Maths = () => {
    return (
        <div className="maths">
            <Sidebar />
            <div className="mathsContainer">
                <Navbar />
                <h1>Matematika</h1>
            </div>
        </div>
    )
}

export default Maths