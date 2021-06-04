import Subsection from "./Subsection";
import Article from "./Article";
import React from "react";

const Section = (props) => {

    const { title, data, toggle, isBookmarked } = props;
    // console.log(data);

    //change subseciton key to other than item title later
    return(
        <div className="section">
            <h2>{title}</h2>
            {
            data.map((item) => {
                // console.log(item);
                return(
                    <Subsection title={item["title"]} key={item["title"]}>
                        {
                            // or ust check if article is in bookmark here?
                        //loop through and return each article
                        item["sections"][0]["articles"].map(
                            (article) => {

                                //is the article bookmarked?
                                let bookmarked = isBookmarked(article.id);

                                return (
                                <Article 
                                key={article.id}
                                article={article}
                                toggle = {toggle}
                                bookmarked = {bookmarked}
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
