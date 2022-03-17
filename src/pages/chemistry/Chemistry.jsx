import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./chemistry.scss"

const Chemistry = () => {
    return (
        <div className="chemistry">
            <Sidebar />
            <div className="chemistryContainer">
                <Navbar />
                <h1>Kimyo</h1>
            </div>
        </div>
    )
}

export default Chemistry