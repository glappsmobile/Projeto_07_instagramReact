import Avatar from "../Avatar";

const Suggestion = (props) => {
    return (
        <li class="suggestion">
            <div>
                <Avatar name={props.name} size="small" />
                <div class="status">
                    <strong>{props.name}</strong>
                    <span>Segue você</span>
                </div>
            </div>
            <span class="follow fake-pointer"> Seguir </span>
        </li>
    );
};

export default Suggestion;