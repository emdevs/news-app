import deleteIcon from "../imgs/icons8-delete-32.png";

const Bookmarked = (props) => {

    const { bookmarks, clearAll, clearOne } = props;

    return (
        <div id="bookmarks">
            <h2>My Page</h2>

            <div className="subheader"> 
                <p>Bookmarks ({bookmarks.length})</p>
                <button id="delete-bookmarks" onClick={clearAll}>Delete All</button>
            </div>
            
            {   
            bookmarks.map(item => {
                return(
                    <div className="bookmark" key={item.id}>
                        <div className="container">
                            <img src={`https://obs.line-scdn.net/${item.thumbnail.hash}/w1200`} alt="bookmark"/>
                        </div>    
                        
                        <p className="category">{item.categoryName}</p>
                        
                        <div className="title-container">
                            <a href={item.url.url} rel="noreferrer" target="_blank">
                                {item.title}
                            </a>
                            <img className="delete" src={deleteIcon} onClick={() => clearOne(item.id)} alt="delete bookmark button"/>
                        </div>  
                    </div>
                )
            })
            }
            
        </div>
    )
};


export default Bookmarked;