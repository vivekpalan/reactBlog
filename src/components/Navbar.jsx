import React from "react";
import { Link } from "react-router-dom"

import "./style.css";

const Navbar = () => {
    return(
        <>
            <nav className="navbar">
                <div className="logo">Blogs</div>
                <div className="navlinks flex">
                    <h4><Link to="/">Home</Link></h4>
                    <h4><Link to="/create">Add Blogs</Link></h4>
                    
                </div>
            </nav>

        </>
    )
}

export default Navbar;