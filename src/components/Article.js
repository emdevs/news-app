const Article = (props) => {

    //will take in an image (url?), title and bookmark button!

    const { img_hash, title, url } = props;

    const getImgUrl = (hash) => {
        return `https://obs.line-scdn.net/${hash}/w1200`
    }

    return (
        <div className="article">
            <img src={getImgUrl(img_hash)}/>
            <a href={url} target="_blank">{title}</a><br></br>
            <button>Bookmark</button>
        </div>
    );

};

export default Article;