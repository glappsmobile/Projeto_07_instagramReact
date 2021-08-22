import IonIcon from '../IonIcon';

const PostHeader = (props) => {
    return (
        <div class="post-header">
            <div class="user-info">
                <img
                    className="img-small"
                    src={`images/profile/${props.name}.png`}
                    alt={`Miniatura de ${props.name}`}
                />
                <strong>{props.name}</strong>
            </div>
            <IonIcon name="ellipsis-horizontal" title="Opções" />
        </div>
    )
}

export default PostHeader;