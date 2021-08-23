import Avatar from "../Avatar";
const Header = (props) => {
    return (
        <header>
            <Avatar name={props.user.id} size="medium" />
            <div class="name">
                <strong>{props.user.id}</strong>
                <span class="txt-gray">{props.user.name}</span>
            </div>
        </header>
    )
}
export default Header;