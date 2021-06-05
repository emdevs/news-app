import {Link} from "react-router-dom";
import React from "react";
import Loading from "./Loading.js"

import closeIcon from "../imgs/icons8-macos-close-48.png";

const Navbar = (props) => {
    const { categories, close } = props;

    return (
        <nav id="navbar">
            <img class="close-icon" src={closeIcon} onClick={close}/>
            <Link to= "/bookmark">
                <p>Bookmarks</p>
            </Link>

            <h3>Categories: </h3>
            {(categories.length === 0) && <Loading/>}
            {
            categories.map((item) => {
                let route = `/${item["name"]}`;
                return(
                    <Link to={route} key={item["id"]}>
                        <p>{item["name"]}</p>
                    </Link>
                );
            })
            }
        </nav>
    );
};

export default Navbar;