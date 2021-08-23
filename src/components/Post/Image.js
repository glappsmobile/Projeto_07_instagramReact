const Image = (props) => {
    return (
        <img
            class="img-post"
            src={`images/posts/${props.content}.jpg`}
            alt={`Post de ${props.name}`}
        />
    )
}

export default Image;