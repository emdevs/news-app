import {Link} from "react-router-dom";
import React from "react";

const Navbar = (props) => {
    const { categories } = props;

    // console.log(categories);
    //add bookmark link later
    return (
        <nav>
            <Link to= "/bookmark">
                <p>Bookmarks</p>
            </Link>
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