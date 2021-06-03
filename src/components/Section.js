import Subsection from "./Subsection";
import Article from "./Article";
import React from "react";

const Section = (props) => {

    const { category, data } = props;
    console.log(data);

    //change subseciton key to other than item title later
    return(
        <div className="section">
            <h2>{category}</h2>
            {
            data.map((item) => {
                console.log(item);
                return(
                    <Subsection title={item["title"]} key={item["title"]}>
                        {
                        //loop through and return each article
                        item["sections"][0]["articles"].map(
                            (article) => {
                                return (
                                <Article 
                                key={article.id}
                                title={article.title}
                                url = {article.url.url}
                                img_hash={article.thumbnail.hash}
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
