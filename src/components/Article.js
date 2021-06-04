const Article = (props) => {
    //also viewCount and id category Name
    const { article, toggle, bookmarked} = props;

    const getImgUrl = (hash) => {
        return `https://obs.line-scdn.net/${hash}/w1200`
    }  

    return (
        <div className="article">
            <img src={getImgUrl(article.thumbnail.hash)}/>

            <a href={article.url.url} rel="noreferrer" target="_blank">
                {article.title}
            </a>
            
            <br></br>

            {/* maybe add a class? or something to check if diabled to chage styling */}
            <button onClick={() => toggle(article)}>
                Bookmark
            </button>
        </div>
    );

};

export default Article;