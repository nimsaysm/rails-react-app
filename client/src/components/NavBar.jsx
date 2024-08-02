import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            {/* Link: use the Route to render the component for "/" */}
            <Link to="/">Posts List</Link>
            {" | "}
            <Link to="/new">New Post</Link>
        </nav>
    )
}

export default NavBar;