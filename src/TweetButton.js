const TweetButton = (props) => {
    return (
        <a
            className='tweet-button'
            target='_blank'
            rel="noreferrer"
            href={`https://twitter.com/intent/tweet?text=${props.quoteText}  -${props.author}`}
        >Tweet</a>
    )
}

export default TweetButton