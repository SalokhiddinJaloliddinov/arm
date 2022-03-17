import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./biology.scss"

const Biology = () => {
    return (
        <div className="biology">
            <Sidebar />
            <div className="biologyContainer">
                <Navbar />
                <h1>Biologiya</h1>
            </div>
        </div>
    )
}

export default Biology