import Subsection from "./Subsection";
import Article from "./Article";
import React from "react";

import redbookmark from "../imgs/icons8-bookmark-48.png";
import greybookmark from "../imgs/icons8-bookmark-48-grey.png"

const Section = (props) => {

    const { title, data, toggle, isBookmarked } = props;
    
    //change subseciton key to other than item title later
    return(
        <div className="section">
            <h1 className="section-title">{title}</h1>
            {
            data.map((item) => {
                return(
                    <Subsection title={item["title"]} key={item["title"]}>
                        {
                        //loop through and return each article
                        item["sections"][0]["articles"].map(
                            (article) => {

                                //is the article bookmarked?
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
