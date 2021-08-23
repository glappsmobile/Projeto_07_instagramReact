const Avatar = (props) => {
    return (
        <img
            src={`images/profile/${props.name}.png`}
            class={`img-${props.size}`}
            alt={`Imagem de ${props.name}`}
        />
    )
}

export default Avatar;