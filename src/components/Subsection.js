//a container for articles.

const Subsection = (props) => {
    const { title } = props;

    return(
        <div className="subsection">
            <h2>{title}</h2>
            <div className="article-container">
                {/* passed in articles go here */}
                {props.children}
            </div>
        </div>
    )
};


export default Subsection;