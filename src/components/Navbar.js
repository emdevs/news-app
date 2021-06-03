import {Link} from "react-router-dom";
import React from "react";

const Navbar = (props) => {
    const { categories } = props;

    //add bookmark link later
    return (
        <nav>
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