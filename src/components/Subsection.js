const Subsection = (props) => {
    const { title , addStyle } = props;

    return(
        <div className="subsection">
            <h2>{title}</h2>
            <div className={`article-container ${addStyle}`}>
                {/* passed in articles go here */}
                {props.children}
            </div>
        </div>
    )
};


export default Subsection;