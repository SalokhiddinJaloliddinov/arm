import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./physics.scss"

const Physics = () => {
    return (
        <div className="physics">
            <Sidebar />
            <div className="physicsContainer">
                <Navbar />
                <h1>Fizika</h1>
            </div>
        </div>

    )
}

export default Physics