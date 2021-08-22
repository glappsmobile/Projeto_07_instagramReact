const Header = (props) => {
    return (
        <header>
            <img
                src={`images/profile/${props.user.id}.png`}
                class="img-medium"
                alt={`Foto de ${props.user.id}`}
            />
            <div class="name">
                <strong>{props.user.id}</strong>
                <span class="txt-gray">{props.user.name}</span>
            </div>
        </header>
    )
}
export default Header;