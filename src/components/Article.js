const Article = (props) => {

    const { article, toggle, bookmark} = props;

    const getImgUrl = (hash) => {
        return `https://obs.line-scdn.net/${hash}/w1200`
    }  

    return (
        <div className="article">
            <div className="container">
                <img src={getImgUrl(article.thumbnail.hash)} loading="lazy"/>
            </div>
            
            <div className="info">
                <a href={article.url.url} rel="noreferrer" target="_blank">
                    {article.title}
                </a>

                <img className ="bookmark-icon" src={bookmark} onClick={() => toggle(article)}/>
            </div>
        </div>
    );

};

export default Article;