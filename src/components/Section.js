import Subsection from "./Subsection";
import Article from "./Article";
import React from "react";

import redbookmark from "../imgs/icons8-bookmark-48.png";
import greybookmark from "../imgs/icons8-bookmark-48-grey.png"

const Section = (props) => {

    const { title, data, toggle, isBookmarked } = props;
    
    return(
        <div className="section">
            <h1 className="section-title">{title}</h1>
            {
            data.map((item, index) => {
                //additional styling for subsection
                let addStyle = (index % 3 === 0)? "addStyle" : "";

                return(
                    <Subsection title={item["title"]} key={item["title"]} addStyle={addStyle}>
                        {
                        //loop through and return each article
                        item["sections"][0]["articles"].map(
                            (article) => {
                                let b_img = (isBookmarked(article.id))?
                                redbookmark :
                                greybookmark;

                                return (
                                <Article 
                                key={article.id}
                                article={article}
                                toggle = {toggle}
                                bookmark = {b_img}
                                />
                                )
                            }
                        )
                        }
                    </Subsection>
                )
            })
            }          
        </div>
    )
}

export default Section;
