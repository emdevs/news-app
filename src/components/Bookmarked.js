//more articles like this?

const Bookmarked = (props) => {

    const { bookmarks, clearAll, clearOne } = props;

    return (
        <div id="bookmarks">
            <h2>Bookmarks</h2>
            <button onClick={clearAll}>Clear Bookmarks</button>
            
            {   
            bookmarks.map(item => {
                return(
                    <div className="bookmark" key={item.id}>
                        <img src={`https://obs.line-scdn.net/${item.thumbnail.hash}/w1200`}/>

                        <a href={item.url.url} rel="noreferrer" target="_blank">
                            {item.title}
                        </a>

                        <button onClick={() => clearOne(item.id)}>Remove</button>
                    </div>
                )
            })
            }
            
        </div>
    )
};


export default Bookmarked;