function Post(props) {
    return (
        <div>
            <h1>My {props.id} blog post</h1>
        </div>
    )
}

Post.getInitialProps = async ({ query }) => {
    return query
}

export default Post
